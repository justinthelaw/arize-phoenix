import numpy as np
import pandas as pd
from numpy.testing import assert_almost_equal

from phoenix.core.model_schema import Column
from phoenix.metrics import binning, metrics

column_name = "x"
reference_data = pd.DataFrame(
    {
        column_name: pd.Series(
            [-1, 0, 1, 2, 3, None, ""],
            dtype=object,
        ),
    }
)


def test_psi_categorical_binning() -> None:
    metric = metrics.PSI(
        operand=Column(column_name),
        reference_data=reference_data,
        normalize=binning.AdditiveSmoothing(pseudocount=1),
        binning_method=binning.CategoricalBinning(),
    )
    assert_almost_equal(0.0, metric(reference_data))
    for i, desired_result in enumerate((0.0, 0.0743, 0.11, 0.1188, 0.108, 0.1777)):
        test_data = pd.DataFrame({column_name: pd.Series(range(i), dtype=int)})
        actual_result = metric(test_data).round(4)
        assert_almost_equal(
            actual_result,
            desired_result,
            err_msg=f"i={i} test_data={test_data.loc[:, column_name].to_numpy()}",
        )


def test_psi_interval_binning() -> None:
    metric = metrics.PSI(
        operand=Column(column_name),
        reference_data=reference_data,
        normalize=binning.AdditiveSmoothing(pseudocount=1),
        binning_method=binning.IntervalBinning(
            bins=pd.IntervalIndex(
                (
                    pd.Interval(-np.inf, 1.0, closed="left"),
                    pd.Interval(1.0, 2.0, closed="left"),
                    pd.Interval(2.0, np.inf, closed="left"),
                )
            )
        ),
    )
    assert_almost_equal(0.0, metric(reference_data))
    for i, desired_result in enumerate((0.0276, 0.0956, 0.2085, 0.1321, 0.1715, 0.2474)):
        test_data = pd.DataFrame({column_name: pd.Series(range(i), dtype=int)})
        actual_result = metric(test_data).round(4)
        assert_almost_equal(
            actual_result,
            desired_result,
            err_msg=f"i={i} test_data={test_data.loc[:, column_name].to_numpy()}",
        )


def test_psi_quantile_binning() -> None:
    metric = metrics.PSI(
        operand=Column(column_name),
        reference_data=reference_data,
        normalize=binning.AdditiveSmoothing(pseudocount=1),
        binning_method=binning.QuantileBinning(
            reference_series=reference_data.loc[:, column_name],
            probabilities=(0.25, 0.5, 0.75),
        ),
    )
    assert_almost_equal(0.0, metric(reference_data))
    for i, desired_result in enumerate((0.0405, 0.1831, 0.2519, 0.1662, 0.1911, 0.2542)):
        test_data = pd.DataFrame({column_name: pd.Series(range(i), dtype=int)})
        actual_result = metric(test_data).round(4)
        assert_almost_equal(
            actual_result,
            desired_result,
            err_msg=f"i={i} test_data={test_data.loc[:, column_name].to_numpy()}",
        )

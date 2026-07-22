# Self-Driving Laboratories

A **self-driving laboratory** (SDL) is an experimental system that chooses an
experiment, executes it through automated equipment, measures the result, and
uses that observation to choose the next experiment. The essential feature is
not any single machine-learning model. It is the **closed loop** that connects
scientific objectives, data, decisions, physical execution, and verification.

An SDL can accelerate expensive searches over composition, processing, and
structure, but autonomy does not make an experiment scientifically valid. The
system still needs explicit constraints, calibrated uncertainty, traceable
data, instrument safeguards, and stopping rules.

## The closed-loop architecture

A useful SDL can be described as seven connected layers:

1. **Objective:** define the target property, constraints, cost, and success
   criterion.
2. **Data:** combine experimental conditions, measurements, simulations,
   images, and metadata without losing provenance.
3. **Model:** estimate outcomes for candidate experiments.
4. **Decision:** select the next experiment using predicted value,
   uncertainty, cost, and feasibility.
5. **Execution:** translate the proposal into validated instrument or robot
   commands.
6. **Observation:** measure the result and attach units, conditions, quality
   flags, and instrument state.
7. **Update:** add the result to the dataset, retrain or update the model, and
   test a stopping condition.

The loop is incomplete if a human manually transfers unstructured results
between every stage, if the model only ranks a fixed dataset, or if equipment
executes an unchecked model suggestion. Partial automation can still be
valuable, but it should not be confused with end-to-end experimental autonomy.

## Start with the scientific question

Materials problems are often organized through
**processing–structure–property–performance** relationships. Processing
conditions influence structure; structure influences measurable properties;
and those properties determine whether a material performs its intended
function. A model may approximate one part of this chain, but the experiment
must specify what is observed and what is only inferred.

Before choosing a model, define:

- the controllable variables, such as composition, temperature, time, or flow;
- the response variables, including units and measurement conditions;
- hard constraints, such as instrument ranges and safety limits;
- soft constraints, such as cost, throughput, or preferred reagents;
- the decision objective, which may contain several competing properties;
- the baseline and the stopping rule.

Many materials tasks are **multi-objective**. Strength and ductility, activity
and stability, or conductivity and processability may trade off. Reducing such
a problem to one score hides value judgments unless the weighting is explicit
or the system reports a Pareto frontier: candidates for which no objective can
improve without worsening another.

## Data quality comes before optimization

Experimental datasets are rarely clean tables. Values may be absent because a
measurement was skipped, an instrument failed, a sample was below a detection
limit, or an experiment physically failed. These mechanisms are not
interchangeable. A missing result can itself contain information about the
process.

Common imputation methods include:

- **K-nearest-neighbor imputation**, which borrows values from similar rows but
  depends strongly on scaling, the distance metric, and data density;
- **tree-based imputation**, which can represent nonlinear relationships but
  can still reproduce bias in the observed data;
- **multiple imputation by chained equations (MICE)**, which repeatedly models
  each incomplete variable conditional on the others and produces multiple
  completed datasets rather than pretending that one filled value is certain.

No method repairs a missing-not-at-random process by itself. The missingness
mechanism and the imputation assumptions must be recorded. Preprocessing and
imputation rules must also be learned on the training data only; fitting them
to the full dataset leaks information from evaluation data.

Other common problems include duplicate samples, inconsistent units, class
imbalance, changing instrument calibration, and selective recording of
successful experiments. Each sample should therefore carry a stable identifier
and enough provenance to reconstruct its preparation and measurement history.

## Prediction and validation

Three basic task types appear repeatedly:

- **regression** predicts a continuous quantity such as yield or conductivity;
- **classification** predicts a category such as phase or synthesis success;
- **clustering** groups observations without target labels and can reveal
  structure or hidden data regimes.

Start with a simple baseline. Linear models and tree ensembles are often more
informative baselines for small tabular datasets than a large neural network.
The relevant comparison is not which model is fashionable, but whether added
complexity improves performance and decision quality outside the training
distribution.

Random train–test splits can be misleading when near-duplicate compositions,
patches from the same image, batches from the same day, or measurements from
the same instrument appear on both sides. Grouped, temporal, leave-one-family-
out, or external validation may better represent the intended deployment.

Metrics must match the decision. Root mean square error gives large regression
errors extra weight. Precision, recall, and F1 separate different kinds of
classification failure. None of these alone shows whether uncertainty is
calibrated, whether constraints were violated, or whether the system discovers
good experiments efficiently.

## From forward prediction to experiment selection

A **forward model** maps an experimental condition to a predicted outcome. An
**inverse-design** problem starts with a desired outcome and searches for
conditions that could produce it. Inverse design is often one-to-many: several
compositions or processes may share a predicted property, and some proposals
may be physically or operationally infeasible.

A self-driving loop needs a policy for choosing what to measure next.
**Bayesian optimization** commonly uses a surrogate model—a cheaper statistical
approximation of the experiment—and an acquisition function that scores which
candidate to test next. The score balances:

- **exploitation:** test candidates predicted to perform well;
- **exploration:** test candidates that reduce important uncertainty.

Active learning uses a closely related idea when the main objective is to
select the most informative new labels or measurements. For real laboratories,
the policy may also need batch selection, asynchronous instruments, multiple
objectives, variable experiment costs, and hard safety constraints. A sorted
list of model predictions is experiment recommendation, but it is not by itself
an adaptive closed-loop policy.

## Microscopy images as experimental data

Convolutional neural networks (CNNs) can classify phases, defects, textures, or
microstructures in microscopy images. Large images are often divided into
patches, and augmentation may add rotations, flips, crops, or intensity
changes. These choices encode scientific assumptions. An augmentation is valid
only when it preserves the label under the relevant imaging physics.

Patch-level leakage is a serious risk. If patches from one source image appear
in both training and test sets, the model can recognize specimen- or
instrument-specific texture rather than generalize to a new specimen. Split at
the specimen, batch, or acquisition-session level before generating patches.

**Grad-CAM** uses gradients entering a convolutional layer to produce a
class-specific localization map. It can help detect reliance on scale bars,
labels, borders, or background artifacts. A highlighted region is not proof of
a causal mechanism, however, and the map is intentionally coarse. It is a
diagnostic aid that must be paired with controlled tests and domain review.

## Uncertainty and explanations

A point prediction gives one value. A probabilistic prediction gives a
distribution or interval as well. Two uncertainty sources are useful to
distinguish:

- **aleatoric uncertainty** represents irreducible variability or measurement
  noise under the chosen description;
- **epistemic uncertainty** reflects limited knowledge or sparse coverage and
  may be reduced by collecting informative data.

This distinction is conceptual rather than automatically identifiable. A model
can misattribute model error to noise, and an uncertainty estimate is not useful
until calibration and out-of-distribution behavior are evaluated. Calibration
asks whether stated probabilities or intervals match observed frequencies over
relevant groups of predictions.

**NGBoost** extends gradient boosting to probabilistic prediction by learning
parameters of a chosen output distribution with natural gradients. Its output
still depends on whether that distribution and scoring rule fit the problem.

**SHAP** assigns additive feature-attribution values to an individual
prediction using a Shapley-value framework. It can reveal which inputs changed
a model output relative to a reference expectation. It does not establish that
changing a feature will cause the predicted effect. Correlated inputs and the
choice of background distribution can also change the attribution.

Explanations should therefore be used to find model failures, detect shortcuts,
and generate hypotheses—not to replace intervention, replication, or causal
analysis.

## Infrastructure, monitoring, and governance

The data system should link raw instrument output, processed data, sample IDs,
experimental conditions, model versions, proposed actions, approvals, and
observed results. A small project can begin with a minimum viable schema, but it
still needs versioning and provenance.

Operational monitoring should detect:

- missing or malformed records;
- instrument drift and failed calibration;
- changes in the input distribution;
- degraded predictive or uncertainty calibration;
- repeated, infeasible, or unsafe proposals;
- divergence between commanded and executed conditions.

The orchestration layer must enforce authorization, parameter ranges, equipment
state, timeouts, retries, and emergency stops outside the model. Human approval
is appropriate when a new action class, hazardous condition, or poorly covered
region is encountered. Governance includes access control, audit trails,
dataset and model lineage, reproducibility, and rules for when an autonomous
run must stop.

## How to read an SDL training program

A 2026 seminar program from the Industrial Education Research Institute (KIEI)
groups many useful prerequisites under the SDL label: missing-data handling,
tree ensembles, cross-validation, inverse design, microscopy CNNs, Grad-CAM,
NGBoost, SHAP, data infrastructure, Bayesian optimization, monitoring, and
governance.

That breadth is valuable, but the program description gives much more detail
about data preparation and predictive modeling than about instrument control,
closed-loop orchestration, sequential acquisition policies, or failure
recovery. Based on the published outline—not on an observation of the actual
course—it is best read as an integrated introduction to the data, model, and
interpretation layers that support an SDL. The implementation depth of the
physical closed loop cannot be determined from the outline alone.

## Evaluation checklist

Evaluate an SDL as a scientific decision system, not only as a predictor:

- **Scientific validity:** Are units, conditions, controls, and measurement
  uncertainty explicit?
- **Prediction:** Does the model beat a relevant baseline on deployment-like
  splits?
- **Uncertainty:** Are intervals calibrated, especially on new material
  families or instrument regimes?
- **Decision quality:** How quickly does the policy find useful experiments,
  measured by sample efficiency, regret, or objective improvement?
- **Constraints:** How often does it propose or execute infeasible or unsafe
  actions?
- **Execution:** Are requested and observed instrument states verified?
- **Recovery:** Can the system detect and recover from failed experiments,
  missing data, and tool errors without corrupting state?
- **Reproducibility:** Can every result be traced to samples, commands,
  software, models, and raw measurements?
- **Oversight:** Are approval boundaries and stopping conditions explicit?

## References

- Tom, G., Schmid, S. P., Baird, S. G., Cao, Y., Darvish, K., Hao, H.,
  Lo, S., Pablo-García, S., Rajaonson, E. M., Skreta, M., Yoshikawa, N., &
  Aspuru-Guzik, A. (2024). Self-driving laboratories for chemistry and
  materials science. *Chemical Reviews, 124*, 9633–9732.
  [https://doi.org/10.1021/acs.chemrev.4c00055](https://doi.org/10.1021/acs.chemrev.4c00055)
- MacLeod, B. P., Parlane, F. G. L., Morrissey, T. D., Häse, F., Roch, L. M.,
  Dettelbach, K. E., Moreira, R., Yunker, L. P. E., Rooney, M. B., Deeth,
  J. R., Lai, V., Ng, G. J., Situ, H., Zhang, R. H., Elliott, M. S., Haley,
  T. H., Dvorak, D. J., Aspuru-Guzik, A., Hein, J. E., & Berlinguette, C. P.
  (2020). Self-driving laboratory for accelerated discovery of thin-film
  materials. *Science Advances, 6*, eaaz8867.
  [https://doi.org/10.1126/sciadv.aaz8867](https://doi.org/10.1126/sciadv.aaz8867)
- Van Buuren, S., & Groothuis-Oudshoorn, K. (2011). mice: Multivariate
  imputation by chained equations in R. *Journal of Statistical Software,
  45*(3), 1–67.
  [https://doi.org/10.18637/jss.v045.i03](https://doi.org/10.18637/jss.v045.i03)
- Duan, T., Anand, A., Ding, D. Y., Thai, K. K., Basu, S., Ng, A., &
  Schuler, A. (2020). NGBoost: Natural gradient boosting for probabilistic
  prediction. *Proceedings of Machine Learning Research, 119*, 2690–2700.
  [https://proceedings.mlr.press/v119/duan20a.html](https://proceedings.mlr.press/v119/duan20a.html)
- Lundberg, S. M., & Lee, S.-I. (2017). A unified approach to interpreting
  model predictions. *Advances in Neural Information Processing Systems, 30*.
  [NeurIPS proceedings](https://proceedings.neurips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html)
- Selvaraju, R. R., Cogswell, M., Das, A., Vedantam, R., Parikh, D., &
  Batra, D. (2017). Grad-CAM: Visual explanations from deep networks via
  gradient-based localization. *Proceedings of the IEEE International
  Conference on Computer Vision*, 618–626.
  [CVF Open Access](https://openaccess.thecvf.com/content_iccv_2017/html/Selvaraju_Grad-CAM_Visual_Explanations_ICCV_2017_paper.html)
- Kendall, A., & Gal, Y. (2017). What uncertainties do we need in Bayesian deep
  learning for computer vision? *Advances in Neural Information Processing
  Systems, 30*.
  [NeurIPS proceedings](https://proceedings.neurips.cc/paper/2017/hash/2650d6089a6d640c5e85b2b88265dc2b-Abstract.html)
- Kapoor, S., & Narayanan, A. (2023). Leakage and the reproducibility crisis in
  machine-learning-based science. *Patterns, 4*, 100804.
  [https://doi.org/10.1016/j.patter.2023.100804](https://doi.org/10.1016/j.patter.2023.100804)
- Industrial Education Research Institute. (2026). *R&D transformation—In-depth
  seminar on optimizing and applying AI-based self-driving laboratories*
  [Seminar program in Korean].
  [Seminar program](https://www.kiei.com/education/schedule_view?t=schedule_01&num=&esn=1160)

## Related notes

- [AI4Science](index.md)
- [AI Agents](../build/ai-agents.md)
- [Materials Science & Chemistry](../materials-science/index.md)
- [Electron Microscopy: SEM and TEM](../materials-science/electron-microscopy-sem-tem.md)

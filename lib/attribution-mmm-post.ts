export const attributionMmmPost = {
  slug: "attribution-mmm-incrementality-different-answers",
  title:
    "Why Attribution, Marketing Mix Modeling and Incrementality Produce Different Answers",
  metaTitle: "Attribution vs MMM vs Incrementality: Why Results Disagree",
  description:
    "Attribution, marketing mix modeling and incrementality often produce different estimates of marketing impact. This article explains why, what each method measures, and how their results can be reconciled.",
  excerpt:
    "Attribution, marketing mix modeling and incrementality do not necessarily estimate the same quantity. Differences in counterfactuals, time horizons, aggregation, selection effects and model assumptions can produce apparently contradictory results even when each method is operating as designed.",
  date: "September 17, 2026",
  dateIso: "2026-09-17",
  category: "BLOG" as const,
  content: `
Marketing measurement systems frequently disagree.

An attribution model may report that paid search is responsible for a large share of conversions. A marketing mix model may estimate a more modest contribution from the same channel. An incrementality experiment may find that reducing or withholding advertising causes a smaller change in sales than either model appears to imply.

At first glance, these results seem mutually incompatible.

They are not necessarily.

Attribution, marketing mix modeling (MMM) and incrementality experiments observe marketing from different levels of aggregation, use different assumptions and, most importantly, often answer different questions.

The disagreement between them is therefore not simply a measurement problem to be eliminated. In some cases, it contains information about the underlying marketing system.

Understanding that distinction is essential before attempting to combine measurement methods into a single view of marketing impact.

## Marketing Measurement Is Not One Question

The phrase *marketing effectiveness* sounds as though it describes a single quantity.

In practice, several different quantities may be relevant.

A marketer might want to know:

* which interactions occurred before a conversion;
* how revenue changes when investment in a channel changes;
* whether an advertising intervention caused outcomes that would otherwise not have occurred;
* how long an advertising effect persists;
* whether one channel changes the effectiveness of another;
* how the marginal return from additional investment changes as spending increases;
* or how the marketing system is likely to respond under a different allocation of resources.

These are related questions, but they are not identical.

Measurement disagreement often begins when an estimate answering one question is interpreted as though it answered another.

For example, observing that a channel appears frequently in conversion paths is not equivalent to estimating the number of conversions that would disappear if the channel were removed.

The first is principally a question of **credit assignment**.

The second is a question of **causal effect**.

That distinction runs through much of modern marketing measurement.

## What Attribution Measures

Attribution methods assign conversion credit to observed marketing interactions.

The simplest example is last-touch attribution, in which the final identifiable interaction receives all of the credit for a conversion. More sophisticated approaches distribute credit across multiple interactions or use statistical models to estimate the relative contribution of observed touchpoints.

Attribution can be useful because it operates at relatively granular levels.

It may help describe:

* conversion paths;
* campaign and creative interactions;
* device or audience patterns;
* short-term changes in observed customer behavior;
* and the distribution of conversions across measurable touchpoints.

But attribution has a fundamental interpretive limitation.

The presence of an interaction before a conversion does not establish that the interaction caused the conversion.

Imagine a customer who has already decided to purchase a product. They search for the brand name, click a paid search advertisement and complete the purchase.

An attribution system may assign substantial credit to paid search.

But the relevant causal question is different:

**Would the purchase have occurred if the paid advertisement had not appeared?**

The conversion path alone cannot answer that question because the unobserved counterfactual — what would have happened without the advertisement — is missing.

This problem becomes especially important when advertising exposure is not random.

People who see, search for or click advertising may differ systematically from people who do not. Existing purchase intent, prior brand awareness, geography, browsing history and platform targeting can all affect both advertising exposure and conversion probability.

As a result, observational attribution can confuse correlation with incremental effect.

This does not make attribution useless. It means its outputs must be interpreted according to the question the method is capable of answering.

## What Incrementality Measures

Incrementality approaches the problem from the opposite direction.

Rather than asking which observed touchpoint should receive credit, incrementality asks:

**What changed because the marketing intervention occurred?**

In an ideal randomized experiment, otherwise comparable units are assigned to treatment and control conditions. The difference in outcomes between the groups can then be used to estimate the causal effect of the intervention.

The units might be:

* individuals;
* households;
* geographic regions;
* stores;
* markets;
* or other sufficiently independent populations.

The defining concept is the counterfactual.

If a campaign generated 10,000 observed conversions, an attribution system may attempt to distribute those 10,000 conversions across interactions.

An incrementality study instead asks how many conversions would have occurred without the campaign.

If 9,000 would have happened anyway, the incremental effect is approximately 1,000 conversions, subject to experimental uncertainty.

This distinction explains why attributed conversions and incremental conversions should not be expected to match.

Experiments also have limitations.

Advertising effects are often small relative to normal variation in consumer behavior. Detecting them can require large sample sizes. Experiments may also cover only a particular geography, campaign, audience or period.

An experiment can therefore have strong internal causal validity while still providing incomplete information about the wider marketing system.

The result may answer a narrow causal question very well without telling us how the effect generalizes across channels, time periods or alternative budget levels.

## What Marketing Mix Modeling Measures

Marketing mix modeling generally works at a more aggregated level.

Rather than reconstructing individual conversion paths, an MMM relates changes in business outcomes over time or geography to changes in media activity and other explanatory variables.

A simplified representation might be written as:

**Yₜ = f(M₁ₜ, M₂ₜ, …, Mₖₜ, Xₜ) + εₜ**

where:

* **Yₜ** represents an outcome such as sales or revenue;
* **M₁ … Mₖ** represent marketing variables;
* **Xₜ** represents non-marketing factors such as price, promotions, seasonality or economic conditions;
* and **εₜ** represents unexplained variation.

Real models are generally more complex.

Advertising may have a delayed effect, so current outcomes can depend on earlier media exposure. Responses may also be nonlinear: doubling spend rarely produces exactly twice the effect indefinitely.

MMM implementations therefore frequently include concepts such as **adstock**, which represents carryover through time, and **saturation functions**, which represent diminishing marginal returns.

These models can address questions that user-level attribution cannot easily answer.

For example:

* What proportion of changes in aggregate sales is associated with different forms of media?
* How persistent are advertising effects?
* At what spend levels does a channel appear to experience diminishing returns?
* How might outcomes change under an alternative media allocation?

However, an MMM does not become causal simply because it is statistical.

Its interpretation depends on model specification and identification assumptions.

Media expenditure is rarely assigned randomly. Businesses increase or decrease advertising in response to expected demand, seasonal events, competitive activity and other variables that may themselves affect sales.

This produces an endogeneity problem: marketing activity and business outcomes may be jointly influenced by factors that are difficult to observe.

A model must therefore distinguish the effect of advertising from the conditions that caused the advertiser to spend money in the first place.

The credibility of an MMM depends partly on how successfully it addresses this problem.

## Why the Methods Disagree

Differences between attribution, MMM and incrementality estimates can arise for several reasons.

### 1. They May Estimate Different Quantities

The first question should always be:

**What exactly is being estimated?**

Attributed conversions, incremental conversions, average treatment effects, marginal return on advertising spend and modeled channel contribution are different estimands.

Two numerical estimates cannot meaningfully be compared until the underlying quantities have been aligned.

An attribution platform might report the number of conversions associated with a channel.

An experiment might report the causal lift caused by the channel.

An MMM might report the modeled incremental revenue associated with a historical level of investment.

All three figures can legitimately differ.

### 2. Attribution Observes What Happened, While Causal Measurement Requires What Did Not Happen

Causal inference depends on counterfactual reasoning.

For any customer who saw an advertisement and purchased, we cannot simultaneously observe whether that same customer would have purchased without seeing the advertisement.

The missing counterfactual must be estimated.

Randomization addresses this problem by constructing a statistically comparable group that does not receive the intervention.

Observational methods must instead rely on assumptions, controls or natural variation.

That difference alone can produce substantial discrepancies between attributed and incremental outcomes.

### 3. The Methods Operate at Different Levels of Aggregation

Attribution may operate at the user, impression, click or conversion-path level.

MMM commonly operates at weekly, daily, regional or market-level aggregation.

Experiments can operate at either individual or aggregated levels depending on their design.

Aggregation changes what can be observed.

A user-level model may capture detailed sequence information while missing wider market effects.

An aggregate model may detect changes in overall demand while losing information about individual journeys.

Neither representation is automatically superior. They describe different resolutions of the same system.

### 4. Time Horizons Differ

Marketing effects do not necessarily occur immediately.

An advertisement viewed today may affect:

* a search tomorrow;
* a store visit next week;
* a subscription next month;
* or brand preference much later.

Attribution systems often operate within defined conversion windows.

MMM can explicitly model lagged effects over longer periods.

Experiments measure outcomes within a specified observation period.

If the effect of marketing extends beyond one method's measurement window, the methods may produce different estimates without either containing a computational error.

### 5. Advertising Exposure Is Selective

Modern advertising systems are designed to find people who are relatively likely to respond.

This creates a measurement challenge.

Suppose an advertising platform successfully identifies users with unusually high purchase intent. Those users subsequently convert at a high rate.

Their behavior may demonstrate that the targeting system predicted conversion probability successfully.

It does not by itself demonstrate that the advertising caused the conversions.

This distinction between **selection** and **causation** is one of the central problems in advertising measurement.

Large-scale empirical comparisons between observational advertising estimates and randomized experiments have shown that observational methods can fail to recover experimental effects even when extensive behavioral and demographic variables are available.

### 6. Marketing Effects Can Be Nonlinear

The effect of an additional unit of advertising depends on the level of advertising already present.

Moving from no advertising to a moderate level may have a substantial effect.

Moving from a high level to a slightly higher level may have almost none.

This is why **average return** and **marginal return** should not be treated as interchangeable quantities.

A channel can have produced considerable historical value while offering poor returns on the next unit of spend.

Similarly, an experiment conducted at one spending level does not automatically reveal the response that would occur at a very different spending level.

### 7. Channels May Interact

A further complication appears when channels are not independent.

Consider a simplified sequence:

**Video exposure → branded search → paid search click → purchase**

An attribution system may give substantial credit to paid search because it occurs near the conversion.

A search experiment may show that many of those conversions still occur when paid search is removed.

An MMM may nevertheless find that overall demand responds to changes in video investment.

These findings are not necessarily contradictory.

One possible interpretation is that upstream media influenced demand while search captured or redirected demand that already existed by the final stage of the journey.

The contribution of one channel may therefore depend on the presence of another.

If channels interact, a model that estimates each channel independently can miss part of the structure generating the outcome.

## A Hypothetical Example

Consider a fictional company running three major forms of media:

* online video;
* paid social;
* paid search.

Its attribution system reports the following distribution of conversions:

| Channel      | Share of attributed conversions |
| ------------ | ------------------------------: |
| Paid search  |                             55% |
| Paid social  |                             30% |
| Online video |                             15% |

A superficial interpretation would be that paid search is the dominant driver of sales.

A geo experiment then removes a portion of paid search advertising from selected regions.

Sales decline by only 8% relative to the estimated counterfactual.

Meanwhile, an aggregate marketing mix model finds that periods of increased video investment are associated with subsequent increases in both branded search activity and total revenue.

There is no requirement for these findings to produce the same ranking.

They represent different observations.

Paid search may appear frequently near the end of customer journeys.

Its incremental effect at the tested spending level may nevertheless be modest.

Video may appear relatively infrequently in observable conversion paths while still affecting subsequent demand.

Paid social may contribute through some combination of direct response, audience development and interaction with other channels.

The measurement task is therefore not simply to decide which number is correct.

It is to determine what combination of causal structure, behavioral sequencing and measurement assumptions could produce all of the observations.

## From Measurement Competition to Evidence Integration

Marketing measurement is sometimes presented as a contest between methods.

Attribution is contrasted with MMM. MMM is contrasted with experimentation. Experiments are described as a replacement for observational analysis.

A more useful scientific approach is to treat the methods as sources of evidence with different strengths and limitations.

An incrementality experiment may provide comparatively strong identification for a narrowly defined intervention.

An MMM may provide broad coverage across channels and longer time horizons but depend more heavily on model assumptions.

Attribution may provide detailed behavioral resolution without necessarily identifying causal impact.

The important question is therefore not:

**Which method is the source of truth?**

A more precise set of questions is:

1. What quantity is each method estimating?
2. What population and time period does the estimate describe?
3. What counterfactual is implied?
4. Which assumptions are required for the estimate to have a causal interpretation?
5. How much uncertainty surrounds the estimate?
6. Does evidence from another method support or challenge those assumptions?

When results disagree, these questions help locate the disagreement.

## Disagreement as a Diagnostic Signal

Conflicting estimates can reveal model weaknesses that agreement would conceal.

Suppose an MMM estimates a large effect for a particular channel, but repeated randomized experiments find little incremental lift.

Several explanations are possible.

The MMM may contain an omitted variable correlated with both advertising expenditure and demand.

The experiments may be underpowered.

The experiment may test a different spending range from the historical data used by the MMM.

The channel's effect may occur outside the experimental observation window.

There may be spillovers between treatment and control groups.

The aggregate model may also be capturing interactions that the isolated experiment does not measure.

The correct scientific response is not automatically to discard either result.

It is to identify which assumptions could produce the discrepancy and test them where possible.

Measurement disagreement becomes useful when it generates falsifiable hypotheses.

## Where Integrated Impact Modeling Fits

Integrated Impact Modeling (IIM) approaches marketing measurement as a system rather than as a collection of independent channels.

The underlying premise is that observed business outcomes can emerge from combinations of activities, delays, feedback effects and external conditions.

In this framework, attribution, experiments and aggregate models can be treated as different observations of the same underlying system.

The objective is not to force their estimates to agree.

Instead, the objective is to construct a representation in which their similarities and disagreements can be interpreted explicitly.

A systems-oriented representation might extend a basic marketing model to include lagged and interactive terms:

**Yₜ = f(M₁,ₜ:ₜ₋ₗ, …, Mₖ,ₜ:ₜ₋ₗ, Xₜ, Mᵢ × Mⱼ) + εₜ**

where the notation **t:t−L** represents effects extending across multiple periods and **Mᵢ × Mⱼ** represents possible interaction between marketing variables.

This representation makes several questions explicit:

* Does one channel amplify another?
* Does an effect persist after media exposure ends?
* Does sequence matter?
* Does the marginal effect change with the level of investment?
* Are experimental estimates compatible with the response implied by the wider system?
* Which relationships are directly observed, which are estimated and which are assumptions?

This is the role of integration in IIM.

It is not simply the aggregation of additional data sources. It is the explicit representation of relationships between them.

For a broader description of the framework, see the [IIM methodology](/methodology).

## Integration Does Not Eliminate the Identification Problem

An important limitation follows.

Combining several imperfect measurements does not automatically produce a correct causal model.

If attribution data contain selection bias, placing those data inside a larger framework does not make the bias disappear.

If an MMM contains an omitted confounder, integration alone does not identify it.

If an experiment is underpowered or poorly designed, its result does not become reliable merely because it is combined with additional evidence.

Integrated modeling therefore needs to distinguish between at least three categories:

**Observed quantities**
Measurements directly present in the available data.

**Estimated relationships**
Relationships inferred statistically from observed variation.

**Structural assumptions**
Relationships imposed or assumed because they cannot be identified from the available data alone.

Confusing these categories creates false certainty.

Making them explicit allows assumptions to be tested through sensitivity analysis, new experiments or future observations.

This distinction is central to the scientific interpretation of any integrated measurement framework.

## Experiments as Calibration Evidence

One useful relationship between methods is the use of experimental evidence to inform or evaluate broader models.

Suppose an MMM implies that a 20% reduction in advertising investment should cause a particular reduction in sales.

A well-designed intervention tests a comparable change and produces a substantially different result.

That discrepancy provides information.

The model specification can be reconsidered.

Potential confounders can be investigated.

Prior assumptions can be updated.

The response curve may need revision.

Alternatively, differences between the experiment and model may reveal that the experiment measured a narrower effect than the aggregate model.

In this sense, experiments need not exist outside the modeling system.

They can serve as calibration and falsification evidence.

Likewise, a broader model can help identify which experimental questions would be most informative.

This creates an iterative relationship:

**Model → hypothesis → experiment → evidence → model revision**

Such a cycle is closer to scientific model development than treating any single measurement output as permanent ground truth.

## Uncertainty Is Part of the Result

Marketing measurement often communicates point estimates with more precision than the evidence supports.

A model might report a return on advertising spend of 2.7.

An experiment might report a 4.2% lift.

An attribution system might report 18,432 conversions.

Each number can appear exact while concealing substantial uncertainty.

Sources of uncertainty include:

* sampling variation;
* model specification;
* missing variables;
* measurement error;
* attribution-window choices;
* prior distributions;
* treatment contamination;
* platform reporting limitations;
* and structural changes in consumer behavior.

Advertising experiments can require extremely large samples to distinguish small treatment effects from naturally volatile purchasing behavior.

Similarly, media mix models can produce wide ranges of plausible parameter values when historical variation is limited.

A scientifically useful measurement system should therefore communicate distributions, intervals, scenarios or sensitivity ranges where possible rather than relying exclusively on point estimates.

Uncertainty is not evidence that the model has failed.

It is information about what the available evidence can and cannot establish.

## The Role of Falsifiability

Integrated models become more scientifically useful when they generate predictions that can be challenged.

For example, a system model might imply:

* increasing one channel should raise the marginal effectiveness of another;
* an advertising effect should persist for three weeks after exposure;
* reducing branded search expenditure should have little effect on total sales;
* or a particular regional budget change should produce a measurable difference in revenue.

These claims can be tested.

If observations repeatedly contradict them, the model should change.

This is preferable to a measurement framework in which every outcome can be explained after the fact.

The purpose of a model is not simply to fit historical data.

It is to provide a structured representation of the system that survives attempts to disprove it.

## Open Problems in Integrated Marketing Measurement

No current methodology fully resolves the marketing measurement problem.

Several areas remain difficult.

### Cross-Channel Interaction

Interactions are intuitively plausible but statistically difficult to identify because channels are often changed simultaneously.

### Long-Term Effects

Brand advertising may influence outcomes over periods substantially longer than normal experimental or attribution windows.

Separating persistent advertising effects from other changes in demand remains difficult.

### Interference

One person's exposure can affect another person's behavior through households, workplaces, social networks or market-level effects.

This violates the assumption of independent treatment that simplifies many experiments.

### Platform Optimization

Advertising systems dynamically change who receives advertising based on predicted behavior.

The intervention being measured is therefore not always static.

### Structural Change

Consumer behavior, competitors, products, pricing and media platforms change over time.

A model that described the system accurately last year may not remain valid indefinitely.

### External Validity

A causal result established in one population, geography or spending range may not transfer directly to another.

These are not reasons to abandon quantitative measurement.

They are reasons to treat marketing models as provisional scientific representations rather than mechanical sources of truth.

## Conclusion

Attribution, marketing mix modeling and incrementality can produce different answers because they frequently measure different aspects of marketing impact.

Attribution describes how observable interactions relate to conversions.

Incrementality attempts to estimate what changed because an intervention occurred.

Marketing mix modeling examines aggregate relationships between marketing activity, external conditions and business outcomes over time or across markets.

Each approach contains useful information.

Each also contains limitations.

Their disagreement should therefore not automatically be interpreted as evidence that one method has failed.

In many cases, the disagreement identifies the assumptions that deserve closer examination.

Integrated Impact Modeling extends this idea by treating marketing as an interacting system in which multiple forms of evidence can be represented together. Its purpose is not to erase disagreement or declare one measurement method correct, but to make relationships, assumptions, uncertainties and contradictions explicit enough to investigate.

The scientific question is ultimately not:

**Which measurement system produced the right number?**

It is:

**What model of the underlying system can explain the available evidence, what assumptions does that explanation require, and what observation could prove it wrong?**

That is a more difficult question.

It is also a more useful one.

---

## References

**Gordon, B. R., Zettelmeyer, F., Bhargava, N., & Chapsky, D. (2019).** [A Comparison of Approaches to Advertising Measurement: Evidence from Big Field Experiments at Facebook](https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135). *Marketing Science*, 38(2), 193–225.

**Jin, Y., Wang, Y., Sun, Y., Chan, D., & Koehler, J. (2017).** [Bayesian Methods for Media Mix Modeling with Carryover and Shape Effects](https://research.google/pubs/bayesian-methods-for-media-mix-modeling-with-carryover-and-shape-effects/). Google Research.

**Lewis, R. A., & Rao, J. M. (2015).** [The Unfavorable Economics of Measuring the Returns to Advertising](https://doi.org/10.1093/qje/qjv023). *The Quarterly Journal of Economics*, 130(4), 1941–1973.

**Varian, H. R. (2016).** [Causal Inference in Economics and Marketing](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4941501/). *Proceedings of the National Academy of Sciences*, 113(27), 7310–7315.

**Google Meridian.** [Introduction to Bayesian Modeling and Causal Inference Theory](https://developers.google.com/meridian). Meridian documentation.

---

### Suggested related reading

* [IIM Methodology](/methodology)
* [IIM in Practice](/in-practice)
* [From Rear-View Mirror to Dynamic GPS: Bridging the Marketing Mix Modeling Actionability Gap](/blog/mmm-actionability-gap)
`,
};

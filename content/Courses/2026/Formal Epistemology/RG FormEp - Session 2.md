---
title: Session 2
description: Introduction to Belief Revision Theory
draft: false
parental-note: "[[Courses/2026/Formal Epistemology/index]]"
pdf: RG FormEp - Session 2.pdf
share_pdf: true
tags:
---
In our last session, I introduced the standard AGM theory of belief revision from an axiomatic perspective. We saw how an agent's belief revision in light of new information can be represented through set-theoretic operations. Specifically, I showed you that:

1. Our ideal agent's epistemic state can be represented by a **belief set**, i.e., a set $B \subseteq \mathcal{L}$ (where $\mathcal{L}$ is our formal language) that is **closed under logical consequence**.
2. The new information the agent receives is represented by a sentence $\phi \in \mathcal{L}$.
3. The agent's act of revising their original beliefs $B$ by $\phi$ simply amounts to "dropping" $B$ and "adopting" a new belief set, $B * \phi$.

But this is just the beginning of the story. I also emphasized that *whatever the actual mechanics of revision are*, on the standard (AGM) approach, the revision process must obey certain rules. The revision operator $*$, which maps a belief set $B$ and a sentence $\phi$ to a new belief set $B * \phi$, must satisfy the following six foundational postulates:

$$
\begin{array}{cl}
B * \phi \text{ is a belief set} & \text{(Closure)} \\\\
\phi \in B * \phi & \text{(Success)} \\\\
\text{If } \phi \nvdash \bot \text{, then } Cn(B * \phi) \neq \mathcal{L} & \text{(Consistency)} \\\\
B * \phi \subseteq Cn(B \cup \{ \phi \}) & \text{(Inclusion)} \\\\
\text{If } B \nvdash \neg \phi \text{, then } B * \phi = Cn(B \cup \{ \phi \}) & \text{(Vacuity)} \\\\ 
\text{If } Cn(\{ \phi \}) = Cn(\{ \psi \}) \text{, then } B * \phi = B * \psi & \text{(Congruence)}
\end{array}
$$

Furthermore, to properly handle composite information, we want $*$ to validate two supplementary postulates:

$$
\begin{array}{cl}
B * (\phi \land \psi) \subseteq (B * \phi) + \psi  & \text{(Superexpansion)} \\\\
\text{If } B * \phi \nvdash \neg \psi \text{, then } (B * \phi) + \psi \subseteq B * (\phi \land \psi) & \text{(Subexpansion)}
\end{array}
$$

Until now, our study of belief revision has been highly abstract. We have essentially treated the revision operator $*$ as a **black box**: we defined the class of available inputs (belief sets and sentences), the kind of outputs it returns (new belief sets), and the higher-order rules it must respect. However, we have not provided a concrete **construction** for this operator—a method that, given a specific belief set $B$ and a specific sentence $\phi$, actually allows us to compute $B * \phi$. 

Today, we will open that black box and study one such construction.

> [!NOTE]+ The Value of the Axiomatic Approach
> The fact that we treated $*$ as a black box should not make you think our previous endeavors were useless! In fact, characterizing $*$ purely in terms of the rules it must respect has already given us a massive theoretical advantage:
>
> 1. **Deriving New Rules:** It allowed us to prove a host of **derivative rules** that $*$ must also respect.
> 2. **Generality:** Working at the abstract level of postulates means that if we prove a theorem based *only* on those axioms (e.g., the basic six postulates), we have ipso facto proved that **any suitable (!) construction for $*$ must validate that consequence**. We secure results that are completely independent of the underlying mechanics. Conversely, if we start with a specific construction for $*$ and prove a property, we cannot guarantee that property holds for *other* suitable (!) constructions, even if both validate the basic postulates.

Before moving on, make sure that you remember the notions we are keeping in the background, that is:

1. our boolean language $\mathcal{L}$ [[RG FormEp - Session 1#^3b8651|(definition)]];
2. the notion of interpretation (or valuation, or possible world) [[RG FormEp - Session 1#^e1e724|(definition)]];
3. logical consequence relation [[RG FormEp - Session 1#^38e024|(definition)]] and operator [[RG FormEp - Session 1#^ba4d33|(definition)]];
4. belief sets [[RG FormEp - Session 1#^a62a38|(definition)]]; and
5. the properties of classical consequence relations and operator.
# 1. Constructing the Belief Revision Operator: Introduction

There are many ways in which we can construct a concrete belief revision operator. We can generally group them into two main categories: **syntactic** and **semantic** approaches.

**Syntactic Approaches**. In the syntactic approach, the belief revision operator $*$ is obtained as a result of some manipulation of sentences, or sets of sentences, within our belief set $B$. There are two main methods within this category:

1. **"Selection Function" approach**: On this approach, when we want to revise $B$ by $\phi$, we perform two operations . First, we perform a *contraction*: we take $B$ and single out all the maximal subsets of $B$ that **do not** entail $\neg\phi$ (i.e., we single out the largest possible subsets of $B$ that are logically compatible with the new information $\phi$). Because there might be several such maximal subsets, we use a "selection function" to pick the "best" ones—or we take their intersection—to form a contracted, consistent base. Second, we perform an *expansion*: we simply add the new sentence $\phi$ to this contracted base and close it under logical consequence to obtain $B * \phi$ .
2. **Epistemic Entrenchment**: This approach represents the agent's doxastic state by pairing the belief set $B$ with an *entrenchment ordering* over the sentences in the language . This ordering reflects how firmly the agent holds specific beliefs. When the agent receives new information $\phi$ that contradicts the current belief set, the entrenchment ordering determines which beliefs must be surrendered first . The least entrenched beliefs are discarded to restore consistency, while the more entrenched ones are preserved . The revised belief set $B * \phi$ is constructed by keeping all old beliefs that are strictly more entrenched than $\neg\phi$, and then expanding by $\phi$ .

**Semantic Approaches**. In the semantic approach, the revision operator is constructed not by directly manipulating sentences, but by evaluating the **possible worlds** (or models) that make those sentences true.

1. **Implausibility Orderings and Ranking Functions**: The space of possible worlds is equipped with an implausibility ordering, where worlds are ranked according to their implausibility. The center consists of the least implausible worlds, representing the current belief set . When revising by $\phi$, the new belief set is determined by the theory of the *least implausible* possible worlds in which $\phi$ is true .

Today, we will discuss a “semantic” construction.

# 2. Plausibility Orderings

Recall that when we introduced our propositional language $\mathcal{L}$ and its logical consequence relation $\vdash$, we defined a set, $W$, of all possible valuations for $\mathcal{L}$. This set contains all possible functions $w:\Phi\to \{ 0,1 \}$—that is, all possible assignments of truth values to the atomic propositions in $\mathcal{L}$, which in turn recursively determine the truth value of any complex sentence in $\mathcal{L}$.

Conceptually, these abstract objects can be understood as *possible worlds*. A valuation function $w$ describes a maximally specific way things could be (given the expressive limits of $\mathcal{L}$) because it takes a stance on every "fact" expressible in the language. To emphasize this philosophical interpretation, I will refer to $W$ as the set of possible worlds from now on.[^1]

As anticipated in [[RG FormEp - Session 1#1.1. Language and Interpretations|Session 1, §1.1]], every sentence $\phi\in \mathcal{L}$ corresponds to a specific subset of $W$ called its **truth-set**—the set of all worlds where $\phi$ is true. Philosophically, this set is often identified with the *proposition* expressed by $\phi$, representing its "content." Regardless of the philosophical backstory, this extensional notion is mathematically crucial for the constructions we will explore. 

> [!def]+ Truth-Set
> Let $\phi\in \mathcal{L}$. The truth-set function $[\cdot]:\mathcal{L}\to \mathcal{P}(W)$ maps a sentence to the set of its models:
> $$
> [\phi] := \{ w\in W : w \models \phi \} 
> $$
> We can extend the domain of $[\cdot]$ to include *sets* of sentences. Let $\Gamma \subseteq \mathcal{L}$ be a set of sentences. Its truth-set is the intersection of the truth-sets of all its members:
> $$
> [\Gamma] := \bigcap_{\phi \in \Gamma} [\phi] = \{ w \in W : w \models \phi \text{ for all } \phi \in \Gamma \}
> $$

^03327a

With a slight **abuse of notation**, I have extended the function $[\cdot]$ so that it takes sets of sentences as arguments, not just individual sentences. Intuitively, this intersection yields the exact set of worlds where every sentence in $\Gamma$ is simultaneously true. This semantic mapping gives rise to the following **fundamental properties** that are crucial for the proofs ahead.

> [!lemma]
> Let $\phi,\psi\in \mathcal{L}$ and let $\Gamma,\Delta\in \mathcal{P}(\mathcal{L})$. The semantic sets behave according to the following logical rules:
> $$
> \begin{array}{rl}
> 1. & \phi \vdash \psi \iff [\phi] \subseteq [\psi] \\
> 2. & \Gamma \subseteq \Delta \implies [\Delta] \subseteq [\Gamma] \\
> 3. &\Gamma \subseteq \Delta \iff [\Delta] \subseteq [\Gamma] \quad \text{(if } \Delta \text{ is a belief set)}
> \end{array}
> $$

^e85e7f

`bproof` See [[RG FormEp - Session 2 (Solutions)|the solutions to the exercises]]. `eproof`

Now, we are ready to see exactly **how to construct the revision operator $*$ using possible worlds**. Let's start with the informal intuition before diving into the formal mathematical construction.

In real-world scenarios, we rarely restrict our beliefs solely to what is strictly entailed by our evidence. We regularly make **inferences that go "beyond" the evidence**—accepting the risk that our beliefs might be false despite the evidence we possess. However, when we reason *inductively* like this, we do not just believe anything. That would be irrational. Instead, we constrain these “inductive leaps”: **we believe those things that, given our evidence, are as plausible as they can possibly be**.

This informal but highly intuitive idea validates the following powerful claim:

> [!claim]+
> Given your evidence $E$, it is rational to believe any proposition that is true across all the most plausible possible worlds, given $E$.

^348642

Clearly, to have a fully-fledged theory of rational inductive belief, we would eventually need to define exactly what "plausibility" amounts to. However, the beauty of the representation result we are about to prove is that **we can discover profound results without providing a concrete characterization of plausibility just yet**. Specifically, the theorem will show that if rational belief (and belief revision) behaves according to [[#^348642]], then imposing certain structural properties on this abstract "plausibility" ordering will generate a revision operator $*$ that perfectly satisfies the standard AGM postulates.

Just to give you an idea of what plausibility *could* mean in practice, it might be interpreted as:

1. **Probability:** Under this view, [[#^348642]] states that it is rational to believe whatever is most probable given $E$.
2. **Normality (in Martin Smith's sense):** Under this view, [[#^348642]] states that you should believe whatever is true in the set of worlds that demand the fewest explanations (i.e., the most "normal" worlds).
3. **Modality/Similarity (in Duncan Pritchard and Jaakko Hirvelä's sense):** Under this view, [[#^348642]] states that you should believe whatever is true in the possible worlds that are most similar to the actual world.[^2]

To generate a belief revision operator $*$ that "corresponds" to the AGM postulates (in a formal sense we will clarify later), we must assume that the possible worlds in $W$ can be ordered by a relation $\preceq$, and that this relation satisfies specific structural properties. 

It is crucial to emphasize a conceptual point here: we treat the plausibility ordering $\preceq$ mathematically as a *relative* ordering rather than an absolute one. **The relative plausibility of two worlds $w_{1}, w_{2}$ strictly depends on the agent's current background belief set $B$.** Formally, this means:

1. We assume that every belief set $B$ has an associated ordering $\preceq_{B}$ satisfying certain structural properties.
2. We **do not** assume that $\preceq_{B} = \preceq_{B'}$ for distinct belief sets $B \neq B'$, nor do we enforce that they must be different. 

By remaining agnostic on this, the results we prove will be entirely independent of this debate. Our theorems hold perfectly whether you interpret plausibility as an absolute, objective hierarchy or as an evidence-relative relation. 

*(Note: The idea that plausibility shifts based on current evidence is highly intuitive. Consider probability theory: an agent can define entirely different probability distributions over the exact same space of possible worlds simply by conditioning on different prior evidence.)*

Because the ordering is tied to a specific belief set $B$, we will write $\preceq_{B}$ when the context requires strict precision. Otherwise, to keep the notation clean, I will simply write $\preceq$.

The following structural properties are required to characterize the AGM belief revision operator $*$ in terms of possible world plausibility. In words, we assume that plausibility has the following properties:

1. All worlds are comparable in terms of plausibility.
2. Plausibility is transitive.
3. All and only the models of our current belief set $B$ are the most plausible worlds.
4. There is always at least one "most plausible" world among the models of any consistent sentence.

Let us flesh out these properties in a more precise way. Let $B$ be a belief set and $\preceq_{B}$ be its associated plausibility ordering (where $w_{1} \preceq_{B} w_{2}$ is read as "$w_{1}$ is at least as plausible as $w_{2}$", and we write $w_{1} \prec_{B} w_{2}$ for strict plausibility):

1. **Connectedness**: For any worlds $w_{1},w_{2}\in W$: Either $w_{1}\preceq_{B} w_{2}$ or $w_{2}\preceq_{B} w_{1}$. 
2. **Transitivity**: For any worlds $w_{1},w_{2},w_{3}\in W$: If $w_{1}\preceq_{B} w_{2}$ and $w_{2}\preceq_{B} w_{3}$, then $w_{1}\preceq_{B} w_{3}$.
3. **Centeredness**:
	1. If $w_{1}, w_{2} \in [B]$, then $w_{1} \preceq_{B} w_{2}$.
	2. If $w_{1} \in [B]$ and $w_{2} \notin [B]$, then $w_{1} \prec_{B} w_{2}$.
4. **Limit Assumption**: For any sentence $\phi\in \mathcal{L}$: If $[\phi]\neq \emptyset$, then there exists at least one world $w_{1}\in [\phi]$ such that $w_{1}\preceq_{B} w_{2}$ for all $w_{2}\in [\phi]$.

Now, before stating and proving our representation theorem, we must clarify how we build $B*\phi$ given our plausibility ordering $\preceq$. The intuitive idea is that when we revise $B$ by $\phi$, the set of sentences $B*\phi$ (i.e., the set of all the ideal agent's beliefs) will be the set of all and only the sentences $\psi$ that are true throughout the most plausible worlds $w$ in $[\phi]$ given $\preceq_{B}$. That is, we want our new belief set to accept the sentence $\phi$, but also to do so in the most parsimonious way possible: we take as the “world basis” for $B*\phi$ all and only those $\phi$-worlds that are most plausible according to our initial belief set $B$.

Define:
$$
\min_{B}([\phi]):=\{ w\in [\phi] : \text{For all }w'\in [\phi], w\preceq_{B} w' \}
$$
That is, $\min_{B}([\phi])$ selects the set of most plausible worlds $w$ that satisfy $\phi$. 

Next, define the theory function $T:\mathcal{P}(W)\to \mathcal{P}(\mathcal{L})$ such that, for any $V\subseteq W$:
$$
T(V):= \{ \phi\in \mathcal{L}: V \subseteq [\phi] \}
$$
In other words, $T$ takes a world-base $V$ and returns the set of sentences $\phi\in \mathcal{L}$ that are true in all the worlds in $V$. There are three important properties connecting our semantic sets and our theory function to be aware of:

> [!lemma]+
> Let $V \subseteq W$ be any set of worlds, and $\Gamma \subseteq \mathcal{L}$ be any set of sentences.
>
> 1. $T(V)$ is a belief set, i.e. $T(V) = Cn(T(V))$.
> 2. $T([\Gamma]) = Cn(\Gamma)$. Consequently, $T([\Gamma]) = \Gamma \iff \Gamma$ is a belief set.
> 3. $V \subseteq [T(V)]$. Furthermore, the equality $[T(V)] = V$ holds for all $V \subseteq W$ if, and only if, $\Phi$ is finite.

^3c7168

`bproof` See [[RG FormEp - Session 2 (Solutions)|the solutions to the exercises]]. `eproof`

This third property is conceptually crucial. It shows that while we can map sentences to worlds and back without losing anything (provided the sentences are logically closed), moving from arbitrary sets of worlds to syntax and back generally results in a loss of information—unless our language is strictly constrained to be finite.

Finally, we define our revision operator $*$. Assuming that for every belief set $B \in \mathbf{B}$ there exists an associated plausibility ordering $\preceq_{B}$, we can define the global revision function $* : \mathbf{B} \times \mathcal{L} \to \mathbf{B}$ as follows:

$$
B*\phi:= T(\min_{B}([\phi]))
$$
Informally, the revised belief set $B*\phi$ is exactly the set of sentences $\psi$ that are true throughout $\min_{B}([\phi])$—that is, the set of sentences true in the most $B$-plausible worlds that satisfy $\phi$.

Before moving to the formal statement of the theorem and the first part of its proof, let us look at a concrete example to see exactly how this semantic revision operator works in practice.

## 2.1. Example One: The Biology Professor

Imagine an agent—a biology professor—who is currently waiting to hear whether their new research project will be approved. To model their epistemic state, we can construct a space of possible worlds $W$ using just four propositional variables:

* $p$: The research project is approved.
* $f$: The project's funding is secured.
* $h$: Hiring for the project is permitted.
* $l$: Lab space is allocated.

Our agent firmly believes two conditional "laws" about how the university operates. The first is a university-wide rule, while the second is a departmental rule. Consequently, the agent holds the first law to be significantly "more important" than the second.

1. **Law 1 (University Policy):** If a project is approved, funding must be secured. 
   $$L_1 := p \to f$$
2. **Law 2 (Department Practice):** If funding is secured, hiring is permitted and lab space is allocated.
   $$L_2 := f \to (h \land l)$$

**Note:** These "laws" are not necessary, logical truths—you can easily point to logically possible worlds where they fail. Instead, they should be understood as *ceteris paribus* laws, or extremely robust generalizations the professor has come to deeply trust after years of administrative experience.

Now, let us assume the agent's initial belief set $B$ consists of these two laws, plus the belief that currently no new project is approved ($\neg p$).

$$
\begin{align}
B &= Cn(\{L_1, L_2, \neg p\}) \\
&=Cn(\{ \neg p \land (f \to (h \land l)) \})
\end{align}
$$

By the **Centeredness** property, the absolute most plausible worlds in $W$ are exactly those inside the truth-set $[B]$. These are the worlds where no project is approved and the laws hold. They sit at the very bottom (the most plausible tier) of our ordering $\preceq_{B}$. 

Now, imagine that our biology professor receives an email from the dean with new information $\phi$: the new project has just been approved, but no new hiring is permitted.

$$\phi := p \land \neg h$$

Before we dive into the formal mechanics, let us **informally summarize what should happen**. The agent started out believing they did not get the project approved ($\neg p$) and that two laws hold, with $L_1$ being more important than $L_2$. Upon learning from the dean that $p$ and $\neg h$ are true, they must revise their beliefs in a conservative way: they must accept $p$ and $\neg h$, and to make room for this, they will retain the strong university rule $L_1$ while dropping the weaker departmental rule $L_2$. In other words, given the dean's email, the professor expects to get the funding ($f$) and simply accepts that the standard department practice ($L_2$) has been overridden (for they won't be permitted to hire new people for the moment).

Let us now see how the formal possible-worlds construction predicts this intuitive result. 

Clearly, $\phi$ is false in $[B]$. Therefore, the most plausible worlds where $\phi$ is true cannot be worlds inside $[B]$, for every world in $[B]$ satisfies $\neg p$, and hence also $\neg\phi$. As a result, our proposed construction requires us to step outside the set of strictly most plausible worlds (i.e., the $B$-worlds). We must move away from the center of the plausibility ordering and inspect the truth-set $[\phi]$.

First, let us graphically represent the space of possible worlds, highlighting which worlds are in $[B]$ and which are in $[\phi]$:

$$
\begin{array}{r|cccccc}
& p & f & h & l & \in [B] & \in [\phi] \\
\hline
w_{1} & 1 & 1 & 1 & 1 & & \\
w_{2} & 1 & 1 & 1 & 0 & & \\
w_{3} & 1 & 1 & 0 & 1 & & \checkmark \\
w_{4} & 1 & 1 & 0 & 0 & & \checkmark \\
w_{5} & 1 & 0 & 1 & 1 & & \\
w_{6} & 1 & 0 & 1 & 0 & & \\
w_{7} & 1 & 0 & 0 & 1 & & \checkmark \\
w_{8} & 1 & 0 & 0 & 0 & & \checkmark \\
w_{9} & 0 & 1 & 1 & 1 & \checkmark & \\
w_{10} & 0 & 1 & 1 & 0 & & \\
w_{11} & 0 & 1 & 0 & 1 & & \\
w_{12} & 0 & 1 & 0 & 0 & & \\
w_{13} & 0 & 0 & 1 & 1 & \checkmark & \\
w_{14} & 0 & 0 & 1 & 0 & \checkmark & \\
w_{15} & 0 & 0 & 0 & 1 & \checkmark & \\
w_{16} & 0 & 0 & 0 & 0 & \checkmark & \\
\end{array}
$$

Notice that in *all* four worlds in $[\phi]=\{ w_3, w_4, w_7, w_8 \}$, at least one of the laws $L_1$ or $L_2$ (which the agent initially believed) is falsified:

* In $w_3$ and $w_4$, $L_2$ is flouted, because the funding is secured ($f$) but hiring is *not* permitted ($\neg h$). However, $L_1$ is still true.
* In $w_7$ and $w_8$, $L_1$ is flouted, because the research project is approved ($p$) but the funding is *not* secured ($\neg f$).

How does the plausibility ordering $\preceq_{B}$ rank these four worlds? This ordering reflects the agent's epistemic priorities. Because $L_1$ is a university-wide mandate, while $L_2$ is merely a local departmental rule, worlds where the university rule $L_1$ holds ($w_3$ and $w_4$) are considered *more plausible* than worlds where $L_1$ fails ($w_7$ and $w_8$). 

To visualize this, we can map out the relevant tiers of the plausibility ordering. Below, worlds that are equally plausible are piled up vertically. The worlds in $[B]$ sit at the absolute most plausible position on the left, followed by the increasingly less plausible tiers (using $[\dots]$ for intermediate or unranked worlds that are not relevant to our current calculation):

$$
\begin{array}{c}
\begin{array}{c}
\color{cornflowerblue} w_{9} \\
\color{cornflowerblue} w_{13} \\
\color{cornflowerblue} w_{14} \\
\color{cornflowerblue} w_{15} \\
\color{cornflowerblue} w_{16} 
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\big[ \dots \big] \\ \\ \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\color{WildStrawberry} w_3 \\
\color{WildStrawberry} w_4 \\ \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\big[ \dots \big] \\ \\ \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\color{WildStrawberry} w_7 \\
\color{WildStrawberry} w_8 \\ \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\big[ \dots \big] \\ \\ \\
\end{array}
\\
\\
\begin{array}{l}
\textbf{Legend} \\
\color{cornflowerblue} \blacksquare \;\; \text{Worlds in } [B] \\
\color{WildStrawberry} \blacksquare \;\; \text{Worlds in } [\phi]
\end{array}
\end{array}
$$

Because $w_3$ and $w_4$ sit strictly to the left of $w_7$ and $w_8$, we know that $w_3 \preceq_{B} w_7$, $w_4 \preceq_{B} w_7$, and so on. Now, to compute the new belief set $B * \phi$, we apply our formula:

$$
B * \phi = T(\min_{B}([\phi]))
$$

1. First, we identify $\min_{B}([\phi])$. Based on our visual ordering, the most plausible worlds that are *actually within* $[\phi]$ are those that preserve the stronger law $L_1$. Thus,

$$
\min_{B}([\phi]) = \{w_3, w_4\}
$$

2. Second, we extract the theory of this set:

$$
T(\{w_{3}, w_{4}\}) = Cn(\{ p \land f \land \neg h \})
$$

Therefore, the revised belief set $B * \phi$ encodes the following epistemic attitudes:

1. The agent believes the project is approved ($p$).
2. The agent believes that the hiring is *not* permitted ($\neg h$).
3. The agent believes that the funding is secured ($f$).
4. The agent suspends judgment on whether the lab space is allocated ($l$ fluctuates between $w_3$ and $w_4$, meaning neither $l$ nor $\neg l$ is logically entailed).

Note that law $L_2$ has been surrendered to accommodate the new information. 

Finally, notice a crucial philosophical feature of this mathematical construction: **the agent is permitted to rationally believe *more* than what the new evidence strictly entails**. The dean's email ($\phi$) only entails $p \land \neg h$. It says absolutely nothing about funding ($f$). Yet, the agent still ends up believing $f$. Why? Because $f$ is true in all the *most plausible* $\phi$-worlds ($w_3$ and $w_4$). By relying on the plausibility ordering $\preceq_B$, the agent leverages their background knowledge to make a rational, inductive leap beyond the evidence.

## 2.2. Example Two: The Weekend Plan

Imagine a teenager planning their weekend. To model their epistemic state, we construct a space of possible worlds $W$ using just three propositional variables:

* $s$: It is sunny outside.
* $p$: The family goes to the park.
* $i$: The family buys ice cream.

Our agent firmly believes two conditional "laws" about how their family operates. The first is an explicit promise from the parents, while the second is merely a common habit. Consequently, the agent holds the first law to be significantly more important than the second.

1. **Law 1 (The Promise):** If it is sunny, we go to the park. 
   $$L_1 := s \to p$$
2. **Law 2 (The Habit):** If we go to the park, we buy ice cream.
   $$L_2 := p \to i$$

**Note:** These are *ceteris paribus* laws. They encode conditional expectations, not absolute logical necessities.

Let us assume the agent's initial belief set $B$ consists of these two laws, plus the belief that the weekend will be ruined by rain ($\neg s$).

$$
\begin{align}
B &= Cn(\{L_1, L_2, \neg s\}) \\
&=Cn(\{ \neg s \land (p \to i) \})
\end{align}
$$

By the **Centeredness** property, the absolute most plausible worlds in $W$ are exactly those inside the truth-set $[B]$. These are the worlds where it is not sunny and the laws hold.

Now, imagine the trigger for revision. The teenager wakes up on Saturday morning to find that the sun is shining brightly ($s$), but their parents immediately tell them that the local ice cream shop is closed for renovations ($\neg i$). 

$$\phi := s \land \neg i$$

**Let us informally summarize what should happen.** The agent started out believing it would not be sunny ($\neg s$) and that both the promise ($L_1$) and the habit ($L_2$) would hold. Upon learning that $s$ and $\neg i$ are true, we want them to revise their beliefs conservatively. They accept $s$ and $\neg i$. To make logical room for this, they retain the strict promise $L_1$ while dropping the weaker habit $L_2$. In other words, the teenager expects they will still go to the park ($p$) because of the promise, but simply accepts that they won't be getting ice cream this time.

Let us see how the formal construction perfectly guarantees this. 

Because $\phi$ entails $s$, it contradicts $[B]$, which strictly entails $\neg s$. We must step outside the most plausible $B$-worlds and inspect the truth-set $[\phi]$. With only three variables, our entire space of worlds $W$ has just 8 possibilities:

$$
\begin{array}{r|ccccc}
& s & p & i & \in [B] & \in [\phi] \\
\hline
w_{1} & 1 & 1 & 1 & & \\
w_{2} & 1 & 1 & 0 & & \checkmark \\
w_{3} & 1 & 0 & 1 & & \\
w_{4} & 1 & 0 & 0 & & \checkmark \\
w_{5} & 0 & 1 & 1 & \checkmark & \\
w_{6} & 0 & 1 & 0 & & \\
w_{7} & 0 & 0 & 1 & \checkmark & \\
w_{8} & 0 & 0 & 0 & \checkmark & \\
\end{array}
$$

Notice that the new information $\phi$ is true in exactly two worlds: $[\phi]=\{ w_2, w_4 \}$. In both of these worlds, at least one of the initial laws is falsified:

* In $w_2$, habit $L_2$ is flouted, because they go to the park ($p$) but do not get ice cream ($\neg i$). However, the promise $L_1$ is still true.
* In $w_4$, promise $L_1$ is flouted, because it is sunny ($s$) but they do not go to the park ($\neg p$).

Because the promise ($L_1$) is believed more firmly to the agent than the habit ($L_2$), the plausibility ordering $\preceq_{B}$ dictates that worlds preserving $L_1$ are more plausible than those where $L_1$ fails. Thus, $w_2 \preceq_B w_4$.

We can visualize this highly simplified plausibility ordering as follows:

$$
\begin{array}{c}
\begin{array}{c}
\color{cornflowerblue} w_{5} \\
\color{cornflowerblue} w_{7} \\
\color{cornflowerblue} w_{8} \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\big[ \dots \big] \\ \\ \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\color{WildStrawberry} w_2 \\ \\ \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\big[ \dots \big] \\ \\ \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\color{WildStrawberry} w_4 \\ \\ \\
\end{array}
\quad \preceq_{B} \quad
\begin{array}{c}
\\ \\
\big[ \dots \big] \\ \\ \\
\end{array}
\\
\\
\begin{array}{l}
\textbf{Legend} \\
\color{cornflowerblue} \blacksquare \;\; \text{Worlds in } [B] \\
\color{WildStrawberry} \blacksquare \;\; \text{Worlds in } [\phi]
\end{array}
\end{array}
$$

To compute the new belief set $B * \phi$, we apply our formula:

$$
B * \phi = T(\min_{B}([\phi]))
$$

1. First, we identify $\min_{B}([\phi])$. Based on our ordering, the absolute most plausible world within $[\phi]$ is uniquely $w_2$:

$$
\min_{B}([\phi]) = \{w_2\}
$$

2. Second, we extract the theory of this single world:

$$
T(\{w_{2}\}) = Cn(\{ s \land p \land \neg i \})
$$

The revised belief set correctly yields our intuitive result. The agent believes it is sunny ($s$), believes the ice cream shop is closed ($\neg i$), and **inductively concludes they are still going to the park ($p$).** 

**Philosophical takeaway:** Just like in the complex example, the agent is rationally leaping beyond the evidence. The parents' statement ($\phi$) said nothing about going to the park. Yet, because $p$ is true in the most plausible $\phi$-world, the agent rationally infers it based on their background ordering.

# 3. The Representation Theorem

In the previous section, we saw how to construct a candidate revision operator $*$ using possible worlds and plausibility orderings $\preceq_{B}$. We also worked through examples to see exactly how this semantic machinery behaves in practice. 

Now, it is time to step back up to the theoretical level. The main result we are going to prove is that the plausibility-based construction perfectly captures the rational constraints we previously defined using axioms. The Representation Theorem formally proves this exact equivalence. 

> [!theorem]+ Representation Theorem for Belief Revision
> Let $\mathcal{L}$ be the propositional language defined previously and $W$ be the corresponding space of possible worlds. Let $B \subseteq \mathcal{L}$ be a belief set.
> 
> **(1)** If $\preceq_B$ is a plausibility ordering on $W$ that satisfies Connectedness, Transitivity, Centeredness, and the Limit Assumption, then the revision operator $*$ defined by:
> $$B * \phi := T(\min_B([\phi]))$$
> satisfies all basic and supplementary AGM postulates.
> 
> **(2)** Assume $\Phi$ is finite. If $*$ is a revision operator on $B$ that satisfies all eight AGM postulates, then there exists a plausibility ordering $\preceq_B$ on $W$ satisfying Connectedness, Transitivity, Centeredness, and the Limit Assumption, such that for every formula $\phi \in \mathcal{L}$:
> $$B * \phi = T(\min_B([\phi]))$$

^97e681

# 4. Part One: Soundness

Let us first prove the Soundness half of the Representation Theorem [[#^97e681]]. This result establishes that our semantic construction $*$ qualifies as a genuinely rational belief revision operator, as it successfully validates all the AGM postulates we discussed in [[RG FormEp - Session 1|Session 1]].

> [!lemma] Soundness
> Let $\mathcal{L}$ be the propositional language defined previously and $W$ be the corresponding space of possible worlds. Let $B \subseteq \mathcal{L}$ be a belief set. If $\preceq_B$ is a plausibility ordering on $W$ that satisfies Connectedness, Transitivity, Centeredness, and the Limit Assumption, then the revision operator $*$ defined by:
> $$B * \phi := T(\min_B([\phi]))$$
> satisfies all eight basic and supplementary AGM postulates.

`bproof` Assume that $B \subseteq \mathcal{L}$ is a belief set and $\preceq_{B}$ (or simply $\preceq$) is a plausibility ordering on $W$ satisfying Connectedness, Transitivity, Centeredness, and the Limit Assumption. We must show that the revision operator defined by 
$$
B * \phi := T(\min_B([\phi]))
$$
satisfies the AGM postulates.

**1. Closure**. We must show that $B * \phi$ is a logically closed belief set, i.e., $B * \phi = Cn(B * \phi)$. By substituting our definition of $*$, this amounts to showing:
$$
T(\min_{B}([\phi])) = Cn(T(\min_{B}([\phi])))
$$
Recall from our earlier results (see [[#^3c7168]]) that for *any* arbitrary set of worlds $V \subseteq W$, its theory $T(V)$ is automatically a logically closed belief set. Since $\min_{B}([\phi])$ is simply a set of worlds, its theory is logically closed.

**2. Success**. We must show that $\phi \in B * \phi$. By the definition of the theory function:
$$
T(\min_{B}([\phi])) = \{ \psi \in \mathcal{L} : \min_{B}([\phi]) \subseteq [\psi] \}
$$
By definition, $\min_{B}([\phi])$ selects minimal worlds *within* $[\phi]$. Thus, $\min_{B}([\phi]) \subseteq [\phi]$ is true. Therefore, $\phi \in T(\min_{B}([\phi]))$.

**3. Inclusion**. We must show that $B * \phi \subseteq Cn(B \cup \{ \phi \})$.  Let $\psi \in B * \phi$, which means $\psi \in T(\min_{B}([\phi]))$, i.e., $\min_{B}([\phi]) \subseteq [\psi]$. We need to prove that $\psi \in Cn(B \cup \{ \phi \})$. 
First, recall the semantic equivalence for logical consequence:
$$
B \cup \{ \phi \} \vdash \psi \iff [B] \cap [\phi] \subseteq [\psi]
$$
So, it suffices to prove that $[B] \cap [\phi] \subseteq [\psi]$. We evaluate this by looking at two cases.

1. **Case One:** Suppose $[B] \cap [\phi] = \emptyset$ (i.e., $B \vdash \neg \phi$). The empty set is trivially a subset of any set, so $[B] \cap [\phi] \subseteq [\psi]$ automatically holds.
2. **Case Two:** Suppose $[B] \cap [\phi] \neq \emptyset$. We will prove that, in this case, $[B] \cap [\phi] = \min_{B}([\phi])$.
	* $(\subseteq)$ Let $w \in [B] \cap [\phi]$. Because $w \in [B]$, Centeredness dictates that $w \preceq w'$ for all $w' \in W$. Thus, $w \preceq w'$ for all $w' \in [\phi]$. Since $w \in [\phi]$ and is at least as plausible as any other world in $[\phi]$, we have $w \in \min_{B}([\phi])$.
	* $(\supseteq)$ Let $w \in \min_{B}([\phi])$. Clearly, $w \in [\phi]$. Is $w \in [B]$? Suppose for contradiction that $w \notin [B]$. Since we are in Case Two, we know there is at least one world $w^* \in [B] \cap [\phi]$. By Centeredness, any model of $B$ is strictly more plausible than any non-model, meaning $w^* \prec w$. But since $w^* \in [\phi]$, this strictly contradicts the assumption that $w$ is minimal in $[\phi]$. Hence, $w$ must be in $[B]$, meaning $w \in [B] \cap [\phi]$. 
	* Because we established $\min_{B}([\phi]) = [B] \cap [\phi]$, and we already know $\min_{B}([\phi]) \subseteq [\psi]$, it directly follows that $[B] \cap [\phi] \subseteq [\psi]$.

In both cases, we established $[B] \cap [\phi] \subseteq [\psi]$, which means $B \cup \{ \phi \} \vdash \psi$. Since $\psi$ is an arbitrary formula in $B * \phi$, we conclude $B * \phi \subseteq Cn(B \cup \{ \phi \})$.

**4. Vacuity**. Suppose that $\neg \phi\notin B$. Since $B$ is a belief set, $B\nvdash \neg \phi$, meaning that $[B]\nsubseteq [\neg\phi]=W \smallsetminus [\phi]$. In other words, there exists at least one world $w\in[B]$ which is also in $[\phi]$, i.e. $[B]\cap[\phi]\neq \emptyset$. 

As I have shown in **Case Two** of step **(3)**, if $[B]\cap[\phi]\neq \emptyset$, it follows that 

$$
\min_{B}([\phi]) = [B] \cap [\phi]
$$
Hence, it follows that
$$
T(\min_{b}([\phi])) = T([B]\cap [\phi])
$$
By definition, $T(\min_{B}([\phi]))=B*\phi$. Let me show that $T([B]\cap [\phi])=Cn(B \cup \{ \phi \})$.

- $(\subseteq)$ Suppose $\psi\in T([B]\cap[\phi])$. By definition, $[B]\cap[\phi]\subseteq [\psi]$. Again by definition, $B\cup \{ \phi \}\vdash \psi$. Hence, $\psi\in Cn(B\cup \{ \phi \})$.
- $(\supseteq)$ Suppose $\psi\in Cn(B\cup \{ \phi \})$. By definition, $B\cup \{ \phi \}\vdash \psi$. Again by definition, $[B]\cap[\phi]\subseteq [\psi]$. Hence, $\psi\in T([B]\cap[\phi])$.

Therefore, $T([B]\cap [\phi])=Cn(B \cup \{ \phi \})$. Substituting in the equivalence above, we get

$$
B*\phi=Cn(B\cup \{ \phi \})
$$

**5. Consistency**. Suppose $\phi \nvdash\bot$. We need to prove that $Cn(B*\phi)\neq \mathcal{L}$. Note that $\phi \nvdash \bot$ is equivalent to the claim that $[\phi]\nsubseteq[\bot]=\emptyset$, which in turn is equivalent to $[\phi]\neq \emptyset$. Now, by definition we have that 

$$
B*\phi = T(\min_{B}([\phi]))
$$

Since $[\phi]\neq \emptyset$, but the **Limit Assumption** for $\preceq$, it follows that there exists at least one world $w$ in $[\phi]$ such that $w\preceq w'$ for all $w'\in[\phi]$. So, $\min_{B}([\phi])\neq \emptyset$. Let me prove now that $T(\min_{B}([\phi]))\neq \mathcal{L}$. Consider some $\phi\in \mathcal{L}$. Clearly, $\phi\land \neg \phi\in \mathcal{L}$. However, $[\phi \land \neg \phi]=\emptyset$, therefore $\min_{B}([\phi])\nsubseteq [\phi \land \neg \phi]$, because the former is nonempty. Therefore, $\phi \land \neg \phi\notin T(\min_{B}([\phi]))$, and we condlude

$$
T(\min_{B}([\phi]))\neq \mathcal{L}
$$


**6. Congruence**. Suppose that $Cn(\{ \phi \})=Cn(\{ \psi \})$. Therefore, we have $\phi  \vdash\psi$ and $\psi \vdash\phi$, meaning that

$$
[\phi]=[\psi]
$$

Hence, we have that
$$
\begin{align}
B*\phi &= T(\min_{B}([\phi])) \\
&= T(\min_{B}([\psi])) \\
&= B*\psi
\end{align}
$$

**7. Superexpansion.** We must prove that $B * (\phi \land \psi) \subseteq (B * \phi) + \psi$. 

Let $\chi \in B * (\phi \land \psi)$. By definition, this means $\chi \in T(\min_B([\phi \land \psi]))$, which tells us:
$$
\min_B([\phi] \cap [\psi]) \subseteq [\chi]
$$
We need to prove that $\chi \in (B * \phi) + \psi$. By definition, $(B * \phi) + \psi = Cn((B * \phi) \cup \{\psi\})$. By the **Deduction Theorem** of classical logic, 
$$
\begin{align}
\chi \in Cn((B*\phi)\cup \{ \psi \}) &\iff \psi \rightarrow \chi \in Cn(B*\phi) \\
&\iff \psi \rightarrow \chi \in B*\phi
\end{align}
$$


So, I will prove that $\psi \to \chi$ is in $B * \phi$. That is, we need to prove that $\psi \to \chi \in T(\min_B([\phi]))$. Semantically, this means we must prove:
$$
\min_B([\phi]) \subseteq [\psi \to \chi]
$$
Recall that the truth-set of an implication is $[\psi \to \chi] = W \smallsetminus [\psi] \cup [\chi]$ (which we can write as $[\psi]^c \cup [\chi]$). So, we need to prove

$$
\min_B([\phi]) \subseteq [\psi]^{c}\cup [\chi]
$$

Let $w \in \min_B([\phi])$. We want to show that $w \in [\psi]^c \cup [\chi]$. We have two cases:

1. **Case One:** $w \notin [\psi]$. Hence, $w \in [\psi]^c$. Therefore, $w \in [\psi]^c \cup [\chi]$ trivially holds.
2. **Case Two:** $w \in [\psi]$. In this case, $w \in \min_B([\phi]) \cap [\psi] \subseteq [\phi] \cap [\psi]$. Let us show that $w$ must actually be minimal in the intersection, i.e., $w \in \min_B([\phi] \cap [\psi])$. Suppose the opposite is true: there exists some world $w' \in [\phi] \cap [\psi]$ such that $w' \prec_B w$. Since $w, w' \in [\phi]$, the fact that $w' \prec_B w$ contradicts our starting assumption that $w \in \min_B([\phi])$. Thus, no such $w'$ exists, and $w \in \min_B([\phi] \cap [\psi])$. Because we know from our initial premise that $\min_B([\phi] \cap [\psi]) \subseteq [\chi]$, it follows that $w \in [\chi]$. Therefore, $w \in [\psi]^c \cup [\chi]$.

Either way, $w \in [\psi]^c \cup [\chi]$. So, $\min_B([\phi]) \subseteq [\psi \to \chi]$.  Hence, $(\psi \to \chi) \in T(\min_B([\phi])) = B * \phi$. This gives us $\chi \in (B * \phi) + \psi$. Since $\chi$ is an arbitrary formula from $B * (\phi \land \psi)$, we conclude $B * (\phi \land \psi) \subseteq (B * \phi) + \psi$. `eproof`


**8. Subexpansion**. Suppose that $\neg\psi \notin B*\phi$. We must show that $(B*\phi)+\psi \subseteq B*(\phi \land \psi)$. First of all, let me clarify what exactly we need to prove here. 

$$
\begin{align*}
(B*\phi)+\psi \subseteq B*(\phi \land \psi) &\iff Cn(T(\min_{B}([\phi])) \cup \{\psi\}) \subseteq T(\min_{B}([\phi \land \psi])) \\
&\iff \text{For all } \chi: \chi \in Cn(T(\min_{B}([\phi])) \cup \{\psi\}) \implies \chi \in T(\min_{B}([\phi \land \psi])) \\
&\iff \text{For all } \chi: \psi \to \chi \in T(\min_{B}([\phi])) \implies \chi \in T(\min_{B}([\phi \land \psi])) \\
&\iff \text{For all } \chi: \min_{B}([\phi]) \subseteq [\psi \to \chi] \implies \min_{B}([\phi \land \psi]) \subseteq [\chi] \\
&\iff \text{For all } \chi: \min_{B}([\phi]) \subseteq [\psi]^c \cup [\chi] \implies \min_{B}([\phi \land \psi]) \subseteq [\chi]
\end{align*}
$$

First, let us establish that $\min_{B}([\phi])\cap[\psi]\neq \emptyset$. By definition, $B*\phi = T(\min_B([\phi]))$. Therefore, our premise means:

$$
\begin{align}
\neg\psi \notin T(\min_B([\phi])) &\iff \min_{B}([\phi])\nsubseteq [\psi]^{c} \\
&\iff \min_{B}([\phi])\cap[\psi]\neq \emptyset
\end{align}
$$
Because this intersection is strictly non-empty, we can establish the following identity:

$$\min_B([\phi \land \psi]) = \min_B([\phi]) \cap [\psi]$$

* $(\supseteq)$ Suppose $w \in \min_B([\phi]) \cap [\psi]$ but $w \notin \min_B([\phi \land \psi])$. Because $w \in [\phi]$ and $w \in [\psi]$, $w$ satisfies $\phi \land \psi$. If it is not minimal in $[\phi \land \psi]$, there must exist some $w' \in [\phi \land \psi]$ such that $w' \prec_B w$. However, since $w' \in [\phi \land \psi]$, we know $w' \in [\phi]$. The fact that $w' \in [\phi]$ and $w' \prec_B w$ strictly contradicts our starting premise that $w \in \min_B([\phi])$. Hence, no such $w'$ exists, and $w \in \min_B([\phi \land \psi])$.
 
* $(\subseteq)$ It is crucial to remember here that $\min_B([\phi]) \cap [\psi] \neq \emptyset$. Let $w^\dagger$ be a world in this intersection. Let $w \in \min_B([\phi \land \psi])$. Suppose for contradiction that $w \notin \min_B([\phi]) \cap [\psi]$. Since $w \in [\phi \land \psi]$, we know $w \in [\psi]$. Therefore, the only way $w$ is excluded from the intersection is if $w \notin \min_B([\phi])$. If $w \notin \min_B([\phi])$, there must exist some $w^* \in [\phi]$ such that $w^* \prec_B w$. Now consider our three worlds:  
	1. Because $w \in \min_B([\phi \land \psi])$ and $w^\dagger \in [\phi \land \psi]$, it must be that $w \preceq_B w^\dagger$.
	2. Because $w^\dagger \in \min_B([\phi])$ and $w^* \in [\phi]$, it must be that $w^\dagger \preceq_B w^*$.
	3. By our assumption above, $w^* \prec_B w$. 
	
	Stringing these together yields $w \preceq_B w^\dagger \preceq_B w^* \prec_B w$, which implies $w \prec_B w$. This is a contradiction. Thus, $w \in \min_B([\phi]) \cap [\psi]$.

Now that we have established $\min_B([\phi \land \psi]) = \min_B([\phi]) \cap [\psi]$, let us finally prove the claim above. To prove our main claim, we simply let $\chi$ be an arbitrary formula, assume the antecedent $\min_B([\phi]) \subseteq [\psi]^c \cup [\chi]$, and show that the consequent $\min_B([\phi \land \psi]) \subseteq [\chi]$ must follow.

Let $w$ be an arbitrary world such that $w \in \min_B([\phi \land \psi])$. By our identity, $w \in \min_B([\phi]) \cap [\psi]$. This entails two things:

1. $w \in \min_B([\phi])$
2. $w \in [\psi]$

Because $w \in \min_B([\phi])$, it follows from our assumed antecedent that $w \in [\psi]^c \cup [\chi]$. However, because $w \in [\psi]$, we know $w \notin [\psi]^c$. Therefore, by disjunctive syllogism, it must be the case that $w \in [\chi]$. 

Since $w$ was an arbitrary world in the minimal set, we have shown $\min_B([\phi \land \psi]) \subseteq [\chi]$. This establishes the consequent, concluding the proof of Subexpansion. 

**Conclusion**. Therefore, we have proved that, for any belief set $B$ associated with an order $\preceq_{B}$ on $W$ satisfying the properties listed above, and any proposition $\phi$, if we define $B*\phi$ as $T(\min_{B}([\phi]))$, all the eight postulates of AGM belief revision are satisfied. `eproof`

# 5. Exercisess

**1. Proofs.** Prove all the lemmas and propositions we did not prove together. See [[RG FormEp - Session 2 (Solutions)|this file]] for the solutions.

[^1]: Note that one might even argue that possible worlds *are* just these mathematical functions—abstract (and in a sense, linguistic) objects that provide a maximally specific description of how our world could be. However, this is a metaphysical claim that we need not commit to here, as it does not affect our formal discussion.
[^2]: This last conception is actually quite problematic when used as the relevant notion of "plausibility" for belief revision. If you simply believe what is true in the world most similar to the actual world (which is usually just the actual world itself), it effectively collapses the distinction between rational belief and truth.
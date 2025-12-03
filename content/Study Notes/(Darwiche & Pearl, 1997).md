---
title:
description:
draft: true
parental-note:
pdf:
share_pdf: false
tags:
  - belief_revision/iteration
  - ranking_theory
---

\[Check version in main Vault]

Darwiche and Pearl (1997) propose a new set of postulates designed to regulate the logic of iterated belief revision. The paper achieves three primary objectives:

1. **Critique of AGM:** They demonstrate that the standard [[(Alchourrón et al., 1985)|AGM]] framework (Alchourrón et al., 1985) is insufficient for handling iterated revision. They argue that the AGM postulates are too permissive regarding conditional beliefs, allowing for counterintuitive results when an agent updates their beliefs sequentially.
2. **New Postulates and Representation:** They introduce four new postulates (C1–C4) and establish a corresponding representation theorem. Crucially, they show that rational iterated revision requires modeling the agent's knowledge as an **epistemic state** ($\Psi$) rather than a simple belief set. This is characterized by a set of total preorders on possible worlds, specifically assigning a preorder $\leq_{\Psi}$ to each epistemic state $\Psi$.
3. **Concrete Implementation:** They demonstrate that Spohn's ranking functions [[(Spohn, 2012)]] provide a concrete model for iterated revision that satisfies these new postulates.

Before detailing these contributions, I will introduce the foundational framework. Darwiche and Pearl build upon the work of [[(Katsuno & Mendelzon, 1991)|Katsuno and Mendelzon (1991)]], who reformulated the AGM postulates for finite propositional logic. In the KM framework, the belief revision operator is treated as a connective within the propositional language $\mathcal{L}$.

# 1. Background: Katsuno-Mendelzon's Framework

Here is the formal background for KM's framework.

1. $\mathcal{L}$ is a *finitary language*, i.e. its set of propositional variables $\Phi$ (KM call it $\Xi$) is finite.
2. An *interpretation of $\mathcal{L}$* is a function from $\Phi$ to $\{ 0, 1\}$. For the sake of simplicity, an interpretation $I$ may be denoted as tuple of values—e.g., if $\mathcal{L}=\{ a,b,c \}$, we may refer to $I$ as $(1,1,0)$.
3. A *model for a propositional formula $\psi$* is an interpretation $I$ such that makes $\psi$ true (in the usual sense). $Mod(\psi)$ is the set of models for $\psi$.
4. $form(\mathcal{M})$, where $\mathcal{M}$ is a set of interpretations, is the formula $\psi$ whose set of models $Mod(\psi)=\mathcal{M}$. Note that such formula is guaranteed to exist precisely because we have a finitary language. See callout below for a more precise definition of $form(\mathcal{M})$.
5. A formula $\psi$ is complete iff $\psi$ implies either $\mu$ or $\neg \mu$, for all $\mu\in \mathcal{L}$. Note that if $\psi$ is complete then there is an interpretation $I$ such that $form(I)$ is equivalent to $\psi$, and that for any interpretation $J$, $form(J)$ is complete.
6. Most importantly, KM explain revision by means of *knowledge bases* $\psi\in \mathcal{L}$ (KB) instead of belief sets $K\subseteq \mathcal{L}$ (which are assumed to be closed under entailment). Revision is then modeled as connective in the language, i.e. as $\circ$. Given a knowledge base $\psi$ and a sentence $\mu$, $\psi \circ \mu$ denotes the revision of $\psi$ by $\mu$, that is, the new knowledge base obtained by adding new knowledge $\mu$ to the old knowledge base $\psi$.

> [!info]- Formal Definition of $form(\mathcal{M})$
> Given that the language $\mathcal{L}$ is finitary with a finite set of propositional variables $\Phi = \{p_1, \dots, p_n\}$:
> 
> 1. For any variable $p \in \Phi$ and interpretation $I$, define the literal $l(p, I)$ as:
> $$
>    l(p, I) = \begin{cases} p & \text{if } I \models p \\ \neg p & \text{if } I \not\models p \end{cases}
>    $$
> 
> 2. The characteristic formula for a specific interpretation $I$ is the conjunction of its literals:
> $$
>    form(I) = \bigwedge_{p \in \Phi} l(p, I)
>    $$
> 
> 3. The formula characterizing a set of interpretations $\mathcal{M}$ is the disjunction of the characteristic formulas of its members:
> $$
>    form(\mathcal{M}) = \bigvee_{I \in \mathcal{M}} form(I)
>    $$
> *(N.b.: If $\mathcal{M} = \emptyset$, then $form(\mathcal{M}) \equiv \bot$.)*

Let me now briefly show how [[(Alchourrón et al., 1985)|AGM]]'s revision postulates are formulated in this framework. Recall that AGM's postulates are the following. For any belief set (or theory) $K$ and $\mu\in \mathcal{L}$:

1. (Closure) $K*\mu$ is a belief set (or theory), i.e. $K*\mu=Cn(K*\mu)$.
2. (Success) $\mu\in K*\mu$.
3. (Inclusion) $K*\mu \subseteq Cn(K\cup \{ \mu \})=K+\mu$.
4. (Vacuity\*) If $\neg\mu\notin K$, then $K+\mu \subseteq K*\mu$.
5. (Consistency) If $\mu$ is satisfiable, then $K*\mu$ is consistent.
6. (Equivalence) If $\mu_{1}\equiv \mu_{2}$, then $K*\mu_{1}=K*\mu_{2}$.
7. (Superexpansion) $K*(\mu_{1}\land \mu_{2})\subseteq (K*\mu_{1})+\mu_{2}$.
8. (Subexpansion) If $\neg\mu_{2}\notin K*\mu_{1}$, then $(K*\mu_{1})+\mu_{2}\subseteq K*(\mu_{1}\land \mu_{2})$.

> [!warning]- (Inclusion) and (Vacuity\*) $\iff$ (Vacuity)
> (Inclusion) and (Vacuity\*) are equivalent to (Vacuity), given the other postulates. See [[Axiomatizations of Revision and Contraction#^71279e]].

Any belief set can be represented as a knowledge base (KB) $\psi$. Given that $\mathcal{L}$ is finitary, we have that, for any belief set $K$, there exists some $\psi \in \mathcal{L}$:

$$
K=\{ \phi:\psi \vdash \phi \}\tag{\dagger}
$$

The reason is the following: Since $\mathcal{L}$ is finitary, the set of all possible interpretations (worlds) is finite—if $\#\Phi=n$, there are $2^{n}$ interpretations $I$. Any belief set $K$ corresponds to a specific set of models, denoted $Mod(K)$, which is the subset of interpretations where all sentences in $K$ are true. Because the total number of interpretations is finite, $Mod(K)$ is finite. We can therefore construct $\psi$ as the disjunction of the formulas characterizing each interpretation in $Mod(K)$, i.e. 

$$
\psi:=\bigvee_{I\in Mod(K)} form(I).
$$

Thus, $\psi$ axiomatizes exactly the models of $K$.

> [!lemma]
> Let $*$ be a revision operator on knowledge sets and $\circ$ its corresponding operator on KBs. Then $*$ satisfies $(G^*1)$–$(G^*6)$ if and only if $\circ$ satisfies conditions $(R1)$–$(R4)$ below:
> 
> - $(R1)$ $\psi \circ \mu$ implies $\mu$.
> - $(R2)$ If $\psi \wedge \mu$ is satisfiable, then $\psi \circ \mu \equiv \psi \wedge \mu$.
> - $(R3)$ If $\mu$ is satisfiable, then $\psi \circ \mu$ is also satisfiable.
> - $(R4)$ If $\psi_1 \equiv \psi_2$ and $\mu_1 \equiv \mu_2$, then $\psi_1 \circ \mu_1 \equiv \psi_2 \circ \mu_2$.

^d487e5

> [!info]- Interpretation of $(R_{1})$-$(R_{4})$
> - **(R1)** $\psi \circ \mu$ implies $\mu$.
>     - *Interpretation:* **Success.** The new knowledge $\mu$ is strictly retained in the updated Knowledge Base.
> 
> - **(R2)** If $\psi \wedge \mu$ is satisfiable, then $\psi \circ \mu \equiv \psi \wedge \mu$.
>     - *Interpretation:* **Vacuity.** If no conflict exists between the current beliefs and the new information, the system takes the “obvious path” of simply adding the new information (conjunction).
> 
> - **(R3)** If $\mu$ is satisfiable, then $\psi \circ \mu$ is also satisfiable.
>     - *Interpretation:* **Consistency.** This condition prevents the revision process itself from introducing unwarranted inconsistencies; the result remains consistent as long as the input is consistent.
> 
> - **(R4)** If $\psi_1 \equiv \psi_2$ and $\mu_1 \equiv \mu_2$, then $\psi_1 \circ \mu_1 \equiv \psi_2 \circ \mu_2$.
>     - *Interpretation:* **Irrelevance of Syntax.** Following Dalal's Principle, this guarantees that revision relies solely on the logical content (semantics) of the beliefs, ignoring their syntactic formulation.

`bproof` Let $*$ be a revision operator on knowledge sets and $\circ$ its corresponding operator on KBs. The correspondence is defined such that $K * \mu = \{ \beta \mid \psi \circ \mu \vdash \beta \}$ (i.e., the revised belief set contains exactly those sentences entailed by the revised formula $\psi \circ \mu$). 

$(\impliedby)$ Assume that $\circ$ satisfies $(R1)$–$(R4)$

- $(G^{*}1)$. Let us show that $K*\mu$ is a belief set. Consider any $\phi\in \mathcal{L}$ such that $K*\mu \vdash\phi$. Since $K*\mu$ is defined as the set of consequences of $\psi \circ \mu$, the fact that the set $K*\mu$ entails $\phi$ implies that $\psi\circ\mu \vdash\phi$ (by the transitivity of $\vdash$) So, by the definition of the set $K*\mu$, $\phi\in K*\mu$. Thus, $K*\mu$ is deductively closed.
- $(G^{*}2)$. By $(R1)$, $\psi \circ\mu \vdash \mu$, and thus $\mu\in K*\mu$ by definition. 
- $(G^{*}3)$. Consider any $\phi\in K*\mu$ and let me show that $\phi \in K+\mu$. *Ex hypothesi*, we have $\psi \circ \mu \vdash \phi$. Recall that $K+\mu=Cn(K \cup \{ \mu \})=Cn(\{ \psi \}\cup \{ \mu \})=Cn(\psi \land \mu)$. If $\psi \land \mu$ is satisfiable, by $(R2)$, $\psi \circ \mu \equiv \psi \land \mu$, i.e. $Cn(\psi \circ \mu)=Cn(\psi \land \mu)$, and so $\phi\in Cn(\psi \land \mu)$. If $\psi \land \mu$ is not satisfiable, then $Cn(\psi \land \mu)=\mathcal{L}$, and hence $\phi\in Cn(\psi \land \mu)$. Either way, $\phi\in Cn(\psi \land \mu)$. Since $\phi$ is arbitrary, $K*\mu \subseteq K+\mu$. 
- $(G^{*}4)$. Suppose $\neg\mu \notin K$, and let me show that $K+\mu \subseteq K*\mu$. Since $\neg \mu\notin K$, we have $\psi \nvdash \neg\mu$. Hence, $\psi \land \mu$ is satisfiable. By $(R2)$, $\psi \circ\mu \equiv \psi \land \mu$. Namely, $K*\mu=Cn(\psi \circ \mu)=Cn(\psi \land \mu)=Cn(K \cup \{ \mu \})=K+\mu$.
- $(G^{*}5)$. Suppose $\mu$ is satisfiable, and let me show that $K*\mu$ is consistent. By $(R3)$, $\psi \circ \mu$ is satisfiable (i.e., there is some $I$ that makes $\psi \circ \mu$ true), so $\psi \circ \mu \nvdash\bot$. Therefore, $\bot\notin Cn(K*\mu)$, i.e $K*\mu$ is consistent.
- $(G^{*}6)$. Suppose $\mu_{1}\equiv \mu_{2}$. Since obviously $\psi \equiv \psi$, by $(R4)$ we have that $\psi \circ \mu_{1}\equiv \psi \circ \mu_{2}$. Therefore, $K*\mu_{1}=Cn(\psi \circ \mu_{1})=Cn(\psi \circ \mu_{2})=K*\mu_{2}$.

$(\implies)$ Assume $*$ satisfies $(G^{*}1)$–$(G^{*}6)$.

- $(R1)$. By $(G^{*}2)$, $\mu\in K*\mu$. By the definition of $K*\mu$ as $\{ \phi:\psi \circ \mu \vdash \phi \}$ it follows that $\psi \circ\mu \vdash \mu$.
- $(R_{2})$. Suppose $\psi \land \mu$ is satisfiable. Thus, $\psi \nvdash \neg \mu$, and since $K=\{ \phi: \psi \vdash\phi \}$, $\neg \mu\notin K$. By $(G^{+}4)$, $K+\mu=Cn(K \cup \{ \mu \})=Cn(\psi \land \mu) \subseteq K*\mu=Cn (\psi \circ \mu)$. By $(G^{*}3)$ we have that $Cn(\psi \circ \mu)\subseteq Cn(\psi \land \mu)$. Therefore, since $\psi \land \mu$ is satisfiable, $Cn(\psi \circ \mu)=Cn(\psi \land \mu)$. So, $\psi \circ \mu \dashv\vdash \psi \land \mu$, i.e. $\psi \circ \mu \equiv \psi \land \mu$.
- $(R3)$. Suppose $\mu$ is satisfiable. By $(G^{*}5)$, $K*\mu$ is consistent, that is $Cn(K*\mu)\neq \mathcal{L}$. Given the definition of $K*\mu$, it follows that $\psi \circ \mu \nvdash\bot$. By the definition of $\vdash$, there exists one interpretation $I$ that makes $\psi \circ \mu$ true, i.e. $\psi \circ \mu$ is satisfiable. 
- $(R4)$. Suppose $\psi_{1}\equiv \psi_{2}$ and $\mu_{1}\equiv \mu_{2}$. Let $K_{1}=\{ \phi: \psi_{1}\vdash\phi \}$ and $K_{2}=\{ \phi:\psi_{2}\vdash \phi \}$. Since $\psi_{1}\equiv \psi_{2}$ *ex hypothesi*, $K_{1}=K_{2}$ (call this set $K$). Since $\mu_{1}\equiv \mu_{2}$, by $(G^{*}6)$, it follows that $K*\mu_{1}=K*\mu_{2}$. Clearly, $\psi \circ \mu_{1}\in K*\mu_{1}$ (for the reflexivity of $\vdash$), and $\psi \circ \mu_{2}\in K*\mu_{2}$. Therefore, $\psi \circ \mu_{1}\dashv\vdash \psi \circ \mu_{2}$, i.e. $\psi \circ \mu_{1} \equiv \psi \circ \mu_{2}$.
`eproof`

> [!info]- Interpretation of $(G^*7)/(R5)$ and $(G^*8)/(R6)$
> These postulates enforce the principle of **minimal change** using a stable ordering of worlds. They govern how the system behaves when the new evidence becomes more specific (going from $\mu$ to $\mu \wedge \phi$).
> 
> - **Intuition for $(R5)$ and $(G^*7)$**. If the “best” worlds for $\mu$ include some where $\phi$ is true, these must remain the “best” worlds when we restrict our search to $\mu \wedge \phi$. We cannot arbitrarily demote plausible worlds just because the evidence became more specific. (Stability).
> 
> - **Intuition for $(R6)$ and $(G^*8)$**. If the revision by $\mu$ is already consistent with $\phi$, then revising by the conjunction $\mu \wedge \phi$ should strictly refine the previous result. The system is not allowed to “jump” to distant worlds to satisfy $\mu \wedge \phi$ if it already found closer candidates in the original revision. (Rational Monotonicity).

> [!lemma] 
> $(G^*7)$ and $(G^*8)$ are equivalent to $(R5)$ and $(R6)$ respectively in the sense of [[#^d487e5]].
> 
> $(R5)$ $(\psi \circ \mu) \wedge \phi$ implies $\psi \circ (\mu \wedge \phi)$.
> $(R6)$ If $(\psi \circ \mu) \wedge \phi$ is satisfiable, then $\psi \circ (\mu \wedge \phi)$ implies $(\psi \circ \mu) \wedge \phi$.

^d5e31d

`bproof` Let $*$ be a revision operator on knowledge sets and $\circ$ its corresponding operator on KBs. The correspondence is defined such that $K * \mu = \{ \beta \mid \psi \circ \mu \vdash \beta \}$ (i.e., $K * \mu = Cn(\psi \circ \mu)$). Recall also that expansion is defined as $(K * \mu) + \phi = Cn( (K*\mu) \cup \{\phi\} ) = Cn( (\psi \circ \mu) \land \phi )$.

$(\impliedby)$ Assume that $\circ$ satisfies $(R5)$–$(R6)$.

- $(G^{*}7)$. Let me show that $K * (\mu \land \phi) \subseteq (K * \mu) + \phi$. By $(R5)$, we have that $(\psi \circ \mu) \land \phi \vdash \psi \circ (\mu \land \phi)$. This entails that $Cn(\psi \circ (\mu \land \phi)) \subseteq Cn((\psi \circ \mu) \land \phi)$. By the definition of correspondence, LHS is $K * (\mu \land \phi)$ and RHS is $(K * \mu) + \phi$. Thus, the inclusion holds.
- $(G^{*}8)$. Suppose $\neg \phi \notin K * \mu$, and let me show that $(K * \mu) + \phi \subseteq K * (\mu \land \phi)$. Since $\neg \phi \notin K * \mu$, we have that $\psi \circ \mu \nvdash \neg \phi$. Hence, $(\psi \circ \mu) \land \phi$ is satisfiable. By $(R6)$, it follows that $\psi \circ (\mu \land \phi) \vdash (\psi \circ \mu) \land \phi$. This implies $Cn((\psi \circ \mu) \land \phi) \subseteq Cn(\psi \circ (\mu \land \phi))$. Translating back to knowledge sets, we obtain $(K * \mu) + \phi \subseteq K * (\mu \land \phi)$.

$(\implies)$ Assume $*$ satisfies $(G^{*}7)$–$(G^{*}8)$.

- $(R5)$. By $(G^{*}7)$, $K * (\mu \land \phi) \subseteq (K * \mu) + \phi$. Translating this via the definitions, we have $Cn(\psi \circ (\mu \land \phi)) \subseteq Cn((\psi \circ \mu) \land \phi)$. Since $Cn(A) \subseteq Cn(B)$ iff $B \vdash A$, it follows that $(\psi \circ \mu) \land \phi \vdash \psi \circ (\mu \land \phi)$. Thus $(\psi \circ \mu) \land \phi$ implies $\psi \circ (\mu \land \phi)$.
- $(R6)$. Suppose $(\psi \circ \mu) \land \phi$ is satisfiable. This means $\psi \circ \mu \nvdash \neg \phi$, so $\neg \phi \notin Cn(\psi \circ \mu)$, which means $\neg \phi \notin K * \mu$. By $(G^{*}8)$, we have $(K * \mu) + \phi \subseteq K * (\mu \land \phi)$. Translating to formulas, $Cn((\psi \circ \mu) \land \phi) \subseteq Cn(\psi \circ (\mu \land \phi))$. This implies that $\psi \circ (\mu \land \phi) \vdash (\psi \circ \mu) \land \phi$.
`eproof`
[[#^d487e5]] and [[#^d5e31d]] show that the two frameworks are interchangeable. Before we can move to the main discussion of D&P, we need to establish the following result.

> [!def]+ Faithful Assignment
> Let $W$ be the set of all worlds (interpretations) of a propositional language $\mathcal{L}$. A function that maps each sentence $\psi$ in $\mathcal{L}$ to a total pre-order $\leq_{\psi}$ on worlds $W$ is called a *faithful assignment* if and only if:
> 
> 1. $\omega_{1}, \omega_{2} \models \psi \implies\omega_{1} =_{\psi} \omega_{2}$;
> 2. $\omega_{1} \models \psi$ and $\omega_{2} \not\models \psi$ $\implies$ $\omega_{1} <_{\psi} \omega_{2}$; and
> 3. $\psi \equiv \phi \implies \leq_{\psi}\; =\; \leq_{\phi}$.
> 
> *Note:* Here, $\omega_{1} <_{\psi} \omega_{2}$ is defined as $\omega_{1} \leq_{\psi} \omega_{2}$ and $\omega_{2} \not\leq_{\psi} \omega_{1}$; whereas $\omega_{1} =_{\psi} \omega_{2}$ is defined as $\omega_{1} \leq_{\psi} \omega_{2}$ and $\omega_{2} \leq_{\psi} \omega_{1}$.

^f461d7

> [!theorem]+ Representation Theorem (Theorem 2)
> A revision operator $\circ$ satisfies postulates $(R1)$–$(R6)$ precisely when there exists a faithful assignment that maps each sentence $\psi$ into a total pre-order $\le_{\psi}$ such that:
> 
> $$Mod(\psi \circ \mu) = \min(Mod(\mu), \le_{\psi})$$
> 
> Here, $Mod(\mu)$ is the set of all worlds satisfying $\mu$, and $\min(Mod(\mu), \le_{\psi})$ contains all worlds that are minimal in $Mod(\mu)$ according to the total pre-order $\le_{\psi}$.

`bproof` **Part One: ($\impliedby$)**. Assume there exists a faithful assignment mapping each $\psi \in \mathcal{L}$ to a total pre-order $\leq_{\psi}$ such that $Mod(\psi \circ \mu) = \min(Mod(\mu), \leq_{\psi})$. We must show that $\circ$ satisfies $(R1)$–$(R6)$.

Recall that $\phi_1 \vdash \phi_2$ iff $Mod(\phi_1) \subseteq Mod(\phi_2)$ (by def., $\phi_{1}\vdash\phi_{2}$ iff every $\phi_{1}$-valuation satisfies $\phi_{2}$).

- **(R1)**. Consider any $\omega \in Mod(\psi \circ \mu)$. By definition, $\omega \in \min(Mod(\mu), \leq_{\psi})$. This implies $\omega \in Mod(\mu)$. Since $\omega$ is arbitrary, $Mod(\psi \circ \mu) \subseteq Mod(\mu)$, so $\psi \circ \mu \vdash \mu$.
- **(R2)**. Suppose $\psi \land \mu$ is satisfiable (i.e., there exists some $\omega^* \in W$ that makes $\psi \land \mu$ true). We show that $Mod(\psi \land \mu) = Mod(\psi \circ \mu)$.
    - **($\subseteq$)** Let $\omega \in Mod(\psi \land \mu)$. Clearly, $\omega \in Mod(\mu)$ and $\omega \in Mod(\psi)$. Consider any comparison world $\omega' \in Mod(\mu)$.
        - If $\omega' \in Mod(\psi)$, then since both $\omega, \omega' \models \psi$, we have $\omega =_{\psi} \omega'$ by faithful assignment condition (1). Thus, $\omega' \not<_{\psi} \omega$.
        - If $\omega' \notin Mod(\psi)$, then since $\omega \models \psi$ and $\omega' \not\models \psi$, we have $\omega <_{\psi} \omega'$ by faithful assignment condition (2). Thus, $\omega' \not<_{\psi} \omega$.
        In either case, no world in $Mod(\mu)$ is strictly preferred to $\omega$. Hence, $\omega$ is $\leq_{\psi}$-minimal in $Mod(\mu)$, so $\omega \in Mod(\psi \circ \mu)$.
    - **($\supseteq$)** Let $\omega \in Mod(\psi \circ \mu)$. Clearly, $\omega \in Mod(\mu)$. Since $\omega$ is minimal in $Mod(\mu)$ and we know $\omega^* \in Mod(\mu)$ (from the satisfiability assumption), it must be that $\omega^* \not<_{\psi} \omega$. By condition (2), if $\omega \notin Mod(\psi)$ while $\omega^* \in Mod(\psi)$, we would have $\omega^* <_{\psi} \omega$, a contradiction. Thus, $\omega \models \psi$. Since $\omega \in Mod(\mu)$ and $\omega \in Mod(\psi)$, we have $\omega \in Mod(\psi \land \mu)$.
- **(R3)**. Suppose $\mu$ is satisfiable (i.e., $Mod(\mu) \neq \emptyset$). Since the language $\mathcal{L}$ is finitary, the set of all worlds $W$ is finite. A nonempty finite set ordered by a total pre-order must have minimal elements. Therefore, $\min(Mod(\mu), \leq_{\psi}) \neq \emptyset$, which implies $\psi \circ \mu$ is satisfiable.
- **(R4)**. Suppose $\psi_1 \equiv \psi_2$ and $\mu_1 \equiv \mu_2$. Then $Mod(\psi_1) = Mod(\psi_2)$ and $Mod(\mu_1) = Mod(\mu_2)$. By faithful assignment condition (3), $\leq_{\psi_1} = \leq_{\psi_2}$. It follows directly that $\min(Mod(\mu_1), \leq_{\psi_1}) = \min(Mod(\mu_2), \leq_{\psi_2})$, so $Mod(\psi_1 \circ \mu_1) = Mod(\psi_2 \circ \mu_2)$.
- **(R5)**. Let $\omega \in Mod((\psi \circ \mu) \land \phi)$. We show $\omega \in Mod(\psi \circ (\mu \land \phi))$. Note that $\omega \in \min(Mod(\mu), \leq_{\psi}) \cap Mod(\phi)$. This means $\omega \in Mod(\mu \land \phi)$ and $\omega$ is minimal in $Mod(\mu)$. Suppose for contradiction that $\omega$ is *not* minimal in $Mod(\mu \land \phi)$. Then there exists $\omega' \in Mod(\mu \land \phi)$ such that $\omega' <_{\psi} \omega$. Since $\omega' \in Mod(\mu)$, this contradicts the fact that $\omega$ is minimal in the larger set $Mod(\mu)$. Thus, $\omega$ must be minimal in $Mod(\mu \land \phi)$, so $\omega \in Mod(\psi \circ (\mu \land \phi))$.
- **(R6)**. Suppose $(\psi \circ \mu) \land \phi$ is satisfiable. This means there exists some $\omega^* \in \min(Mod(\mu), \leq_{\psi}) \cap Mod(\phi)$. We show that $\psi \circ (\mu \land \phi)$ implies $(\psi \circ \mu) \land \phi$. Let $\omega \in Mod(\psi \circ (\mu \land \phi)) = \min(Mod(\mu \land \phi), \leq_{\psi})$. By definition, $\omega \in Mod(\mu \land \phi)$, so we only need to show $\omega$ is minimal in the larger set $Mod(\mu)$. Suppose for contradiction that $\omega$ is *not* minimal in $Mod(\mu)$. Then there exists $\omega' \in Mod(\mu)$ such that $\omega' <_{\psi} \omega$. Compare $\omega'$ with the world $\omega^*$ (which we know is minimal in $Mod(\mu)$). Since $\omega^*$ is minimal, $\omega' \not<_{\psi} \omega^*$. Since $\leq_{\psi}$ is total, this implies $\omega^* \leq_{\psi} \omega'$. By transitivity, $\omega^* \leq_{\psi} \omega' <_{\psi} \omega$, so $\omega^* <_{\psi} \omega$. However, since $\omega^* \in Mod(\mu \land \phi)$, this contradicts the fact that $\omega$ is minimal in $Mod(\mu \land \phi)$. Therefore, $\omega$ must be minimal in $Mod(\mu)$, so $\omega \in Mod(\psi \circ \mu)$.

**Part Two: ($\implies$)**. Assume that the revision operator $\circ$ satisfies $(R1)$–$(R6)$. We construct a relation $\leq_{\psi}$ on $W$ and prove it is a faithful total pre-order such that $Mod(\psi \circ \mu) = \min(Mod(\mu), \leq_{\psi})$. For any worlds $\omega, \omega' \in W$, we define the relation $\leq_{\psi}$ as follows:

$$
\omega \leq_{\psi} \omega' :\iff \omega \in Mod(\psi) \quad \text{OR} \quad \omega \in Mod(\psi \circ form(\omega, \omega'))
$$

*(Intuitively: $\omega$ is deemed “at least as plausible” as $\omega'$ if $\omega$ is selected when the agent is forced to choose between the two.)*

**1. Proof of Connectivity (Totality)** We must show that for any $\omega, \omega'$, either $\omega \leq_{\psi} \omega'$ or $\omega' \leq_{\psi} \omega$.
Consider the formula $\mu = form(\omega, \omega')$.

- By **(R1)**, $Mod(\psi \circ \mu) \subseteq Mod(\mu) = \{\omega, \omega'\}$.
- By **(R3)**, since $\mu$ is satisfiable (it has models $\omega, \omega'$), $Mod(\psi \circ \mu)$ is non-empty.
- Therefore, $Mod(\psi \circ \mu)$ must be $\{\omega\}$, $\{\omega'\}$, or $\{\omega, \omega'\}$.
    - If $\omega \in Mod(\psi \circ \mu)$, then $\omega \leq_{\psi} \omega'$.
    - If $\omega' \in Mod(\psi \circ \mu)$, then $\omega' \leq_{\psi} \omega$.

Thus, the relation is total.

**3. Proof of Reflexivity**. We must show that for any $\omega$, $\omega \leq_{\psi} \omega$. Consider $\mu = form(\omega)$. By **(R1)** and **(R3)**, $Mod(\psi \circ \mu)$ is a non-empty subset of $\{\omega\}$. Thus, $Mod(\psi \circ \mu) = \{\omega\}$. This implies $\omega \in Mod(\psi \circ form(\omega,\omega))$, satisfying the definition.

**4. Proof of Transitivity**. Assume $\omega_1 \leq_{\psi} \omega_2$ and $\omega_2 \leq_{\psi} \omega_3$. We must show $\omega_1 \leq_{\psi} \omega_3$. We consider three cases:

**Case 1:** $\omega_1 \in Mod(\psi)$. By the definition of $\leq_{\psi}$, if $\omega_1 \in Mod(\psi)$, then $\omega_1 \leq_{\psi} \omega_3$ holds immediately.

**Case 2:** $\omega_1 \notin Mod(\psi)$ and $\omega_2 \in Mod(\psi)$. Since $\omega_{1}\notin Mod(\psi)$ and $\omega_{1}\leq_{\psi}\omega_{2}$, it follows that $\omega_{1}\in Mod(\psi \circ form(\omega_{1},\omega_{2}))$. Then, since $\omega_2 \in Mod(\psi)$, we have $Mod(\psi \land form(\omega_1, \omega_2)) = \{\omega_2\}$. By **(R2)**, since $\psi \land form(\omega_{1},\omega_{2})$ is satisfiable (i.e., by $\omega_{2}$), then $Mod(\psi \circ form(\omega_1, \omega_2)) =Mod(\psi \land form(\omega_{1},\omega_{2}))= \{\omega_2\}$. This implies $\omega_1 \notin Mod(\psi \circ form(\omega_1, \omega_2))$. This contradicts our assumption that $\omega_1 \leq_{\psi} \omega_2$, so this case is impossible.

**Case 3:** $\omega_1 \notin Mod(\psi)$ and $\omega_2 \notin Mod(\psi)$. Consider $\mu = form(\omega_1, \omega_2, \omega_3)$. By **(R1)** and **(R3)**, $M = Mod(\psi \circ \mu)$ is a non-empty subset of $\{\omega_1, \omega_2, \omega_3\}$.
  
*Subcase 3a:* Suppose $M \cap \{\omega_1, \omega_2\} = \emptyset$. Then $M = \{\omega_3\}$. By applying **(R5)** and **(R6)** with $\phi = form(\omega_2, \omega_3)$, we get:
  $$Mod(\psi \circ \mu) \cap \{\omega_2, \omega_3\} = Mod(\psi \circ form(\omega_2, \omega_3))$$
  Since $M = \{\omega_3\}$, the LHS is $\{\omega_3\}$. Thus $Mod(\psi \circ form(\omega_2, \omega_3)) = \{\omega_3\}$.
  This implies $\omega_2 \notin Mod(\psi \circ form(\omega_2, \omega_3))$. Since $\omega_2 \notin Mod(\psi)$, this means $\omega_2 \not\leq_{\psi} \omega_3$.
  This contradicts our assumption that $\omega_2 \leq_{\psi} \omega_3$. Thus, this subcase is impossible.

  *Subcase 3b:* Suppose $M \cap \{\omega_1, \omega_2\} \neq \emptyset$.
  Since $\omega_1 \leq_{\psi} \omega_2$ and $\omega_1 \notin Mod(\psi)$, we know $\omega_1 \in Mod(\psi \circ form(\omega_1, \omega_2))$.
  By applying **(R5)** and **(R6)** again with $\phi = form(\omega_1, \omega_2)$, we establish that the minimal elements in $M$ restricted to $\{\omega_1, \omega_2\}$ must match the revision by $\{\omega_1, \omega_2\}$.
  Since the intersection is non-empty and $\omega_1$ is selected in the pairwise revision, $\omega_1$ must be in $M$ (i.e., $\omega_1 \in Mod(\psi \circ \mu)$).
  Finally, we apply **(R5)** and **(R6)** with $\phi = form(\omega_1, \omega_3)$:
  $$Mod(\psi \circ \mu) \cap \{\omega_1, \omega_3\} = Mod(\psi \circ form(\omega_1, \omega_3))$$
  Since $\omega_1 \in Mod(\psi \circ \mu)$, $\omega_1$ is in the LHS. Thus $\omega_1 \in Mod(\psi \circ form(\omega_1, \omega_3))$.
  Therefore, $\omega_1 \leq_{\psi} \omega_3$.
`eproof`

`eproof`

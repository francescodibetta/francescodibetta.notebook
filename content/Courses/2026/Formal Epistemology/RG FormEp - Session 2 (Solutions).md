---
title: Session 2 - Solutions to Exercises
description:
draft: false
parental-note: "[[RG FormEp - Session 2]]"
pdf: RG FormEp - Session 2 (Solutions).pdf
share_pdf: true
tags:
---
![[RG FormEp - Session 2#^e85e7f]] 


`bproof` Let $\phi,\psi\in \mathcal{L}$ and let $\Gamma,\Delta\in \mathcal{P}(\mathcal{L})$.

**Part one**. First, we prove the semantic equivalence for single sentences.
$$
\begin{align}
\phi \vdash  \psi & \iff \text{for all } w\in W: w\models  \phi \implies w \models  \psi\\
& \iff \text{for all } w\in W: w\in [\phi] \implies w \in [\psi] && \text{by def. } w\models \phi \iff w\in [\phi]\\
& \iff [\phi] \subseteq [\psi] && \text{by def. of } \subseteq
\end{align}
$$

Next, we prove the same holds between a set of sentences $\Gamma$ and a single sentence $\phi$:
$$
\begin{align}
\Gamma \vdash \phi & \iff \text{for all } w\in W: (\text{if } w \models \gamma \text{ for all } \gamma \in \Gamma \text{, then } w \models \phi) \\
& \iff \text{for all } w\in W: (\text{if } w \in [\gamma] \text{ for all } \gamma \in \Gamma \text{, then } w \in [\phi]) && \text{by def. of } [\cdot] \\
& \iff \text{for all } w\in W: w \in \bigcap_{\gamma \in \Gamma} [\gamma] \implies w \in [\phi] && \text{by def. of intersection} \\
& \iff \text{for all } w\in W: w \in [\Gamma] \implies w \in [\phi] && \text{by def. of } [\Gamma] \\
& \iff [\Gamma] \subseteq [\phi] && \text{by def. of } \subseteq
\end{align}
$$

**Part two**. Suppose that $\Gamma \subseteq \Delta$, meaning that every sentence in $\Gamma$ is also in $\Delta$. We can visualize this as:
$$
\Gamma=\{ \gamma_{1},\gamma_{2},\gamma_{3},\dots \} \subseteq \{ \gamma_{1},\gamma_{2},\gamma_{3},\dots,\delta_{1},\delta_{2},\delta_{3},\dots \}=\Delta
$$
*(Note: we do not strictly need to assume the existence of extra $\delta$ sentences, but it helps visualize the inclusion).*

Consider now any arbitrary world $w\in [\Delta]$. By definition, $[\Delta]=\bigcap_{\delta\in\Delta}[\delta]$. Since $w\in [\Delta]$, it follows that $w$ satisfies all the sentences in $\Delta$. Because $\Gamma \subseteq \Delta$, $w$ must inherently satisfy all the sentences in $\Gamma$ as well. That is, $w\in [\Gamma]$. Since $w$ is an arbitrary world in $[\Delta]$, it follows that every world in $[\Delta]$ is also in $[\Gamma]$. Therefore:
$$
[\Delta]\subseteq [\Gamma]
$$

**Part three**. Suppose that $\Delta$ is a belief set, meaning $\Delta=Cn(\Delta)$. Let us prove the strict biconditional:

1. $(\implies)$ Suppose $\Gamma \subseteq \Delta$. The conclusion $[\Delta]\subseteq [\Gamma]$ follows directly from the universal reasoning in Part two.
2. $(\impliedby)$ Suppose now that $[\Delta]\subseteq [\Gamma]$. We must prove that $\Gamma \subseteq \Delta$. Let $\gamma\in \Gamma$. Since $[\Delta]\subseteq [\Gamma]$, every model of $\Delta$ is a model of $\gamma$, which means $\Delta \models \gamma$. By completeness (as shown in Part one), $\Delta \vdash \gamma$. This means $\gamma\in Cn(\Delta)$. Because we assumed $\Delta$ is a belief set, we know $Cn(\Delta)=\Delta$. Therefore, $\gamma\in \Delta$. Since $\gamma$ is just an arbitrary sentence in $\Gamma$, it follows that all sentences in $\Gamma$ are in $\Delta$, hence $\Gamma \subseteq \Delta$.

Therefore, we conclude that, if $\Delta$ is a logically closed belief set, then for any set of sentences $\Gamma$:
$$
\Gamma \subseteq \Delta \iff [\Delta]\subseteq [\Gamma]
$$

**Part four**. We prove the equality by demonstrating mutual inclusion.

* $(\subseteq)$ Let $w \in [Cn(\Gamma \cup \Delta)]$. By definition, $w$ is a model of the deductive closure, meaning $w \models \psi$ for every formula $\psi \in Cn(\Gamma \cup \Delta)$. Since $\Gamma \cup \Delta \subseteq Cn(\Gamma \cup \Delta)$, it immediately follows that $w \models \psi$ for every $\psi \in \Gamma \cup \Delta$. This implies $w \in [\Gamma]$ and $w \in [\Delta]$, which yields $w \in [\Gamma] \cap [\Delta]$.

* $(\supseteq)$ Let $w \in [\Gamma] \cap [\Delta]$. By definition, $w \in [\Gamma]$ and $w \in [\Delta]$, which means $w$ is a model of all formulas in $\Gamma$ and all formulas in $\Delta$. Therefore, $w$ is a model of their union: $w \models \Gamma \cup \Delta$. Now, let $\chi$ be an arbitrary formula such that $\chi \in Cn(\Gamma \cup \Delta)$, i.e. $\Gamma \cup \Delta \vdash \chi$. By [[RG FormEp - Session 1#^38e024|definition of logical consequence]], every world that satisfies $\Gamma \cup \Delta$ also satisfies $\chi$. Since $w \models \Gamma \cup \Delta$, it follows that $w \models \chi$. Because $\chi$ was an arbitrary formula in the closure, $w$ satisfies every formula in $Cn(\Gamma \cup \Delta)$. Thus, $w \in [Cn(\Gamma \cup \Delta)]$. 

Since we have established inclusion in both directions, the equality $[Cn(\Gamma \cup \Delta)] = [\Gamma] \cap [\Delta]$ holds.  `eproof`


![[RG FormEp - Session 2#^3c7168]] 

`bproof` Let $V\subseteq W$ be any set of worlds, and $\Gamma \subseteq \mathcal{L}$ be any set of sentences.

**Part one**. Let us show that $T(V)$ is a logically closed belief set. Since any set is trivially a subset of its own deductive closure, we automatically have $T(V)\subseteq Cn(T(V))$. 

To prove the reverse inclusion, suppose that $\phi\in Cn(T(V))$. We need to show that $\phi\in T(V)$. 

1. Since $\phi\in Cn(T(V))$, we know by definition that $T(V)\vdash\phi$.
2. By our previous lemma [[RG FormEp - Session 2#^e85e7f]], $T(V)\vdash\phi$ implies that the models of the premise are a subset of the models of the conclusion: $[T(V)] \subseteq [\phi]$.
3. Furthermore, by definition, $T(V)=\{ \psi\in \mathcal{L}: V \subseteq [\psi] \}$ and $[T(V)]=\{ w\in W: w \models \psi \text{ for all } \psi\in T(V)\}$.
4. If $w\in V$, then $w\models \psi$ for all $\psi\in T(V)$, and hence $w\in [T(V)]$, which implies that $V\subseteq [T(V)]$.
5. By transitivity of subsets, $V \subseteq [T(V)] \subseteq [\phi]$, which means $V \subseteq [\phi]$. 
6. Finally, by the definition of $T(V)$, any sentence whose truth-set contains $V$ must be in $T(V)$. Therefore, $\phi\in T(V)$. 

Since we have shown $Cn(T(V)) \subseteq T(V)$ and $T(V) \subseteq Cn(T(V))$, we conclude $T(V) = Cn(T(V))$.

**Part two**. (2a) Let us show that $T([\Gamma])=Cn(\Gamma)$. 

$$
\begin{align}
T([\Gamma]) &= \{ \psi\in \mathcal{L} : [\Gamma]\subseteq [\psi] \} && \text{by def. of } T \\
&=\left\{  \psi\in \mathcal{L} : \bigcap_{\gamma\in \Gamma}[\gamma] \subseteq [\psi]  \right\} && \text{by def. of } [\Gamma]\\
&=\{ \psi \in \mathcal{L} : \Gamma \vdash  \psi \} && \text{by previous lemma} \\
&=Cn(\Gamma) && \text{by def. of } Cn
\end{align}
$$

(2b) Let us show that $T([\Gamma])=\Gamma$ if, and only if, $\Gamma$ is a belief set.
$$
\begin{align}
\Gamma \text{ is a belief set } &\iff \Gamma=Cn(\Gamma) && \text{by def. of belief set}\\
&\iff \Gamma =T([\Gamma]) && \text{by part (2a)}
\end{align}
$$

**Part three**. Let us prove that the truth-set function $[\cdot] : \mathcal{P}(\mathcal{L}) \to \mathcal{P}(W)$ is the inverse of the theory function $T:\mathcal{P}(W)\to \mathcal{P}(\mathcal{L})$ if, and only if, the set of propositional variables $\Phi$ for our language $\mathcal{L}$ is finite.

$(\impliedby)$ Suppose that $\Phi$ is finite. Let $V \in \mathcal{P}(W)$. We want to show that $[T(V)] = V$. 

First, let me show that the inclusion $V \subseteq [T(V)]$ holds. By definition, $T(V) = \{ \phi \in \mathcal{L} : V \subseteq [\phi] \}$. This simply means every formula in $T(V)$ is true in all worlds in $V$. Therefore, any world $w \in V$ must satisfy all formulas in $T(V)$, which by definition means $w \in [T(V)]$. Thus, $V \subseteq [T(V)]$.

Second, we show the reverse inclusion $[T(V)] \subseteq V$. Since $\Phi$ is finite, the set of all possible valuations $W$ is also finite (specifically, $|W| = 2^{|\Phi|}$). Because $W$ is finite, $V \subseteq W$ is also finite. For any world $w \in W$, we can construct a characteristic formula, or *atom*, that perfectly describes it:
$$
\alpha(w) := \bigwedge_{p\in \Phi} l_{w}(p) \quad\quad\quad \text{ where } l_{w}(p):=\begin{cases}
p & \text{if } w \models  p  \\
\neg  p & \text{if } w \nvDash p
\end{cases}
$$
By construction, $w' \models \alpha(w)$ if and only if $w' = w$. We can now construct a single formula $\phi_V$ that perfectly captures the set $V$ by taking the disjunction of the atoms of all worlds in $V$:
$$
\phi_V := \bigvee_{w\in V} \alpha(w)
$$
(If $V$ is empty, $\phi_V$ is simply $\bot$). It follows immediately that $[\phi_V] = V$. 

Because $[\phi_V] = V$, we know that $T(V) = T([\phi_V])$. By Part two of our lemma, we also know that $T([\phi_V]) = Cn(\phi_V)$. Therefore:
$$
T(V) = Cn(\phi_V)
$$
Taking the truth-set of both sides, we get:
$$
[T(V)] = [Cn(\phi_V)]
$$
Also, note that the truth-set of a deductively closed theory generated by a single formula is just the truth-set of the formula itself. First, if $w\in [\phi_{V}]$, $w\in [Cn(\phi_{V})]$ by the definition of $\vdash$. Second, if $w\in [Cn(\phi_{V})]$, it follows that $w\models \phi'$ for all $\phi'\in Cn(\phi_{V})$. Since $\phi_{V}\in Cn(\phi_{V})$, we conclude $w\models\phi_{V}$, i.e. $w\in [\phi_{V}]$. Therefore, $[Cn(\phi_V)] = [\phi_V]$. 

Since we established $[\phi_V] = V$ above, we conclude:
$$
[T(V)] = V
$$
Thus, $T(\cdot)$ and $[\cdot]$ are inverses of each other when $\Phi$ is finite.

$(\implies)$ Suppose that $\Phi$ is not finite. Without loss of generality, let us assume that $\Phi$ is countably infinite, i.e., $|\Phi| = |\mathbb{N}| = \aleph_0$. To prove this direction, we must find at least one specific set of worlds $V \subseteq W$ such that $[T(V)] \neq V$. Since the inclusion $V \subseteq [T(V)]$ always holds (as established above), we simply need to find a set $V$ where $V \subset [T(V)]$.

Let $w^*$ be a specific world in $W$, and define our set as all worlds *except* $w^*$:
$$
V = W \smallsetminus \{w^*\}
$$

We will prove that $[T(V)] = W \supset V$. To do so, since $V = W \smallsetminus \{w^*\}$, we simply need to prove that $w^{*} \models \psi$ for all $\psi \in T(V)$. 

Intuitively, the only single sentence that could distinguish the set $W \smallsetminus \{ w^{*} \}$ from the full space $W$ would be the negation of the characteristic formula (the atom) of $w^{*}$. However, because $\Phi$ is infinite, this atom cannot exist as a well-formed formula (it would require an infinite conjunction). Consequently, the language is too "coarse" to surgically exclude just a single world. Ultimately, this means $T(V)$ collapses into the set of mere propositional tautologies.

To prove this formally, let $\psi$ be an arbitrary formula in $T(V)$. By definition, this means $\psi$ is true in every world in $V = W \smallsetminus \{w^*\}$. 

Given our definition of [[RG FormEp - Session 1#^3b8651|the language]], any well-formed formula $\psi$ has a finite length, meaning it can only contain a finite number of propositional variables. Let $Var(\psi) \subseteq \Phi$ be the set of variables that appear in $\psi$. Since $\Phi$ is infinite but $Var(\psi)$ is finite, there must be some variable $q \in \Phi$ that does *not* appear in $\psi$, i.e., $q \notin Var(\psi)$.

Now, let's consider a world $w'$ that is identical to $w^*$ in every way, except it flips the truth value of $q$. That is:
$$
w'(p) =\begin{cases}
w^{*}(p) & \text{If } p \neq q \\
1 - w^{*}(p) & \text{If } p = q
\end{cases}
$$

Because $w'$ and $w^*$ differ on $q$, we know $w' \neq w^*$. Since $w' \in W$ but $w' \neq w^{*}$, it follows that $w'$ must be inside our set $V$, for $V = W \smallsetminus \{ w^{*} \}$.  

Since $\psi \in T(V)$ and $w' \in V$, it must be the case that $w' \models \psi$. However, $\psi$ does not contain the variable $q$. Therefore, the truth value of $\psi$ depends entirely on the variables in $Var(\psi)$, where $w'$ and $w^*$ perfectly agree. Hence, since $w' \models \psi$, it logically follows that $w^{*} \models \psi$.

Because $\psi$ is an arbitrary formula in $T(V)$, this same reasoning applies to any other formula $\psi' \in T(V)$. We conclude that $w^*$ satisfies every formula in $T(V)$. Therefore:
$$
w^* \in [T(V)]
$$

But by our initial definition, $w^* \notin V$. Therefore, $[T(V)]$ contains at least one world that is not in $V$. We have successfully proven that $V \subset [T(V)]$, and thus $[T(V)] \neq V$ when $\Phi$ is countably infinite. *A fortiori*, this result holds for uncountably infinite sets of propositional variables as well. 


**Part four**. Suppose that $V_{1}\subseteq V_{2}$, and let me prove that $T(V_{2})\subseteq T(V_{1})$. Consider an arbitrary $\phi\in T(V_{2})$. By definition, $V_{2}\subseteq [\phi]$. Since *ex hypothesi* $V_{1} \subseteq V_{2}$, we have $V_{1} \subseteq [\phi]$. Therefore, by definition $\phi\in T(V_{1})$. Since $\phi$ is an arbitrary formula in $T(V_{2})$, it follows that 
$$
T(V_{2})\subseteq T(V_{1})
$$

`eproof`

> [!warning]+ Even if $\Phi$ is infinite, $[T(\{ w \})] = \{ w \}$
> You might wonder why taking the theory of a *single* world doesn't suffer from the same "loss of information." The reason is that $T(\{ w \})$ is an *infinite set* of formulas. It contains the literal $l_{w}(p)$ for every single $p \in \Phi$. Even though we cannot construct a single finite atom $\alpha(w)$ because the variables are infinite, the individual literals $l_{w}(\cdot)$ are all independently captured inside the set $T(\{ w \})$. 
> 
> Consequently, the truth-set $[T(\{ w \})]$, which contains all worlds satisfying *every* $\phi \in T(\{ w \})$, must only contain worlds that make $l_{w}(p)$ true for all $p \in \Phi$. The only world satisfying this infinite set of literals is $w$ itself. Hence, $[T(\{ w \})] = \{ w \}$.

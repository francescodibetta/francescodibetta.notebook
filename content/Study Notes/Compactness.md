---
title: Compactness
description:
draft: true
parental-note:
pdf:
share_pdf: false
tags:
---

> [!def] Compactness
> Let a consequence relation $\vdash$ for some logic $L$ be given. $\vdash$ is *compact* if, and only if:
> $$
>\Gamma \vdash x \implies \exists\Gamma_{fin}\subseteq \Gamma \text{ such that } \Gamma_{fin} \vdash x
>$$
> where $\Gamma_{fin}$ is a finite subset of $\Gamma$.

^442bae

In this note, we are interested in compactness for classical propositional logic. We will treat $\vdash$ semantically.

> [!def]+ Classical Propositional Logic and Semantic Consequence ($\vdash$)
> Let $\mathcal{L}$ be our standard propositional language, $\mathbb{V}$ be the set of all possible valuations (worlds) $v: \Phi \to \{0,1\}$, and $\models$ the usual satisfaction relation on $\mathbb{V}\times \mathcal{L}$.
> 
> We define classical consequence $\vdash$ as follows:
> $$\Gamma \vdash \phi \iff \text{For all } v \in \mathbb{V}: \text{if } v \models \gamma \text{ for all } \gamma \in \Gamma \text{, then } v \models \phi$$
> 
> *(Note: Many logic textbooks use $\models$ for semantic consequence as well as for the satisfaction relation $\models\; \subseteq \mathbb{V} \times \mathcal{L}$.)*

Because of how this consequence relation is constructed, we can prove that $\vdash$ has several crucial structural properties:

> [!proposition]+ Structural Properties of $\vdash$
> Let $\vdash$ be classical semantic consequence. $\vdash$ satisfies the following properties:
> 
> 1. **Reflexivity**: If $\phi \in \Gamma$, then $\Gamma \vdash \phi$.
> 2. **Monotonicity**: If $\Gamma \vdash \phi$ and $\Gamma \subseteq \Delta$, then $\Delta \vdash \phi$.
> 3. **Transitivity**: If $\Gamma \vdash \psi$ for all $\psi \in \Delta$, and $\Delta \vdash \phi$, then $\Gamma \vdash \phi$.
> 4. **Disjunction of Premises (Proof by Cases)**: If $\Gamma \cup \{\phi\} \vdash \chi$ and $\Gamma \cup \{\psi\} \vdash \chi$, then $\Gamma \cup \{\phi \lor \psi\} \vdash \chi$.

---

We can show that Compactness holds for classical logic. We can give two proofs for it. To prove [[#^442bae]] this way, we need the following.

> [!def] Well-Behaved set of Formulas
> Consider $F \subseteq \mathcal{L}$, where $\mathcal{L}$ is the set of well-formed formulas consisting only of $\land,\lor,\neg$. The set $F$ is *well-behaved* iff, for all formulas $a,b\in \mathcal{L}$:
> 
> 1. $a \land b \in F \iff a \in F \text{ and }b\in F$,
> 2. $a \lor b \in F \iff a \in F \text{ or } b\in F$,
> 3. $\neg a \in F \iff a \notin F$.

^f6ac8d

> [!lemma]+
> 
> 1. For any valuation function $v:\mathcal{L}\to \{ 0,1 \}$, the set $\{ a\in \mathcal{L}:v(a)=1 \}$ is well-behaved.
> 2. For all $F\subseteq \mathcal{L}$, if $F$ is well-behaved, then there exists a valuation function $v$ such that $F=\{ a\in \mathcal{L}: v(a)=1 \}$. 

^bc81d0

`bproof` (1) Consider an arbitrary valuation function $v:\mathcal{L}\to \{ 1,0 \}$ and the set $V=\{ a \in \mathcal{L}:v(a) =1\}$. Consider arbitrary formulas $a,b\in \mathcal{L}$.

1. $\neg a \in V \iff v(\neg a)=1 \iff v(a)=0 \iff a \notin V$.
2. $a\land b \in V \iff v(a \land b)=1 \iff v(a)=1 \text{ and } v(b)=1 \iff a\in V \text{ and } b \in V$.
3. $a \lor b \in V \iff v(a \lor b)=1 \iff v(a)=1 \text{ or } v(b)=1 \iff a\in V \text{ or } b\in V$.

So, $V=\{ a\in \mathcal{L}:v(a)=1 \}$ is well-behaved.

(2) Consider an arbitrary well-behaved $F\subseteq \mathcal{L}$. Let us define $v_{F}:\mathcal{L} \to \{ 1,0 \}$ as 

$$
v_{F}(a)=
\begin{cases}
1 & a\in F \\
0 & a \notin F
\end{cases}
$$

and let me show it is an evaluation function.

1. First, $v_{F}$ is a *function*. Take any $a\in \mathcal{L}$. Either $a\in F$ or $a\notin F$. If $a\in F$, $v_{F}(a)=1$, and if $a\notin F$, $v_{F}(a)=0$. Either way, $v_{F}$ assigns a unique value (0 or 1) to $a$, for any $a\in \mathcal{L}$. So $v_{F}$ is a function
2. Second, let me show that $v_{F}$ is an *assignment*. This immediately follows from the step above, for the set of propositional variables $\Phi \subseteq \mathcal{L}$ and $v_{F}$ is defined on $\mathcal{L}$ already.
3. Third, let me show that $v_{F}$ is a *valuation*. It means that the values for complex formulas are assigned according to the usual rules. Consider arbitrary $a,b\in \mathcal{L}$:
	1. $v_{F}(\neg a) \iff \neg a \in F \iff a \notin F \iff v_{F}(a)=0$
	2. $v_{F}(a \land b) \iff a \land b \in F \iff a\in F \text{ and }b \in F \iff v_{F}(a)=1 \text{ and }v_{F}(b)=1$.
	3. $v_{F}(a \lor b)\iff a \lor b \in F \iff a \in F \text{ or } b \in F \iff v_{F}(a)=1 \text{ or } v_{F}(b)=1$.

Therefore $v_{F}$ is indeed a valuation function. `eproof`

> [!theorem] Compactness for Classical Logic
> The classical consequence relation $\vdash$ (or equivalently the operation $Cn$) is compact.

^eb0eae

`bproof` Let us prove the theorem contrapositively. Let $\Gamma \subseteq \mathcal{L}$ and suppose that, for all finite $\Gamma_{fin} \subseteq \Gamma$, $\Gamma_{fin} \nvdash x$. Let us prove that $\Gamma \nvdash x$. I will construct a chain of sets $\Gamma^{+}$ such that $\Gamma \subseteq \Gamma^{+}$ and show that this is the maximal subset of $\mathcal{L}$ with such that no finite subset implies $x$. Then, I will prove that this set is well-behaved, which implies that $\neg x\in \Gamma^{+}$, and by [[#^bc81d0]] that there exists a valuation $v$ such that $v(\Gamma^{+})=1$. I will conclude that since $v(\Gamma^{+})=1$ and $v(x)=0$, $\Gamma \nvdash x$.

First, note that the set $\mathcal{L}$ is countable, for there is an injective function $\mathrm{G}:\mathcal{L} \to \mathbb{N}$ such that $G(a)$ is the Gödel number of $a$. So, we can list all the members of $\mathcal{L}$ as $a_{1},a_{2},a_{3},\dots$. Second, define the following property:

$$
P(\Delta) \quad :\iff \quad \text{For all finite $S\subseteq \Delta$: } S\nvdash x
$$

Let us define the following chain of formulas:

$$
\begin{align}
1.&& \Gamma_{0}&:=\Gamma \\
2.&& \Gamma_{n+1}&:=\begin{cases}
\Gamma_{n}\cup \{ a_{n} \} & \text{if } P(\Gamma_{n} \cup \{ a_{n}\})\\
\Gamma_{n} & \text{otherwise}
\end{cases}
\end{align}
$$

Then, define 

$$
\Gamma^{+} := \bigcup_{i=0}^{\infty} \Gamma_{i}
$$

Let us now establish two key properties of $\Gamma^{+}$.

1. **($\Gamma \subseteq \Gamma^{+}$)** First, $\Gamma \subseteq \Gamma^{+}$ obviously holds, for $\Gamma= \Gamma_{0}$.
2. **($P(\Gamma^{+})$ holds)** Second, $P(\Gamma^{+})$ holds. Let me first prove by induction that $P(\Gamma_{i})$ for all $i\geq 0$. First, we have $P(\Gamma_{0})$ *ex hypothesi*. Suppose now that $P(\Gamma_{n})$ holds (IH), and let me show that $P(\Gamma_{n+1})$ holds. Consider the set $\Gamma_{n} \cup \{ a_{n} \}$. We have two cases. If $P(\Gamma_{n} \cup \{ a_{n} \})$ does *not* hold, then $\Gamma_{n+1}=\Gamma_{n}$, and by the IH $P(\Gamma_{n+1})$. If $P(\Gamma_{n} \cup \{ a_{n} \})$ holds, $\Gamma_{n+1}=\Gamma_{n} \cup \{ a_{n} \}$, from which it immediately follows that $P(\Gamma_{n+1})$. Therefore, $P(\Gamma_{i})$ for $i\geq 0$. Suppose now for reductio that $P(\Gamma^{+})$ does not hold. It follows that there exists a finite $S \subseteq \Gamma^{+}$ such that $S \vdash x$. Since $\Gamma^{+}$ is the union of a chain of sets $\Gamma \subseteq \Gamma_{1} \subseteq \Gamma_{2}\subseteq \dots$ and $S$ is finite, there must be some $\Gamma_{j}$ such that $S\subseteq \Gamma_{j}$. Since $S$ is finite, $S \vdash x$ and $S\subseteq \Gamma_{j}$, we have that $P(\Gamma_{j})$ does *not* hold. However, this contradicts the fact that $P(\Gamma_{i})$ for all $i\geq 0$. Therefore, $P(\Gamma^{+})$ *must* hold.
3. **($\Gamma^{+}$ is a maximal $P$-set)** Let me prove that $\Gamma^{+}$ is the maximal subset of $\mathcal{L}$ satisfying $P$. Suppose that there exists a set $\Gamma^{++}$ such that $\Gamma^{+} \subset \Gamma^{++}$. I will show that $P(\Gamma^{++})$ fails. Since the inclusion is strict, there exists some $y \in \Gamma^{++}$ such that $y \notin \Gamma^{+}$. In our enumeration, $y=a_{n}$ for some $n$. Since $a_{n} \notin \Gamma^{+}$, it implies $a_{n} \notin \Gamma_{n+1}\subseteq \Gamma^{+}$. By the definition of our chain, $a_{n}$ is excluded only if $P(\Gamma_{n} \cup \{ a_{n} \})$ is false. This means there is a finite set $S \subseteq \Gamma_{n} \cup \{ y \}$ such that $S \vdash x$. Now, observe that $\Gamma_{n} \subseteq \Gamma^{+} \subset \Gamma^{++}$ and $y \in \Gamma^{++}$. So $\Gamma_{n} \cup \{ y \}\subseteq \Gamma^{++}$, and hence, $S \subseteq \Gamma^{++}$. Since $\Gamma^{++}$ contains a finite subset $S$ that entails $x$, $P(\Gamma^{++})$ fails. Thus, no proper superset of $\Gamma^{+}$ satisfies $P$.

Let me now show that $\Gamma^{+}$ is well-behaved.

1. **(Negation: $\neg a \in \Gamma^{+} \iff a \notin \Gamma^{+}$ )** ($\implies$) Suppose $\neg a\in \Gamma^{+}$. If $a\in \Gamma^{+}$, it follows that $\{ a,\neg a \}\subseteq \Gamma^{+}$, and since (*i*) $\{ a,\neg a \}\vdash x$ and (*ii*) $\{ a, \neg a \}$ is finite, $P(\Gamma^{+})$ does not hold, contradicting (2) above. Hence $a\notin \Gamma^{+}$ ($\impliedby$) Suppose $a\notin \Gamma^{+}$. Since $\Gamma^{+}$ is the maximal $P$-set, since $\Gamma^{+} \subset \Gamma^{+} \cup \{ a \}$, $P(\Gamma^{+} \cup \{ a \})$ does not hold, meaning that there exists some finite $S_{1}\subseteq \Gamma^{+}\cup \{ a \}$ such that $S_{1} \vdash x$. Suppose for reductio that $\neg a\notin \Gamma^{+}$. By the maximality of $\Gamma^{+}$, we have that $P(\Gamma^{+} \cup \{ \neg a \})$ does not hold, meaning that there exists some finite $S_{2}\subseteq \Gamma^{+} \cup \{ \neg a \}$ such that $S_{2} \vdash x$. Let $S:= (S_{1}\setminus \{ a \} )\cup (S_{2}\setminus \{  \neg a \})$. Note, $S \subseteq \Gamma^{+}$ and $S$ is finite. Note that $S \cup \{ a \}= S_{1} \cup (S_{2}\setminus \{ \neg a \})$, and since $S_{1}\vdash x$ and $\vdash$ is monotonic, $S \cup \{ a \}\vdash x$. Analogously, $S \cup \{ \neg a \}= (S_{1} \setminus \{ a \})\cup S_{2}$, and since $S_{2}\vdash x$, $S \cup \{ \neg a \}\vdash x$. By the Property of Disjunction of Premises, $S \vdash x$, contradicting $P(\Gamma^{+})$. Therefore, $\neg a\in \Gamma^{+}$.
2. **(Conjunction: $a \land b \in \Gamma^{+} \iff a,b \in \Gamma^{+}$)** ($\implies$) Suppose $a \land b \in \Gamma^{+}$. If $a\notin \Gamma^{+}$, by the step above $\neg a\in \Gamma^{+}$, and hence $\{ a\land b, \neg a \}\subseteq \Gamma^{+}$. Since $\{ a\land b,\neg a \}\vdash x$ and is finite, $P(\Gamma^{+})$ does not hold: contradiction. The argument for $b$ is analogous. So, both $a,b$ must be in $\Gamma^{+}$. ($\impliedby$) Suppose $a,b\in \Gamma^{+}$. If $a \land b \notin \Gamma^{+}$, then $\neg (a \land b)\in \Gamma^{+}$. Since $\{  a,b,\neg(a \land b) \}\vdash x$ and is a finite subset of $\Gamma^{+}$, $P(\Gamma^{+})$ does not hold: contradiction. So, $a \land b\in \Gamma^{+}$.
3. **(Disjunction: $a\lor b\in \Gamma^{+} \iff a \in \Gamma^{+} \text{ or } b \in \Gamma^{+}$)** ($\implies$) Suppose $a \lor b \in \Gamma^{+}$. If $a \notin \Gamma^{+}$ and $b \notin \Gamma^{+}$, it follows that $\neg a, \neg b\in \Gamma^{+}$. Since $\{ a \lor b,\neg a, \neg b \}\vdash x$ and is a finite subset of $\Gamma^{+}$, $P(\Gamma^{+})$ does not hold: contradiction. ($\impliedby$) Suppose that either $a \in \Gamma^{+}$ or $b \in \Gamma^{+}$. Take the former case. Suppose $a \lor b\notin \Gamma^{+}$. Hence $\neg (a \lor b)\in \Gamma^{+}$. Since $\{ a, \neg (a \lor b) \}\vdash x$ and is a finite subset of $\Gamma^{+}$, $P(\Gamma^{+})$ does not hold: contradiction.

Therefore, $\Gamma^{+}$ is well-behaved in the sense of [[#^f6ac8d]]. By [[#^bc81d0]], it follows that there exists a valuation $v_{\Gamma^{+}}$ such that $\Gamma^{+}=\{ a\in \mathcal{L}: v_{\Gamma^{+}}(a)=1 \}$. This means that $v_{\Gamma^{+}}(\Gamma^{+})=1$. Moreover, note that $x\notin \Gamma^{+}$, for if $x \in \Gamma^{+}$, we have $\{ x \}\vdash x$ and clearly $\{ x \}$ is a finite subset of $\Gamma^{+}$, violating $P(\Gamma^{+})$. Since $\Gamma^{+}$ is well-behaved, $\neg x\in \Gamma^{+}$, and hence $v_{\Gamma^{+}}(\neg x)=1$, meaning $v_{\Gamma^{+}}(x)=0$. A fortiori, $v_{\Gamma^{+}}(\Gamma)=1$ and $v_{\Gamma^{+}}(x)=0$, for $\Gamma \subseteq \Gamma^{+}$. So, there exists a valuation function $v$ such that $v(\Gamma)=1$ and $v(x)=0$, i.e. $\Gamma \nvdash x$. `eproof`

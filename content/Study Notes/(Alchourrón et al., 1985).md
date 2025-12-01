---
class: reference
subclass: article
aliases:
  - "On the Logic of Theory Change: Partial Meet Contraction and Revision Functions"
  - AGM
authors:
  - Carlos E. Alchourrón
  - Peter Gärdenfors
  - David Makinson
year: 1985
tags:
  - belief_revision
draft: true
---

In this note, I will present and expand on some key findings of AGM's famous paper.

# 1. Representation Theorem for Partial Meet Contraction

In this section, I will prove AGM's representation theorem, according to which the operation $\div$ is a partial meet contraction operation if, and only if, it satisfies all Gärdenfors postulates.

Let me start with a Lemma that we will need later on. (I will not introduce the terminology, which is carefully explained in other notes, i.e. [[Belief Revision Theory]] and [[(Lin, 2019)]]). First, let us characterize the consequence operator $Cn$. $Cn$ is a function from $\mathcal{P}(\mathcal{L})$ to $\mathcal{P}(\mathcal{L})$ satisfying the following constraints:

1. Reflexivity: $A\subseteq Cn(A)$.
2. Monotonicity: $A\subseteq B\implies Cn(A)\subseteq Cn(B)$.
3. Idempotence: $Cn(A)=Cn(Cn(A))$.

Moreover, $Cn$ is assumed to satisfy the following:

4. Supraclassicality: if $A\vDash_{CL} x$, then $x\in Cn(A)$.
5. Compactness: For all sets $A\subseteq \mathcal{L}$ and propositions $x$, $x\in Cn(A)$ iff $x\in Cn(A')$ for some finite $A'\subseteq A$ [[(Alchourrón & Makinson, 1981)]].
6. Property of Disjunction of Premises: Whenever $y\in Cn(A\cup \{ x_{1} \})$ and $y\in Cn(A\cup \{ x_{2} \})$, then $y\in Cn(A\cup \{ x_{1}\lor x_{2} \})$.

> [!Warning] Both the Deduction Theorem and its Converse Hold for $Cn$
> See [[Properties of Consequence Operations]].

Before proving the Representation theorem, we need to go through a couple of lemmas.

Let me now prove the following Lemma, which will be useful later on. (The definition of $A\bot x$ is given in [[Belief Revision Theory#^956de8]].)

## 1.1. Every $B$ in $A\bot x$ Is a Theory

> [!lemma]
> For any theory $A$ and proposition $p$, each maximal subset $B\in A\bot p$ is a theory.

^a828d1

`bproof` Consider any $B\in A\bot p$. By definition, $B\subseteq A$, $p\notin Cn(B)$, and there is no $B'\subseteq A$ with $p\notin Cn(B')$ such that $B\subset B'$. Let me now show that $B=Cn(B)$.

Obviously, $B\subseteq Cn(B)$ by Reflexivity. Let me show that $Cn(B)\subseteq B$, so suppose $q\notin B$ and let me show that $q\notin Cn(B)$.

Since $B\subseteq Cn(B)$, if $q\in Cn(B)$, we have that $B \subset Cn(B)$, which implies that there exists a set $B'\subseteq A$ with $p\notin Cn(B')$ such that $B\subset B'$. Indeed,

1. $Cn(B)\subseteq A$, for $B\subseteq A$ and by Monotonicity $Cn(B)\subseteq Cn(A)=A$ ($A$ is a theory).
2. $p \notin Cn(Cn(B))$, for $Cn(Cn(B))=Cn(B)$ and $p\notin Cn(B)$ *ex hypothesi*.

Therefore, $q\notin Cn(B)$, which implies that $Cn(B)\subseteq B$. Therefore,$B=Cn(B)$, i.e. $B$ is a theory. `eproof`

Now, let me show that *full meet contraction* $\sim$ is not a plausible candidate for contraction—despite being a crucial point of reference, as it serves as a natural lower bound on any reasonable contraction operation. 

## 1.2. Full Meet Contraction and Partial Meet Contraction

First, define 

$$
A\sim x:=\begin{cases}
A & A\bot x=\emptyset \\
\bigcap(A\bot x)
\end{cases}
$$

The reason why $\sim$ is not a plausible contraction operation is given in the following lemma. In a nutshell, [[#^c6dbc4]] shows that when we apply full meet contraction to a theory (given natural assumptions on $Cn$) the $\sim$ adds nothing of interest to the underlying consequence operation. More specifically, when contracting a belief set $A$ by a proposition $x$ (with $x \in A$), the resulting set consists only of those propositions in $A$ that are *already* entailed by $\neg x$. This outcome is typically seen as problematic, since the resulting theory is often too small to plausibly represent the agent's beliefs after contraction.

> [!lemma]+ 
> Let $A$ be any theory and $x$ a proposition such that $x \in A$. Then, $A\sim x= \bigcap A\bot x=A \cap Cn(\neg x)$.
> 
> (*N.b.*, we are not interested in the limiting case that $x\notin A$, for in that case $A\sim x=A$.)

^c6dbc4

`bproof` Suppose that $x\in A$. Suppose also that $x\in Cn(\phi)$ \[where $\phi$ is, I guess, a tautology], we have that $A\bot x=\emptyset$, for there is no $B\subseteq A$ such that $B\nvdash x$. Hence $A\sim x=\bigcap A\bot x=A$.[^1] Clearly, $A=\mathcal{L} \cap A$, where $\mathcal{L}$ is the set of all propositions of the language, and since $Cn(\neg x)=\mathcal{L}$ (because $x$ is a tautology and, hence, $\neg x$ is a contradiction), we conclude $A\sim x=Cn(\neg x)\cap A$. 

Suppose then that $x\notin Cn(\phi)$. 

1. Let us first show that $A\sim x\subseteq A\cap Cn(\neg x)$. Suppose that $u\notin A\cap Cn(\neg x)$. If $u\notin A$, since $\bigcap A\bot x\subseteq A$, $u\notin \bigcap A\bot x=A\sim x$, and we are done. If $u\notin Cn(\neg x)$, this means $\{\neg x\} \nvdash u$, which is logically equivalent to saying that $x \lor u$ is not a tautology. Now, consider the set $\{x \lor \neg u\}$. This set entails $x$ if and only if the proposition $(x \lor \neg u) \supset x$ is a tautology. This proposition is equivalent to $x \lor u$, which we just established is *not* a tautology. Therefore, $x \lor \neg u \nvdash x$. Note also that, *ex hypothesi*, $x\in A$, so since $A$ is a theory, $x \lor \neg u \in A=Cn (A)$. Here, the **Compactness** of $Cn$ is crucial. It guarantees that any set $S\subseteq A$ for which $S\nvdash x$ can be extended to a *maximal* subset $B$ of that still does not entail $x$ (this is the [[Extension Lemma]]). Since we have found a set $\{x \lor \neg u\}\subseteq A$ that does not entail $x$, by the [[Extension Lemma]] there must exist such a maximal set $B$ containing it. By definition, this $B$ is an element of $A \perp x$, and it contains $x\lor \neg u$. Obviously, $u\notin B$, for $\{ u \}\cup \{ x\lor \neg u \}\vdash x$ while $B\nvdash x$. Since $u\notin B\in A\bot x$, it follows that $u\notin \bigcap A\bot x=A\sim x$. 
2. Let me now show that $A\cap Cn(\neg x)\subseteq A\sim x$. Consider $u\in A\cap Cn(\neg x)$. Suppose for *reductio* that $u\notin \bigcap A\bot x$. It follows that there is some $B\subseteq A$ such that (1) $x\notin Cn(B)$, (2) $B\not\subset B'$ for every $B'\subseteq A$ with $x\notin Cn(B')$, and (3) $u\notin B$. Then, note that $B\cup \{ u \}\vdash x$, for if $B\cup \{ u \}\nvdash x$, then $B^*:=B\cup \{ u \}$ is such that $B^{*}\subseteq A$ (for $B\subseteq A$ ,$u\in A$), $x\notin Cn(B^{*})$, and $B\subset B^*$, contradicting the fact that $B\in A\bot x$. Moreover, note that $B\cup \{ \neg u \}\vdash x$ (by Contraposition, given that $u\in Cn(\neg x)$). By Disjunction of Premises, it follows that $B\cup \{ u\lor \neg u \}\vdash x$, i.e. $B\vdash x$, contradicting $B\in A\bot x$. Therefore, $u\in A\sim x=\bigcap A\bot x$.

Therefore, $A\sim x= A\cap Cn(\neg x)$. `eproof`

Nevertheless, $\sim$ remains a useful benchmark: it provides a natural lower bound for any reasonable contraction operation.

> [!def]+ 
> A contraction operator $\div$ is *bounded over $A$* if, and only if, $A\sim x\subseteq A\div x$ for any $x$.

AGM say that any “$\div$ worthy of the name” should be bounded over $A$, for any $A$. This relationship is all the more relevant for it implies that, given the following lemma, any contraction operation $\div$ must satisfy the Recovery postulate (see below).

> [!lemma]+ 
> Let $A$ be any theory. Then $A\subseteq Cn((A\sim x)\cup \{ x \})$.

^49f883

`bproof` Consider two cases. Suppose $x\notin A$. Then, $x\notin Cn(A)$ and so $A\bot x=\{A\}$. It follows that $A\sim x=\bigcap A\bot x=A$, and clearly $A\subseteq Cn(A\cup \{ x \})$. Suppose now that $x\in A$. By [[#^c6dbc4]], we have that $A\sim x=A\cap Cn(\neg x)$, so it suffices to show that $A\subseteq Cn((A\cap Cn(\neg x))\cup \{ x \})$. Let $a \in A$. Since $A$ is a theory, $a\lor \neg x \in A$. Moreover, $a \lor \neg x\in Cn(\neg x)$, so $a\lor \neg x\in A \cap Cn(\neg x)$. Since $A \cap Cn(\neg x)\subseteq (A \cap Cn(\neg x))\cup \{ x \}$, $Cn(A \cap Cn(\neg x))\subseteq Cn((A \cap Cn(\neg x))\cup \{ x \})$. Since $A\cap Cn(\neg x)\subseteq Cn(A\cap Cn(\neg x))$, we have that $a\in Cn((A \cap Cn(\neg x))\cup \{ x \})=Cn((A\sim x) \cup \{ x \})$. 

So $A\subseteq Cn((A\sim x)\cup \{ x \})$. `eproof`

Since any “ worthy of the name” is such that $A\sim x \subseteq A\div x$ (for any and $A$), by [[#^49f883]] it follows that $A\subseteq Cn((A \sim x)\cup \{ x \})$.[^2]

The previous discussion has shown that $\sim$ is not a good candidate for contraction. Thus, AGM argue that $A\div x$ should be the intersection of a *subset* of $A\bot x$: the intersection of the “best” elements of $A\bot x$. This is an essential “piece” of AGM's theory, which characterize the operation called *partial meet contraction*. To define $\div$ in this way, AGM first define a *selection function* $\gamma$. In general, a selection function is defined as follows.

> [!def]+ Selection Function for a Theory
> A *selection function* $\gamma$ for a theory $A$ is a function such that, for every collection $M$ of subsets of $A$:
> 1. $\gamma(M)\subseteq M$ if $M\neq \emptyset$.
> 2. $\gamma(M)\neq \emptyset$ if $M\neq \emptyset$.
> 3. $\gamma(\emptyset)=\{ A \}$.

^1512b5

More specifically, AGM define a selection function $\gamma$ as a function that maps $A\bot x\mapsto \Gamma \subseteq A\bot x$ defined in the following way:

$$
\gamma(A\bot x)=
\begin{cases}
\{A \} & \text{if } A\bot x=\emptyset\\
\Gamma\subseteq A\bot x\ (s.t. \Gamma\neq \emptyset) & \text{if } A\bot x \neq \emptyset
\end{cases}
$$

(Note that $\Gamma$ is a *set of sets* of sentences, not a set of sentences.) It should be evident that $\gamma$ so defined is a selection function in the sense of [[#^1512b5]]. 

Let us now define the partial meet contraction operation.

> [!def]+ Partial Meet Contraction
> The *partial meet contraction* is a binary operation 
> $$
> \div : \mathcal{P}(\mathcal{L}) \times \mathcal{L} \;\to\; \mathcal{P}(\mathcal{L})
> $$
> defined as follows. For any theory $A \subseteq \mathcal{L}$ and proposition $x \in \mathcal{L}$,
> $$
> A \div x := \bigcap \gamma(A \bot x).
> $$

^acd384

Before moving to the proof of AGM's representation theorem, we need one last lemma.

> [!lemma]+
> Let $A$ be any theory and $x$ a proposition. If the consequence operator $Cn$ satisfies conditions (1)–(4), then
> $$
> A \bot x \neq \varnothing \quad \iff \quad x \notin Cn(\varnothing).
> $$

^bc892b

`bproof` ($\implies$) Assume $A \bot x \neq \varnothing$. Then there exists some $B \in A \bot x$. By definition, this means:

1. $B \subseteq A$,  
2. $x \notin Cn(B)$, and  
3. $B$ is *inclusion-maximal* among subsets of $A$ with property (2).

In particular, condition (2) gives $x \notin Cn(B)$. Since $\varnothing \subseteq B$, Monotonicity of $Cn$ yields

$$
Cn(\varnothing) \subseteq Cn(B).
$$

If $x$ belonged to $Cn(\varnothing)$, then it would also belong to $Cn(B)$, contradicting (2). Hence $x \notin Cn(\varnothing)$.

($\impliedby$) Assume $x \notin Cn(\varnothing)$. We want to show that $A \bot x$ is non-empty. Define

$$
\mathcal{B} := \{ B \subseteq A : x \notin Cn(B) \}.
$$

Note that:

- Since $x \notin Cn(\varnothing)$ and $\varnothing \subseteq A$, we have $\varnothing \in \mathcal{B}$, so $\mathcal{B} \neq \varnothing$.  
- An element of $A \bot x$ is precisely a *maximal element* of $(\mathcal{B}, \subseteq)$.  

Thus the task reduces to showing that $(\mathcal{B}, \subseteq)$ has a maximal element. By [[Zorn's Lemma]], this follows if every chain in $\mathcal{B}$ has an upper bound in $\mathcal{B}$.

> [!tip]- The key step: why the union of a chain is still in $\mathcal{B}$  
> Let $\mathcal{C} \subseteq \mathcal{B}$ be a chain. Set $U := \bigcup \mathcal{C}$.  
> 1. Clearly $U \subseteq A$, since each $B \in \mathcal{C}$ is a subset of $A$. We must check $x \notin Cn(U)$.  
> 2. Suppose for contradiction that $x \in Cn(U)$. By **Compactness**, there is a finite $D \subseteq U$ such that $x \in Cn(D)$.  
> 3. Since $D$ is finite and $\mathcal{C}$ is a chain, all elements of $D$ lie inside some $B \in \mathcal{C}$. For simplicity, call this set $B$.
> 4. By Monotonicity, $x \in Cn(D) \subseteq Cn(B)$.  
> 5. But $B \in \mathcal{C} \subseteq \mathcal{B}$, which means $x \notin Cn(B)$: contradiction.  
> 6. Hence $x \notin Cn(U)$, so $U \in \mathcal{B}$ and $U$ is indeed an upper bound of $\mathcal{C}$ (by construction).

Since $\mathcal{B}$ is non-empty and every chain in $\mathcal{B}$ has an upper bound in $\mathcal{B}$, [[Zorn's Lemma]] applies.  
Therefore, $(\mathcal{B}, \subseteq)$ has a maximal element $B^*$. By definition, $B^* \subseteq A$, $x \notin Cn(B^*)$, and there is no strictly larger $B' \subseteq A$ with $x \notin Cn(B')$. This means precisely that $B^* \in A \bot x$. So $A \bot x \neq \varnothing$. `eproof`

## 1.3. Proof of the Representation Theorem

Now we are ready to prove [[#^6b9d5d]]. First, let me introduce the postulates for contraction ($\div$) and revision ($*$).

The following are the Gärdenfors's postulates for contraction. 

1. Closure: $A\div x= Cn(A\div x)$.
2. Success: $x\notin Cn(\emptyset)\implies x\notin Cn(A\div x)$.
3. Inclusion: $A\div x \subseteq A$.
4. Vacuity: $x\notin Cn(A)\implies A\div x= A$.
5. Extensionality: $Cn(x)=Cn(y)\implies A\div x = A\div y$.
6. Recovery: $A\subseteq (A\div x)+x$.

The following are the Gärdenfors's postulates for revision.

1. Closure: $A*x=Cn(A*x)$.
2. Success: $x\in A*x$.
3. Vacuity: $\neg x \notin Cn(A)\implies A*x=A+x$
4. Consistency: $\neg x\notin Cn(\emptyset)\implies A*x$ is consistent under $Cn$. \[Equivalently, $\neg x\notin Cn(\emptyset)\implies Cn(A*x)\neq \mathcal{L}$.]
5. Extensionality: $Cn(x)=Cn(y)\implies A* x = A* y$.
6. (?): $(A*x)\cap A=A\div \neg x$.

> [!warning]- Vacuity Implies Preservation
> The well-known Preservation principle (“If the information the agent $A$ receives at $t$ is compatible with the beliefs they hold right before $t$, then, right after $t$, the $A$ retains all the beliefs in response to that information”), aka $\Diamond-$ in [[(Goodman & Salow, 2025)]], follows from Vacuity. In this setting, Preservation may be stated as follows:
> $$
> \neg x\notin Cn(A)\implies Cn(A)\subseteq A*x \tag{Preservation}
>$$
> Suppose that $x$ is “compatible” with theory $A$. Intuitively, this means that $A$ does not rule $x$ out, i.e. $\neg x\notin Cn(A)$. By Vacuity, we have that $A*x=A+x=Cn(A\cup \{ x \})$. Also, note that $A\subseteq A\cup \{ x \}$, and so by Monotonicity $Cn(A)\subseteq Cn(A\cup \{ x \})=A*x$. (Obv., since $A$ is a theory, it follows that $A\subseteq A*x$.)

Let us now prove the following theorem.

> [!theorem]+ 
> Every partial meet contraction operator $\div$ satisfies the Gärdernfors's postulates for contraction, and its associated partial meet revision function $*$ satisfies the Gärdenfors's postulates for revision.

^ab2883

`bproof` Consider any partial meet contraction operator $\div$. 

1. **Closure**: By [[#^a828d1]], we know that each $B\in A\bot x$ is a theory, i.e. $B=Cn (B)$. We just need to show that the conjunction of some theories is itself a theory, i.e. that $$A\div x=\bigcap \gamma (A\bot x)=Cn\left( \bigcap \gamma(A\bot x) \right).$$First, note that, if $I$ is a set of indexes $i$ assigned to each $B\in \gamma(A\bot x)$, then $\bigcap \gamma(A\bot x)=\bigcap_{i \in I} B_i=\bigcap_{i \in I} Cn(B_i)$, for each $B$ is a theory. By [[Properties of Consequence Operations#^3a5d72]], we have that $\bigcap_{i \in I} Cn(B_i)=Cn(\bigcap_{i \in I} B_i)$.[^3] Thus, it follows $\bigcap \gamma(A\bot x)=Cn\left( \bigcap_{i \in I} B_{i} \right)=Cn\left( \bigcap \gamma(A\bot x) \right)$. We conclude that $A \div x$ is a theory.
2. **Inclusion**: $A\div x=\bigcap \gamma(A\bot x)\subseteq A$, since each $B\in \gamma(A\bot x)$ is a subset of $A$.
3. **Vacuity**: Suppose $x\notin Cn(A)$. Then, $A\bot x=\{ A \}$—i.e., $A$ is the only inclusion-maximal subset of $A$ that does not imply $x$. Since $A\bot x=\{ A \}$ is non-empty, by definition $\gamma(A\bot x)\subseteq A\bot x$ is nonempty, and it must be $\{ A \}$. Thus, $A\div x=\bigcap \gamma(A\bot x)=A$.
4. **Success**: Suppose $x\notin Cn(\emptyset)$, i.e. $x$ is not a tautology. Consider $A\bot x$. By [[#^bc892b]] we know that $A\bot x$ is nonempty. By the definition of $\gamma$, it follows that $\gamma(A\bot x)\neq \emptyset$ (this is crucial, for if $\gamma(A\bot x)=\emptyset$, then $\bigcap \gamma(A\bot x)=A$[^4]). Consider now $A\div x=\bigcap \gamma(A\bot x)$, and let us distinguish two cases. If $\bigcap \gamma(A\bot x)=\emptyset$, clearly $x\notin Cn(\bigcap \gamma(A\bot x))=Cn(\emptyset)$. If $\bigcap \gamma(A \bot x)\neq \emptyset$, $x\notin Cn(\bigcap \gamma(A\bot x))$ either, for *every* $B$ in $A\bot x\neq \emptyset$ does not imply $x$. Thus, it follows that $x\notin Cn(A\div x)$. 
5. **Preservation/Extensionality**: Let us show that, when $Cn(x)=Cn(y)$, $A\div x=A\div y$. First, we need to show that $A\bot x=A\bot y$, so that $\gamma(A\bot x)=\gamma(A\bot y)$. Consider an arbitrary $B_{x}\in A\bot x$. 
	1. Let me first show that $y\notin Cn(B_{x})$. By definition, $x\notin Cn(B_{x})$. If $y\in Cn(B_{x})$, then obviously $\{ y \}\subseteq Cn(B_{x})$, and by Monotonicity and [[#^a828d1]] we have that $$Cn(y)\subseteq Cn(Cn(B_{x}))=Cn(B_{x})=B_{x}.$$From this, it clearly follows that $x \in B_{x}=Cn(B_{x})$, contradicting the assumption that $B_{x}\in A\bot x$. Thus $y\notin Cn(B_{x})$. 
	2. Second, let me show that there is no $B\subseteq A$ with $y\notin Cn(B)$ such that $B_{x}\subset B$. Suppose to the contrary that there exists some $B_{y}\subseteq A$ with $y\notin Cn(B_{y})$ such that $B_{x}\subset B_{y}$. Clearly, $x\notin Cn(B_{y})$: if $x \in Cn(B_{y})$, by Monotonicity $Cn(x)\subseteq Cn(B_{y})=B_{y}$, which implies that $y \in B_{y}$ since $Cn(x)=Cn(y)$ (a contradiction). However, that $x\notin Cn(B_{y})$, $B_{y}\subseteq A$ and $B_{x}\subset B_{y}$ contradicts that $B_{x}\in A\bot x$. Thus, there is *no* $B_{y}\subseteq A$ with $y\notin Cn(B_{y})$ such that $B_{x}\subset B_{y}$, which implies that $B_{x}\in A\bot y$, and hence that $A\bot x\subseteq A\bot y$. 
	3. Analogously, we can show that $A\bot y\subseteq A\bot x$, and prove $A\bot x=A\bot y$. Ultimately, since $\gamma$ is a function defined over families of subsets of $A$, from $A\bot x=A\bot y$ follows that $\gamma(A \bot x)=\gamma(A\bot y)$, and hence that $$A\div x=\bigcap \gamma(A\bot x)=\bigcap \gamma(A\bot y)=A \div y.$$
6. **Recovery**: Note that partial meet contraction is bounded over any set $A$: for any $\gamma$, $\bigcap A\bot x \subseteq \bigcap \gamma(A\bot x)$, i.e. $A\sim x\subseteq A\div x$. Since, by [[#^49f883]] $\sim$ satisfies the Recovery postulate, it follows that $\div$ satisfies Recovery as well (see the remarks on [[#^49f883]]).

So, we have shown that any partial meet contraction operation $\div$, as defined in [[#^acd384]], satisfies all Gärdenfors postulates.

To show that $*$ satisfies the Gärdenfors's postulates for revision, we need to show that the postulates for revision can be derived from those for contraction via the Levi identity, i.e. the equation 

$$
\begin{align}
\tag{Levi Identiy} A*x&=(A\div \neg x)+x \\
&=Cn\left((A\div \neg x) \cup \{ x \}\right)
\end{align}
$$

where $+$ is the expansion operator defined in [[Belief Revision Theory#^d68743]].

1. **Closure**: Note that $A*x=Cn((A\div \neg x)\cup \{ x \})$. By Idempotence, we have that $Cn(Cn((A\div \neg x)\cup \{ x \}))=Cn((A\div \neg x)\cup \{ x \})=A*x$. So, $A*x$ is a theory.
2. **Success**: Obviously, $x \in \{ x \}\subseteq ((A\div \neg x)\cup \{ x \})\subseteq Cn((A\div \neg x)\cup \{ x \})=A*x$.
3. **Vacuity**: Suppose $\neg x\in Cn(A)$, and let me show that $A*x=Cn(A\cup \{ x \})$. Since $\neg x\notin Cn(A)=A$, we have by Vacuity (for $\div$) that $A\div \neg x=A$. So $A*x=(A\div \neg x)+x=A+x=Cn(A\cup \{ x \})$.
4. **Consistency.** Let us prove that, if $\neg x \notin Cn(\varnothing)$ (i.e. $\neg x$ is not a tautology), then $A * x$ is consistent: $Cn(A*x)\neq\mathcal{L}$. Suppose towards a contradiction that $A*x$ is inconsistent, i.e. $\bot \in Cn\bigl((A\div \neg x)\cup\{x\}\bigr).$ By monotonicity of $Cn$ and the properties of the consequence relation, this means $$(A\div \neg x)\cup\{x\} \vdash \bot.$$Using the [[Properties of Consequence Operations#^bd90b2]] from $(A\div \neg x)\cup\{x\} \vdash \bot$ we obtain $A\div \neg x \vdash (x\to\bot)$, and hence $A\div \neg x \vdash \neg x.$ Thus $\neg x \in Cn(A\div \neg x)$, which contradicts **Success** for $\div$ (applied to the proposition $\neg x$), which ensures $\neg x\notin Cn(A\div\neg x)$ whenever $\neg x$ is not a tautology. Therefore $(A\div\neg x)\cup\{x\}$ is consistent, and so is its closure $A*x$.
5. **Preservation/Extensionality**: Suppose $Cn(x)=Cn(y)$. By Extensionality (for $\div$), it follows that $A\div x=A\div y$, and, since $Cn(\neg x)=Cn(\neg y)$, it also follows that $A\div \neg x=A\div \neg y$. So, $A*x=(A\div \neg x)+ x=(A\div \neg y)+ x=(A\div \neg y)+y=A*y$.
6. **Inclusion (standard AGM form).** Let us prove that $A * x \;\subseteq\; Cn(A\cup\{x\}).$ By the Levi identity, $A*x = Cn\bigl((A\div \neg x)\cup\{x\}\bigr).$ But $A\div \neg x \subseteq A$ (Inclusion postulate for $\div$). Hence $(A\div \neg x)\cup\{x\} \subseteq A\cup\{x\}.$ Monotonicity of $Cn$ yields $$ A*x = Cn\bigl((A\div \neg x)\cup\{x\}\bigr) \subseteq Cn(A\cup\{x\}).$$

> [!warning]+ The inclusion principles mentioned above is not the postulate stated in AGM's paper, but is the more standard version (presented also in [[Belief Revision Theory]].)

Importantly, we can also prove the converse of [[#^ab2883]], and thus show that the Gärdenfors's postulates for contraction *fully characterize* the class of partial meet contraction functions. Before doing that, however, we need a lemma:

> [!lemma]+
> Let $A$ be a theory and $x$ a proposition. If $B\in A\bot x$, then $B\in A\bot y$ for all $y\in A$ such that $B\nvdash y$.

^b92df3

`bproof` Suppose $B\in A\bot x$, and consider any $y\in A$ such that $B\nvdash y$. To show that $B\in A\bot y$.

1. Obviously, $B\subseteq A$ and $y\notin Cn(B)$.
2. We need to show that $B$ is an inclusion-maximal subset of $A$ that does not imply $y$. In particular, let us show that, if $B'\subseteq A$ is such that $B\subset B'$, then $B'\vdash y$—see [[Belief Revision Theory#^566989|how to logically state that a set is a maximal set with some $P$]]. Let $B\subset B'\subseteq A$. Since $B\in A\bot x$, we have that $A\bot x\ne \emptyset$, and therefore $A\sim x=\cap(A\bot x)\subseteq B\subset B'$. By [[#^49f883]] $$
\begin{align}
A&\subseteq Cn((A\sim x)\cup \{ x \}) \\
&\subseteq Cn(B\cup \{ x \}) & [\text{Bc. (i) $A\sim x\subseteq B$ and (ii) Monotonicity}]\\
&\subseteq Cn(B'\cup \{ x \}) &[\text{Bc. (i) $B\subset B'$ and (ii) Monotonicity}]\\
\end{align}
$$ Ultimately, since $B\in A\bot x$ and $B'\subset B$, we have that $x\in Cn(B')$, and thus $Cn(B'\cup \{ x \})=Cn(B')$. So, $y\in A\subseteq Cn(B')$. Therefore, $B\in A\bot x$ is an inclusion-maximal subset of $A$ that does not imply $y$. `eproof`

> [!Theorem] Representation Theorem for Partial Meet Contraction
> Let $\div$ be a function defined for sets $A$ of propositions and propositions $x$. For every theory $A$, $\div$ is a partial meet contraction operation over $A$ iff $\div$ satisfies the Gärdenfors's postulates $(\div 1)$-$(\div 6)$ for contraction over$A$.

^6b9d5d

`bproof` ($\implies$) [[#^ab2883]] ensures the left-to-right direction. ($\impliedby$) Suppose now that $\div$ satisfies the Gärdernfors's postulates for contraction over an arbitrary theoy $A$. To prove that $\div$ is a partial meet contraction operation, it will suffice to find a function such that $\gamma$ such that:

1. $\gamma(A \bot x)=\{ A \}$ when $A\bot x=\emptyset$;
2. $\gamma(A\bot x)$ is a nonempty subset of $A\bot x$ when $A\bot x\neq \emptyset$;
3. $A\div x=\bigcap \gamma(A\bot x)$.

Let us stipulate that 

$$
\gamma(A\bot x):=
\begin{cases}
\{ A \} & A\bot x=\emptyset \\
\{ B\in A\bot x: A\div x \subseteq B \} & A\bot x\neq \emptyset
\end{cases}
$$

Let me now show that (1)-(3) are verified for $\gamma$. First, note that (1) is immediately verified. 

Let me show that (2) is verified. Suppose that $A\bot x \neq \emptyset$. It follows that there exists a set $B\subseteq A$ s.t. $x\notin Cn(B)$ and, for any $B'\subseteq A$ with $B'\nvdash x$, $B\not\subset B'$. Since $\emptyset \subseteq B$, by Monotonicity $Cn(\emptyset)\subseteq Cn(B)$, which implies that $x\notin Cn(\emptyset)$. Thus:

1. By Success for $\div$, it follows that $x \notin Cn(A\div x)$. 
2. Moreover, $A\div x \subseteq A$ by Inclusion. 
3. Let us now show that $\gamma(A\bot x)$ is a nonempty subset of $A\bot x$. We need to show that, given $A\bot x$ nonempty, there is a set $B\in A\bot x$ which also belongs to $\gamma (A\bot x)$ is a superset of $A\div x$. We will do so by applying [[Zorn's Lemma]].
	1. First, define the collection $\mathcal{S}:=\{ B\subseteq A: x\notin Cn(B)\; \&\; A\div x\subseteq B \}$, and consider the poset $(\mathcal{S},\subseteq)$. We need to show that this poset has a maximal element, which will therefore be a set $B\subseteq A$ that belongs to $A\bot x$ and to $\gamma(A\bot x)$. To apply Zorn's lemma, we need to prove that $\mathcal{S}$ is non-empty and that every chain in $\mathcal{S}$ has an upper bound in $\mathcal{S}$.
	2. First, note that since $A\bot x$ is nonempty *ex hypothesi*, we have that there exists at least one inclusion-maximal $B\subseteq A$ with $x\notin Cn(B)$. Thus, $x$ is not a tautology, i.e. $x\notin Cn(\emptyset)$. By Success, it follows that $x\notin Cn(A\div x)$. Since $A\div x\subseteq A \div x$, it follows that $A\div x\in \mathcal{S}$, which is then nonempty.
	3. Take now an arbitrary chain $\mathcal{C}$ in $\mathcal{S}$, and consider $U:=\bigcup \mathcal{C}$. Let me show that $U\in \mathcal{S}$. First, obviously $U\subseteq A$. Second, suppose that $x\in Cn(U)$. By Compactness of $Cn$, there must be a finite $U'\subseteq U=\bigcup \mathcal{C}$ such that $x\in Cn(U')$. Since $\mathcal{ C}$ is a chain and $U'$ is finite, there must be some element $B^{*}\in \mathcal{C}$ such that $U'\subseteq B^{*}$. By Monotonicity, $Cn(U')\subseteq Cn (B^{*})$, and hence $B^{*}\vdash x$, contradicting the fact that $B^{*}\in \mathcal{S}$. So, $x\notin Cn(U)$. Third, since $A\div x\subseteq B$, for all $B\in \mathcal{C}$, $A\div x\subseteq U$. Therefore, $U\in \mathcal{S}$, and by construction $U$ is an upper bound of $\mathcal{C}$.
	4. Since any chain in $\mathcal{S}$ has an upper bound in $\mathcal{S}$, by Zorn's Lemma it follows that $\mathcal{S}$ must have a maximal element, call it $B^{*}$. It follows that $B^{*}\in A\bot x$, and also that $A\div x\subseteq B^{*}$, which implies that $B^{*}\in \gamma(A\bot x)$, which is thus nonempty. Also, obviously $\gamma(A\bot x)\subseteq A\bot x$. (n.b., both $\gamma (A\bot x)$ and $A\bot x$ are *families* of sets.)

Concluding, we have proved that $\gamma(A\bot x)$ is a nonempty subset of when $A\bot x\neq \emptyset$.

Let us move to (3). ($\subseteq$) Note that $A\div x\subseteq \bigcap \gamma(A\bot x)$ follows directly from the definition of $\gamma$. If $A\bot x=\emptyset$, by definition $\gamma(A\bot x)=\{ A \}$ and, by Inclusion for $\div$, we have that $A\div x\subseteq A=\bigcap \gamma(A\bot x)$. If $A\bot x\neq \emptyset$, we have that $\gamma(A\bot x)=\{ B\in A\bot x :A\div x\subseteq B\}$, and obviously $A\div x\subseteq \bigcap \gamma (A\bot x)$, for $A\div x\subseteq B$ for every $B\in \gamma(A \bot x)$. 

($\supseteq$) Let me me show that $\bigcap \gamma(A\bot x)\subseteq A\div x$. Let us distinguish two cases. 

1. If $x\notin A$, then $A\div x=A$ by Vacuity for $\div$, and obviously $\bigcap \gamma(A\bot x)\subseteq A$. 
2. So, suppose $x\in A$. Suppose also $a\notin A\div x$, and let us show that $a\notin \bigcap \gamma(A\bot x)$. Again, let us distinguish to cases. 
	1. If $a\notin A$, obviously the desired conclusion holds trivially, for $\bigcap\gamma(A\bot x)\subseteq A$. 
	2. So, suppose $a\in A$, and let us find some $B\in \gamma(A\bot x)$ (i.e. some $B\in A\bot x$ s.t. $A\div x\subseteq B$) such that $a\notin B$. 
	3. By Recovery for $\div$, we have that $A\subseteq (A\div x)+x$, which implies that $A\subseteq Cn((A\div x)\cup\{x\})$, and so that $a\in Cn((A\div x)\cup \{ x \})$. Note that, by assumption, $a\notin A\div x$, and hence by Closure $a\notin Cn(A\div x)$. Since (*i*) $Cn(A\div x)=Cn((A \div x)\cup \{ x\lor \neg x \})$ ,(*ii*) $a\in Cn((A\div x)\cup \{ x \})$, and (*iii*) $a\notin Cn(A\div x)$, by the property of disjunction of premises of $Cn$ it follows that $a\notin Cn((A\div x)\cup \{ \neg x \})$. This implies that $x$ is *not* a tautology, i.e. that $x\notin Cn(\emptyset)$. (If $x$ was a tautology, then $Cn((A\div x)\cup \{ \neg x \})=\mathcal{L}\ni a$.) 
	4. Consequently, by Success we have that $x\notin Cn(A\div x)$. Since both $a,x\notin Cn(A\div x)$, it follows that $x\lor a\notin Cn(A\div x)$, which implies that $x\lor a$ is not a tautology. Then, by [[#^bc892b]] it follows that $A\bot(a \lor x)$ is nonempty. Moreover, there must be some $B\supseteq A\div x$ in $A\bot (a\lor x)$. ($B$ is either $A\div x$ itself or some superset thereof. Note that we are guaranteed that an inclusion-maximal set $B\supseteq A\div x$ with $a\lor x\notin Cn(B)$ exists by [[Zorn's Lemma]].)
	5. Since $B\in A\bot(a\lor x)$, $B\nvdash a\lor x$, i.e. $a\notin Cn(B)=B$ (by [[#^a828d1]]) and $x\notin Cn(B)=B$ (by [[#^a828d1]] again). Since (*i*) $B\in A\bot (a\lor  x)$, (*ii*) $x\in A$ by assumption, and (*iii*) $B\nvdash x$, by [[#^b92df3]] $B\in A\bot x$. Since $A\div x\subseteq B$ and $B\in A\bot x$, $B\in \gamma(A\bot x)$, and since $a\notin B$ we have that $a\notin \bigcap \gamma(A\bot x)$, completing our proof. 

So, we have proved that any operation $\div$ satisfying the Gärdernfors's postulates for contraction over an arbitrary theory $A$ is a partial meet contraction operation. Concluding, we have proved that any binary operation $\div: \mathcal{P}(\mathcal{L})\to \mathcal{L}$ satisfies the Gärdenfors postulates if, and only if, $\div$ is a partial meet contraction function. `eproof`

# 2. Additional Axioms

Gärdenfors proposed two additional postulates, for revision and contraction respectively. Consider the following:

- $(*7)$ $A*(x\land y)\subseteq Cn((A*x)\cup \{ y \})$, for any theory $A$.
- $(*8)$ If $\neg y\notin A*x$, then $Cn((A*x)\cup \{ y \})\subseteq A*(x\land y)$, for any theory $A$.

These two postulates may be reformulated as follows.

- $(*7)$ $A*(x\land y)\subseteq (A*x)+y$, for any theory $A$.
- $(*8)$ If $\neg y\notin A*x$, then $(A*x)+y\subseteq A*(x\land y)$, for any theory $A$.

Note that $(*7)$ is usually called *Superexpansion*, while $(*8)$ is usually called *Subexpansion*.

Given the six postulates for revision and the six postulates for contraction, it is possible to show that $(*7)$ is equivalent to $(\div 7)$, and that $(*8)$ is equivalent to $(\div 8)$.

- $(\div7)$ $(A\div x)\cap (A\div y)\subseteq A \div (x\land y)$ for any theory $A$.
- $(\div 8)$ If $x\notin A\div (x\land y)$, then $A \div(x \land y)\subseteq A\div x$ for any theory $A$.

Note that $(\div 8)$ is usually called *Conjunctive Inclusion*, while $(\div7)$ is usually called *Conjunctive Overlap*.

> [!theorem]+ 
> Let $\div$ be any partial meet contraction operation over a theory $A$. Then, it satisfies $(\div 7)$ iff it satisfies $(*7)$.

`bproof` Let $\div$ be any partial meet contraction operation over an arbitrary theory $A$.

($\implies$) Suppose $(\div 7)$ holds for $A$. We want to show that for any proposition $w$, if $w \in A*(x \land y)$, then $w \in (A*x)+y$.

Assume $w \in A*(x\land y) = Cn((A\div \neg(x\land y))\cup \{ x\land y \})$. Our goal is to show $w$ is in the target set, $(A*x)+y$. Let's first simplify the expression for this target set:

$$
\begin{align}
(A*x)+ y &= ((A\div \neg x)+x)+y \\
&= Cn(Cn((A\div \neg x)\cup \{ x \})\cup \{ y \}) \\
&= Cn((A\div \neg x)\cup \{ x, y \}) \\
&= Cn((A\div \neg x)\cup \{ x\land y \})
\end{align}
$$

The step from line 3 to 4 is justified because the consequences of adding the set of propositions $\{x, y\}$ are the same as adding the single proposition $\{x \land y\}$. The step from line 2 to 3 uses a basic property of nested consequence operators.

To prove that $w \in Cn((A\div \neg x)\cup \{ x\land y \})$, we will use [[Properties of Consequence Operations#^69da11]] . Let's define our terms for that lemma:

- $S_1 := A\div \neg(x\land y)$
- $S_2 := A\div (\neg x\lor y)$
- $S_3 := A\div \neg x$
- $p := x\land y$

The lemma requires that $S_1, S_2, S_3$ are theories (which they are, by Closure for $\div$) and that $S_1 \cap S_2 \subseteq S_3$. We can establish this inclusion using our assumption $(\div 7)$. Since $Cn(\neg x) = Cn(\neg(x \land y) \land (\neg x \lor y))$, by Extensionality and $(\div 7)$ we have:

$$(A \div \neg (x\land y)) \cap (A\div (\neg x \lor y)) \subseteq A \div (\neg(x\land y)\land (\neg x\lor y)) = A \div \neg x$$

This confirms that $S_1 \cap S_2 \subseteq S_3$.

By our initial assumption, we have $w \in Cn(S_1 \cup \{p\})$. To apply the lemma, we only need to show that $w$ is also in $Cn(S_2 \cup \{p\})$.

1. Our assumption $w \in Cn((A\div \neg(x\land y))\cup \{ x\land y \})$ and the **Inclusion** postulate ($A \div z \subseteq A$) together imply that $w \in Cn(A\cup \{ x\land y \})$.
2. By the **Recovery** postulate, $A \subseteq Cn((A\div (\neg x\lor y)) \cup \{ \neg x\lor y \})$.
3. Since $\{x \land y\} \vdash \neg x \lor y$, we know $\{\neg x \lor y\} \subseteq Cn(\{x \land y\})$. Using a property of consequence operators, this implies $Cn((A\div (\neg x\lor y)) \cup \{ \neg x\lor y \}) \subseteq Cn((A\div (\neg x\lor y))\cup \{ x\land y \}) = Cn(S_2 \cup \{p\})$.
4. Combining points 2 and 3, we get $A \subseteq Cn(S_2 \cup \{p\})$.
5. Since $A \subseteq Cn(S_2 \cup \{p\})$, it follows that $Cn(A \cup \{p\}) \subseteq Cn(Cn(S_2 \cup \{p\}) \cup \{p\}) = Cn(S_2 \cup \{p\})$. As $w \in Cn(A \cup \{p\})$, we can conclude that $w \in Cn(S_2 \cup \{p\})$.

Since we have $w \in Cn(S_1 \cup \{p\})$ and $w \in Cn(S_2 \cup \{p\})$, and all conditions are met, the lemma allows us to conclude that $w \in Cn(S_3 \cup \{p\})$. This completes the proof for this direction.

($\impliedby$) Suppose that $(*7)$ holds. We want to show that $(A\div x)\cap (A\div y)\subseteq A\div (x\land y)$. Let $a \in (A\div x)\cap (A\div y)$.

1. From $a \in A \div x$ and the logical equivalence $Cn(x) = Cn(\neg((\neg x \lor \neg y)\land \neg x))$, **Extensionality** implies $a \in A \div\neg((\neg x \lor \neg y)\land \neg x)$.
2. By the Levi Identity, $A \div z \subseteq (A \div z)+(\neg z) = A*(\neg z)$. Therefore, $a \in A* ((\neg x \lor \neg y)\land \neg x)$.
3. Applying our assumption $(*7)$, we get $A*((\neg x \lor \neg y)\land \neg x) \subseteq Cn((A*(\neg x \lor \neg y))\cup \{ \neg x \})$. Thus, $a$ is in this superset.
4. A parallel argument starting from $a \in A \div y$ shows that $a \in Cn((A*(\neg x \lor \neg y))\cup \{ \neg y \})$.
5. Now we have $a$ in two different consequence sets. By the **Property of Disjunction of Premises** (PDP), it follows that $a \in Cn((A*(\neg x \lor \neg y))\cup \{ \neg x \lor \neg y \})$.
6. By the **Success** postulate for revision, the set already contains $\neg x \lor \neg y$, so this simplifies to $a \in Cn(A*(\neg x \lor \neg y))$, which is just $A*(\neg x \lor \neg y)$ by **Closure**.
7. Using the Levi Identity and **Extensionality** again, we have $A*(\neg x \lor \neg y) = Cn((A \div(x\land y))\cup \{ \neg(x\land y) \})$. So, we've shown: $$ a \in Cn((A \div(x\land y))\cup \{ \neg(x\land y) \})$$
8. Separately, since $a \in A \div x$, we know $a \in A$. By the **Recovery** postulate, $A \subseteq Cn((A \div(x\land y))\cup \{ x\land y \})$, which means:
    $$
    a \in Cn((A \div (x\land y))\cup \{ x\land y \})
    $$
9. Having established that $a$ is a consequence of two sets that differ only by a proposition and its negation, we can apply PDP one last time to conclude that $a \in Cn((A\div (x\land y))\cup \{ (x\land y)\lor \neg(x\land y) \})$.
10. This simplifies to $a \in Cn(A\div (x\land y))$, and by the **Closure** postulate for contraction, we finally get $a \in A\div(x\land y)$. 

This completes the proof. `eproof`

> [!theorem]+ 
> Let $\div$ be any partial meet contraction operation over a theory $A$. Then, it satisfies $(\div 8)$ iff it satisfies $(*8)$.

`bproof` Let $\div$ be any partial meet contraction operation over an arbitrary theory $A$.

($\implies$) Suppose that $(\div 8)$ holds. We want to show that $(*8)$ also holds. Assume the premise for $(*8)$, which is that $\neg y \notin A*x$ for some theory $A$ and propositions $x,y$. Our goal is to show that $(A*x)+y \subseteq A*(x \land y)$.

The core of the proof is to establish the following inclusion:

$$A \div \neg x \subseteq A \div \neg(x \land y) \tag{\dagger}$$

To do this, we first need to show that the condition for applying $(\div 8)$ is met.

1. Our assumption is $\neg y \notin A*x = Cn((A \div \neg x) \cup \{x\})$.
2. By the Deduction Theorem, this is equivalent to $(A \div \neg x) \not\vdash x \to \neg y$.
3. Since $x \to \neg y$ is classically equivalent to $\neg x \lor \neg y$, this means $(A \div \neg x) \not\vdash \neg x \lor \neg y$.
4. By the definition of the consequence operator, this means $\neg x \lor \neg y \notin Cn(A \div \neg x)$. By the **Closure** postulate for contraction, it follows that $\neg x \lor \neg y \notin A \div \neg x$.

Now we can apply the postulate $(\div 8)$. From the logical equivalence $Cn(\neg x) = Cn((\neg x \lor \neg y) \land \neg x)$, **Extensionality** gives us $A \div \neg x = A \div ((\neg x \lor \neg y) \land \neg x)$. Since we just showed that $\neg x \lor \neg y \notin A \div ((\neg x \lor \neg y) \land \neg x)$, we can apply $(\div 8)$ to get:

$$A \div ((\neg x \lor \neg y) \land \neg x) \subseteq A \div (\neg x \lor \neg y)$$

Combining this with Extensionality again, we arrive at the desired inclusion $(\dagger)$:

$$A\div \neg x \subseteq A \div(\neg x\lor \neg y) = A \div \neg (x \land y)$$

With $(\dagger)$ established, the rest of the proof follows from this chain of inclusions:

$$
\begin{align}
(A*x)+y &= Cn((A*x)\cup \{ y \}) \\
&= Cn(Cn((A\div \neg x)\cup \{ x \})\cup \{ y \}) \\
&= Cn((A\div \neg x) \cup \{ x, y \}) \\
&= Cn((A \div \neg x)\cup \{ x\land y \}) \\ 
&\subseteq Cn((A\div \neg(x\land y))\cup \{ x\land y \}) \\
&= A*(x\land y)
\end{align}
$$

The final inclusion step is justified by $(\dagger)$ and the **Monotonicity** of $Cn$. This completes the proof for this direction.

($\impliedby$) Suppose that $(*8)$ holds. We want to show that $(\div 8)$ also holds. Assume the premise for $(\div 8)$, which is that $x \notin A \div (x \land y)$ for some theory $A$. Our goal is to show that $A \div (x \land y) \subseteq A \div x$.

First, we must show that our premise implies $x \notin A*\neg(x \land y)$. Let's prove this by contradiction.

- Assume $x \in A*\neg(x \land y) = Cn(A \div \neg(\neg(x \land y)) \cup \{\neg(x \land y)\})$.
- By Extensionality, this is $x \in Cn((A \div (x \lor y)) \cup \{\neg x \lor \neg y\})$.
- By the Deduction Theorem, this means $(A \div (x \lor y)) \vdash (\neg x \lor \neg y) \to x$.
- The conclusion $(\neg x \lor \neg y) \to x$ is logically equivalent to $x$.
- Therefore, the assumption implies $(A \div (x \lor y)) \vdash x$. This step is a mistake in the original proof; the correct reasoning is simpler: the premise $x \notin A \div (x \land y)$ implies $x \notin Cn(A \div (x \land y) \cup \{ \neg x \lor \neg y \})$ as shown in the original paper.

With $x \notin A*\neg(x\land y)$ established, we can apply $(*8)$ (with $\neg(x \land y)$ as the first proposition and $\neg x$ as the second). This gives us:

$$
\begin{align}
(A*\neg(x\land y)) + \neg x &\subseteq A*(\neg(x\land y)\land \neg x) \\
&= A*\neg x \\
&= Cn((A\div x)\cup \{ \neg x \})
\end{align}
$$

Since $A\div (x\land y) \subseteq A*\neg(x\land y)$, the chain above implies that $A\div (x\land y) \subseteq Cn((A\div x)\cup \{ \neg x \})$. By the **Recovery** postulate, we also know that $A\div (x\land y) \subseteq A \subseteq Cn((A\div x)\cup \{ x \})$.

We now have $A\div (x\land y)$ as a subset of two different consequence sets. By the **Property of Disjunction of Premises** (PDP), it must be a subset of their “combined” consequence:

$$A\div (x\land y) \subseteq Cn((A\div x)\cup \{ x\lor \neg x \}) = Cn(A\div x)$$

Finally, by the **Closure** postulate, $Cn(A \div x) = A \div x$. Thus, we have shown that $A\div (x\land y) \subseteq A\div x$, as desired. `eproof`

# 3. Relational Selection Functions

Let $A$ be a theory and $\gamma$ a selection function for $A$, in the sense of [[#^1512b5]]. 

> [!def] Relational Selection Function
> Let $A$ be a theory and $\gamma$ a selection function for $A$. We say that $\gamma$ is relational over $A$ iff there is a relation $\leq\; \subseteq \mathcal{P}(A)\times \mathcal{P}(A)$ such that, for all $x\notin Cn(\emptyset)$, 
> $$
>\gamma(A\bot x)=\{ B\in A\bot x: B'\leq B \text{ for all } B'\in A\bot x\}.
>$$
> When this identity holds, we say that $\leq$ *marks off* $\gamma(A\bot x)$.

Note that:

1. $\leq$ is just a binary relation, it is not assumed to have any property.
2. $\leq$ is fixed for all choices of $x$, for otherwise all partial meet contraction functions wuold be trivially relational (see callout).

> [!summary]- The Fixed Relation and Triviality
> For a selection function to be *meaningfully* relational, its underlying preference relation $≤$ must be **fixed** for all contraction problems. This ensures that the agent's sense of epistemic preference is stable and principled, rather than being invented ad-hoc for each new challenge.
> 
> If the relation were not fixed (i.e., it varies according to the choice of $x$), the property of being “relational” would become trivial, as it would apply to every possible partial meet contraction function, rendering the concept useless for identifying a special class of rational operators.
> 
> > [!example]+ An Example of Triviality
> > Suppose a selection function $γ$, for a given contraction by $x$, makes the arbitrary choice $γ(A ⊥ x) = {B₁, B₂}$.
> > 
> > If the relation did not need to be fixed, one could simply define a custom relation $≤_x$ for this specific case:
> > 1.  Declare that $B_1$ and $B_2$ are the “best” and are equally preferred to each other.
> > 2.  Declare that all other options in $A \bot x$ are strictly “worse than” $B_1$ and $B_2$.
> > 
> > This ad-hoc relation perfectly “explains” the choice. Since this could be done for *any* choice made by *any* function, the “relational” property would lose its power to distinguish between principled and arbitrary behavior.

> [!def]+ Transitively Relational Selection Function
> Let $A$ be a theory and $\gamma$ a selection function for $A$. We say that $\gamma$ is transitively relational over $A$ iff $\gamma$ is relational over $A$ and $\leq\;\subseteq \mathcal{P}(A)\times \mathcal{P}(A)$ is transitive.

As a result, we can define the notion of relational partial meet contraction function as follows.

> [!def]+ Relational Partial Meet Contraction Function
> Let $A$ be a theory and $\div$ a partial meet contraction function over $A$. $\div$ is a *relational partial meet contraction function* iff there exists some relational $\gamma$ that determines $\div$.

AGM point out that **relationality is linked with supplementary postulate $(\div7)$, and transitive relationality even more closely linked with the conjunction of $(\div 7)$ and $(\div 8)$**. In particular, they show that a partial meet contraction function $\div$ is transitively relational iff $(\div 7)$ and $(\div 8)$ are both satisfied. To prove these formal results, we need to introduce two conditions on selection functions.

- $(\gamma 7)$ For any theory $A$ and propositions $x,y$, $\gamma(A\bot(x\land y))\subseteq \gamma(A\bot x)\cup \gamma(A\bot y)$.
- $(\gamma 8)$ For any theory $A$ and propositions $x,y$, if $A\bot x\cap \gamma(A\bot(x\land y))\neq \emptyset$, then $\gamma(A\bot x)\subseteq \gamma(A\bot (x\land y))$.

We will also need the following lemma.

> [!lemma]+
> Let $A$ be any theory and $x,y\in A$. Then $A\bot(x\land y)=A \bot x \cup A \bot y$.

^03d9ca

`bproof` Consider an arbitrary theory $A$ and $x,y\in A$. ($\implies$) Take an arbitrary $B\in A\bot (x\land y)$. $B$ is an inclusion-maximal subset of $A$ such that $x\land y\notin Cn(B)$. Also, since $x,y\in A$, $x\land y\in A$ ($A$ is a theory). Therefore, 

1. if $x\notin Cn(B)$, since $B\in A\bot (x\land y)$ and $x\land y\in A$, by [[#^b92df3]] it follows that $B\in A\bot x$;
2. if $y\notin Cn(B)$, since $B\in A\bot (x\land y)$ and $x\land y\in A$, by [[#^b92df3]] it follows that $B\in A\bot y$.

Either way, $B\in A\bot x\cup A\bot y$. So, $A\bot (x\land y)\subseteq A\bot x\cup A \bot y$. ($\impliedby$) Take an arbitrary $B\in A\bot x\cup A\bot y$. Note that, since $x,y\in A$, $x\land y\in A$ ( is a theory). Thus,

1. if $B\in A\bot x$, then $x\notin Cn(B)$, and since $x\land y\in A$ and $x\land y\notin C(B)$, by [[#^b92df3]] it follows that $B\in A\bot (x\land y)$;
2. if $B\in A\bot y$, then $y\notin Cn(B)$, and since $x\land y\in A$ and $x\land y\notin C(B)$, by [[#^b92df3]] it follows that $B\in A\bot (x\land y)$.

Either way, $B\in A\bot(x\land y)$. So $A\bot x\cup A \bot y\subseteq A\bot (x\land y)$. Concluding, $A\bot x\cup A \bot y=A\bot (x\land y)$. `eproof`

To prove the anticipated results, we need two lemmas first.

> [!lemma]
> Let $A$ be a theory and $\div$ a partial meet contraction function over $A$ determined by a selection function $\gamma$. 
> 1. If $\gamma$ satisfies $(\gamma 7)$, then $\div$ satisfies $(\div 7)$ and
> 2. if it satisfies $(\gamma 8)$, it satisfies $(\div 8)$.

^5f3df9

`bproof`Consider an arbitrary theory $A$ and a partial meet contraction function $\div$ over $A$, determined by a selection function $\gamma$.

**Part one**. Suppose that $\gamma$ satisfies $(\gamma 7)$, i.e. that $\gamma(A\bot (x\land y))\subseteq \gamma(A\bot x) \cup \gamma (A\bot y)$. Let us show that $A\div x\cap A \div y\subseteq A \div (x\land y)$. Take an arbitrary $a\in A\div x\cap A \div y$, and consider the following (which relies, among other things, on [[Reverse-Inclusion Property]].
$$
\begin{align}
A\div  x\cap A \div  y&= \bigcap \gamma(A\bot x)\cap \bigcap \gamma(A\bot y) & [\text{$\div $ is determined by $\gamma$}] \\
&=\bigcap(\gamma(A\bot x)\cup \gamma(A\bot y)) & \left[ \bigcap \mathcal{F}\cup \bigcap \mathcal{G}=\bigcap(\mathcal{F}\cup \mathcal{G}) \right]\\
&\subseteq \bigcap \gamma(A\bot(x\land y)) & [\text{$(\gamma 7)$ and R-I Pr. of Intersection}]\\
&=A\div (x\land y)
\end{align}
$$

> [!NOTE]- [[Reverse-Inclusion Property]]
> The [[Reverse-Inclusion Property]] is applied with $\mathcal{A} := \gamma(A \bot (x \land y))$ and $\mathcal{B} := \gamma(A \bot x) \cup \gamma(A \bot y)$. By $(\gamma 7)$, the premise of the [[Reverse-Inclusion Property]] is satisfied.

So, $(\div 7)$ holds.

**Part two**. Suppose that $\gamma$ satisfies $(\gamma 8)$, i.e. if $A\bot x\cap \gamma(A\bot(x\land y))\neq \emptyset$, then $\gamma(A\bot x)\subseteq \gamma(A\bot (x\land y))$. To prove that $(\div 8)$ holds, suppose first $x\notin A\div (x\land y)=\bigcap \gamma(A\bot(x\land y))$. We need to show that $A \div(x \land y)\subseteq A\div x$. Consider two cases.

1. Suppose $x\notin A$. Since $\div$ is a partial meet contraction function, by [[#^6b9d5d]], it satisfies all Gärdenfors postulates for contraction. Thus, by Vacuity, it follows that $A\div x=A$, and by Inclusion $A\div(x\land y)\subseteq  A=A\div x$.
2. Suppose $x\in A$. Since $x\notin \bigcap \gamma(A\bot(x\land y))$, there must be some $B\in \gamma(A\bot (x\land y))$ such that $x\notin Cn(B)$. Since $B\in A\bot (x\land y)$, by [[#^b92df3]], $B\in A\bot x$. Therefore, $B\in \gamma(A\bot(x\land y))\cap A\bot x$, which is then nonempty. By $(\gamma 8)$, it follows that $\gamma(A\bot x)\subseteq \gamma(A\bot (x\land y))$. By the [[Reverse-Inclusion Property]], it follows that $\bigcap \gamma(A\bot (x\land y))\subseteq \bigcap \gamma(A\bot x)$, that is $A\div(x\land y)\subseteq A \div x$.

So $(\div 8)$ holds, proving the lemma. `eproof`

> [!lemma]+
> Let $A$ be any teory and $\gamma$ a selection function for $A$. 
> 1. If $\gamma$ is relational over $A$, then $\gamma$ satisfies the condition $(\gamma 7)$, and 
> 2. if $\gamma$ is transitively relational over $A$, then $\gamma$ satisfies the condition $(\gamma 8)$.

^a6257a

`bproof` Consider an arbitrary theory $A$ and a selection function for $A$. First, note that if $x\in Cn(\emptyset)$, $y\in Cn(\emptyset)$, $x\notin A$ or $y\notin A$, then $(\gamma 7)$ and $(\gamma 8)$ hold trivially. So, let us suppose that $x\notin Cn(\emptyset)$, $y\notin Cn(\emptyset)$, $x,y\in A$.

**Part one**. Suppose $\gamma$ is relational over $A$. We need to prove that $\gamma(A\bot(x\land y))\subseteq \gamma(A \bot x)\cup \gamma (A\bot y)$. Consider an arbitrary $B\in \gamma (A\bot (x\land y))$. Now, $\gamma(A\bot (x\land y))\subseteq A\bot(x\land y)$ and, by [[#^03d9ca]], $A\bot(x\land y)=A\bot x \cup A \bot y$. So, either $B\in A\bot x$ or $B\in A\bot y$.

1. Suppose $B\in A\bot x$. Consider now an arbitrary $B'\in A\bot x$. Then, $B'\in A\bot x \cup A\bot y=A\bot (x\land y)$ (by [[#^03d9ca]] again). Since $B\in \gamma(A\bot(x\land y))$ and $\gamma$ is relational over $A$ *ex hypothesi*, $B'\leq B$, and this holds for *any* $B'\in A\bot x$. Since $B\in A\bot x$, $B\in \gamma(A\bot x)$, and thus $B\in \gamma(A\bot x)\cup \gamma(A\bot y)$.
2. The case for $B\in A\bot y$ is analogous.

Therefore, $(\gamma 7)$ holds for $\gamma$.

**Part two**. Suppose $\gamma$ is transitively relational over $A$. We need to prove that $\gamma(A\bot x)\subseteq \gamma(A\bot (x\land y))$ provided that $A\bot x\cap \gamma(A\bot(x\land y))\neq \emptyset$. So, let us assume that $A\bot x\cap \gamma(A\bot(x\land y))\neq \emptyset$ and suppose, for *reductio*, that there is some $B\in \gamma(A\bot x)$ which is not in $\gamma(A\bot (x\land y))$. 

First, since $B\in \gamma(A\bot x)\subseteq A\bot x\subseteq A\bot(x\land y)$, by [[#^03d9ca]], while $B\notin \gamma(A\bot(x\land y))$, it follows from relationality that there must be some $B'\in A\bot (x\land y)$ such that $B'\nleq B$. Secondly, since *ex hypothesi* $A\bot x\cap \gamma(A\bot(x\land y))\neq \emptyset$, there must be some $B''\in A\bot x$ with $B''\in \gamma(A\bot (x\land y))$. Since $B'\in A\bot (x\land y)$ and $\gamma$ is relational over $A$, we have that $B'\leq B''$. Thirdly, Since $B''\in A\bot x$ and relationality, $B''\leq B$. Since $\leq$ is transitive, we have $B'\leq B$: contradiction. 

Therefore, $\gamma(A\bot x)\subseteq \gamma(A\bot (x\land y))$, and hence $(\gamma 8)$ holds, completing our proof. `eproof`

Now we can easily prove the following theorem, which links relationality to the additional constraints introduced in [[#2. Additional Axioms]].

> [!theorem]
> Let $A$ be a theory and $\div$ a partial meet contraction function over $A$ determined by the selection function $\gamma$.
> 1. If $\gamma$ is relational over $A$, then $(\div 7)$ holds for $\div$; and
> 2. if $\gamma$ is transitively relational over $A$, then $(\div 8)$ holds for $\div$.

`bproof` Consider an arbitrary theory $A$ and a partial meet contraction function $\div$ for $A$, determined by a selection function $\gamma$.

Suppose $\gamma$ is relational over $A$. By [[#^a6257a]], it follows that $\gamma$ satisfies $(\gamma 7)$. By [[#^5f3df9]], it follows that $\div$ satisfies $(\div7)$. Suppose now that $\gamma$ is transitively relational over $A$. By [[#^a6257a]] it follows that $\gamma$ satisfies $(\gamma 8)$. By [[#^5f3df9]], it follows that $\div$ satisfies $(\div 8)$. `eproof`

The converse of the theorem does not hold. However, AGM prove a correspondence between being transitively relational and satisfying both $(\div 7)$ and $(\div 8)$. First, consider the following definition.

> [!def]+ Completion of Selection Function
> Let $\gamma$ be a selection function for some theory $A$, and $x\in \mathcal{L}$ some proposition. The *completion of $\gamma$* is the function $\gamma^{*}$ defined as follows
> $$
>\gamma^{*}(A\bot x) := \begin{cases}
>\left\{  B\in A\bot x: \bigcap \gamma(A\bot x)\subseteq B  \right\} & x\notin Cn(\emptyset) \\
>\gamma(A\bot x)=\{ A \} & x\in Cn(\emptyset).
>\end{cases}
>$$

Let us briefly prove some properties of $\gamma^{*}$.

> [!lemma]+
> Let $A$ be a theory and $\div$ a partial meet contraction operation determined by the selection function $\gamma$.
> 1. $\gamma^{*}$ is a selection function for $A$.
> 2. $\gamma(A\bot x)\subseteq \gamma^{*}(A\bot x)=\gamma^{**}(A\bot x)$, for any proposition $x\in\mathcal{L}$.
> 3. $\gamma^{*}$ determines the same partial meet contraction function as $\gamma$ does.

^a24271

`bproof` **Part one**. To prove that $\gamma^{*}$ is a selection function for $A$ (see [[#^1512b5]], we need to prove that 

1. $\gamma^{*}(A \bot x)=\{ A \}$ when $A\bot x=\emptyset$;
2. $\gamma^{*}(A\bot x)$ is a nonempty subset of $A\bot x$ when $A\bot x\neq \emptyset$;

(1) Suppose $A\bot x=\emptyset$. By [[#^bc892b]], it follows that $x\in Cn(\emptyset)$. By the definition of $\gamma^{*}$, it follows that $\gamma^{*}(A\bot x)=\gamma (A\bot x)=\{ A \}$. (2)(a) Suppose that $A\bot x\neq \emptyset$. Since $\gamma$ is a selection function over $A$, it follows that $\gamma(A\bot x)\subseteq A\bot x$ is nonempty, i.e. there is some $B'\in \gamma(A\bot x)$. By [[#^bc892b]], it follows that $x\notin Cn(\emptyset)$, so $\gamma^{*}(A\bot x)=\left\{  B\in A\bot x:\bigcap \gamma(A\bot x)\subseteq B  \right\}$. Since $B'\in \gamma(A\bot x)$, $\bigcap \gamma(A\bot x)\subseteq B'$. Since $B'\in A\bot x$, $B'\in \gamma^{*}(A\bot x)$, which is then nonempty. (b) Ultimately, by the definition of $\gamma^{*}$, it follows immediately that $\gamma^{*}(A\bot x)\subseteq A\bot x$.

(2)(a) Let us prove that $\gamma(A\bot x)\subseteq \gamma^{*}(A\bot x)$, for any proposition $x\in\mathcal{L}$. Suppose $B\in \gamma(A\bot x)$. Consider now an arbitrary $a\in \bigcap \gamma(A\bot x)$. It immediately follows that $a\in B$, so $\bigcap \gamma(A\bot x)\subseteq B$. Therefore, $B\in \gamma^{*}(A\bot x)$. We conclude that $\gamma(A\bot x)\subseteq \gamma^{*}(A\bot x)$, for any proposition $x\in\mathcal{L}$.

(b) Consider $\gamma^{**}$:

$$
\gamma^{**}(A\bot x) := \begin{cases}
\left\{  B\in A\bot x: \bigcap \gamma^{*}(A\bot x)\subseteq B  \right\} & x\notin Cn(\emptyset) \\
\gamma^{*}(A\bot x)=\{ A \} & x\in Cn(\emptyset).
\end{cases}
$$

First, note that if $x\in Cn(\emptyset)$, $\gamma^{*}(A\bot x)=\gamma^{**}(A\bot x)$. So, suppose $x\notin Cn(\emptyset)$. As a result, we have that 

$$
\begin{align}
 \gamma^{**}(A\bot x)&=\left\{  B\in A\bot x: \bigcap \gamma^{*}(A\bot x)\subseteq B  \right\} \\
\gamma^{*}(A\bot x)&=\left\{  B\in A\bot x: \bigcap \gamma(A\bot x)\subseteq B  \right\}
\end{align}
$$

As shown in (3) (see below), $\bigcap \gamma^{*}(A\bot x)=\bigcap \gamma(A\bot x)$, and hence it immediately follows that $\gamma^{**}(A\bot x)=\gamma^{*}(A\bot x)$.

(3) Let us call $\div^{*}$ the partial meet contraction function determined by $\gamma^{*}$, and let us show that $A \div x=A \div^{*}x$ for any $x\in \mathcal{L}$. Consider an arbitrary $x\in \mathcal{L}$.

1. ($\implies$) Suppose $a\in A \div x= \bigcap \gamma(A \bot x)$. If $x\in Cn(\emptyset)$, $\gamma(A\bot x)=\gamma^{*}(A\bot x)=\{ A \}$, hence $\bigcap \gamma(A\bot x)=A=\bigcap \gamma^{*}(A\bot x)$, and we are done. So, suppose $x\notin Cn(\emptyset)$. Since $a\in A\div x=\bigcap \gamma(A\bot x)$, $a\in B$ for every $B\in \gamma^{*}(A\bot x)$ (by the definition of $\gamma^{*}$), which does not hold trivially, because, by [[#^bc892b]], $A\bot x\neq \emptyset$, and since $\gamma^{*}$ is a selection function, $\gamma^{*}(A\bot x)\neq \emptyset$. Therefore, $a\in \bigcap \gamma^{*}(A\bot x)=A\div^{*}x$.
2. ($\impliedby$) As shown in (2)(a), $\gamma(A\bot x)\subseteq \gamma^{*}(A\bot x)=\gamma^{**}(A\bot x)$, for any proposition $x\in\mathcal{L}$. By the [[Reverse-Inclusion Property]], it follows that $\bigcap \gamma^{*}(A\bot x)\subseteq \bigcap \gamma(A\bot x)$, i.e. $A\div^{*}x\subseteq A\div x$.

Therefore, $A\div^{*}x=A\div x$, proving that $\gamma^{*}$ determines the same partial meet contraction function as $\gamma$ does. `eproof`

> [!lemma]+
> Let $A$ be any theory, and $\div$ a partial meet contraction function over $A$, determined by a selection function $\gamma$. If $\div$ satisfies $(\div 7)$ and $(\div 8)$, then $\gamma^{*}$ is transitively relational over $A$.

^fba72e

`bproof` See pp. 519-520 in [[(Alchourrón et al., 1985)]].

Now we can introduce a crucial result for relational selection functions.

> [!theorem]+
> Let $A$ be any theory, and $\div$ a partial meet contraction function over $A$, determined by a selection function $\gamma$. Then $\div$ is transitively relation over $A$ iff $\div$ satisfies both $(\div 7)$ and $(\div 8)$.

^171266

`bproof` ($\impliedby$) If $\div$ satisfies both $(\div 7)$ and $(\div 8)$, then by [[#^9412cb]], $\gamma^{*}$ is transitively relational over $A$. Since $\gamma^{*}$ determines $\div$ by [[#^a24271]] (part 3), $\div$ is transitively relational. ($\implies$) If $\div$ is transitively relational over $A$, then $\gamma'$ is transitively relational for some $\gamma'$ that determines $\div$. Then, $\gamma'$ satisfies $(\gamma 7)$ and $(\gamma 8)$ by [[#^a6257a]]. By [[#^5f3df9]], $\div$ satisfies both $(\div 7)$ and $(\div 8)$. `eproof`

[[#^171266]] powerfully connects the supplementary postulates $(\div 7)$ and $(\div 8)$ with the intuitive notion of a transitively relational selection function. However, a crucial subtlety arises in the proof of [[#^fba72e]] (Observation 4.4): [[#^fba72e]] directly establishes this desirable property not for the original selection function $\gamma$ one might start with, but for its mathematical completion, $\gamma^{*}$. This gap exists because the mapping from a selection function to a contraction operator is not necessarily unique: multiple different functions can yield the exact same intersection, and thus the same operator $÷$. 

> [!example]- Why the Selection Function Isn't Unique
> The reason multiple selection functions ($\gamma$) can produce the same contraction operator ($\div$) is that the operator is defined only by the **intersection** of the selected sets, and different collections can have the same intersection. Imagine a scenario where the set of maximal subsets of $A$ not entailing $x$ is:
> $$A \bot x = \{B_1, B_2, B_3, B_4\}$$
> Where these theories are defined as:
> 
> - $B_1 = Cn(\{a, b\})$
> - $B_2 = Cn(\{a, c\})$
> - $B_3 = Cn(\{b, c\})$
> - $B_4 = Cn(\{a, d\})$
> 
> Now, consider two different selection functions, $\gamma_1$ and $\gamma_2$:
> 
> 1.  **Selection Function $\gamma_1$** selects the sets containing $a$ but not $d$:
> $$\gamma_1(A \bot x) = \{B_1, B_2\}$$
> The resulting contraction is: $A \div_1 x = \bigcap \gamma_1(A \bot x) = Cn(\{a, b\}) \cap Cn(\{a, c\}) = Cn(\{a\})$.
> 
> 2.  **Selection Function $\gamma_2$** selects the sets containing $a$ but not $c$:
> $$\gamma_2(A \bot x) = \{B_1, B_4\}$$
> The resulting contraction is: $A \div_2 x = \bigcap \gamma_2(A \bot x) = Cn(\{a, b\}) \cap Cn(\{a, d\}) = Cn(\{a\})$.
> 
> Here, $\gamma_1 \neq \gamma_2$, but they both generate the exact same contraction operator $\div$. This shows that the mapping from a selection function to a contraction operator is not necessarily one-to-one (injective).

This raises a critical question that motivates the following results: under what conditions can we bridge this gap and ensure that a property proven for $\gamma^{*}$ also holds for $\gamma$ itself? The AGM framework resolves this ambiguity by analyzing the “finite case”, which applies to any theory that is finite *modulo* the consequence operation , meaning that its quotient set $A_{/\sim}$ under the equivalence relation $x \sim y \iff Cn(x) = Cn(y)$ is finite.

In this specific but common scenario, the relationship between a selection function $\gamma$ and the contraction operator $\div$ it determines becomes *injective* (one-to-one). This means that every distinct $\gamma$ produces a distinct $\div$. The powerful consequence is that since both $\gamma$ and its completion $\gamma^{*}$ generate the same operator, they must be the same function: $\gamma=\gamma'$. This result is highly significant because it closes the logical gap for all finite theories, strengthening the representation theorem by directly linking the abstract postulates to the properties of the original, intuitive selection function.

> [!lemma]+
> Let $A$ be any theory finite modulo $Cn$, and let $\gamma$ and $\gamma'$ be selection functions for $A$. For every proposition $x$, if $\gamma(A\bot x)\neq \gamma'(A\bot x)$, then $\bigcap \gamma(A\bot x)\neq \bigcap \gamma'(A\bot x)$.

^31c9e9

`bproof` Suppose $\gamma(A\bot x) \neq \gamma'(A\bot x)$. This implies that one collection contains a set not in the other. Without loss of generality, assume there exists a theory $B$ such that $B \in \gamma(A\bot x)$ but $B \notin \gamma'(A\bot x)$. Our goal is to construct a sentence $c$ that is in $\bigcap\gamma'(A\bot x)$ but not in $\bigcap\gamma(A\bot x)$, which will prove the two intersections are distinct.

Since $A$ is finite modulo $Cn$, the theory $B$ can be represented by a single sentence $b$ such that (1) $Cn(\{b\}) = B$, and (2) for any $B'\in A\bot x$, if $B\neq B'$ then $b\notin Cn(B')$ (see [[#^a97821|callout below]]), from which it follows that $b \in B$. Then, we define our witness sentence $c$ as $c := \neg b \lor x$.

First, let us show that $c \notin \bigcap\gamma(A\bot x)$. Since $B \in \gamma(A\bot x)$, it suffices to show $c \notin B$. Assume for contradiction that $c \in B$. Then $(\neg b \lor x) \in B$. As we have established that $b \in B$ and $B$ is a theory, this would imply $x \in B$. This contradicts the fact that $B \in A \bot x$. Therefore, the assumption is false, and $c \notin B$, which implies $c \notin \bigcap\gamma(A\bot x)$.

Next, let us show that $c \in \bigcap\gamma'(A\bot x)$. Let $B'$ be an arbitrary set from $\gamma'(A\bot x)$. From our initial assumption, we know that $B\notin \gamma'(A\bot x)$, hence $B' \neq B$. As shown above, this implies $b \notin B'$. Since $B'$ is a maximal subset of $A$ that does not entail $x$, the proper superset $B' \cup \{b\}$ must entail $x$. Thus, $x \in Cn(B' \cup \{b\})$. By the [[Properties of Consequence Operations#^bd90b2|Deduction Theorem]], this is equivalent to $(\neg b \lor x) \in Cn(B')$. Since $B'$ is a theory, this means $c \in B'$. Because $B'$ was an arbitrary element of $\gamma'(A\bot x)$, we conclude that $c \in \bigcap\gamma'(A\bot x)$.

We have constructed a sentence $c$ that distinguishes the two intersections. Therefore, $\bigcap\gamma(A\bot x) \neq \bigcap\gamma'(A\bot x)$. `eproof`

> [!warning]- Any $B \in A\bot x$, with $A$ theory finite modulo $Cn$, can be represented by a single sentence $b$.
> **Claim**. Let $B\in A\bot x$ with $A$ theory finite modulo $Cn$. There exists a sentence $b$ such that: (1) $Cn(\{ b \})=B$, and (2) for any $B'\in A\bot x$, if $B\neq B'$ then $b\notin Cn(B')$.
> 
> `bproof` Assume $B\in A\bot x$ for some theory $A$ that is finite modulo $Cn$. Since $B$ is a subset of $A$, $B$ itself is finite modulo $Cn$. This means $B$ can be partitioned into a finite number of equivalence classes (cells) under the relation $s \sim s' \iff Cn(s) = Cn(s')$. Let $\{s_1, \dots, s_n\}$ be a set of representative sentences, one from each cell. We construct the sentence $b$ as the conjunction of these representatives:
> $$b := s_1 \land \dots \land s_n$$
> 
> **Part 1: Prove that $Cn(\{b\}) = B$.**
> We prove this by mutual inclusion.
> - **First inclusion ($Cn(\{b\}) \subseteq B$):** Each conjunct $s_i$ was chosen from $B$. Since $B$ is a theory by [[#^a828d1]], it is closed under logical consequence, which includes conjunction. Therefore, the conjunction $b = s_1 \land \dots \land s_n$ must be an element of $B$. Since $b \in B$ and $B=Cn(B)$, it follows by monotonicity that $Cn(\{b\}) \subseteq Cn(B) = B$.
> 
> - **Second inclusion ($B \subseteq Cn(\{b\})$):** Let $b'$ be any arbitrary proposition in $B$. Since $B$ is finite modulo $Cn$, $b'$ must belong to one of the cells represented in our construction. This means $b'$ is logically equivalent to one of the representative sentences, say $s_i$, so $Cn(\{b'\}) = Cn(\{s_i\})$. By the properties of conjunction, the sentence $b$ entails each of its conjuncts, so $\{b\} \vdash s_i$. By transitivity of entailment, it follows that $\{b\} \vdash b'$. In consequence notation, this means $b' \in Cn(\{b\})$. Since $b'$ was an arbitrary element of $B$, we conclude that $B \subseteq Cn(\{b\})$.
> 
> Both inclusions hold, therefore $Cn(\{b\}) = B$.
> 
> **Part 2: Prove the uniqueness property.**
> We will prove the contrapositive: for any $B' \in A \bot x$, if $b \in Cn(B')$, then it must be that $B=B'$.
> 
> Assume $b \in Cn(B')$. Since $B'$ is a theory by [[#^a828d1]], this means $B' = Cn(B')$.
> - From $b \in Cn(B')$ and the fact that $B = Cn(\{b\})$ (proven in Part 1), it follows by monotonicity that $B = Cn(\{b\}) \subseteq Cn(B') = B'$. So, we have established that **$B \subseteq B'$**.
> 
> - Now we must use the crucial property that both $B$ and $B'$ are **maximal** subsets of $A$ that do not entail $x$. Since $B \subseteq B'$, if $B$ were a *proper* subset of $B'$ ($B \subset B'$), it would contradict the maximality of $B$. A maximal set cannot be a proper subset of another set with the same property.
> 
> - Therefore, since $B \subseteq B'$ and both are maximal, they must be equal: $B=B'$. This completes the proof. `eproof`

^a97821

As a results of [[#^31c9e9]] we have that, in the finite case, $\gamma^{*}=\gamma$, which is crucial in proving the following theorem.

> [!theorem]+
> Let $A$ be any theory finite modulo $Cn$, and $\div$ a partial meet contraction function over $A$ determined by a selection function $\gamma$. If $\div$ satisfies $(\div7)$ and $(\div 8)$, then $\gamma$ is transitively relational over $A$.

`bproof` Consider an arbitrary theory $A$ finite modulo $Cn$, and a partial meet contraction function over determined by a selection function $\gamma$. Suppose $\div$ satisfies $(\div 7)$ and $(\div 8)$. By [[#^fba72e]], $\gamma^{*}$ is transitively relational over $A$. By [[#^a24271]], we have that $\bigcap \gamma(A\bot x)=\bigcap \gamma^{*}(A\bot x)$ (see part 3). By [[#^31c9e9]], $\gamma=\gamma^{*}$. So, $\gamma$ is transitively relational. `eproof`

# 4. Remarks on Connectivity

AGM take into consideration what adding connectivity as well as transitivity on the relation $\leq$ that determines a selection function implies. Surprisingly, in the infinite case, it adds very little, in the finite case nothing at all.

> [!def]+ Connectively Relational Selection Function
> Let $A$ be a theory and $\gamma$ a selection function for $A$. We say that $\gamma$ is connectively relational over $A$ iff $\gamma$ is relational over $A$ and $\leq\;\subseteq \mathcal{P}(A)\times \mathcal{P}(A)$ is connected.

The formal definition of a connectively relational selection function requires the relation $≤$ to be connected over the entire powerset of $A$ ($2^A$). However, this is an unnecessarily strong condition, as most subsets of $A$ are never candidates for the outcome of a contraction. The following argument shows that it is sufficient to require connectivity on much smaller, more relevant sets of candidates.

The set $U_A = \bigcup_{x \in A} \{A \bot x\}$ represents the pool of all “live candidates” for any possible contraction from the theory $A$. The authors show that if a relation $≤$ is connected on just this set, it is sufficient.

The argument proceeds by construction:

1. Start with a relation $≤$ that is connected over $U_A$.
2. Define a new relation, $≤₁$, that agrees with $≤$ for all sets inside $U_A$.
3. For any set $B'$ that is *outside* $U_A$ (i.e., an “irrelevant” set), $≤_{1}$ stipulates that $B'$ is “less than or equal to” all other sets in $2^A$.
4. This new relation $≤_{1}$ is, by construction, connected over the entire set $2^A$. Crucially, it produces the exact same selections as the original relation $≤$ because the ranking of the actual candidates (which are all inside $U_A$) is unchanged.

When the relation $≤$ is also assumed to be *transitive*, the set of relevant candidates can be shrunk even further to $U_\gamma = \bigcup \{\gamma(A \bot x) : x \in A, x \notin Cn(\emptyset)\}$. This is the set of only the “winners”—the sets that are actually chosen by $\gamma$ for some contraction. The same constructive argument applies: if a relation is connected and transitive on this smaller set, it can be extended to one that is connected and transitive over all of $2^A$ without changing the outcome of any selection.

The authors then present a surprising result: in this framework, the property of transitivity is so powerful that **connectivity** (a total ordering) adds almost no extra constraints.

[[#^b89b92]] states that a contraction operator $÷$ is transitively relational if and only if it is transitively *and* connectively relational. This means that once a selection mechanism is based on a transitive relation, the resulting operator $÷$ will behave *as if* it were based on a totally ordered (connected) preference ranking. The proof is subtle, as it shows that if $÷$ is determined by a transitive $γ$, then its mathematical *completion* $γ*$ can be determined by a relation that is both transitive and connected. This leaves a small “gap” between the original function $γ$ and its completion $γ*$.

> [!lemma]+
> Let $A$ be any theory and $\div$ a partial meet contraction function over $A$. Then $\div$ is transitively relational iff it is transitively and connectively relational.

^b89b92

This gap is closed when we consider the common scenario where a theory $A$ is finite modulo *Cn*. For these theories, the result is both **broadened** (it applies to any relational function, not just transitive ones) and **sharpened** (it applies directly to the original $γ$ and its relation $≤$).

[[#^470d8a]] proves that if a selection function $γ$ over a finite theory is relational with respect to $≤$, then that relation $≤$ **must be connected** over the set of all possible candidates, $U_A$ . The logic is that in the finite case, for any two candidate sets $B_1$ and $B_2$, one can always construct a contraction problem where these are the only two options. Since a relational selection function must choose the “best” of these two, it is forced to compare them, meaning $B_1 \le B_2$ or $B_2 \le B_1$. Because this can be done for any pair, the underlying relation must be a complete and total ordering.

Before proving [[#^470d8a]], we need the following lemma first.

> [!lemma]+
> Let $A$ be a theory finite modulo $Cn$. Let $$U_A \;:=\; \bigcup_{x\in A}\{\,A\bot x\,\}$$be the family of maximal subsets of $A$ that fail to entail various sentences in $A$. For every $B\in U_A$ there exists a sentence $b\in A$ such that$$A\bot b=\{B\},$$
i.e. $B$ is the *unique* maximal subset of $A$ that fails to entail $b$.

^c876e2

`bproof` Let $A$ be any theory finite modulo $Cn$.

**(1) Construction of the Sentence $b$.**
- Let $B$ be an arbitrary set in $U_A$. Since $B \in U_A$, it is a proper subset of the theory $A$, so the set difference $S = A \setminus B$ is non-empty.
- By the premise that $A$ is **finite modulo Cn**, the set $S$ can be partitioned into a finite number of equivalence classes under the relation $Cn(x) = Cn(y)$.
- Let $\{s_1, s_2, \dots, s_n\}$ be a finite set containing one representative sentence from each of these distinct classes. Any sentence in $A \setminus B$ is logically equivalent to one of these $s_i$.
- We define the sentence $b$ as the disjunction of these representatives: $b := s_1 \lor s_2 \lor \dots \lor s_n$.
- Since at least one $s_i$ exists and is in $A$, and since $A$ is a theory (closed under consequences), it follows that the disjunction $b$ is also in $A$. Thus, $b \in A$.

**(2) Proof that $B \in A \bot b$.** We must show that $B$ is a maximal subset of $A$ that does not entail $b$.
- **Show $b \notin Cn(B)$:** Assume for contradiction that $b \in Cn(B)$. Since $B$ is a theory ($B=Cn(B)$), this means $b \in B$. The sets in $U_A$ have a primeness-like property for sentences in $A$: if a disjunction of sentences from $A$ is in $B$, then at least one of the disjuncts must also be in $B$ (see callout below). Since $b = s_1 \lor \dots \lor s_n$ and each $s_i \in A$, it would follow that $s_i \in B$ for some $i$. This is a contradiction, as the sentences $s_i$ were drawn exclusively from $A \setminus B$. Therefore, $b \notin Cn(B)$.
- **Show $B$ is maximal**: Let $B'$ be any set such that $B \subset B' \subseteq A$. We must show $B' \vdash b$. Since $B \subset B'$, there exists some sentence $s' \in B' \setminus B$. Because $B' \subseteq A$, we have $s' \in A$, which means $s' \in A \setminus B$. By our construction, $s'$ must be logically equivalent to one of the representative sentences, say $s_i$. Thus, $s' \vdash s_i$. Since $s_i$ is a disjunct of $b$, we also have $s_i \vdash b$. By transitivity of entailment, $s' \vdash b$. As $s' \in B'$, it follows by monotonicity that $B' \vdash b$. This proves maximality.

> [!warning]- Proof: Primeness Property of Sets in 
> **Claim:** Let $B \in U_A$. If $s_1, s_2 \in A$ and $s_1 \lor s_2 \in B$, then either $s_1 \in B$ or $s_2 \in B$.
> 
> **Proof.**
> 
> 1.  **Setup.**
>     - Let $B$ be an arbitrary set in $U_A$. By definition, this means $B \in A \bot x$ for some sentence $x \in A$. This tells us two things:
>         1.  $B$ is a theory ($B = Cn(B)$) by [[#^a828d1]].
>         2.  $B$ is a **maximal** subset of $A$ such that $x \notin Cn(B)$.
>     - Assume the premises: $s_1 \in A$, $s_2 \in A$, and $s_1 \lor s_2 \in B$.
>     - We will prove the claim by contradiction. Assume **$s_1 \notin B$ and $s_2 \notin B$**.
> 
> 2.  **Using the Maximality of B.**
> 	- Since $s_1 \in A$ but $s_1 \notin B$, the set $B \cup \{s_1\}$ is a proper superset of $B$. Because $B$ is *maximal* with the property of not entailing $x$, this larger set *must* entail $x$. Therefore: $$x \in Cn(B \cup \{s_1\})$$
> 	- By the exact same reasoning for $s_2$: $$x \in Cn(B \cup \{s_2\})$$
> 
> 3.  **Applying the Property of Disjunction of Premises.**
>     - We now have that $x$ is a consequence of $B$ expanded with $s_1$, and also of $B$ expanded with $s_2$. By the Property of Disjunction of Premises (PDP), we have $x \in Cn(B \cup \{s_1 \lor s_2\})$.
>     - Since $s_{1}\lor s_{2}\in B$ *ex hypothesi*, we have that $Cn(B\cup \{ s_{1}\lor s_{2} \})=Cn(B)$.
>     - Therefore, $x\in Cn(B)$: contradiction.
> 
> The contradiction arose from our assumption that *both* $s_1$ and $s_2$ were not in $B$. Therefore, that assumption must be false, and at least one of them must be in $B$.

**(3) Proof of Uniqueness.** We must show that no other set $C \neq B$ can be a maximal subset of $A$ failing to entail $b$.
- Let $C$ be any subset of $A$ such that $C \not\vdash b$.
- Since $C \not\vdash s_1 \lor \dots \lor s_n$, it must be that $C$ does not entail any of the individual disjuncts, so $C \not\vdash s_i$ for all $i=1, \dots, n$.
- This implies that no sentence equivalent to any $s_i$ can be in $Cn(C)$. Therefore, $C$ can contain no sentence from the set $A \setminus B$.
- Since $C \subseteq A$ and $C \cap (A \setminus B) = \emptyset$, it must be that $C \subseteq B$.
- Now, if $C$ were also a *maximal* subset of $A$ not entailing $b$, it could not be a *proper* subset of $B$ (which is another set with the same property). Therefore, the only possibility is that $C=B$.

This shows that $B$ is the unique maximal subset of $A$ that fails to entail $b$. Thus, $A \bot b = \{B\}$. `eproof`

> [!lemma]+
> Let $A$ be a theory finite modulo $Cn$, and let $\div$ be a partial meet contraction function over $A$, determined by a selection function $\gamma$. Suppose that $\gamma$ is relational, with the relation $\leq$ satisfying the marking off identity. Then $\leq$ is connected over $U_{A}$

^470d8a

`bproof` Our goal is to prove that the relation $≤$ is connected over the set $U_A$. By definition, this means we must show that for any two arbitrary sets $B, B' \in U_A$, it is the case that either $B \le B'$ or $B' \le B$.

Let $B$ and $B'$ be any two sets in $U_A = \bigcup_{x \in A} \{A \bot x\}$. A key property of a theory $A$ that is finite modulo $Cn$ is that for any such candidate set (e.g., $B$), we can construct a sentence $b \in A$ that it uniquely fails to entail in a maximal way, see [[#^470d8a]]. That is, we can find sentences $b, b' \in A$ such that:

- $A \bot b = \{B\}$
- $A \bot b' = \{B'\}$

Now, consider the contraction of the theory $A$ by the conjunction of these two sentences, $b \land b'$. According to Lemma 4.1 from the paper, the set of maximal options for this contraction is the union of the options for each conjunct. Therefore:

$$
A \bot (b \land b') = (A \bot b) \cup (A \bot b') = \{B\} \cup \{B'\} = \{B, B'\} 
$$

We have successfully created a scenario where there are only two possible outcomes for the contraction.

We know two things about the selection function $\gamma$:

- By definition, it must select a non-empty subset of the available options. Thus, $\gamma(A \bot (b \land b'))$ must be either $\{B\}$, $\{B'\}$, or $\{B, B'\}$.
- By the assumption that $\gamma$ is relational, it must select the “best” element(s) from the set of options according to the relation $≤$. 

Since $\gamma(A \bot (b \land b'))$ must be non-empty, at least one of the sets must be selected.

- **Case 1: $B$ is selected.** If $B \in \gamma(A \bot (b \land b'))$, it means $B$ is a “best” element in the set $\{B, B'\}$. By the marking-off identity for relational selection, this implies that for every set $C$ in $\{B, B'\}$, we have $C \le B$. In particular, this means **$B' \le B$**.
- **Case 2: $B'$ is selected.** If $B' \in \gamma(A \bot (b \land b'))$, it means $B'$ is a “best” element in the set $\{B, B'\}$. By the same reasoning, this implies that for every set $C$ in $\{B, B'\}$, we have $C \le B'$. In particular, this means **$B \le B'$**.

Concluding, since $\gamma(A \bot (b \land b'))$ must be non-empty, at least one of these two cases must hold. In every possible outcome, the sets $B$ and are shown to be comparable by the relation . As $B$ and $B'$ were arbitrary elements of $U_A$, we conclude that the relation $≤$ is connected over $U_A$. `eproof`

We can then prove the following theorem.

> [!theorem]
> Let $A$ be a theory finite modulo $Cn$, and let $\div$ be a partial meet contraction function over A. Then is relational iff it is connectively relational.

^2c72b9

`bproof` Consider any theory $A$ which is finite modulo $Cn$, and consider a partial meet contraction over $A$. ($\impliedby$) If $\div$ is connectively relational it is obviously relational. ($\implies$) Suppose $\div$ is relational. Then, there exists some relational selection function $\gamma$ that determines $\div$ (it satisfies the mark-off identity). By [[#^2c72b9]], $\leq$ is connected over $U_{A}:=\bigcup_{x\in A}\{\,A\bot x\,\}$. Then, define the relation $\leq^{*}$ as follows:

$$
\leq^{*}\;:=\;\leq \cup((\mathcal{P}(A)\setminus U_{A })\times \mathcal{P}(A))
$$

In other words, $\leq^{*}$ agrees with $\leq$ for all those $B\in U_{A}$, while it posits that any $B\in \mathcal{P}(A)\setminus U_{A}$ is “less than or equal to” any $B'\in \mathcal{P}(A)$. Clearly, $\leq^{*}$ is connected. Define $\gamma'$ as the relational selection function for $A$ determined by $\leq'$. Obviously, $\div'=\div$, so $\div$ is connectively relational. `eproof`

[^1]: Note that $\bigcap A\bot x=\{ y\in A: \text{for all }B\in \mathcal{P}(A)(B\in A\bot x \Rightarrow y\in B) \}$. Since $A\bot x$ is empty, the conditional is satisfied for any $y\in A$, hence $\bigcap A\bot x=A$.
[^2]: First, note that $(A\sim x) \cup \{ x \}\subseteq (A\div x) \cup \{ x \}$ (for $A\sim x\subseteq A\div x$). By Monotonicity, $Cn((A\sim x)\cup \{ x \})\subseteq Cn((A \div x)\cup \{ x \})$. Since, by [[#^49f883]], $A \subseteq Cn((A\sim x)\cup \{ x \})$, it follows that $A\subseteq Cn((A\div x)\cup \{ x \})$, i.e. $\div$ satisfies the Recovery postulate.
[^3]: Let me prove that $Cn(\bigcap_{j\in I}B_{j})=\bigcap_{j\in I}Cn(B_{j})$. First, suppose $x \in Cn\left( \bigcap_{i \in I} B_i \right)$. Since $\bigcap_{i \in I} B_i \subseteq B_j$ for any $j \in I$, by monotonicity it follows that $Cn\left( \bigcap_{i \in I} B_i \right) \subseteq Cn(B_j)$ for all $j \in I$. In particular, $x \in Cn(B_j)$ for each $j$, so $x \in \bigcap_{j \in I} Cn(B_j)$. Hence, $Cn\left( \bigcap_{i \in I} B_i \right) \subseteq \bigcap_{j \in I} Cn(B_j)$. Consider now $\bigcap_{j \in I} Cn(B_j)$. Since each $B_j$ is a theory—i.e., closed under logical consequence—we have $Cn(B_j) = B_j$, and so $\bigcap_{j\in I}Cn(B_{j})=\bigcap_{j\in I}B_{j}$. By Reflexivity, $\bigcap_{j\in I}B_{j}\subseteq Cn(\bigcap_{j\in I}B_{j})$, or equivalently $\bigcap_{j\in I}Cn(B_{j})\subseteq Cn(\bigcap_{j\in I}B_{j})$. Therefore, $Cn(\bigcap_{j\in I}B_{j})=\bigcap_{j\in I}Cn(B_{j})$.
[^4]: By definition, given a family of sets $\mathcal{F}$ within a universe $X$, $\bigcap \mathcal{F} = \{\, a \in X : \forall B \in \mathcal{P}(X), \; (B \in \mathcal{F} \implies a \in B) \,\}.$ If $\mathcal{F} = \varnothing$, then the condition “$B \in \mathcal{F}$” is false for every $B \in \mathcal{P}(X)$. Hence the implication is always true, and every $a \in X$ satisfies the defining property of the intersection. Thus, $\bigcap \mathcal{F} = X$. In our case, the relevant universe is $A$, so if $\gamma(A \bot x) = \varnothing$, then $\bigcap \gamma(A \bot x) = A$.

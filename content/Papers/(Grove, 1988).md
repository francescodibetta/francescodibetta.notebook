---
class: reference
subclass: article
aliases:
  - Two modellings for theory change
authors: Adam Grove
year: 1988
tags:
  - belief_revision
  - counterfactuals
abstract: This article provides a model-theoretic characterization of the AGM belief revision function using systems of spheres, inspired by David Lewis's semantics for counterfactuals. The core contribution is the demonstration of representation theorems, specifically proving that this sphere-based semantics is both sound and complete with respect to the standard AGM postulates for theory change.
status: false
dg-publish: true
---

This paper proposes a model-theoretic characterization of the belief revision ($*$) operation discussed by [[(Alchourrón et al., 1985)|AGM]]. Grove's idea is to give a “spheres semantics” inspired by [[(Lewis, 1973a)]] for $*$, thus enriching the purely syntactic approach by AGM.

Grove's sets the stage without taking a stance on some (trivial) background assumptions, so I will fill in the gaps. 

Let $F$ be the set of well-formed sentences in a Boolean language, and $L\subseteq F$ be the set of “logical theses of some logic”, i.e. let $L$ be the set of propositional tautologies and to be closed under modus ponens. Define:

1. A theory $T\in \mathcal{T}$ is a subset of $F$ that is closed under modus ponens, i.e. $Cn(T)=T$.
2. A set of formulas $S$ is consistent, $Con(S)$, iff $Con(S)\neq F$.
3. The revision function $+:\mathcal{T}\times F \to \mathcal{T}$ satisfies the following axioms: for any $T\in \mathcal{T}$ and $A\in F$,
	- (+1) $T+A=Cn(T+A)$ \[this holds trivially],
	- (+2) $A\in T+A$, 
	- (+3) $T+A=Cn(T \cup \{ A \})$, if $\neg A\notin T$,
	- (+4) $Cn(T+A)\neq F$, if $\neg A\notin L$,
	- (+5) $T+A=T+B$, if $A \leftrightarrow B \in L$,
	- (+7) $T+(A \land B) \subseteq Cn((T+A) \cup \{ B \})$,
	- (+8) $Cn((T+A) \cup \{ B \}) \subseteq T+(A \land B)$, if $\neg B\notin T+A$.

There are two objects that deserve extensive discussion: maximal consistent extensions of $L$, and the function $t$.

# 1. Maximal Consistent Extensions of $L$

Grove does not take the notion of possible world as primitive, but he starts from syntactic objects (sentences) and then constructs other objects (maximal consistent sets of sentences) that are basically equivalent to possible worlds.

The set $M_{L}$ is the set of maximal consistent extensions of $L$, and it consists of sets $m\subseteq F$ such that:

> [!definition] Maximal Consistent Extensions of the Logic $L$
> Let $L\subseteq F$ be a logic, where $F$ is the set of all well-formed formulae. Then, define $M_{L}$ as the set of consistent maximal extensions of the logic $L$, that is
>$$
>m\in M_{L} \iff
>\begin{cases} 1. \ L \subseteq m \\ 2. \  Cn(m)\neq F & (\text{Consistency}) \\ 3. \ \forall n \subseteq F, \text{ if } m \subset n, \text{ then } Cn(n) = F & (\text{Maximality}) \end{cases}
>$$

Note that, for any $m\in M_{L}$, $m$ is a theory.

> [!proposition]+
> For any $m\in M_{L}$, $m$ is a theory.

^9d8d32

`bproof` Consider $m\in M_{L}$ and suppose for reductio that $m \neq Cn(m)$. Since $m\subseteq Cn(m)$ by the Reflexivity of $Cn$, $m\neq Cn(m)$ implies that there is $x\in Cn(m)$ such that $x \notin m$. Set $n:=Cn(m)$. Clearly, we have $n\in \mathcal{T}$ and $m\subset n$. Since $m\in M_{L}$, $m$ must be maximal, and hence $n=Cn(m)= F$, contradicting the consistency of $m$. Therefore, $m=Cn(m)$. `eproof`

The following propositions clarifies why $m$ is a possible world. First, let me establish that $M_{L}$ could have been defined in a different, equivalent way.

> [!proposition]
> Let $m\subseteq F$. 
> $$
>m\in M_{L} \iff 
>\begin{cases}
> 1.\ L\subseteq m \\
> 2.\ Cn(m) \neq F & \text{(Consistency})\\
> 3.\ \text{ For all $A\in F$: either $A\in m$ or $\neg A\in m$.} & (\text{Completeness})  
>\end{cases}
>$$

^03a961

`bproof` ($\implies$) Take arbitrary $m\in M_{L}$ and $A\in F$. Obviously, (1) and (2) hold. So, let me prove that (3) holds as well. We have two cases: either $A\in m$ or $A\notin m$.

1. If $A\in m$ we are done. 
2. Suppose that $A\notin m$. Consider now $n:=Cn(m\cup \{ A \})$. Since $m\subseteq m \cup \{ A \}$, by Monotonicity $Cn(m)\subseteq Cn(m\cup \{ A \})$, and by Reflexivity $m \subseteq Cn(m)\subseteq Cn(m\cup \{ A \})=n$. Since $A\in n$ but $A\notin m$, $m\subset n$. By the maximality of $m$, since $m\subset n$, it must be the case that $n=Cn(m \cup \{ A \})=F$. Therefore, $m\cup \{ A \}$ must be inconsistent, meaning $m\cup \{ A \} \vdash \bot$. By the deduction theorem for classical logic, we have that $m\vdash A\rightarrow \bot$. Since $A\rightarrow \bot$ is classically equivalent to $\neg A$, we have that $m \vdash \neg A$. Since $m$ is a theory (i.e., $m=Cn(m)$), it follows that $\neg A\in m$.

Therefore, either $A\in m$ or $\neg A\in m$. 

($\impliedby$) Suppose that, $L\subseteq m$, $Cn(m)\neq F$, and that for all $A\in F$, either $A\in m$ or $\neg A\in m$. We need to prove that $m$ is a theory and that it is maximal. 

1. Let me first prove that $m$ is a theory. We need to prove that $m=Cn(m)$. ($\subseteq$) Obviously $m\subseteq Cn(m)$. ($\supseteq$) Let us show that, if $A\in Cn(m)$, then $A\in m$. Suppose for reductio that $A\in Cn(m)$ and $A\notin m$. By the completeness of $m$, $\neg A\in m$. Since $m\subseteq Cn(m)$, $\neg A\in Cn(m)$. Since $A,\neg A\in Cn(m)$, $Cn(m)=F$, contradicting the consistency of $m$. Therefore, $A\in m$. Since $A$ is arbitrary, we have $Cn(m)\subseteq m$, proving that $m$ is a theory, i.e. $m=Cn(m)$.
2. Let me now prove that $m$ is maximal. Suppose that and $m \subset n$, namely $m\subseteq n$ and there exists some $A\in n$ such that $A\notin m$. By the completeness of $m$, $\neg A\in m$. Since $m \subset n$, both $A$ and $\neg A$ are in $n$. Hence, $Cn(n)=F$. Therefore, $m$ is maximal.

Therefore, if $m$ has (1)-(3) it must be maximal, and so $m\in M_{L}$. `eproof`

> [!proposition]
> For any $m\in M_{L}$, there exists exactly one possible world $w\in W$ such that $w \models m$.

^804838

`bproof` First, recall that a possible world $w$ is basically a function (a valuation) from the set of propositional variables $\Phi \subseteq F$ that maps each $p_{i} \in \Phi$ to either $0$ (false) or $1$ (true). The satisfaction relation $w \models A$ for any complex formula $A \in F$ is defined recursively from this basis.

Consider now any $m \in M_{L}$.

**Part 1: Existence**. We must first construct a world $w_m$ from $m$ and show that it satisfies $m$.

First, let us construct the world $w_m$. We define a valuation $w_m: \Phi \to \{0, 1\}$ based on the contents of $m$. For any propositional variable $p \in \Phi$:

- If $p \in m$, we define $w_m(p) = 1$. 
- If $p \notin m$, we define $w_m(p) = 0$. Note that, from [[#^03a961]], we know that if $p \notin m$, then $\neg p \in m$. So this definition is complete.

Second, let us show that $w_m \models m$: We must show that this $w_m$ satisfies every formula in $m$. We can prove by induction on the structure of any formula $A \in F$ that $A \in m \iff w_m \models A$.

- **Base Case (Atoms):** For any $p \in \Phi$, $p \in m \iff w_m(p) = 1 \iff w_m \models p$. This holds by our definition of $w_m$.
- **Inductive Step (Negation):** Assume $B \in m \iff w_m \models B$. We show $\neg B \in m \iff w_m \models \neg B$.
	- $w_m \models \neg B \iff w_m \not\models B$ (by definition of $\models$)
	- $\iff B \notin m$ (by inductive hypothesis)
	- $\iff \neg B \in m$ (by [[#^03a961]]).
- **Inductive Step (Conjunction):** Assume $B \in m \iff w_m \models B$ and $C \in m \iff w_m \models C$.
	- $w_m \models B \land C \iff w_m \models B$ and $w_m \models C$ (by definition of $\models$). 
	- $\iff B \in m$ and $C \in m$ (by inductive hypothesis) 
	- $\iff (B \land C) \in m$ (since $m$ is a theory, it's closed under conjunction)

 (This holds for all other connectives as well.) Since $A \in m \iff w_m \models A$ holds for all $A \in F$, it follows that $m$ satisfies all and only the formulas $A$ in $m$. Therefore, $w_m \models m$. This proves at least one such world exists.

**Part 2: Uniqueness**. We must now show that $w_m$ is the only such world. Assume there is another world $w' \in W$ (a different valuation) such that $w' \models m$. To show $w' = w_m$, we only need to show that they agree on all propositional variables, i.e., $w'(p) = w_m(p)$ for all $p \in \Phi$. Let $p$ be an arbitrary propositional variable in $\Phi$.

- **Case 1: $p \in m$.**
	- By our construction, $w_m(p) = 1$.
	- Since $w' \models m$ and $p \in m$, it must be that $w' \models p$.
	- By definition of $\models$, this means $w'(p) = 1$.
	- Thus, $w'(p) = w_m(p)$.
- **Case 2: $p \notin m$.**
	- By our construction, $w_m(p) = 0$.
	- Since $m$ is maximal and $p \notin m$, we know by [[#^03a961]] $\neg p \in m$.
	- Since $w' \models m$ and $\neg p \in m$, it must be that $w' \models \neg p$.
	- By definition of $\models$, this means $w'(p) = 0$.
	- Thus, $w'(p) = w_m(p)$.        

Since $w'$ and $w_m$ agree on all propositional variables, they are the same valuation, i.e., $w' = w_m$. Therefore, for any $m \in M_L$, there exists one and only one world $w$ that satisfies it. `eproof`

In other words, there exists a **function** $f: M_{L}\to W$ such that $f(m)=w_{m}$ such that $w \models m$. This function is also a **bijection**. 

> [!proposition]
> For all $w\in W$ there exists a unique $m\in M_{L}$ such that $w \models m$.

`bproof` Consider an arbitrary $w\in W$. 

**Part 1: Existence**. Construct the set $m_{w}$ as follows

$$
m_{w}:=\{ A\in F: w \models  A \}
$$

Clearly, it follows that $w \models m_{w}$ by construction—i.e., $w \models A$ for all $A\in m_{w}$. Second, let me prove that $m_{w}$ is in $M_{L}$.

1. **$m_{w}$ is a theory**. Obviously $m_{w}\subseteq Cn(m_{w})$, so consider an arbitrary $A\in Cn(m_{w})$ and let me show that $A\in m_{w}$. Since $m_{w}\vdash A$, by the Soundness of classical propositional logic, $m_{w} \models A$. Since $w \models m_{w}$, $w \models A$. Therefore, by the definition of $m_{w}$, $A\in m_{w}$. Since $Cn(m_{w})\subseteq m_{w}$, we have that $m_{w}$ is a theory.
2. **$m_{w}$ is an extension of $L$**. For all $B\in L$, we have that $B$ is satisfied by any world in $W$. So, $w\models B$ for all $B\in L$. Hence, $L\subseteq m_{w}$ for by construction.
3. **$m_{w}$ is consistent**. Suppose for reductio that $m_{w}$ is inconsistent, i.e. $Cn(m_{w})=m_{w}=F$ (for $m_{w}$ is a theory). Then, we have that $w \models F$, and hence $w \models \bot$, contradicting $w \nvDash \bot$. Hence, $m_{w}$ is consistent.
4. **$m_{w}$ is maximal**. Suppose $m_{w} \subset n$ for some $n \subseteq F$. There must be some $A\in F$ such that $A\in n$ and $A\notin m_{w}$. Since $A\notin m_{w}$, it follows that $w \nvDash A$, and hence by the definition of $\models$, $w \models \neg A$. By the construction of $m_{w}$, $\neg A\in m_{w}$. Since $m_{w}\subset n$, $\neg A\in n$. Since $\neg A,A\in n$, $Cn(n)=F$. Therefore, $m_{w}$ is maximal.

Concluding, for any $w\in W$ there exists a set of formulas $m_{w}$ such that $w \models m_{w}$ and $m_{w}$ is a maximal consistent extension of $L$ (i.e., $m\in M_{L}$).

**Part 2: Uniqueness**. Suppose $w \models m$ and $w \models m'$ with $m,m'\in M_{L}$. Suppose (without loss of generality) that there exists some $A$ such that $A\in m$ and $A\notin m'$ ($m \neq m'$). By [[#^03a961]], since $A \notin m'$, $\neg A\in m'$. Therefore, since $w \models m$ and $w \models m'$, we have $w \models A$ and $w\models \neg A$. By the definition of $\models$, it follows that $w \models A$ and $w \nvDash A$: contradiction. Therefore, $m=m'$. `eproof`

Before moving on, consider the following definition.

> [!def]
> Let $T\in \mathcal{T}$ be a theory. Define
>$$
>\left| T \right| :=\{ m\in M_{L}: T \subseteq m \}.
>$$

^db91ac

In a way, $\left| T \right|$ is the set of possible worlds that make $T$ true. 

# 2. Properties of $t$

Define the following operation $t$.

> [!def] $t$
> Let $S \subseteq M_{L}$. Define the function $t: \mathcal{P}(M_{L}) \to \mathcal{P}(F)$ such that:
> $$
>t(S)= \bigcap S. 
>$$

Note that, if $S=\emptyset$, then $t(S)=F$. For $\bigcap S=\{ x\in F: \text{ For all }R\in S\; (x\in R)\}$, but if $S= \emptyset$ the condition—i.e. $\text{For all }R\in S\; (x\in R)\}$—is (trivially) satisfied by any $x\in F$.

> [!proposition]+ Properties of $t$
> Let $S\subseteq M_{L}$.
> 
> 1. $t(S)$ is a theory.
> 2. $t(|T|) = T$ (for all theories $T$, assuming compactness).
> 3. $t(S)$ is consistent if and only if $S \neq \emptyset$. 
> 4. $t(S \cap |A|) = Cn(t(S) \cup \{A\})$. 
> 5. If $S \subseteq S'$, then $t(S') \subseteq t(S)$. 
> 6. If $T \subseteq T'$, then $|T'| \subseteq |T|$.

^243d0b

Let $S\subseteq M_{L}$ be a collection of maximal and consistent extensions of $L$.

**(1) $t(S)$ is a theory**. ($\subseteq$) Obviously, $t(S)\subseteq Cn(t(S))$ by the Reflexivity of $Cn$. ($\supseteq$) Let us show the other direction. Consider an arbitrary $x\in Cn(t(S))$. Recall that $t(S)=\bigcap S$.

1. Since $t(S) \subseteq m$ for every $m \in S$, by the Monotonicity of $Cn$, we have $Cn(t(S)) \subseteq Cn(m)$ for every $m \in S$.
2. Since every $m \in M_L$ is a theory (maximal consistent sets are closed), $Cn(m) = m$.
3. Therefore, $Cn(t(S)) \subseteq m$ for every $m \in S$.
4. Consequently, $x \in m$ for all $m \in S$.
5. Thus, $x \in \bigcap S = t(S)$.

**(2) $t(\left| T \right|)=T$, if $T$ is a theory and we have compactness**. By definition, $\left| T \right|=\{ m\in M_{L}: T\subseteq m \}$ and so $t(\left| T \right|)=\bigcap \left| T \right|=\bigcap \{ m\in M_{L}: T\subseteq m \}$. Clearly, if $T$ is inconsistent (i.e., $T=Cn(T)=F$), it follows that there is no $m$ such that $T \subseteq m$ (if $T \subseteq m$, $m=F$ and hence $Cn(m)=F$, contradicting the consistency of $m$). Hence, $\left| T \right|=\emptyset$, so $t(\left| T \right|)=F$ and $T=F$ *ex hypothesi*, proving our equality. So, suppose that $T$ is consistent. 

($\supseteq$) Suppose $A\in T$. Since $T\subseteq m$ for all $m\in \left| T \right|$, $A\in m$ for all such $m$. Therefore $A\in \bigcap \left| T \right|=t(\left| T \right|)$.  

($\subseteq$) Suppose $A\in t(\left| T \right|)$. Thus, $A\in m$ for all $m\in M_{L}$ such that $T \subseteq m$. Suppose for reductio that $A \notin T=Cn(T)$, for $T$ is a theory. Since $T$ is consistent *ex hypothesi* and $A\notin Cn(T)$, it follows that $T':=Cn(T\cup \{ \neg A \})\neq F$—if $Cn(T\cup \{ \neg A \})=F$, it follows that $T \vdash \neg A \to \bot$, i.e. $T\vdash A$, and so $A\in T$. Now, to prove a contradiction, we need to show that there exists a set $m$ such that $T\subseteq T'\subseteq m$ and such that $m$ is a maximal consistent extension of $L$ (which implies $m \in |T|$ yet $A \notin m$). To do so, we need both Compactness and [[Zorn's Lemma]]. 

1. First, define the collection of sets $\mathcal{K}:=\{ X \subseteq F : Cn(X)\neq F \text{ and } T' \subseteq X\}$. Clearly, $(\mathcal{K}, \subseteq)$ is a poset. Consider now an arbitrary chain $\mathcal{C}\subseteq \mathcal{K}$, and let us show that $\mathcal{C}$ has an upper bound in $\mathcal{K}$. Define $R:= \bigcup_{X\in \mathcal{C}}X$. Clearly, $X \subseteq R$ for all $X\in \mathcal{C}$. We need to prove that $R\in \mathcal{K}$, i.e. that $T' \subseteq R$ and $Cn(R)\neq F$. Since $T' \subseteq X$ for all $X\in \mathcal{C}$, and $X \subseteq R$, it follows that $T' \subseteq R$. Suppose now for reductio that $Cn(R)=F$. By Compactness, there must be a finite subset $R_{0}\subseteq R$ such that $Cn(R_0)=F$. Since $R_{0}\subseteq R=\bigcup_{X\in \mathcal{ C}}X$ is finite and $\mathcal{C}$ is a chain, there must be a set $X^{*}\in \mathcal{ C}$ such that $R_{0}\subseteq X^{*}$. By the Monotonicity of $Cn$, $Cn(R_{0})\subseteq Cn(X^{*})$, and so $Cn(X^{*})=F$, contradicting the fact that $X^{*}\in \mathcal{K}$. Therefore, $Cn(R)\neq F$, and so $R\in \mathcal{K}$. Therefore, $\mathcal{ C}$ has an upper bound in $\mathcal{K}$. Since $\mathcal{C}$ is an arbitrary chain in $\mathcal{K}$, we conclude that any such chain has an upper bound in $\mathcal{K}$. 
2. By [[Zorn's Lemma]], it follows that $\mathcal{K}$ has at least one maximal element: let us call it $m$. By definition of $\mathcal{K}$, $Cn(m) \neq F$ and $T' \subseteq m$. We must show that $m$ is in $M_L$. We have already established that $m$ is consistent. Note then that, since $T':=Cn(T\cup \{ \neg A \})$, $L\subseteq T'\subseteq m$, hence $m$ is an extension of $L$. Ultimately, note that $m$ is maximal. If $m \subset n$, for some $n\subseteq F$, it must be the case that $Cn(n)=F$—if $Cn(n)\neq F$, then (since $T'\subseteq m\subset n$), $n\in \mathcal{K}$, contradicting the maximality of $m \in \mathcal{K}$. Thus, $m \in M_L$. Moreover, we have that $T\subseteq m$, for $$T \quad\subseteq\quad  T \cup \{ \neg  A \} \quad \subseteq\quad  Cn(T \cup \{ \neg  A \} ) \quad \subseteq\quad  m$$Therefore, $m \in \left| T \right|$. However, $\neg A \in T' \subseteq m$. Since $m$ is consistent, $A \notin m$. This contradicts the hypothesis that $A \in t(\left| T \right|)$ (which requires $A$ to be in *every* $m \in \left| T \right|$). Therefore, we conclude that $A\in T$. 
3. Since $A$ is an arbitrary formula in $t(\left| T \right|)$, we have that $t(\left| T \right|)\subseteq T$.

We conclude that $t(\left| T \right|)=T$.

**(3) $t(S)$ is consistent iff $S$ is nonempty**. ($\implies$) If $S=\emptyset$, by definition we have that $t(S)=F$, and hence $Cn(t(S))=F$. $(\impliedby)$ Suppose that $t(S)$ is inconsistent, meaning that $Cn(t(S))=F$. Since $t(S)= \bigcap S$, where $S \subseteq M_{L}$, it clearly follows that $t(S)\subseteq m$ for all $m\in S$. If there is at least one $m\in S$, by the monotonicity of $Cn$, $Cn(t(S))\subseteq Cn(m)$, implying that $Cn(m)=F$. However, this contradicts the consistency of $m$, thus there exists no $m\in S$, meaning $S=\emptyset$.

**(4) $t(S \cap |A|) = Cn(t(S) \cup \{A\})$**. We distinguish three cases based on the status of the set $S$.

**Case 1: $S = \emptyset$.** In this case, the intersection $S \cap |A| = \emptyset$. By definition, $t(\emptyset) = F$ (the inconsistent theory).
- **LHS:** $t(\emptyset) = F$.
- **RHS:** $Cn(t(\emptyset) \cup \{A\}) = Cn(F \cup \{A\}) = F$.
The equality holds trivially.

**Case 2: $S \neq \emptyset$, but $S \cap |A| = \emptyset$.** In this case, the intersection is empty, so the LHS is $t(\emptyset) = F$. For the RHS, note that since $S \cap |A| = \emptyset$, it follows that for all $m \in S$, $m \notin |A|$, i.e., $A \notin m$. Since every $m \in M_L$ is complete, $\neg A \in m$ for all $m \in S$. Consequently, $\neg A \in \bigcap S = t(S)$. Therefore, the set $t(S) \cup \{A\}$ contains both $\neg A$ and $A$, making it inconsistent. Thus $Cn(t(S) \cup \{A\}) = F$. The equality holds.

**Case 3: $S \cap |A| \neq \emptyset$.** This is the principal case. Let us prove the equality by mutual inclusion.

**($\subseteq$) Let $x \in t(S \cap |A|)$.**
1. We prove that $A \to x \in t(S)$. Suppose for reductio that $A \to x \notin t(S)$. Since $t(S) = \bigcap S$, there must exist some $m \in S$ such that $A \to x \notin m$.
2. Since $m$ is complete, $\neg(A \to x) \in m$. This is classically equivalent to $A \land \neg x \in m$, which implies $A \in m$ and $\neg x \in m$.
3. Since $m \in S$ and $A \in m$, it follows that $m \in S \cap |A|$.
4. However, by our initial hypothesis, $x \in t(S \cap |A|)$, which implies $x \in m'$ for *all* $m' \in S \cap |A|$. Therefore, $x \in m$. We now have $x \in m$ and $\neg x \in m$, contradicting the consistency of $m$.
5. Therefore, the assumption was false, and $A \to x \in t(S)$. By Modus Ponens, $Cn(t(S) \cup \{A\})$ contains $x$.

**($\supseteq$) Let $x \in Cn(t(S) \cup \{A\})$.**
1. By the [[deduction theorem]] (or definition of consequence), $t(S) \cup \{A\} \vdash x$, which implies $t(S) \vdash A \to x$.
2. Since $t(S)$ is a theory, $(A \to x) \in t(S)$. By definition of $t(S)$, for all $m \in S$, $(A \to x) \in m$.
3. Consider now any $m \in S \cap |A|$. For such $m$, we have $m \in S$ and $A \in m$.
4. Since $(A \to x) \in m$ and $A \in m$, it follows by closure of $m$ that $x \in m$.
5. Since $x$ is in every $m \in S \cap |A|$, $x \in t(S \cap |A|)$.

**(5) For $S,S'\subseteq M_{L}$, if $S \subseteq S'$, then $t(S')\subseteq t(S)$**. Let $S,S'\subseteq M_{L}$ and suppose $S \subseteq S'$. By definition, $t(S') = \bigcap S'$, which is the set of all formulae $A$ such that $A \in m$ for all $m \in S'$.
Consider any $A \in t(S')$. By definition, $A$ is contained in every world in $S'$. Since $S \subseteq S'$, every world $m \in S$ is also a world in $S'$. Therefore, $A$ must be contained in every world $m \in S$.
Consequently, $A \in \bigcap S = t(S)$. Since $A$ was arbitrary, $t(S') \subseteq t(S)$. This relates to the general set-theoretic property that $X \subseteq Y \implies \bigcap Y \subseteq \bigcap X$ ([[Reverse-Inclusion Property]]).

**(6) For $T,T'\in \mathcal{T}$, if $T \subseteq T'$ then $\left| T' \right|\subseteq \left| T \right|$**. Let $T,T'\in \mathcal{T}$ and suppose $T \subseteq T'$. Consider any $m'\in \left| T' \right|$, that is any $m'$ such that $T'\subseteq m'$. Clearly, $T\subseteq T'\subseteq m'$, hence $T\subseteq m'$, so $m'\in \left| T \right|$. So, $\left| T' \right|\subseteq \left| T \right|$.

The proof is complete. `eproof`

# 3. Systems of Spheres

> [!def]+ Systems of Spheres
> Let $\mathbf{S}$ be a collection of subsets of $M_{L}$, i.e. $\mathbf{S}\subseteq \mathcal{P}(M_{L})$. $\mathbf{S}$ is a *system of spheres centered on $X$* ($\mathbf{S}_{X}$) for some subset $X\subseteq M_{L}$, if it satisfies the following conditions:
> 
> - **(S1: Nestedness)** $\mathbf{S}$ is totally ordered by $\subseteq$: if $U,V\in \mathbf{S}$, then $U\subseteq V$ or $V\subseteq U$.
> - **(S2: Centering)** $X$ is the $\subseteq$-minimum of $\mathbf{S}$: $X\in S$ and, for all $U\in \mathbf{S}$, $X \subseteq U$.
> - **(S3: ?)** $M_{L}\in \mathbf{S}$.
> - **(S4: Limit Assumption)** If $A\in F$ and $U \cap \left| A \right|\neq \emptyset$ for some $U\in \mathbf{S}$, then there exists a sphere $U^{*}\in \mathbf{S}$ such that: (1) $U^{*}\cap \left| A \right|\neq \emptyset$, and (2) $V \cap \left| A \right|\neq \emptyset$ implies $U \subseteq V$ for all $V \in \mathbf{S}$.

^0e19fa

The main differences between [[#^0e19fa]] and [[(Lewis, 1973a)#^93cc74]] are the following:

1. Grove's systems of spheres are not required to be closed under nonempty intersections and finite unions.
2. More significantly, Grove's systems of spheres are not centered on single worlds, but on sets of “worlds”.

We have that, for any $A\in F$, 

1. If $\left| A \right|\cap \bigcup \mathbf{S}\neq \emptyset$, then S4 ensures that there exists some sphere in $\mathbf{S}$, call it $c(A)$, which intersects $\left| A \right|$ and is smaller than any other sphere with this property.
2. If $\left| A \right|\cap \bigcup \mathbf{S}=\emptyset$, then S3 implies that $\left| A \right|=\emptyset$, and we take $c(A):=M_{L}$.

Thus, given a sphere system $\mathbf{S}$, we can define a function $f_{\mathbf{S}}:F\to \mathcal{P}(M_{L})$ such that

$$
f_{\mathbf{S}}(A):=\left| A \right|  \cap c(A)
$$

(*N.b.* recall that $c(A)$ is a *sphere*.) In other words, $f_{\mathbf{S}}$ selects the closes worlds in $M_{L}$ to $X$ where $A$ holds. Note that S4 (the Limit Assumption) plays a crucial role here, for it ensures that $f_{\mathbf{S}}$ is nonempty when $A$ is *not* inconsistent (i.e., $\neg A\notin L$). 

Grove proposes a different kind of model, which he claims to be equivalent to [[#^0e19fa]]. 

> [!def]+ Total Order on $M_{L}$
> Let $X\subseteq M_{L}$ and $\leq_{X}$ ($\leq$ for simplicity) be a relation on $M_{L}$ satisfying the following:
> 
> - ($\leq 1$) $\leq$ is connected: for all $x,y\in M_{L}$, either $x\leq y$ or $y \leq x$.
> - ($\leq 2$) $\leq$ is transitive.
> - ($\leq 3$) If $\left| A \right|\neq \emptyset$, then the set $\{ x\in \left| A \right|: x \leq y, \text{ for all } y\in \left| A \right| \}\neq \emptyset$ – this is the analogue of S4.
> - ($\leq 4$) $x\in M_{L}$ is $\leq$-minimal (i.e., $x\leq y$ for all $y\in M_{L}$) if, and only if, $x\in X$.

^02e2bf

> [!proposition]
> [[#^0e19fa]] and [[#^02e2bf]] are equivalent.

`bproof` TBD `eproof`

Before introducing the main proofs by Grove, consider the following useful lemma.

> [!lemma]
> Let $A,B\in F$.
>$$
>\begin{align*}
>(1)&&\left| A \land B \right| &= \left| A \right| \cap \left| B \right|  \\
>(2)&&\left| A \lor B \right| &= \left| A \right| \cup \left| B \right| 
>\end{align*}
>$$

^f62804


`bproof` The proof is straightforward. 

1. Note that $\left| A\land B \right|$ is the set of $m\in M_{L}$ such that $A \land B\in m$. Since $m$ is a theory [[#^9d8d32]], $A,B\in m$, so $m\in \left| A \right|\cap \left| B \right|$. The other direction follows analogously.
2. Note that $\left| A\lor B \right|$ is the set of $m\in M_{L}$ such that $A\lor B\in m$. Since $m$ is a theory [[#^9d8d32]], either $A\in m$ or $B\in m$, so $m\in \left| A \right|\cup \left| B \right|$. The other direction follows analogously.

This completes the proof. `eproof`

> [!warning]+ Augmentation (“$/$”) *vs.* Revision (“$+$”)
> In [[#^19b236]], $T+A:=t(f_{\mathbf{S}}(A))$. It is useful to see what augmentation amounts to in terms of spheres system. First, by [[#^243d0b]], for any $S\subseteq M_{L}$ and $A\in F$,
>$$
>t(S\cap \left| A \right| ) =Cn (t(S) \cup \{ A \}) \\
>$$
> Therefore, by properties (2) and (4) in [[#^243d0b]],
>$$
>\begin{align*}
>T/A &= Cn(T \cup \{ A \}) \\
>&=Cn (t(\left| T \right|) \cup \{ A \} )\\
>&=t(\left| T \right| \cap \left| A \right| )
>\end{align*}
>$$
> So, while *revising a theory $T$ by $A$* means taking $t(f_{\mathbf{S}}(A))$, where $\mathbf{S}$ is a system centered on $T$, *expanding a theory $T$ by $A$* means taking $t(\left| T \right| \cap \left| A \right|)$. (*N.b.*, if $\left| T \right|\cap \left| A \right|=\emptyset$, it follows that $t(\left| T \right|\cap \left| A \right|)=F$, as expected.) 

# 4. Soundness and Completeness

The following two theorems are the main result of [[(Grove, 1988)]].

## 4.1. Soundness

> [!theorem]+ Soundness
> Let $\mathbf{S}$ be a system of spheres in $M_{L}$ centered on $\left| T \right|$ for some theory $T\in \mathcal{T}$. If we define, for any $A\in F$,
> $$
>T+A := t(f_{\mathbf{S}}(A))
>$$
> then the axioms (+2) to (+8) are all satisfied.

^19b236

`bproof` Let $\mathbf{S}$ be a system of spheres in $M_{L}$ centered on $\left| T \right|$ for some theory $T\in \mathcal{T}$.

**(+1)** Clearly, $Cn(t(f_{\mathbf{S}}(A)))=t(f_{\mathbf{S}}(A))$, for $t(S)$ is a theory for any $S\subseteq M_{L}$ by [[#^243d0b]], and $f_{\mathbf{S}}(A)=c(A)\cap \left| A \right|\subseteq M_{L}$.

**(+2)** Let me prove that $A\in T+A$. We have $f_{\mathbf{S}}(A)) = t(\left| A \right| \cap c(A)$ by definition. Since $c(A)$ is a sphere, it is a set of $m\in M_{L}$. By [[#^243d0b]] (prop. 4), it follows that
$$
\begin{align*}
t(f_{\mathbf{S}}(A)) &= t(\left| A \right| \cap c(A)) \\
& =Cn( t(c(A)) \cup \{ A \})
\end{align*}
$$

and since $A \vdash A$, $A\in Cn(t(c(A))\cup \{ A \})=t(f_{\mathbf{S}}(A))$.

**(+3)** Suppose $\neg A \notin T$, and let me prove that $T+A=Cn(T\cup \{ A \})$. Since $\neg A\notin T$, it follows that $T\cup \{ A \}$ is consistent, i.e. there exists some $m\in M_{L}$ such that $T\subseteq m$ and $A\in m$. Therefore, $\left| T \right|\cap \left| A \right|\neq \emptyset$. Since $\left| T \right|$ is the smallest sphere in $\mathbf{S}$ and $\left| T \right|\cap \left| A \right|\neq \emptyset$, it follows that $c(A)=\left| T \right|$. So,

$$
t(f_{\mathbf{S}}(A))= t(\left| A \right| \cap \left| T \right| )
$$

and since $\left| T \right|\subseteq M_{L}$, it follows from [[#^243d0b]] (prop. 4) 

$$
\begin{align*}
t(f_{\mathbf{S}}(A)) &= t(\left| A \right| \cap \left| T \right| ) \\
& =Cn( t(\left| T \right| ) \cup \{ A \}) \\
&= Cn(T\cup \{ A \}) & [\text{By Prop. 2 of }t]
\end{align*}
$$
**(+4)** Suppose $\neg A\notin L$, and let me show that $Con(T+A)$, i.e. that $Cn(T+A)\neq F$. Let me show that $T+A \neq \emptyset$, and conclude from [[#^243d0b]] (prop. 3). 

Since $\neg A\notin L$, $A$ is not a contradiction, therefore there exists some $m\in M_{L}$ such that $A\in m$. So $\left| A \right|$ is nonempty. Since we also have that $\left| A \right|\cap \bigcup \mathbf{S}=M_{L}$ is nonempty, by S4 $c(A)$ is nonempty, and it is the smallest $U\in \mathbf{S}$ such that $U \cap \left| A \right|$ is nonempty. Hence, $\left| A \right|\cap c(A)$ is nonempty, and by [[#^243d0b]] (prop. 3), $t(\left| A \right|\cap c(A))=t(f_{\mathbf{S}}(A))$ is consistent.

**(+5)** Suppose $A \leftrightarrow B\in L$, and let me show that $T+A=T+B$. Since $L\subseteq m$, for all $m\in M_{L}$, we have that $\left| A \right|=\left| B \right|$: if $m\in \left| A \right|$, since $m$ is a theory and $A\leftrightarrow B \in m$, $m\in \left| B \right|$, and the same goes for any $m\in \left| B \right|$. Since $\left| A \right|=\left| B \right|$, $c(A)= c(B)$, and therefore $\left| A \right|\cap c(A)=\left| B \right|\cap c(B)$, which implies that 
$$
\begin{align*}
\left| A \right|\cap c(A)&=\left| B \right|\cap c(B) \\
f_{\mathbf{S}}(A)&=f_{\mathbf{S}}(B)\\
t(f_{\mathbf{S}}(A))&=t(f_{\mathbf{S}}(B)) \\
T+A &= T+B
\end{align*}
$$

**(+7)** We need to prove $T+(A \land B) \subseteq Cn((T+A) \cup \{ B \})$. First, note that by [[#^f62804]], $\left| A \land B \right| = \left| A \right|\cap \left| B \right| \subseteq \left| A \right|$. This means that any sphere intersecting $\left| A\land B \right|$ does intersect $\left| A \right|$ as well. Consider now $c(A)$, i.e. the sphere $U$ such that (1) $U\cap \left| A \right|\neq \emptyset$, and (2) $U \subseteq V$ for all $V$ with $V \cap \left| A \right|\neq \emptyset$. Since $c(A\land B)$ intersects $\left| A \land B \right|$ by definition, from the reasoning above it follows that it does intersect $\left| A \right|$ as well. By the definition of $c(A)$, then $c(A)\subseteq c(A \land B)$. 

> [!NOTE]- For any $A,B\in F$: $c(A)\subseteq c(A \land B)$.
> $c(A)$ is a sphere $U\in \mathbf{S}$ such that: $U\cap \left| A \right|\neq \emptyset$ and, for all $V\cap \left| A \right|\neq \emptyset$, $U \subseteq V$. Consider now $c(A \land B)$. Since $c(A \land B)\cap \left| A \land B \right|\neq \emptyset$ by definition, $c(A \land B)\cap \left| A \right|\neq \emptyset$. By the definition of $c(A)$, it follows that $c(A)\subseteq c(A \land B)$.
> 
> Here is a graph showing why this is the case:
> 
> ![[Screenshot 2025-11-21 alle 16.05.50.png]]

Therefore,

$$
\begin{array}{rcl}
c(A) &\subseteq& c(A\land B) \\
c(A)\cap \left| A \right| \cap \left| B \right|  &\subseteq& c(A \land B) \cap \left| A \right| \cap \left| B \right|  \\
\end{array}
$$

By prop. 5 of [[#^243d0b]] (i.e., the [[Reverse-Inclusion Property]]), it follows that 

$$
\begin{align*}
t(c(A\land B)\cap \left| A \right| \cap \left| B \right| ) \subseteq t(c(A)\cap \left| A \right| \cap \left| B \right| ) \\
t(c(A\land B)\cap \left| A \land  B \right| ) \subseteq t(c(A)\cap \left| A \right| \cap \left| B \right| )
\end{align*}
$$

By definition, $t(c(A\land B)\cap \left| A \land B \right|)=T+(A\land B)$. Regarding the RHS, apply prop. 4 of [[#^243d0b]] by setting $S:=c(A)\cap \left| A \right|\subseteq M_{L}$, and so

$$
\begin{align*}
t(c(A)\cap \left| A \right| \cap \left| B \right| ) &= t\Big( \big(c(A)\cap \left| A \right|\big) \cap \left| B \right|  \Big)  \\
&=Cn\Big(t\big(c(A)\cap \left| A \right| \big) \cup \{ B \}\Big) \\
&=Cn\Big(\big(T+A\big) \cup \{ B \}\Big) \\
&=(T+A)/B
\end{align*}
$$

Therefore, we conclude that $T+(A \land B)\subseteq (T+A)/B$.

**(+8)** Suppose $\neg B\notin T+A$. We need to prove $Cn((T+A) \cup \{ B \}) \subseteq T+(A \land B)$. Since $\neg B\notin T+A$ and $T+A$ is a theory—see the proof of (+1)—it follows that $B$ is consistent with the theory $T+A$, i.e. there exists at least one possible world $m\in M_{L}$ such that $m\in \left| B \right|$ and $m\in \left| T+A\right|$. Hence $\left| T+A \right|\cap \left| B \right|\neq \emptyset$. We need to prove that also the “generating set” of $T+A$, i.e. $c(A)\cap \left| A \right|$, is consistent with $B$, i.e. that $c(A)\cap \left| A \right|\cap \left| B \right|\neq\emptyset$. 

Suppose for reductio that $c(A)\cap \left| A \right|\cap \left| B \right|=\emptyset$. So, for any $m\in c(A)\cap \left| A \right|$, $B\notin m$. Since $m$ is complete for all $m\in M_{L}$, it follows that $\neg B\in m$ for all $m\in c(A)\cap \left| A \right|$. Thus, $\neg B\in t(c(A)\cap \left| A \right|)=T+A$, contradicting our hypothesis. Therefore, 

$$
\begin{align*}
c(A)\cap \left| A \right|\cap \left| B \right|&= c(A) \cap \left| A \land B \right|  \\
& \neq \emptyset
\end{align*}
$$

Therefore, the closest sphere intersecting $\left| A \right|$ also intersects $\left| A \land B \right|$, and so by the definition of $c(A \land B)$, it follows that $c(A\land B)\subseteq c(A)$. \[Also, consider that the definition of $c(A)$ and [[#^f62804]] imply that $c(A)\subseteq c(A \land B)$. Therefore, $c(A)=c(A \land B)$.]

We then argue as above:

$$
\begin{array}{rcl}
c(A\land B) &\subseteq& c(A) \\
c(A \land B) \cap \left| A \right| \cap \left| B \right| &\subseteq&  c(A)\cap \left| A \right| \cap \left| B \right|  \\
t(c(A)\cap \left| A \right| \cap \left| B \right| ) &\subseteq& t(c(A \land B) \cap \left| A \right| \cap \left| B \right|)\\
\end{array}
$$

By definition, $t(c(A\land B)\cap \left| A \land B \right|)=T+(A\land B)$. Regarding the LHS, apply prop. 4 of [[#^243d0b]] by setting $S:=c(A)\cap \left| A \right|\subseteq M_{L}$, and so

$$
\begin{align*}
t(c(A)\cap \left| A \right| \cap \left| B \right| ) &= t\Big( \big(c(A)\cap \left| A \right|\big) \cap \left| B \right|  \Big)  \\
&=Cn\Big(t\big(c(A)\cap \left| A \right| \big) \cup \{ B \}\Big) \\
&=Cn\Big(\big(T+A\big) \cup \{ B \}\Big) \\
&=(T+A)/B
\end{align*}
$$

Therefore, we conclude that $(T+A)/B\subseteq T+(A \land B)$.

So, we have proved that, if $T+A:= t(f_{\mathbf{S}}(A))$, then $+$ satisfies (+1)-(+8). `eproof`

## 4.2. Completeness

> [!theorem] Completeness
> Let $+: \mathcal{T}\times F \to \mathcal{T}$ be any function satisfying (+1)-(+8). Then, for any fixed theory $T$, there is a system of spheres on $M_{L}$, $\mathbf{S}$, centered on $\left| T \right|$ and satisfying $T+A=t(f_{\mathbf{S}}(A))$ for all $A\in F$.

^f347f9

`bproof` Let $+: \mathcal{T}\times F \to \mathcal{T}$ be any function satisfying (+1)-(+8). Consider an arbitrary theory $T\in \mathcal{T}$. Define $\mathbf{S}'$ as the class of all **nonempty** subsets $U\subseteq M_{L}$ satisfying the following conditions:

1. (**Relevance**) For all $u\in U$ there is $A\in F$ such that $u\in \left| T+A \right|$, and
2. (**Swallowing**) For all $A\in F$, if $\left| A \right|\cap U\neq \emptyset$, then $\left| T+A \right|\subseteq U$.

Then, define $\mathbf{S}$ as follows:

$$
\mathbf{S}:=\begin{cases}
\mathbf{S}'\cup \{ M_{L} \} & \text{$T$ consistent} \\
\mathbf{S}' \cup \{ M_{L},\emptyset \} & \text{otherwise}
\end{cases}
$$

 (In other words, the candidate sphere system $\mathbf{S}$ is obtained by adding the universe (and possibly the empty set) to $\mathbf{S}'$.) Let me now prove that $\mathbf{S}$ is a system of spheres.

**Part One: $\mathbf{S}$ is a system of spheres**.

**(S1)** Distinguish two cases.

**Case 1: $T$ is inconsistent.** By construction, $\mathbf{S} = \mathbf{S}' \cup \{ M_L, \emptyset \}$. Let $U, V \in \mathbf{S}$.
- If $U = \emptyset$ or $V = \emptyset$: Since $\emptyset \subseteq X$ for any set $X$, the nesting condition ($U \subseteq V$ or $V \subseteq U$) holds trivially.
- If $U = M_L$ or $V = M_L$: Since $X \subseteq M_L$ for any set of worlds $X$, nesting holds trivially.
- If $U, V \in \mathbf{S}'$: These are nonempty sets satisfying Relevance and Swallowing. The proof is identical to **Case 2** below. (Note: In step 6, the non-emptiness of $|T+(A \lor B)|$ is guaranteed by axiom (+4) solely because $A \lor B$ is consistent. it does not require $T$ to be consistent).

**Case 2: T is consistent**. Let $U, V \in \mathbf{S}$. Suppose for reductio that $U \not\subseteq V$ and $V \not\subseteq U$. This means there exist worlds $u \in U \setminus V$ and $v \in V \setminus U$.

1. Since $u \in U$, by (Relevance) there is some $A$ such that $u \in \left| T+A \right|$. By (+2), $A\in T+A$, hence for all $m\in \left| T+A \right|$, $A\in m$—that is, $\left| T+A \right|\subseteq \left| A \right|$. So, $A\in u$. Since $u \in \left| A \right| \cap U$, the intersection is not empty, and by (Swallowing) we have $\left| T+A \right| \subseteq U$.
2. Since $u \in \left| T+A \right|$ and $u \notin V$, it follows that $\left| T+A \right| \not\subseteq V$.
3. By the contrapositive of **Swallowing** for $V$: If $\left| T+A \right| \not\subseteq V$, then $\left| A \right| \cap V = \emptyset$.
4. Analogously for $v$: There exists $B$ such that $v \in \left| T+B \right| \subseteq V$. Since $v \notin U$, $\left| T+B \right| \not\subseteq U$. By Swallowing for $U$, $\left| B \right| \cap U = \emptyset$.
5. Consider now $A \lor B$.
    - $u \in \left| T+A \right| \subseteq \left| A \right| \subseteq \left| A \lor B \right|$. Since $u \in U$, $\left| A \lor B \right| \cap U \neq \emptyset$. By Swallowing, $\left| T+(A \lor B) \right| \subseteq U$.
    - $v \in \left| T+B \right| \subseteq \left| B \right| \subseteq \left| A \lor B \right|$. Since $v \in V$, $\left| A \lor B \right| \cap V \neq \emptyset$. By Swallowing, $\left| T+(A \lor B) \right| \subseteq V$.
    - Therefore, $\left| T+(A \lor B) \right| \subseteq U \cap V$.
6. By (+4), since $T$ is consistent *ex hypothesi*, $T+(A \lor B)$ is consistent (unless $A \lor B$ is logically false, which is impossible since $u \ni A$), so $\left| T+(A \lor B) \right| \neq \emptyset$. Let $z \in \left| T+(A \lor B) \right|$.
    - $z \in U$ and $z \in V$.
    - Also, since $A\lor B\in T+(A \lor B)$ by (+2), we have $z \in \left| A \lor B \right|$, so $z \in \left| A \right|$ or $z \in \left| B \right|$.
    - If $z \in \left| A \right|$: since $z \in V$, $\left| A \right| \cap V \neq \emptyset$. Contradiction with (3).
    - If $z \in \left| B \right|$: since $z \in U$, $\left| B \right| \cap U \neq \emptyset$. Contradiction with (4).
7. Either way, we get a contradiction. So, our initial assumption was false. $\mathbf{S}$ is nested.

**(S2)** Let me show tha (1) $\left| T \right|\in \mathbf{S}$ and that, (2) for all $U\in \mathbf{S}$, $\left| T \right|\subseteq U$. 

(1) To prove that $\left| T \right|\in \mathbf{S}$, distinguish two cases. 

(1.1) If $T$ is inconsistent, i.e. $T=F$, then $\left| T \right|=\emptyset$, and by construction of $\mathbf{S}$ for the inconsistent case, $\emptyset\in \mathbf{S}$. Moreover, $\left| T \right|$ is hence a $\subseteq$-minimum for $\mathbf{S}$ in this case, for $\emptyset\subseteq U$ for any set $U$.

So, suppose $T$ is consistent. 

1. (Relevance) Let me show that Relevance holds for $\left| T \right|$. Consider now an arbitrary $m\in \left| T \right|$ and an arbitrary tautology in $L$, which I will call $\top$. Since $T$ is consistent *ex hypothesi*, $\neg \top \notin T$, hence by (+3) it follows that $T+\top = Cn(T\cup \{ \top \})$. Since $\top\in L\subseteq T$, $T+\top =Cn(T)=T$, for $T$ is a theory *ex hypothesi*. Therefore, it immediately follows that $m\in \left| T+\top \right|=\left| T \right|$.
2. (Swallowing) Consider an arbitrary $A\in F$ and suppose $\left| A \right|\cap \left| T \right|\neq \emptyset$. That is, there exists a possible world $m\in M_{L}$ such that $A\in m$ and $T\subseteq m$. Therefore, $\neg A\notin T$ (otherwise, $A,\neg A\in m$, contradicting the consistency of $m\in M_{L}$). By (+3) $T+A=Cn(T\cup \{ A \})$. This implies that $\left| T+A \right|=\left| T \right|\cap \left| A \right|$ \[see callout below]. Therefore, we have that $\left| T+A \right|=\left| T \right|\cap \left| A \right|\subseteq \left| T \right|$, proving that $\left| T \right|$ satisfies (Swallowing).

> [!NOTE]- If $\neg A\notin T$, $\left| T+A \right|=\left| Cn(T \cup \{A\}) \right|=\left| T \right|\cap \left| A \right|$
> (Note: This assumes the case where $\neg A \notin T$, so $T+A = Cn(T \cup \{A\})$.)
> 
> ($\subseteq$) Suppose $m\in M_{L}$ is such that $m\in \left| T+A \right|$. This means $Cn(T\cup \{ A \})\subseteq m$. Since $T \subseteq Cn(T \cup \{A\})$ and $A \in Cn(T \cup \{A\})$, it follows that $T \subseteq m$ and $A \in m$. Therefore, $m \in |T|$ and $m \in |A|$, so $m \in |T| \cap |A|$.
> 
> ($\supseteq$) Suppose $m\in M_{L}$ is such that $m\in \left| T \right|\cap \left| A \right|$. From the latter, $T\subseteq m$ and $A\in m$, which implies $T \cup \{A\} \subseteq m$. By Monotonicity for $Cn$, $Cn(T \cup \{ A \})\subseteq Cn(m)$. Since $m$ is a world (maximal consistent set), $Cn(m)=m$. Thus, $Cn(T \cup \{A\}) \subseteq m$, meaning $m\in\left| Cn(T\cup \{ A \}) \right|$. Since $\neg A\notin T$ *ex hypothesi*, $T+A=Cn(T \cup \{ A \})$, hence $m\in \left| T+A \right|$.
> 
> Concluding, $\left| T+A \right|=\left| T \right|\cap \left| A \right|$.

Therefore, $\left| T \right|\in \mathbf{S}'$, and so $\left| T \right|\in \mathbf{S}$. Consider now any $U\in \mathbf{S}$, and let me show that $\left| T \right|\subseteq U$. First, note that either $U=M_{L}$ or $U\in \mathbf{S}'$, which implies that $U$ is nonempty. 

1. $U\in \mathbf{S}'$. Since $\top\in F$, $\left| \top \right|=M_{L}$ and $U$ is nonempty, we have that $U\cap \left| \top \right|\neq \emptyset$. By (Swallowing), $\left| T+\top \right|\subseteq U$. Since $T$ is consistent *ex hypothesi*, $\neg \top \notin T$, hence by (+3) it follows that $T+\top = Cn(T\cup \{ \top \})$. Since $\top\in L\subseteq T$, $T+\top =Cn(T)=T$, for $T$ is a theory *ex hypothesi*. Therefore, $\left| T+\top \right|=\left| T \right|$, and so $\left| T \right|\subseteq U$. Since $U$ is arbitrary, $\left| T \right|$ is a $\subseteq$-minimum.
2. $U=M_{L}$. Obviously, $\left| T \right|\subseteq M_{L}$.

Thus, (S2) holds. 

**(S3)** $M_{L}\in \mathbf{S}$ by construction. 

**(S4)** We must prove: If $|A| \cap \bigcup \mathbf{S} \neq \emptyset$ (i.e., if $A$ is consistent), then there exists a sphere $U \in \mathbf{S}$ such that: 

1. $U \cap |A| \neq \emptyset$ (It intersects $|A|$). 
2. For any $V \in \mathbf{S}$, if $V \cap |A| \neq \emptyset$, then $U \subseteq V$ (It is the smallest such sphere).

Assume $|A| \cap \bigcup \mathbf{S} \neq \emptyset$ (i.e., $A$ is consistent). We construct the specific set $U_A$ as defined by Grove.

$$
U_A \quad:=\quad \bigcup \{ |T+B| : |A| \subseteq |B| \}
$$

(In words: The union of all revisions by $B$ where $B$ is logically weaker than $A$).

1. **Prove (1)**. Naturally, $|A| \subseteq |A|$ holds. Therefore, $|T+A|$ is one of the sets included in the union $U_A$. Since $\left| A \right|\neq \emptyset$, $\neg A\notin L$ (note that $L\subseteq m$, for all $m\in M_{L}$). By postulate (+4), $T+A$ is consistent, so $|T+A| \neq \emptyset$. By postulate (+2), $A\in T+A$, and so $|T+A| \subseteq |A|$. Since $|T+A| \subseteq U_A$, $|T+A| \subseteq |A|$, and $\left| T+A \right|\neq \emptyset$, then 

$$U_A \cap |A| \neq \emptyset.$$

1. **Prove (2a)**. We must show $U_{A}\in\mathbf{S}$, i.e. that it satisfies the two conditions for $\mathbf{S}'$: Relevance and Swallowing.
    1. (Relevance). By definition, $U_A$ is a union of sets of the form $|T+B|$. Therefore, every world $u \in U_A$ belongs to some $|T+B|$.
    2. (Swallowing) We need to prove that, for all $C\in F$, if $|C| \cap U_A \neq \emptyset$, then $|T+C| \subseteq U_A$. Suppose $|C| \cap U_A \neq \emptyset$. By the definition of $U_{A}$, this implies that there is some $B\in F$ such that (i) $|A| \subseteq |B|$ and (ii) $|C| \cap |T+B| \neq \emptyset$. 

       Consider the sentence $B \lor C$. Note that $|A| \subseteq |B| \subseteq |B \lor C|$. Therefore, by the definition of $U_{A}$, $|T + (B \lor C)|$ is part of the union $U_A$, so $|T+(B \lor C)| \subseteq U_{A}$. We now claim that $|C| \cap |T+(B \lor C)| \neq \emptyset$. Suppose for reductio that $|C| \cap |T+(B \lor C)| = \emptyset$. This implies that, for all worlds $m\in M_{L}$ such that $T+(B\lor C)\subseteq m$, $C\notin m$, and hence $C\notin T+(B\lor C)$. Since $T+(B\lor C)$ is a theory, $\neg C \in T+(B \lor C)$. Since $T+(B \lor C)$ is consistent by (+4), it cannot imply $\neg(B \lor C)$. Since it implies $\neg C$, it must be that $\neg B \notin T+(B \lor C)$ (otherwise it would imply both negations, and thus the negation of the disjunction). Since $\neg B \notin T+(B \lor C)$, we can apply (+7) and (+8) to establish:

       $$
       T+((B \lor C) \land B) = Cn((T+(B \lor C)) \cup \{ B \})
       $$

       Since $((B \lor C) \land B)$ is logically equivalent to $B$, the LHS is $T+B$. If $\neg C \in T+(B \lor C)$ (as assumed), then $\neg C$ must also be in the expansion on the RHS. Therefore, $\neg C \in T+B$. But this means $|C| \cap |T+B| = \emptyset$ (for any $m\in M_{L}$ is consistent), contradicting assumption (ii) above.

       Therefore, $|C| \cap |T+(B \lor C)| \neq \emptyset$, which implies $\neg C \notin T+(B \lor C)$. We can now apply (+8):

       $$
       Cn((T+(B \lor C)) \cup \{ C \}) \subseteq T+((B \lor C) \land C) = T+C
       $$

       We now translate this syntactic inclusion into semantic set inclusion. Recall that if theory $X \subseteq Y$, then $|Y| \subseteq |X|$.

       $$
       \begin{align*}
       |T+C| &\subseteq |Cn((T+(B \lor C)) \cup \{ C \})| \\
       &= |T+(B \lor C)| \cap |C| & [*]\\
       &\subseteq |T+(B \lor C)|
       \end{align*}
       $$

       Since we established earlier that $|T+(B \lor C)| \subseteq U_A$, it follows by transitivity that $|T+C| \subseteq U_A$. Thus, Swallowing holds.

> [!NOTE]- Step $[*]$
> 
> The step denoted by $[*]$ relies on a crucial relationship between *syntactic expansion* and *semantic intersection of truth-sets*. The following provides justification for why $|Cn(K \cup \{ C \})| = |K| \cap |C|$ (where $K$ is the theory $T+(B \lor C)$).
> 
> First, note that the following holds:
> 
>$$
>m \in |Cn(K \cup \{ C \})| \iff K \subseteq m \text{ and } C \in m
>$$
> $(\implies)$ obviously holds: since $K\subseteq Cn(K\cup \{ C \})$ and $C\in Cn(K\cup \{ C \})$, if $Cn(K\cup \{ C \})\subseteq m$, clearly $K \subseteq m$ and $C\in m$. $(\impliedby)$ suppose now that $K \subseteq m$ and $C\in m$. Since $K \cup \{ C \}\subseteq m$ *ex hypothesi*, by Monotonicity $Cn(K\cup \{ C \})\subseteq Cn(m)=m$, for $m$ is a theory. Hence, $m\in \left| Cn(K\cup \{ C \}) \right|$.
> 
> Moreover, the following is clearly true:
>$$
>K \subseteq m \text{ and } C \in m \iff m \in |K| \cap |C|
>$$
> For 
> 1. $K \subseteq m$ is the definition of **$m \in |K|$**.
> 2. $C \in m$ is the definition of **$m \in |C|$**.
> 
> Combining the two iffs, we get $m \in |Cn(K \cup \{ C \})|\iff m \in |K| \cap |C|$, which means that:
>$$
>\left| Cn(K\cup \{ C \}) \right| =\left| K \right| \cap \left| C \right| 
>$$
> **N.b. Don't forget that $\left| \cdot \right|$ returns different value, depending on whether its argument is a formula $C\in F$ of a set of formulas $K\subseteq F$**!

2. **Prove (2b)**. We need to prove $U_A$ is the Smallest Sphere (Minimality). Let $V$ be any sphere in $\mathbf{S}$ such that $V \cap |A| \neq \emptyset$. We must show $U_A \subseteq V$. Take any component $|T+B|$ that makes up $U_A$ (where $|A| \subseteq |B|$). Since $V \cap |A| \neq \emptyset$ and $|A| \subseteq |B|$, it follows that $V \cap |B| \neq \emptyset$.

   Since $V$ is a sphere in $\mathbf{S}$, it must satisfy the **Swallowing** condition. Because $V$ intersects $|B|$, by (Swallowing) $|T+B| \subseteq V$. Since this holds for every $B$ such that $|A| \subseteq |B|$, the entire union is contained in $V$:

   $$

   U_A \subseteq V

   $$

We have constructed a set $U_A$ that is a valid sphere in $\mathbf{S}$, intersects $|A|$, and is a subset of every other sphere intersecting $|A|$. Thus, Condition (S4) holds.

**Part Two: $T+A = t(f_{\mathbf{S}}(A))$**.

We need to verify that the system of spheres $\mathbf{S}$ we constructed actually generates the original revision function $+$. Specifically, we want to prove:

$$T+A = t(f_{\mathbf{S}}(A))$$

We will prove the stronger condition that the sets of worlds are identical:

$$|T+A| = |A| \cap c(A)$$

**Case 1: $A$ is Inconsistent ($\neg A \in L$)**. 
1. By Postulate **(+2)**, $A \in T+A$. If $A$ is logically false, then $T+A$ contains a contradiction, so $T+A=F$ (the inconsistent theory). Thus, $|T+A| = \emptyset$.
2. On the sphere side, if $A$ is inconsistent, $|A| = \emptyset$. Therefore, $f_{\mathbf{S}}(A) = |A| \cap c(A) = \emptyset \cap c(A) = \emptyset$.
3. The equality holds: $|T+A| = \emptyset = |A| \cap c(A)$.

**Case 2: $A$ is Consistent ($\neg A \notin L$)**. We prove the equality by mutual inclusion.

**Direction 1: $|T+A| \subseteq |A| \cap c(A)$**
1. Since $A$ is consistent, by Postulate **(+4)**, $T+A$ is consistent, so $|T+A| \neq \emptyset$. Also, $A \in T+A$ implies $|T+A| \subseteq |A|$.
2. Recall that $c(A)$ is the smallest sphere in $\mathbf{S}$ intersecting $|A|$. Since $|T+A| \subseteq |A|$ and $|T+A| \neq \emptyset$, we know $|A| \cap \bigcup \mathbf{S} \neq \emptyset$, so $c(A)$ exists.
3. Since $c(A)$ is a sphere in our system $\mathbf{S}$, it must satisfy the **Swallowing** condition, i.e. if $|A| \cap c(A) \neq \emptyset$, then $|T+A| \subseteq c(A)$.
4. Since $c(A)$ is the smallest sphere intersecting $|A|$, the antecedent is true. Therefore, $|T+A| \subseteq c(A)$.
5. Combining this with $|T+A| \subseteq |A|$, we get:
   $$|T+A| \subseteq |A| \cap c(A)$$

**Direction 2: $|A| \cap c(A) \subseteq |T+A|$**. This relies on the specific sphere $U_A$ constructed in Part One. Recall $U_A = \bigcup \{ |T+B| : |A| \subseteq |B| \}$.

1. **Minimality:** In Part One, we proved that $U_A$ is a sphere intersecting $|A|$ and that for any sphere $V$ intersecting $|A|$, $U_A \subseteq V$. By definition, $c(A)$ is the smallest sphere intersecting $|A|$. Therefore, $c(A) \subseteq U_A$. *(Note: In fact, $c(A) = U_A$, but inclusion is sufficient here).*
2. **Intersecting:** Since $c(A) \subseteq U_A$, intersecting both sides with $|A|$ preserves the subset relation:
   $$|A| \cap c(A) \subseteq |A| \cap U_A$$

3. **Collapsing the Union:** We now evaluate $|A| \cap U_A$. 

$$
\begin{align*}
|A| \cap U_A &= |A| \cap \bigcup \{ |T+B| : \left| A \right| \subseteq \left| B \right| \} \\
&= \bigcup \{ |A| \cap |T+B| :\left| A \right| \subseteq \left| B \right| \}
\end{align*}
$$

Consider any term $|A| \cap |T+B|$ in this union (where $\left| A \right| \subseteq \left| B \right|$). If the intersection is empty, it contributes nothing. If the intersection is non-empty ($|A| \cap |T+B| \neq \emptyset$), then $\neg A \notin T+B$. We can apply postulates **(+7)** and **(+8)**: 

$$
\begin{align*}
(T+B)/A &= T + (B \land A) \\
&= T+A & (\text{since } \left| A \right| \subseteq \left| B \right| , \left| A\land B \right| =\left| A \right| \cap \left| B \right| =\left| A \right| )
\end{align*}
$$

In terms of worlds: $|T+B| \cap |A| = |T+A|$. Therefore, every non-empty component of the union is exactly equal to $|T+A|$. Thus:

$$

|A| \cap U_A = |T+A|

$$

4. **Conclusion:** Substituting this back into step 2:

$$

|A| \cap c(A) \subseteq |T+A|

$$

Concluding, since we have proved both $|T+A| \subseteq |A| \cap c(A)$ and $|A| \cap c(A) \subseteq |T+A|$, we have:

$$

|T+A| = |A| \cap c(A)

$$

Since $T+A$ is a theory, by [[#^243d0b]] (prop.2) applying the theory operator $t(\cdot)$ to both sides yields:

$$

\begin{align*}

t(\left| T+A \right| )&=t(\left| A \right| \cap c(A)) \\

T+A &= t(f_{\mathbf{S}}(A))

\end{align*}

$$

`eproof`

## 4.3. Examples: Constructing $\mathbf{S}$ from $+$

To illustrate the construction in [[#^f347f9]], consider a language with 3 propositional variables $\mathcal{L}=\{ p,q,r \}$. The set of possible worlds $M_L$ consists of the $2^3=8$ worlds $m\in M_{L}$, defined as follows:

$$
M_{L}=\{ Cn(\alpha): \alpha\in AT^{\mathcal{L}} \}
$$

where $AT^\mathcal{L}$ is the set of maximally consistent conjunctions of literals, in this case:

$$
AT^{\mathcal{L}}=\{ p\land q \land r,\quad p \land q \land \neg  r,\quad p \land \neg  q \land r,\quad \dots,\quad \neg  p \land \neg q \land \neg r \}
$$
**1. The Setup**

- **Theory ($T$):** Let $T = Cn(p \land q)$. $\left| T \right| = \{ 111, 110 \}$
- **Hamming Distance ($d$):** Let $d(w, w')$ be the number of propositional variables on which worlds $w$ and $w'$ differ. We extend this to the distance between a world and a set of worlds:

$$
d(w, |T|) = \min \{ d(w, t) : t \in |T| \}
$$
- **The Revision Policy ($+$):** We define $+$ to be the standard distance-based revision. For any $A \in F$:
$$
\begin{align*}
|T+A| &= \{ w \in |A| : \forall w' \in |A|, d(w, |T|) \leq d(w', |T|) \} \\
T+A &= t(\left| T+A \right| ) = \bigcap \left| T+A \right| 
\end{align*}
$$ 

*(In words: $T+A$ selects the worlds in $|A|$ that are closest to $|T|$.)*

> [!info]- Verifying $+$ Satisfies (+1)-(+8)
> 
> **(+1) Closure:** $T+A = Cn(T+A)$.
> - **Proof:** By definition, $T+A = t(S)$ for the set $S = |T+A|$. By **Property 1 of $t$** (see [[#^243d0b]]), $t(S)$ is always a theory (closed under consequence) for any $S \subseteq M_L$.
> 
> **(+2) Success:** $A \in T+A$.
> - **Proof:**
>     1. By definition, $|T+A| \subseteq |A|$.
>     2. By **Property 5 of $t$** (Reverse Inclusion), if $S \subseteq S'$, then $t(S') \subseteq t(S)$.
>     3. Setting $S = |T+A|$ and $S' = |A|$, we get $t(|A|) \subseteq t(|T+A|)$.
>     4. By **Property 2 of $t$**, $t(|A|) = Cn(A)$.
>     5. Therefore, $Cn(A) \subseteq T+A$, which implies $A \in T+A$.
> 
> **(+3) Expansion:** If $\neg A \notin T$, then $T+A = Cn(T \cup \{A\})$.
> - **Proof:**
>     1. $\neg A \notin T$ implies $T$ is consistent with $A$, so $|T| \cap |A| \neq \emptyset$.
>     2. For any $w \in |T|$, $d(w, |T|) = 0$. For any $w \notin |T|$, $d(w, |T|) > 0$.
>     3. Since $|A|$ contains worlds at distance 0 (those in $|T|$), the minimum distance in $|A|$ is 0.
>     4. Thus, $|T+A| = \{ w \in |A| : d(w, |T|) = 0 \} = |A| \cap |T|$.
>     5. Applying $t$: $T+A = t(|A| \cap |T|)$.
>     6. By **Property 4 of $t$** (see [[#^243d0b]]), $t(|T| \cap |A|) = Cn(t(|T|) \cup \{A\})$.
>     7. Since $t(|T|) = T$, we have $T+A = Cn(T \cup \{A\})$.
> 
> **(+4) Consistency:** If $\neg A \notin L$, then $Cn(T+A) \neq F$.
> - **Proof:**
>     1. $\neg A \notin L$ means $A$ is consistent, so $|A| \neq \emptyset$.
>     2. The set of distances $\{ d(w, |T|) : w \in |A| \}$ is a non-empty set of non-negative integers. By the well-ordering principle, it has a minimum.
>     3. Therefore, $|T+A| \neq \emptyset$.
>     4. By **Property 3 of $t$**, $t(S)$ is consistent if and only if $S \neq \emptyset$. Thus $T+A$ is consistent.
> 
> **(+5) Extensionality:** If $A \leftrightarrow B \in L$, then $T+A = T+B$.
> - **Proof:** If $\vdash A \leftrightarrow B$, then $|A| = |B|$. Since the definition of $|T+A|$ depends solely on $|A|$ and the fixed distance metric, $|T+A| = |T+B|$. Consequently, $t(|T+A|) = t(|T+B|)$.
> 
> **(+7) Superexpansion:** $T+(A \land B) \subseteq Cn((T+A) \cup \{B\})$.
> - **Strategy:** Use Property 5 of $t$ (Reverse Inclusion). To prove $Theory_1 \subseteq Theory_2$, we prove $|Theory_2| \subseteq |Theory_1|$.
> - **Target Semantic Inclusion:** $|(T+A)/B| \subseteq |T+(A \land B)|$?
>     - Recall $|(T+A)/B| = |Cn(T+A \cup \{B\})| = |T+A| \cap |B|$ (see [[#^db91ac]]).
>     - Target: $|T+A| \cap |B| \subseteq |T+(A \land B)|$.
> - **Proof:**
>     1. Let $w \in |T+A| \cap |B|$.
>     2. Since $w \in |T+A|$, $w$ minimizes distance in $|A|$. Let this minimal distance be $k$.
>     3. Since $w \in |A|$ and $w \in |B|$, $w \in |A \cap B| = |A \land B|$.
>     4. Does $w$ minimize distance in $|A \land B|$?
>         - Since $|A \land B| \subseteq |A|$, every world in the intersection has distance $\ge k$ (the minimum of the superset).
>         - Since $d(w, |T|) = k$, $w$ achieves this minimum.
>     5. Thus, $w \in |T+(A \land B)|$.
>     6. We have shown $|T+A| \cap |B| \subseteq |T+(A \land B)|$.
>     7. Applying $t$: $t(|T+(A \land B)|) \subseteq t(|T+A| \cap |B|)$.
>     8. $T+(A \land B) \subseteq Cn((T+A) \cup \{B\})$.
> 
> **(+8) Subexpansion:** If $\neg B \notin T+A$, then $Cn((T+A) \cup \{B\}) \subseteq T+(A \land B)$.
> - **Condition:** $\neg B \notin T+A$ implies $|T+A| \cap |B| \neq \emptyset$.
> - **Target Semantic Inclusion:** $|T+(A \land B)| \subseteq |T+A| \cap |B|$.
> - **Proof:**
>     1. Since $|T+A| \cap |B| \neq \emptyset$, there exists a world $v \in |A| \cap |B|$ such that $v$ achieves the global minimum distance for $|A|$ (call it $k$).
>     2. Because such a $v$ exists inside $|A \cap B|$, the minimum distance for the set $|A \cap B|$ is exactly $k$.
>     3. Let $w \in |T+(A \land B)|$. By definition, $w \in |A \cap B|$ and $d(w, |T|)$ is the minimum for $|A \cap B|$.
>     4. By step 2, $d(w, |T|) = k$.
>     5. Since $w \in |A|$ and has distance $k$ (the minimum for $|A|$), $w \in |T+A|$.
>     6. Since $w \in |A \cap B|$, $w \in |B|$.
>     7. Therefore, $w \in |T+A| \cap |B|$.
>     8. Applying $t$ (Reverse Inclusion): $t(|T+A| \cap |B|) \subseteq t(|T+(A \land B)|)$.
>     9. $Cn((T+A) \cup \{B\}) \subseteq T+(A \land B)$.

**2. Testing Candidate Spheres**
Recall the definition of $\mathbf{S}'$ from Theorem 2. A subset $U \subseteq M_L$ is in $\mathbf{S}'$ if and only if:
1. **Relevance:** $\forall u \in U, \exists A \in F: u \in |T+A|$.
2. **Swallowing:** $\forall A \in F$: if $|A| \cap U \neq \emptyset$, then $|T+A| \subseteq U$.

We calculate the distance layers relative to $|T|=\{111, 110\}$:

- **Layer 0:** $\{111, 110\}$
- **Layer 1:** $\{011, 101, 010, 100\}$ (One bit flip from either 111 or 110)
- **Layer 2:** $\{001, 100\}$.
- **Layer 3:** None (Max distance from $\{111, 110\}$ is 2, because any world is at most 2 flips away from one of the two centers).

> [!example] Valid Sphere: The “Layer 1” Radius
> Let $U_1 = \left| T \right| \cup \{ \text{All Layer 1 worlds} \}$.
> $$U_1 = \{ \mathbf{111, 110}, \mathbf{011, 101, 010, 100} \}$$
> **Checking Conditions:**
> 1.  **Relevance:** Consider $u = 011$. Let $A = \neg p \land q \land r$. Then $|A|=\{011\}$. Since $011$ is at distance 1 and no distance 0 world satisfies $A$, $|T+A| = \{011\}$. Thus $u \in |T+A|$.
> 2.  **Swallowing:** We must check that we cannot “reach” $U_1$ with a sentence $A$ that also pulls in outsiders.
>     - Suppose $|A| \cap U_1 \neq \emptyset$. This means $A$ is true in at least one world at distance 0 or 1.
>     - The revision $|T+A|$ minimizes distance. Since $A$ has witnesses at distance $\le 1$, the minimum distance is either 0 or 1.
>     - Therefore, $|T+A|$ will contain *only* worlds at distance 0 or 1.
>     - All such worlds are already in $U_1$. Thus $|T+A| \subseteq U_1$.
> 
> **Result:** $U_1 \in \mathbf{S}$.

> [!example] Invalid Set: The “Lopsided” Set (Fails Swallowing)
> Let $U_{lop} = \left| T \right| \cup \{ \mathbf{011} \}$.
> *(This set contains the center and one specific world from Layer 1, but excludes the others).*
> 
> **Testing Swallowing:**
> Consider the sentence $A = \neg p \land q$.
> - **Step 1.** $|A| = \{ 011, 010 \}$.
> - **Step 2.** Does $|A|$ intersect $U_{lop}$?
>     - Yes, $011 \in |A|$ and $011 \in U_{lop}$. The intersection is non-empty.
> - **Step 3.** Calculate $|T+A|$.
>     - $d(011, |T|) = 1$ (flip $p$ from $111$).
>     - $d(010, |T|) = 1$ (flip $p$ from $110$).
>     - Since both are at distance 1, the revision keeps **both** (by the definition of $+$).
>     - $|T+A| = \{ 011, 010 \}$.
> - **Step 4: Containment.** Is $|T+A| \subseteq U_{lop}$?
>     - $\{ 011, 010 \} \nsubseteq \{ 111, 110, 011 \}$.
>     - The world $010$ is missing.
> 
> **Result:** $U_{lop} \notin \mathbf{S}$. The set is rejected because spheres must be “symmetric” with respect to the revision policy; they cannot include one equidistant world while excluding another.

> [!example] Invalid Set: The “Hollow” Set (Fails Swallowing)
> Let $U_{hol} = \left| T \right| \cup \{ \mathbf{000} \}$.
> *(This set contains the center and a distant world at Layer 2, but skips Layer 1).*
> 
> **Testing Swallowing:**
> Consider the sentence $A = \neg p$.
> - **Step 1: The Truth Set.** $|A| = \{ 000, 001, 010, 011 \}$.
> - **Step 2: Intersection.** Does $|A|$ intersect $U_{hol}$?
>     - Yes, $000 \in |A|$ and $000 \in U_{hol}$.
> - **Step 3: The Revision.** Calculate $|T+A|$.
>     - We look for $\neg p$ worlds with minimal distance to $|T|$.
>     - $d(000, |T|) = 2$.
>     - $d(001, |T|) = 2$.
>     - $d(010, |T|) = 1$.
>     - $d(011, |T|) = 1$.
>     - The minimum is 1. Thus, $|T+A| = \{ 010, 011 \}$.
> - **Step 4: Containment.** Is $|T+A| \subseteq U_{hol}$?
>     - $\{ 010, 011 \} \cap \{ 111, 110, 000 \} = \emptyset$.
>     - $|T+A|$ is completely outside $U_{hol}$.
> 
> **Result:** $U_{hol} \notin \mathbf{S}$. By including the “far” world $000$, the sphere effectively claims “I contain all worlds as plausible as $000$.” Since $010$ is *more* plausible (closer) than $000$, it must be included for the set to be a valid sphere.

# 5. Alternative Modelling

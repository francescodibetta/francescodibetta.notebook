---
title: Session 1 - Summary of definitions
description:
draft: false
parental-note: "[[RG FormEp - Session 1]]"
pdf: RG FormEp - Session 1 (Summary of Definitions).pdf
share_pdf: true
tags:
---

# 1. Formal Preliminaries: Formal Language, Truth at a World, and Logical Consequence

> [!def]+ Language $\mathcal{L}$
> A formal language $\mathcal{L}$ is defined as follows. Let $\Phi$ be a (countable) set of objects called “propositional variables”, that is $\Phi:=\{ p_{1},p_{2},p_{3},\dots \}$. Then, we define $\mathcal{L}$ via induction as follows.
> 1. Base: $\Phi \subseteq \mathcal{L}$.
> 2. Step: For all $\phi,\psi\in \mathcal{L}$:
> 	1. If $\phi\in \mathcal{L}$, then $\neg \phi \in \mathcal{L}$;
> 	2. If $\phi \in \mathcal{L}$ and $\psi\in \mathcal{L}$ then $\phi \land \psi \in \mathcal{L}$;
> 	3. If $\phi \in \mathcal{L}$ and $\psi\in \mathcal{L}$ then $\phi \lor \psi \in \mathcal{L}$;
> 	4. If $\phi \in \mathcal{L}$ and $\psi\in \mathcal{L}$ then $\phi \rightarrow \psi\in \mathcal{L}$.
> 3. Nothing else is in $\mathcal{L}$.

> [!def]+ Interpretations and Truth ($\models$)
> Let $\mathcal{L}$ be given. A possible world (or interpretation) $w$ is a function $w: \Phi \to \{0, 1\}$ that assigns a truth value to each propositional variable $p \in \Phi$. Let $W$ be the set of **all** possible worlds.
> 
> We define the satisfaction relation $w \models \phi$ (read as “$\phi$ is true at $w$”) via induction on the structure of $\phi$:
> 1. Base: For all $p\in\Phi$, $w \models p \iff w(p) = 1$.
> 2. Step: For all $\phi,\psi\in \mathcal{L}$:
> 	1. $w \models \neg\phi \iff w \not\models \phi$;
> 	2. $w \models \phi \land \psi \iff w \models \phi \text{ and } w \models \psi$.

# 2. Properties of Logical Consequence Relations and Operators

## 2.1. Logical Consequence

> [!def]+ Logical Consequence ($\vdash$)
> Let $\phi,\psi \in \mathcal{L}$ and $W$ be given. We say that $\psi$ follows logically from $\phi$, $\phi \vdash \psi$, iff the latter is true at all the worlds $w$ that make the former true. In symbols:
>$$
>\phi \vdash \psi \quad:\iff\quad \text{For all } w\in W: w \models \phi \implies w \models \psi
>$$

^1a0e4b

> [!def]+ Consequence Operator $Cn$
> Let $\vdash$ be given. We define the consequence operator $Cn$ (of $\vdash$) as a function from sets of sentences $A\subseteq \mathcal{L}$ to sets of sentences $B\subseteq \mathcal{L}$:
> $$
>Cn(A) := \{ \phi \in \mathcal{L} : A \vdash \phi \} 
>$$
> *N.b.*, $Cn$ is a function from $\mathcal{P}(\mathcal{L})$ to $\mathcal{P}(\mathcal{L})$.

^c51f92

> [!def]+ Belief Sets
> Let $B$ be a subset of $\mathcal{L}$. $B$ is a belief set if, and only if, the following equivalence holds:
> $$
> B = Cn(B)
>$$
> Let us call $\mathbf{B}$ the set of all belief sets.

## 2.2. Properties of Logical Consequence Relation and Operator

> [!proposition]+
> Let $\vdash$ be the consequence relation defined in [[#^1a0e4b]] . $\vdash$ is 
> 
> 1. Reflexive: $\text{For all } \gamma\in \Gamma:  \Gamma \triangleright \gamma$
> 2. Transitive: $\text{If } \Gamma \triangleright \delta \text{ for all } \delta\in \Delta \text{, and } \Delta \triangleright \phi \implies  \Gamma \triangleright \phi$.
> 3. Monotonic: $\text{If } \Gamma \triangleright \phi \text{ and } \Gamma \subseteq \Delta  \implies  \Delta \triangleright \phi$.

> [!proposition]+
> Let $\vdash$ be the consequence relation defined in [[#^1a0e4b]] , and $Cn$ the consequence operator defined in [[#^c51f92]] based on $\vdash$. $Cn$ satisfies the following properties:
> 1. **Reflexivity**: For all $\Gamma \subseteq \mathcal{L}$, $\Gamma \subseteq Cn(\Gamma)$.
> 2. **Transitivity**: For all $\Gamma,\Delta \subseteq \mathcal{L}$, if $\Delta \subseteq Cn(\Gamma)$ then $Cn(\Delta)\subseteq Cn(\Gamma)$.
> 3. **Monotonicity**: For all $\Gamma,\Delta \subseteq \mathcal{L}$, if $\Delta \subseteq \Gamma$ then $Cn(\Delta)\subseteq Cn(\Gamma)$.
> 4. **Idempotence**: For all $\Gamma \subseteq \mathcal{L}$, $Cn(Cn(\Gamma))=Cn(\Gamma)$.

> [!proposition]+
> Let $\vdash$ be the consequence relation defined in [[#^1a0e4b]] . The following properties hold for $\vdash$.
> 
> 1. **Compactness**: $\Gamma \vdash \phi \implies \exists\Gamma_{fin}\subseteq \Gamma \text{ such that } \Gamma_{fin} \vdash \phi$, where $\Gamma_{fin}$ is a finite subset of $\Gamma$.
> 2. **Deduction Theorem**: If $\Gamma \cup \{ \phi \} \vdash \psi$, then $\Gamma \vdash \phi \rightarrow \psi$.
> 3. **Disjunction in the Premises**: If $\Gamma \cup \{ \phi_{1} \} \vdash \psi$ and $\Gamma \cup \{ \phi_{2} \}\vdash \psi$, then $\Gamma \cup \{ \phi_{1}\lor \phi_{2} \}\vdash \psi$.

# 3. Belief Revision Theory

Let $B\in \mathbf{B}$ be any belief set, $\phi\in \mathcal{L}$ be any sentence, and $*:\mathbf{B}\times \mathcal{L}\to \mathbf{B}$ a candidate revision function. $*$ is a (AGM) **(basic) belief revision function** iff it satisfies the following postulates:

$$
\begin{array}{cl}
B*\phi \text{ is a belief set} && \text{(Closure)} \\\\
\phi \in B*\phi && \text{(Success)} \\ \\
\text{If $\phi \nvdash \bot $, then $Cn(B* \phi)\neq \mathcal{L}$}&& \text{(Consistency)} \\ \\
B*\phi \subseteq Cn(B \cup \{ \phi \})&& \text{(Inclusion)} \\ \\
\text{If } B\nvdash \neg \phi \text{, then } B*\phi = Cn(B \cup { \phi })&& \text{(Vacuity)} \\ \\ 
\text{If } Cn(\{ \phi \})=Cn(\{ \psi \}) \text{, then } B*\phi=B*\psi&& \text{(Congruence)}
\end{array}
$$

$*$ is a **belief revision function** iff it satisfies also the following postulates

$$
\begin{array}{cl}
B*(\phi \land \psi) \subseteq (B*\phi)+\psi  && \text{(Superexpansion)} \\ \\
\text{If } B*\phi \nvdash \neg \psi \text{, then } (B*\phi)+ \psi \subseteq B*(\phi \land \psi)
&& \text{(Subexpansion)}
\end{array}
$$

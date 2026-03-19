---
title: Session 2 - Summary of definitions
description:
draft: false
parental-note: "[[RG FormEp - Session 2]]"
pdf: RG FormEp - Session 2 (Summary of Definitions).pdf
share_pdf: true
tags:
---

# AGM Belief Revision Postulates

Basic postulates:
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
Additional postulates:

$$
\begin{array}{cl}
B * (\phi \land \psi) \subseteq (B * \phi) + \psi  & \text{(Superexpansion)} \\\\
\text{If } B * \phi \nvdash \neg \psi \text{, then } (B * \phi) + \psi \subseteq B * (\phi \land \psi) & \text{(Subexpansion)}
\end{array}
$$

# Truth-Sets

![[RG FormEp - Session 2#^03327a]] 

![[RG FormEp - Session 2#^e85e7f]] 

# Properties of Theory Function and Truth-Set Function



**Theory Function $T(\cdot)$**: For all $V\subseteq W$:

$$
T(V):= \{ \phi\in \mathcal{L}: V \subseteq [\phi] \}
$$

![[RG FormEp - Session 2#^3c7168]] 


**Properties of $\preceq_{B}$**:

1. **Connectedness**: For any worlds $w_{1},w_{2}\in W$: Either $w_{1}\preceq_{B} w_{2}$ or $w_{2}\preceq_{B} w_{1}$. 
2. **Transitivity**: For any worlds $w_{1},w_{2},w_{3}\in W$: If $w_{1}\preceq_{B} w_{2}$ and $w_{2}\preceq_{B} w_{3}$, then $w_{1}\preceq_{B} w_{3}$.
3. **Centeredness**:
	1. If $w_{1}, w_{2} \in [B]$, then $w_{1} \preceq_{B} w_{2}$.
	2. If $w_{1} \in [B]$ and $w_{2} \notin [B]$, then $w_{1} \prec_{B} w_{2}$.
4. **Limit Assumption**: For any sentence $\phi\in \mathcal{L}$: If $[\phi]\neq \emptyset$, then there exists at least one world $w_{1}\in [\phi]$ such that $w_{1}\preceq_{B} w_{2}$ for all $w_{2}\in [\phi]$.

**Definition of $B*\phi$**:

$$
B*\phi:= T(\min_{B}([\phi]))
$$
where $\min_{B}([\phi]):=\{ w\in [\phi] : \text{For all }w'\in [\phi], w\preceq_{B} w' \}$.
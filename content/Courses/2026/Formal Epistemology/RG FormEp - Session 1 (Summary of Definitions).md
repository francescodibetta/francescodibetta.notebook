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

![[RG FormEp - Session 1#^3b8651]] 

![[RG FormEp - Session 1#^e1e724]] 

# 2. Properties of Logical Consequence Relations and Operators

## 2.1. Logical Consequence

![[RG FormEp - Session 1#^38e024]] 

![[RG FormEp - Session 1#^ba4d33]] 

![[RG FormEp - Session 1#^a62a38]] 
## 2.2. Properties of Logical Consequence Relation and Operator


![[RG FormEp - Session 1#^41852b]] 

![[RG FormEp - Session 1#^db37aa]] 

![[RG FormEp - Session 1#^f2862f]] 
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

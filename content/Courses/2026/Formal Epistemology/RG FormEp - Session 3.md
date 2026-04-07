---
title: Session 3
description:
draft: false
parental-note: "[[Courses/2026/Formal Epistemology/index]]"
pdf: RG FormEp - Session 3.pdf
share_pdf: true
tags:
---
In today's session, we will tackle the second half of the representation theorem introduced last time: the “completeness” part. Specifically, we will prove that if a revision operator $*$ satisfies the six basic and two supplementary postulates, then for any belief set $B$, we can construct a corresponding ordering $\preceq_{B}$. This ordering will satisfy the four structural properties outlined [[RG FormEp - Session 2|in the previous session]] and guarantee that:

$$
B*\phi=T(\min_{B}([\phi]))
$$

I have pasted the full statement of the theorem below as a refresher. In the following section, we will dive directly into the proof.

![[RG FormEp - Session 2#^97e681]]


# Part Two: “Completeness” (Finite Language)

Let us now prove the second half of the [[RG FormEp - Session 2#^97e681|Representation Theorem]]—the “Completeness” direction. This result establishes that any belief revision operator $*$ satisfying the eight AGM postulates discussed in [[RG FormEp - Session 1|Session 1]] can be reconstructed using our possible worlds semantics.

To proceed with this proof, we must now explicitly assume that our propositional language $\mathcal{L}$ is finite. This assumption allows us to construct formulas that isolate specific sets of possible worlds.

Let $\Phi = \{p_1, \dots, p_n\}$ be the finite set of propositional variables generating $\mathcal{L}$. For any world $w \in W$, we define the state description $\delta_w$ as the conjunction of all literals satisfied by $w$:

$$
\delta_w := \bigwedge_{p \in \Phi} l_p \quad\quad \text{where } l_p = \begin{cases}
p &\text{ if } w \models p  \\
\neg p & \text{ if } w \not\models p
\end{cases}
$$

We define the function $form : \mathcal{P}(W) \to \mathcal{L}$ such that for any subset of worlds $V \subseteq W$:

$$
form(V) := \bigvee_{w \in V} \delta_w
$$

For a single world $w$, we simply write $form(w)$ instead of $form(\{w\})$.

> [!note]+ A Technical Detail on $form$
> Strictly speaking, defining $form(V)$ as simply $\bigvee_{w \in V} \delta_w$ does not yield a mathematically well-defined function. Syntactically, the formula $p_1 \lor \neg p_2$ is a completely different string than $\neg p_2 \lor p_1$, even though they are logically and semantically identical. To make $form$ a proper function that maps to **a unique formula**, we would need to specify a strict lexicographical ordering for how the disjuncts are arranged. 
> 
> Because the AGM postulates guarantee that our revision operator treats logically equivalent formulas identically (Postulate 6), we can safely abstract away from these syntactic details for the remainder of the proof.

Before proving the completeness part of the [[RG FormEp - Session 2#^97e681|Representation Theorem]], let me state a crucial lemma that we will need later on.

> [!lemma]
> Let $\mathcal{L}$ be finite and let $form$ be the function defined above. 
> $$
>\text{For all }w'\in W:  w' \models form(w) \iff w' = w
>$$
^b4ff45

`bproof` Let $w \in W$. By definition, $form(w)$ is the conjunction of all literals satisfied by $w$. Let $w' \in W$ be an arbitrary world.
* ($\impliedby$) If $w' = w$, $w'$ assigns the exact same truth values to all propositional variables as $w$. Hence, it satisfies every literal in $form(w)$, meaning $w' \models form(w)$.
* ($\implies$) If $w' \neq w$, there must be at least one propositional variable $p \in \Phi$ on which they differ. Without loss of generality, suppose $w \models p$ and $w' \not\models p$. Then the literal $p$ is a conjunct in $form(w)$. Since $w' \not\models p$, $w'$ fails to satisfy this conjunct, and therefore $w' \not\models form(w)$. 

Thus, $w' \models form(w)$ if and only if $w' = w$. `eproof`

> [!corollary]
> Let $\mathcal{L}$ be finite, let $form$ be the function defined above, and let $[\cdot]$ be the [[RG FormEp - Session 2#^03327a|truth-set function]]. 
> $$
>\text{For all } V \subseteq W:  [form(V)] = V
>$$

`bproof` We prove this equality by mutual inclusion. Recall that by definition, $form(V) = \bigvee_{w \in V} form(w)$.

* ($\subseteq$) Suppose $w' \in [form(V)]$. By the definition of the truth-set function, $w' \models \bigvee_{w \in V} form(w)$. By the semantics of disjunction, there exists at least one world $w \in V$ such that $w' \models form(w)$. By Lemma [[#^b4ff45]], this strictly entails $w' = w$. Since $w \in V$, it follows that $w' \in V$. 
* ($\supseteq$) Suppose $w' \in V$. By Lemma [[#^b4ff45]], we know that $w' \models form(w')$. Because $form(w')$ is one of the disjuncts in the formula $\bigvee_{w \in V} form(w)$, classical semantics guarantees that $w' \models \bigvee_{w \in V} form(w)$. Thus, $w' \models form(V)$, which means $w' \in [form(V)]$.

Therefore, $[form(V)] = V$. `eproof`

> [!lemma] Completeness
> Let $\mathcal{L}$ be a finite propositional language and $W$ be the corresponding space of possible worlds. Let $B \subseteq \mathcal{L}$ be a belief set. If $*$ is a revision operator on $B$ that satisfies all eight AGM postulates, then there exists a plausibility ordering $\preceq_B$ on $W$ satisfying Connectedness, Transitivity, Centeredness, and the Limit Assumption, such that for every formula $\phi \in \mathcal{L}$:
> $$B * \phi = T(\min_B([\phi]))$$

`bproof` Assume $B\subseteq \mathcal{L}$ is a belief set, and let $*$ be a revision operator on $B$ that satisfies all eight AGM postulates. Because $\mathcal{L}$ is finite, we can define the weak plausibility ordering $\preceq_B$ on $W$ directly from the revision operator using the exact method of Katsuno and Mendelzon. For any $w_1, w_2 \in W$:

$$
w_1 \preceq_B w_2 \quad :\iff \quad w_1 \in [B] \text{ or } w_1 \in [B * form(\{w_1, w_2\})]
$$

Now, let us prove that Connectedness, Transitivity, Centeredness, and the Limit Assumption hold for $\preceq_B$.

**Part One: Properties of $\preceq_{B}$**.

**1. Connectedness**. We must show that for any $w_1, w_2 \in W$, either $w_1 \preceq_B w_2$ or $w_2 \preceq_B w_1$.
If either $w_1 \in [B]$ or $w_2 \in [B]$, then the condition is trivially satisfied by definition.

Suppose neither world is in $[B]$. Let $\psi = form(\{w_1, w_2\})$. Since $[\psi] = \{w_1, w_2\} \neq \emptyset$, Postulate 5 (Consistency) ensures that $[B * \psi] \neq \emptyset$.
By Postulate 2 (Success), $B * \psi \vdash \psi$, which semantically means $[B * \psi] \subseteq [\psi] = \{w_1, w_2\}$.
Because $[B * \psi]$ is a non-empty subset of $\{w_1, w_2\}$, it must contain $w_1$, $w_2$, or both.

1. If $w_1 \in [B * form(\{w_1, w_2\})]$, then $w_1 \preceq_B w_2$.
2. Suppose that $w_2 \in [B * form(\{w_1, w_2\})]$. Note that $form(\{w_1, w_2\})$ is logically equivalent to $form(\{w_2, w_1\})$. By Postulate 6 (Congruence), logically equivalent formulas yield identical revised belief sets. Thus, $w_2 \in [B * form(\{w_2, w_1\})]$, meaning $w_2 \preceq_B w_1$.

Therefore, $\preceq_B$ is connected.

**2. Transitivity**. Suppose $w_1 \preceq_B w_2$ and $w_2 \preceq_B w_3$. We must show $w_1 \preceq_B w_3$.

**Case 1: $w_1 \in [B]$**. By definition, $w_1 \preceq_B w_3$ immediately follows.

**Case 2: $w_1 \notin [B]$**. We need to prove that $w_{1}\in [B*form(\{ w_{1},w_{3} \})$. Since $w_1 \preceq_B w_2$ and $w_{1}\notin [B]$, our definition requires $w_1 \in [B * form(\{w_1, w_2\})]$.

Notice that we must also have $w_2 \notin [B]$. Suppose to the contrary that $w_2 \in [B]$. First, it immediately follows that $[B] \cap [form(\{w_1, w_2\})] \neq \emptyset$, for by [[#^b4ff45]]  $[form(\{ w_{1},w_{2} \})]=\{ w_{1},w_{2} \}$. This entails that $B \nvdash \neg form(\{ w_{1},w_{2} \})$. By Postulate 4 (Vacuity), it follows that

$$
B* form(\{ w_{1},w_{2} \}) = Cn(B\cup \{ form(w_{1},w_{2}) \})
$$
which implies
$$
[B* form(\{ w_{1},w_{2} \})] = [Cn(B\cup \{ form(w_{1},w_{2}) \})]
$$

Now, by [[RG FormEp - Session 2#^e85e7f|Session 2 – Lemma 2]], it follows that

$$
[B * form(\{w_1, w_2\})] = [B] \cap \{w_1, w_2\}
$$

Since $w_{1}\notin [B]$ and, *ex hypothesi*, $w_{2}\in [B]$, it follows that $[B * form(\{w_1, w_2\})]=[B]\cap \{ w_{1},w_{2} \}=\{ w_{2} \}$, which contradicts $w_1 \in [B * form(\{w_1, w_2\})]$.

Therefore, $w_{2}\notin B$. Similarly, since $w_2 \preceq_B w_3$ and $w_2 \notin [B]$, it must be that $w_2 \in [B * form(\{w_2, w_3\})]$. Again, we have that $w_3 \notin [B]$. (We can show in a similar way as above that, if $w_{3}\in [B]$, a contradiction follows.)

Now that we have collected many pieces of information regarding $w_{1},w_{2},w_{3}$, we can finally prove the statement that we need, i.e. $w_{1}\in [B*form(\{ w_{1},w_{3} \})]$. To do so, we proceed as follows. First, we let $\psi = form(\{w_1, w_2, w_3\})$. Then, we show that, since $w_{1}\preceq_{B} w_{2}\preceq_{B}w_{3}$, it must be the case that $w_{1} \in B*\psi$. Then, since obviously $w_{1}\in B*\psi \cap \{ w_{1},w_{3} \}$, where $\{ w_{1},w_{3} \}=[form(\{ w_{1},w_{3} \})]$, we can apply the supplementary postulates to show that $w_{1}\in [B*form(\{ w_{1},w_{3} \})]$.


First of all, since $[\psi]\neq \emptyset$, by Postulate 5 (Consistency) $[B * \psi] \neq \emptyset$. By Postulate 2 (Success), $[B * \psi] \subseteq \{w_1, w_2, w_3\}$. In other words, $[B*\psi]$ must be a non-empty subset of $\{ w_{1},w_{2},w_{3}\}$.

We evaluate which worlds are in $[B * \psi]$ via three exhaustive subcases:

**Subcase 2.1: $w_2 \in [B * \psi]$**.  This means $[B * \psi] \cap [form(\{w_1, w_2\})] \neq \emptyset$. This means that the antecedent of postulate 8 holds, i.e. that $B*\psi \nvdash \neg form(\{ w_{1},w_{2} \})$. By applying both Postulates 7 and 8, we obtain the following:
$$
B*(\psi \land form(\{ w_{1},w_{2} \})) = Cn(B*\psi \cup \{ form(\{ w_{1},w_{2} \}) \})
$$
This immediately yields 
$$
[B*(\psi \land form(\{ w_{1},w_{2} \}))] = [Cn(B*\psi \cup \{ form(\{ w_{1},w_{2} \}) \})]
$$

and [[RG FormEp - Session 2#^e85e7f|Session 2 – Lemma 2]] yields the following
  $$[B * (\psi \land form(\{w_1, w_2\}))] = [B * \psi] \cap [form(\{w_1, w_2\})]$$
  
Since $\psi \land form(\{w_1, w_2\})$ is logically equivalent to $form(\{w_1, w_2\})$, Postulate 6 allows us to simplify the left side:
$$
[B * form(\{w_1, w_2\})] = [B * \psi] \cap \{w_1, w_2\}
$$
We established earlier that $w_1 \in [B * form(\{w_1, w_2\})]$. Therefore, $w_1 \in [B * \psi] \cap \{w_1, w_2\}$, which entails $w_1 \in [B * \psi]$.


**Subcase 2.2: $w_3 \in [B * \psi]$**. This means $[B * \psi] \cap [form(\{w_2, w_3\})] \neq \emptyset$. Applying Postulates 7 and 8 exactly as above yields:

$$
[B * form(\{w_2, w_3\})] = [B * \psi] \cap \{w_2, w_3\}
$$
From our initial premise $w_2 \preceq_B w_3$ and $w_{2}\notin [B]$, we know $w_2 \in [B * form(\{w_2, w_3\})]$. Therefore, $w_2 \in [B * \psi] \cap \{w_2, w_3\}$, which strictly entails $w_2 \in [B * \psi]$. Now, because $w_2 \in [B * \psi]$, the intersection $[B * \psi] \cap [form(\{w_1, w_2\})]$ is non-empty. Applying Postulates 7 and 8 to this intersection yields:
  $$[B * form(\{w_1, w_2\})] = [B * \psi] \cap \{w_1, w_2\}$$
  From our initial premise $w_1 \preceq_B w_2$, we know $w_1 \in [B * form(\{w_1, w_2\})]$. Thus, $w_1 \in [B * \psi] \cap \{w_1, w_2\}$, proving that $w_1 \in [B * \psi]$.

**Subcase 2.3: Neither $w_2$ nor $w_3$ is in $[B * \psi]$**. Since $[B * \psi]$ is a non-empty subset of $\{w_1, w_2, w_3\}$, its only remaining possible element must be $w_1$. Thus, $w_1 \in [B * \psi]$.

In all possible subcases, we have proved that $w_1 \in [B * \psi]$.

Finally, since $w_1 \in \{w_1, w_3\}$, the intersection $[B * \psi] \cap [form(\{w_1, w_3\})]$ is non-empty. Applying Postulates 7 and 8 one last time yields:
$$[B * form(\{w_1, w_3\})] = [B * \psi] \cap \{w_1, w_3\}$$
Because $w_1 \in [B * \psi]$ and $w_1 \in \{w_1, w_3\}$, it follows that $w_1 \in [B * form(\{w_1, w_3\})]$. By our definition, this concludes $w_1 \preceq_B w_3$.

[...]

**Part Two: Proving the Equality**.

[...]

`eproof`
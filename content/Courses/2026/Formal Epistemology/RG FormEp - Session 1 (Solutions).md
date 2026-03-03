---
title: Session 1 - Solutions to Exercises
description:
draft: true
parental-note:
pdf:
share_pdf: false
tags:
---

# Exercise 1

**Exercise:** Prove that classical semantic consequence $\vdash$ is reflexive, transitive, and monotonic.

**Solution:** Let $\Gamma, \Delta \subseteq \mathcal{L}$ be arbitrary sets of sentences, and let $w$ represent an arbitrary possible world. 

* **$\vdash$ is Reflexive:** Let $\gamma$ be an arbitrary sentence in $\Gamma$. Consider any world $w$ such that $w \models \Gamma$ (meaning $w$ satisfies every sentence in $\Gamma$). Since $\gamma \in \Gamma$, it trivially follows that $w \models \gamma$. Because $w$ was an arbitrary world satisfying the premises, we conclude $\Gamma \vdash \gamma$.
* **$\vdash$ is Transitive:** Assume $\Gamma \vdash \delta$ for all $\delta \in \Delta$, and assume $\Delta \vdash \phi$. Consider an arbitrary world $w$ such that $w \models \Gamma$. By our first assumption, $w \models \delta$ for every $\delta \in \Delta$. This is logically equivalent to saying $w \models \Delta$. Because $w \models \Delta$, our second assumption ($\Delta \vdash \phi$) guarantees that $w \models \phi$. Since $w$ was an arbitrary world satisfying $\Gamma$, we conclude $\Gamma \vdash \phi$.
* **$\vdash$ is Monotonic:** Assume $\Gamma \subseteq \Delta$ and $\Gamma \vdash \phi$. Consider an arbitrary world $w$ such that $w \models \Delta$. Because $\Gamma \subseteq \Delta$, any world that satisfies all of $\Delta$ must also satisfy all of $\Gamma$; therefore, $w \models \Gamma$. Since $\Gamma \vdash \phi$, it follows that $w \models \phi$. Since $w$ was an arbitrary world satisfying $\Delta$, we conclude $\Delta \vdash \phi$. 

# Exercise 2

**Exercise:** Prove that the classical consequence operator $Cn$ satisfies reflexivity, transitivity, monotonicity, and idempotence.

**Solution:** Reflexivity, transitivity, and monotonicity for $Cn$ follow directly from the corresponding properties of the semantic consequence relation $\vdash$ proved in Exercise 1, simply by translating them through the definition $Cn(\Gamma) := \{ \phi \in \mathcal{L} : \Gamma \vdash \phi \}$. We will explicitly prove the fourth property: Idempotence.

To prove set equality, we must prove mutual inclusion.

**$(\subseteq)$ Prove $Cn(\Gamma) \subseteq Cn(Cn(\Gamma))$:** This direction follows immediately from the reflexivity of $Cn$. Reflexivity states that for any set $X$, $X \subseteq Cn(X)$. By substituting $Cn(\Gamma)$ for $X$, we immediately get $Cn(\Gamma) \subseteq Cn(Cn(\Gamma))$.

**$(\supseteq)$ Prove $Cn(Cn(\Gamma)) \subseteq Cn(\Gamma)$:** Let $\phi$ be an arbitrary sentence such that $\phi \in Cn(Cn(\Gamma))$. By the definition of the consequence operator, this means $Cn(\Gamma) \vdash \phi$. Furthermore, by definition, for every sentence $\psi \in Cn(\Gamma)$, it is true that $\Gamma \vdash \psi$. We can now apply the transitivity of $\vdash$: since $\Gamma \vdash \psi$ for all premises $\psi \in Cn(\Gamma)$, and $Cn(\Gamma) \vdash \phi$, it follows that $\Gamma \vdash \phi$. Therefore, $\phi \in Cn(\Gamma)$. Since $\phi$ was arbitrary, $Cn(Cn(\Gamma)) \subseteq Cn(\Gamma)$. 

Mutual inclusion establishes the identity $Cn(\Gamma) = Cn(Cn(\Gamma))$. `eproof`

# Exercise 3

**Exercise:** The properties of consequence relations $\triangleright$ and consequence operators $C$ are not all logically independent. Explore their logical interactions by proving the following claims:

1. **Reflexivity + Transitivity $\implies$ Monotonicity:** Prove that if a consequence relation $\triangleright$ (or operator $C$) is reflexive and transitive, it must necessarily be monotonic.
2. **Monotonicity + Idempotence $\implies$ Transitivity:** For a consequence operator $C$, prove that if $C$ is monotonic and idempotent, then $C$ is transitive.
3. **Reflexivity + Transitivity $\implies$ Idempotence:** For a consequence operator $C$, prove that if $C$ is reflexive and transitive, then $C$ is idempotent.
4. **Reflexivity + Monotonicity $\cancel{\implies}$ Transitivity:** Provide a counterexample (e.g., a restricted consequence operator on $\mathcal{L}$) that is reflexive and monotonic, but fails to be transitive.

(*N.b.*, 4 implies that **Reflexivity + Monotonicity $\cancel{ \implies }$ Idempotence**.)

**Solution:**

**1. Reflexivity + Transitivity $\implies$ Monotonicity.** Suppose $\triangleright$ is reflexive and transitive, and suppose $\Gamma \subseteq \Delta$ and $\Gamma \triangleright \phi$. By reflexivity, $\Delta \triangleright \delta$ for all $\delta \in \Delta$. Thus, in particular, $\Delta \triangleright \gamma$ for all $\gamma \in \Gamma$, since $\Gamma \subseteq \Delta$. Since $\Gamma \triangleright \phi$, the transitivity of $\triangleright$ yields $\Delta \triangleright \phi$. Thus, $\triangleright$ is monotonic. 

The proof is analogous for any consequence operator $C$. Suppose $\Gamma \subseteq \Delta$. By reflexivity, $\Delta \subseteq C(\Delta)$, and hence $\Gamma \subseteq C(\Delta)$. By the transitivity of $C$, since $\Gamma \subseteq C(\Delta)$, it follows that $C(\Gamma) \subseteq C(\Delta)$. Therefore, $C$ is monotonic.

**2. Monotonicity + Idempotence $\implies$ Transitivity.** Suppose $C$ is monotonic and idempotent. Suppose also that $\Gamma \subseteq C(\Delta)$. By the monotonicity of $C$, $C(\Gamma) \subseteq C(C(\Delta))$. By idempotence, $C(C(\Delta)) = C(\Delta)$, which yields $C(\Gamma) \subseteq C(\Delta)$. Therefore, $C$ is transitive.

**3. Reflexivity + Transitivity $\implies$ Idempotence.** Suppose $C$ is reflexive and transitive. By reflexivity, $C(\Gamma) \subseteq C(C(\Gamma))$. We now need to prove that $C(C(\Gamma)) \subseteq C(\Gamma)$. By reflexivity, $C(\Gamma) \subseteq C(\Gamma)$ holds trivially. By transitivity, if $C(\Gamma) \subseteq C(\Gamma)$, then $C(C(\Gamma)) \subseteq C(\Gamma)$. Therefore, $C(\Gamma) = C(C(\Gamma))$.

> [!NOTE]+ **Reflexivity + Monotonicity $\implies$ (Transitivity $\iff$ Idempotence)** 
> As a result of (2) and (3), it follows immediately that, given $C$ is reflexive and monotonic, $C$ is idempotent iff $C$ is transtive

**4. Reflexivity + Monotonicity $\cancel{\implies}$ Transitivity.** Let $\mathcal{L}$ be a standard propositional language. Define a consequence operator $C$ that takes a set of sentences $\Gamma$ and adds the negation of each sentence in $\Gamma$: 

$$C(\Gamma) = \Gamma \cup \{\neg \phi : \phi \in \Gamma\}$$

Reflexivity holds trivially since $\Gamma \subseteq C(\Gamma)$. Monotonicity holds because if $\Gamma \subseteq \Delta$, then $\{\neg \phi : \phi \in \Gamma\} \subseteq \{\neg \phi : \phi \in \Delta\}$, which ensures $C(\Gamma) \subseteq C(\Delta)$.

However, $C$ fails Transitivity. Let $\Gamma = \{p\}$. Then $C(\Gamma) = \{p, \neg p\}$. If we apply the operator a second time, we obtain $C(C(\Gamma)) = \{p, \neg p, \neg\neg p\}$. Since $\neg\neg p \notin C(\Gamma)$, we have $C(C(\Gamma)) \not\subseteq C(\Gamma)$. Thus, $C$ is not idempotent. Given that Reflexivity + Transitivity $\implies$ Idempotence (as proven in step 3), the failure of idempotence logically guarantees the failure of transitivity. To verify this directly against the definition of transitivity: let $X = \{p, \neg p\}$ and $Y = \{p\}$. We have $X \subseteq C(Y)$, but $C(X) \not\subseteq C(Y)$.

> [!NOTE]- **Reflexivity + Monotonicity $\cancel{ \implies }$ Idempotence**
> This is directly shown in the example above, but it also follows from (3).

## ==Exercise 4==

**Exercise:**
1. **Reflexivity + Cut + Idempotence $\cancel{\implies}$ Monotonicity:** Provide a counterexample demonstrating that a consequence relation $\triangleright$ (or operator $C$) can be reflexive, cumulatively transitive, and idempotent, yet fail to be monotonic.
2. **Reflexivity + Monotonicity $\implies$ (Transitivity $\iff$ Cut):** Prove this logical equivalence.
3. **Reflexivity + Monotonicity $\implies$ (Idempotence $\iff$ Cut):** Prove this logical equivalence.

**Solution**: 

==**1.**==

**2. Reflexivity + Monotonicity $\implies$ (Transitivity $\iff$ Cut)**. Suppose that $C$ satisfies reflexivity and monotonicity. 

(2.a) Suppose that $C$ satisfies Cut, and also that $\Delta \subseteq C(\Gamma)$. We need to prove that $C(\Delta)\subseteq C(\Gamma)$. By reflexivity, $\Gamma \subseteq C(\Gamma)$. Since we assumed $\Delta \subseteq C(\Gamma)$, it follows that their union is also a subset of $C(\Gamma)$, yielding $\Gamma \subseteq \Gamma \cup \Delta \subseteq C(\Gamma)$. By Cut, this implies $C(\Gamma \cup \Delta) \subseteq C(\Gamma)$. Since $\Delta \subseteq \Gamma \cup \Delta$, monotonicity guarantees that $C(\Delta) \subseteq C(\Gamma \cup \Delta)$. By transitivity of the subset relation, $C(\Delta) \subseteq C(\Gamma)$. Thus, $C$ is transitive.

(2.b) Suppose that $C$ satisfies transitivity, and also that $\Gamma \subseteq \Delta \subseteq C(\Gamma)$. We need to prove that $C(\Delta) \subseteq C(\Gamma)$. From our assumption, we have $\Delta \subseteq C(\Gamma)$. By the definition of transitivity, if $\Delta \subseteq C(\Gamma)$, then $C(\Delta) \subseteq C(\Gamma)$. Thus, $C$ satisfies Cut.

**3. Reflexivity + Monotonicity $\implies$ (Idempotence $\iff$ Cut)**. Suppose that $C$ satisfies reflexivity and monotonicity.

(3.a) Suppose $C$ is idempotent, and let $\Gamma \subseteq \Delta \subseteq C(\Gamma)$. We must prove $C(\Delta) \subseteq C(\Gamma)$. From the assumption, $\Delta \subseteq C(\Gamma)$. By monotonicity, $C(\Delta) \subseteq C(C(\Gamma))$. By idempotence, $C(C(\Gamma)) = C(\Gamma)$. Substituting this equality yields $C(\Delta) \subseteq C(\Gamma)$. Thus, $C$ satisfies Cut.

(3.b) Suppose $C$ satisfies Cut. We must prove $C(C(\Gamma)) = C(\Gamma)$. By reflexivity, $C(\Gamma) \subseteq C(C(\Gamma))$. It remains to prove that $C(C(\Gamma)) \subseteq C(\Gamma)$. By reflexivity, we know $\Gamma \subseteq C(\Gamma)$. Let $\Delta = C(\Gamma)$. We therefore have $\Gamma \subseteq \Delta \subseteq C(\Gamma)$. Applying Cut yields $C(\Delta) \subseteq C(\Gamma)$. Substituting $C(\Gamma)$ back for $\Delta$, we obtain $C(C(\Gamma)) \subseteq C(\Gamma)$. Having established mutual inclusion, $C(C(\Gamma)) = C(\Gamma)$. Thus, $C$ is idempotent.

# Exercise 5

---
title: Session 1
description: Introduction to Belief Revision Theory
draft: false
parental-note: "[[Courses/2026/Reading Group in Formal Epistemology/index]]"
pdf:
share_pdf:
tags:
---

The aim of today's session is to get acquainted with belief revision theory, review some preliminary notions, and think about why it is worth getting our heads around it as PhD students in Philosophy.

In very general terms, belief revision theory is a branch of Philosophy (and Logic) that tackles the following question:

> What are the general principles that a reasoner (whether human or artificial) should follow as they acquire more and more information from the world?

Consider the following example. 

> [!example] Three Composers
> You are a newbie when it comes to opera. 
> 1. A friend of yours who's really into this topic tells you that Verdi is Italian, while Bizet and Satie are both French, and you come to believe so ($t_{1}$). 
> 2. Later on, you find out that Verdi and Bizet are compatriots ($t_{2}$). So, you are now uncertain as to whether Verdi and Bizet are both Italian or both French, but you still believe that Satie is French. 
> 3. Eventually, you find out on Wikipedia that they are in fact *all compatriots* ($t_{3}$). As a result, you are now uncertain as to whether they are all Italian or all French.

^7ac357

Question: Is the way you have changed your beliefs through $t_{1},t_{2}$ and $t_{3}$ rational?

Answer: It depends!

What belief revision theory can do for us is help us understand under what conditions changing our beliefs as in [[#^7ac357]] is rational, and under what conditions it is not. For example, under certain theories of belief revision, the following principle is true:

> **Preservation**. If you learn $P$, and $P$ is consistent with what you already believe, it is not rational to drop any belief $Q$ as a result of learning $P$.

In other words, **Preservation** makes you very conservative when it comes to belief. For example, a theory that validates **Preservation** is a theory that deems you *irrational* in [[#^7ac357]]. For, at $t_{2}$, you believe that Satie is French and, between $t_{2}$ and $t_{3}$, you learn something consistent with that belief—namely, that the three composers are all compatriots (since it is possible that they are all French). However, at $t_{3}$ you drop your belief that Satie is French, and believe only that they are either all Italian or all French.

Belief revision theory allows us to discuss such cases in a very general way and to compare theories clearly and unambiguously. In particular, what we are interested in when studying belief revision theory is establishing results like the following:

> [!def]+ Representation Result (Schema)
> Let $R_{1},R_{2},\dots,R_{n}$ be a set of belief revision rules, and $S$ some kind of structure. A representation result for $R_{1},R_{2},\dots,R_{n}$ and structures of kind $S$ is a proof of the following statement: 
> 
> > The rules $R_{1},R_{2},\dots,R_{n}$ are valid on a structure if, and only if, that structure is of kind $S$.

^6675a2

The reason this kind of result is valuable is that it essentially tells us that building a belief revision theory by fixing which rules of belief revision are correct ($R_{1},R_{2},\dots,R_{n}$) *or* defining a certain mathematical structure of kind $S$ to interpret a given logical language are basically the same thing. That is, the set of rules $R_{1},R_{2},\dots,R_{n}$ and the structure of kind $S$ will agree exactly on the predictions they make about whether a certain belief change is rational as a result of what you learned.

> [!note]+
> For those of you who are not really interested in epistemology and the philosophy we can do with belief revision theory, this course could still be useful. After all, belief revision theory is a piece of logic/mathematics with a clear worldly interpretation on it. So, this should be a fairly achievable exercise in mathematical reasoning and proving.

# 1. Formal Preliminaries

## 1.1. Language and Interpretations

To do belief revision theory, we need some basic logical preliminaries. I assume everybody has done some courses or standalone study of classical propositional logic, so I won't revise that completely, but I will simply set the stage on which we are going to elaborate.

First, let us define a formal language of interest. We will concern ourselves with a language $\mathcal{L}$ so constructed.

> [!def]+ Language $\mathcal{L}$
> A formal language $\mathcal{L}$ is defined as follows. Let $\Phi$ be a (countable) set of objects called “propositional variables”, that is $\Phi:=\{ p_{1},p_{2},p_{3},\dots \}$. Then, we define $\mathcal{L}$ via induction as follows.
> 1. Base: $\Phi \subseteq \mathcal{L}$.
> 2. Step: For all $\phi,\psi\in \mathcal{L}$:
> 	1. If $\phi\in \mathcal{L}$, then $\neg \phi \in \mathcal{L}$;
> 	2. If $\phi \in \mathcal{L}$ and $\psi\in \mathcal{L}$ then $\phi \land \psi \in \mathcal{L}$;
> 	3. If $\phi \in \mathcal{L}$ and $\psi\in \mathcal{L}$ then $\phi \lor \psi \in \mathcal{L}$;
> 	4. If $\phi \in \mathcal{L}$ and $\psi\in \mathcal{L}$ then $\phi \rightarrow \psi\in \mathcal{L}$.
> 3. Nothing else is in $\mathcal{L}$.

Note the greek letters $\phi,\psi, \chi,\dots$ are *variables* for the sentences in $\mathcal{L}$, not sentences themselves. $\mathcal{L}$ contains *only* objects like $p, p_{1}, (p_{2} \land p_{124}) \lor \neg p_{17}$, and so on.

Next, we need to define the semantics for our language. As is standard, we can think of a possible world (or interpretation) simply as an assignment of truth values to our basic propositional variables. Then, we define what it means for any sentence $\phi$ to be true at a world using the satisfaction relation $\models$. As you know, some sentences $\phi$ have a special status: some are true irrespective of the interpretation you consider (i.e., tautologies) and others are false irrespective of the interpretation you consider (i.e., contradictions).

> [!def]+ Interpretations and Truth ($\models$)
> Let $\mathcal{L}$ be given. A possible world (or interpretation) $w$ is a function $w: \Phi \to \{0, 1\}$ that assigns a truth value to each propositional variable $p \in \Phi$. Let $W$ be the set of **all** possible worlds.
> 
> We define the satisfaction relation $w \models \phi$ (read as “$\phi$ is true at $w$”) via induction on the structure of $\phi$:
> 1. Base: For all $p\in\Phi$, $w \models p \iff w(p) = 1$.
> 2. Step: For all $\phi,\psi\in \mathcal{L}$:
> 	1. $w \models \neg\phi \iff w \not\models \phi$;
> 	2. $w \models \phi \land \psi \iff w \models \phi \text{ and } w \models \psi$.

^e1e724

> [!warning] Sentences: Two Ways of Referring to Them
> As you already know, there are two ways in which we may make reference to a proposition $\phi$. First, as a syntactic object in $\mathcal{L}$. This is the most obvious way, given [[#^e1e724]]. However, another way of referring to a proposition is by considering its “truth-set”, i.e., the set of worlds at which the sentence is true. Let $\textlbrackdbl \cdot \textrbrackdbl$ be a function that takes a sentence $\phi\in \mathcal{L}$ and maps it to its truth-set $\textlbrackdbl \phi \textrbrackdbl\subseteq W$, that is:
>$$
> \textlbrackdbl \phi \textrbrackdbl := \{ w \in W: w \models \phi \}
>$$
> These two ways are not “equivalent”, in the sense that $\textlbrackdbl  \cdot\textrbrackdbl$ “looses” some information. For instance, consider that while $\neg(\neg p_{1}\land \neg p_{2})$ and $p_{1} \lor p_{2}$ are different objects in $\mathcal{L}$, $\textlbrackdbl \neg(\neg p_{1}\land \neg p_{2}) \textrbrackdbl=\textlbrackdbl p_{1} \lor p_{2} \textrbrackdbl$.

Before moving on, let me make an important remark regarding the cardinality of $W$. As we will see, how many worlds are in $W$ will make a difference when doing belief revision theory. 

1. Suppose first that $\Phi_{fin}$, the set of propositional variables, is finite. That is, $\left| \Phi_{fin} \right|=n$ for some $n\in \mathbb{N}$. How many possible worlds are in $W$?
2. Suppose now that $\Phi$ is countable, i.e., $\left| \Phi \right|=\left| \mathbb{N} \right|$. How many possible worlds are in $W$?

## 1.2. Logical Consequence

We can already say something about belief revision theory using what we established in [[#1. Formal Preliminaries]]. First, an agent will be represented by the things they believe. That is, a rational agent will be represented by a *belief set*, which is a special kind of set $B\subseteq \mathcal{L}$ of sentences in our formal language (we will define exactly what makes it special in a moment) representing the sentences the agent takes to be true. Second, belief revision will be defined as an operator on those sets $B$. Suppose an agent believes all the sentences in $B$ and that they learn $\phi$. The new belief set they obtain by revising $B$ by $\phi$ is denoted as:

$$
B *\phi
$$

Clearly, we need more information to decide what should actually be in $B* \phi$ (given the initial content of $B$). To do so, however, we first need to clarify what *belief sets* are, given that they are not just any arbitrary subset of $\mathcal{L}$. This is exactly why we need the notion of logical consequence.

In general, we define logical consequence based on the formal work done in [[#1. Formal Preliminaries]] as follows.

> [!def]+ Logical Consequence ($\vdash$)
> Let $\phi,\psi \in \mathcal{L}$ and $W$ be given. We say that $\psi$ follows logically from $\phi$, $\phi \vdash \psi$, iff the latter is true at all the worlds $w$ that make the former true. In symbols:
>$$
>\phi \vdash \psi \quad:\iff\quad \text{For all } w\in W: w \models \phi \implies w \models \psi
>$$

^38e024

Note that:

1. [[#^38e024]] may be extended, with a slight abuse of notation, to include the consequence relation between a set of formulas $\Gamma$ and a sentence $\phi$, i.e., $\Gamma \vdash \phi$. We do this by requiring that $\Gamma \vdash \phi$ iff $\phi$ is true at all the worlds $w$ which satisfy *all* the sentences $\gamma\in \Gamma$.
2. I distinguish the satisfaction ($\models$) and consequence ($\vdash$) relations symbolically. We won't need a third relation for syntactic deducibility (which is what $\vdash$ usually denotes, strictly speaking), so we will use $\vdash$ for semantic consequence here to keep things simple.
3. The notion of logical consequence defined above does not make $\vdash$ relative to a specific model $\mathcal{M}$, thus doing away with the need to distinguish between $\Gamma \vdash_{\mathcal{M}} \phi$ and $\Gamma \vdash \phi$. This is not a problem because we won't need such fine-grained distinctions between specific models. We would want this extra degree of freedom if we cared to distinguish what follows from a restricted set of worlds compared to another. But here, we care about what follows with respect to the set of **all possible worlds** $W$ – see [[#^e1e724]]. Note, however, that we are not confining ourselves to a single, restricted model $\mathcal{M}$ (which would make the discussion lack generality). Because our $W$ includes *all* possible interpretations, we might think of it as a “super model” $\mathcal{M}^{*}$. One can easily prove that: (1) $\mathcal{M}^{*}\models \phi$ iff $\phi$ is a tautology; and (2) $\phi \vdash_{\mathcal{M}^{*}}\psi$ iff $\psi$ is a logical consequence of $\phi$.

When doing belief revision theory, we will frequently use a *consequence operator* $Cn$ instead of a consequence relation, as it makes it easier to express certain properties in a concise and brief way. Note that $Cn$ and $\vdash$ are inter-definable. Since we started with $\vdash$, we take it as basic and define $Cn$ in terms of $\vdash$.

> [!def]+ Consequence Operator $Cn$
> Let $\vdash$ be given. We define the consequence operator $Cn$ (of $\vdash$) as a function from sets of sentences $A\subseteq \mathcal{L}$ to sets of sentences $B\subseteq \mathcal{L}$:
> $$
>Cn(A) := \{ \phi \in \mathcal{L} : A \vdash \phi \} 
>$$
> *N.b.*, $Cn$ is a function from $\mathcal{P}(\mathcal{L})$ to $\mathcal{P}(\mathcal{L})$.

^ba4d33

Now, we can finally define what a belief set is.

> [!def]+ Belief Sets
> Let $B$ be a subset of $\mathcal{L}$. $B$ is a belief set if, and only if, the following equivalence holds:
> $$
> B = Cn(B)
>$$

^a62a38

In other words, belief sets are not just any sets of sentences, but they are sets of sentences “closed under logical entailment”. We usually explain this requirement by saying that logical closure is—in this context—the “mark of rationality”. That is, a rational agent (as modeled in this simplified setting) is an agent that believes all the logical consequences of what they believe. However, this might not be perfectly right. For instance, let $B'=\{\phi, \psi, \neg(\phi \lor \psi)\}$ for some $\phi,\psi\in \mathcal{L}$. The belief set representing our agent here would be $B:=Cn(B')$. But what is $B$ then? Would we say that it represents a rational agent?

There are three important properties of the logical consequence relation (and of the logical consequence operator) that we will use later on, which I define below.

> [!def]+ Reflexivity of $\triangleright$
> Let $\triangleright$ be a consequence relation on $\mathcal{L}$. $\triangleright$ is reflexive iff:
> $$
> \text{For all } \gamma\in \Gamma: \quad \Gamma \triangleright \gamma 
>$$

> [!def]+ Transitivity of $\triangleright$
> Let $\triangleright$ be a consequence relation on $\mathcal{L}$. $\triangleright$ is transitive iff:
> $$
>\text{If } \Gamma \triangleright \delta \text{ for all } \delta\in \Delta \text{, and } \Delta \triangleright \phi \quad\implies \quad \Gamma \triangleright \phi
>$$

> [!def]+ Monotonicity of $\triangleright$
> Let $\triangleright$ be a consequence relation on $\mathcal{L}$. $\triangleright$ is monotonic iff:
> $$
>\text{If } \Gamma \triangleright \phi \text{ and } \Gamma \subseteq \Delta \quad \implies \quad \Delta \triangleright \phi
>$$

It is straightforward to prove the following:

> [!proposition]+
> Let $\vdash$ be the consequence relation defined in [[#^38e024]]. $\vdash$ is reflexive, transitive, and monotonic.

^41852b

Note that these properties of the consequence relation correspond to analogous properties of the consequence operator $Cn$. I will omit the details here, but the following result is derivable from the definitions above and [[#^41852b]].

> [!proposition]+
> Let $\vdash$ be the consequence relation defined in [[#^38e024]], and $Cn$ the consequence operator defined in [[#^ba4d33]] based on $\vdash$. $Cn$ satisfies the following properties:
> 1. **Reflexivity**: For all $\Gamma \subseteq \mathcal{L}$, $\Gamma \subseteq Cn(\Gamma)$.
> 2. **Transitivity**: For all $\Gamma,\Delta \subseteq \mathcal{L}$, if $\Delta \subseteq Cn(\Gamma)$ then $Cn(\Delta)\subseteq Cn(\Gamma)$.
> 3. **Monotonicity**: For all $\Gamma,\Delta \subseteq \mathcal{L}$, if $\Delta \subseteq \Gamma$ then $Cn(\Delta)\subseteq Cn(\Gamma)$.
> 4. **Idempotence**: For all $\Gamma \subseteq \mathcal{L}$, $Cn(Cn(\Gamma))=Cn(\Gamma)$.

^db37aa

Note also that $\vdash$ has another crucially important property, called **Compactness**.

> [!proposition]+ Compactness
> Let $\vdash$ be the consequence relation defined in [[#^38e024]]. $\vdash$ is compact, that is:
> $$
> \Gamma \vdash \phi \implies \exists\Gamma_{fin}\subseteq \Gamma \text{ such that } \Gamma_{fin} \vdash \phi
> $$
> (where $\Gamma_{fin}$ is a finite subset of $\Gamma$).

The proof of compactness is mathematically a bit more involved (I have prepared a [[Compactness|supplementary note]] on this that we can discuss separately if you are interested!). 

If you want to dive deeper into the properties of classical consequence, or if you are looking for a beautifully written explanation of consequence relations *in general* (abstracting away from our specific semantic definition in [[#^38e024]]), I highly recommend David Makinson's *Bridges from Classical to Nonmonotonic Logic* (2005).

Now we are ready to introduce belief revision theory.

# 2. Belief Revision Theory

The best way to introduce this topic is by considering a specific belief revision theory, usually called “AGM” after the scholars who introduced it in 1985—Alchourrón, Gärdenfors, and Makinson. I will introduce AGM “proof-theoretically” first, that is, by stating the 6 simple rules (or postulates) that determine the behavior of an “AGM-rational” agent. Then, I will explain which structures we may use to represent these agents semantically. The main target of this section is to prove AGM's completeness result—see [[#^6675a2]].

> [!NOTE]+ Disclaimer
> It is important to tell apart logico-mathematical results (e.g., the completeness result below) from philosophical claims. Saying that AGM's postulates of belief revision correspond to a certain mathematical structure is a (necessarily true and uncontroversial) logico-mathematical claim, whereas saying that AGM-rationality *is* rationality is a (maybe true, maybe not, certainly controversial) philosophical claim.

We need six (more precisely, eight) rules to pin down AGM. From now on, I will use $B$ to pick out any belief set, as defined in [[#^a62a38]]. Recall that $\phi$ is a variable for some sentence in $\mathcal{L}$, and that $*$ is the belief revision operator introduced above.

The first postulate is called **Closure**:

$$
B*\phi = Cn(B*\phi) \tag{Closure}
$$

and it has a rather straightforward meaning. The process of revising a belief set $B$ by $\phi$ (i.e., $B* \phi$) should result in a new belief set (which, by definition, must be logically closed). However, we should pay special attention an immediate mathematical consequence of **Closure**.

> [!NOTE]+ (1) **Closure** Implies that Every Belief Set Contains all Tautologies
> It is a trivial mathematical truth that $\emptyset \subseteq B$, where $B$ is a belief set. However, this has an important consequence given the fact that classical logical consequence is monotonic. For it follows by monotonicity that, since $\emptyset \subseteq B$, then $Cn(\emptyset) \subseteq Cn(B)$. Since $B$ is a belief set, we know $Cn(B) = B$, which means $Cn(\emptyset) \subseteq B$. But what exactly is $Cn(\emptyset)$?
> 
> $Cn(\emptyset)$ is the set of all propositional tautologies. This can be easily seen by unpacking the meaning of $Cn$ as applied to $\emptyset$:
> $$
> Cn(\emptyset) =\{ \phi\in \mathcal{L} : \emptyset \vdash \phi \}
> $$
> In turn, $\emptyset\vdash \phi$ is true iff for all possible worlds $w\in W$: if $w$ satisfies all sentences in $\emptyset$, then $w \models \phi$. 
> 
> The condition “$w$ satisfies all sentences in $\emptyset$” can be logically spelled out as follows: for all $\psi\in \mathcal{L}$, if $\psi \in \emptyset$, then $w \models \psi$. Since $\psi \notin \emptyset$ for any choice of $\psi\in \mathcal{L}$ by the very definition of the empty set, the antecedent “$\psi \in \emptyset$” is always false. This implies that the conditional “$w$ satisfies all sentences in $\emptyset$” is vacuously true for every possible world $w \in W$. Therefore, the statement $\emptyset \vdash \phi$ is true if, and only if, $w \models \phi$ for all $w \in W$. That is, $\phi$ is a propositional tautology. 
> 
> Therefore, any belief set $B$ logically contains all the propositional tautologies.

Also, note that, given **Closure** and the properties of $\vdash$ (and $Cn$), saying $B\vdash \phi$ (or $\phi\in Cn(B)$) is exactly the same as saying $\phi\in B$. The second postulate is called **Success**:

$$
\phi \in B*\phi \tag{Success}
$$

which again has a rather simple meaning: revising by $\phi$ should result in believing $\phi$. The third postulate is called **Consistency**:

$$
\text{If $\phi \nvdash \bot $, then $Cn(B* \phi)\neq \mathcal{L}$} \tag{Consistency}
$$

This postulate has a rather straightforward meaning, but it forces us to deeply understand the meaning of the objects and notation we have introduced. There are three “things” to clarify here: the meaning of the antecedent, that of the consequent, and the reason why this postulate is in “If-Then” form.

1. $\phi \nvdash \bot$ (where $\bot$ is just any contradiction you like, e.g., $p_{154} \land \neg p_{154}\in \mathcal{L}$) means that $\phi$ is *not* a contradiction. Here is why. $\phi \vdash \bot$ means that, for all worlds $w$, if $w \models \phi$, then $w \models \bot$. Since there is no world where $w \models \bot$ by definition, for this conditional statement to be true, it must be the case that there is *no* $w$ such that $w \models \phi$. Therefore, $\phi \nvdash \bot$ means that there exists *some* world where $\phi$ holds, i.e., $\phi$ is non-contradictory (note: it might be either a tautology or a contingent proposition) and satisfiable.
2. $Cn(B*\phi)\neq \mathcal{L}$ is just an equivalent way of saying that $B*\phi$ contains no contradictions. Let me explain this by showing that $Cn(B*\phi) = \mathcal{L}$ if, and only if, $B*\phi$ contains a contradiction. 
	- Suppose $Cn(B*\phi)=\mathcal{L}$. Therefore, $\bot \in Cn(B*\phi)$, i.e., $B*\phi \vdash \bot$. Note that since $B*\phi$ is a belief set, it is closed under logical consequence by **Closure**. Therefore, if $B*\phi \vdash \bot$, it must be that $\bot \in B*\phi$. 
	- Suppose now that $\bot \in B*\phi$. In classical logic, $\bot \vdash \psi$ for any $\psi\in \mathcal{L}$ (the principle of explosion). So, since classical consequence is monotonic and $\{ \bot \}\subseteq B*\phi$, it follows that $Cn(\{ \bot \})\subseteq Cn(B*\phi)$. Since $Cn(\{ \bot \})=\mathcal{L}$, we get $\mathcal{L}\subseteq Cn(B*\phi)$. Ultimately, recall that $Cn(B*\phi)$ is a subset of our language $\mathcal{L}$, hence $Cn(B*\phi)\subseteq \mathcal{L}$ by definition, which implies that $Cn(B*\phi)=\mathcal{L}$. 
3. Let me explain now the last bit of information contained in **Consistency**. Why require that $Cn(B*\phi)\neq \mathcal{L}$ only if $\phi \nvdash \bot$, and not in general? The reason is that requiring it in general would conflict with **Success**. For suppose that the agent revises their belief set by an outright contradiction, $\bot$. By **Success**, we have that $\bot\in B*\bot$, which (as we just saw in point 2) implies that $Cn(B*\bot)=\mathcal{L}$. 

> [!NOTE]+ Escaping an Inconsistent Belief Set
> The **Consistency** postulate has an important consequence. Suppose that $B$ is an inconsistent belief set, i.e., $B = \mathcal{L}$. Suppose that $\phi$ is a non-contradictory sentence. By **Consistency**, it follows that $B*\phi \neq \mathcal{L}$. That is, revising an inconsistent set of beliefs by a non-contradictory sentence restores consistency.

> [!note]- (2) Why Finding the Right Belief Revision Operator Is So Hard
> **Closure**, **Success**, and **Consistency** are rather reasonable constraints on $*$, aren't they? However, accepting them already forces us to reject simple, naive revision operators. Suppose we want to revise a belief set $B$ by some new information $\phi$, and currently $B$ contains $\neg\phi$. You might think we can define a simple revision operator $*_{naive}$ that just removes the direct contradiction $\neg\phi$, adds the new information $\phi$, and then logically closes the result:
> $$
> B *_{naive} \phi := Cn((B \smallsetminus \{ \neg \phi \}) \cup \{\phi\} )
> $$
> But this fails precisely because beliefs are logically entangled, which inevitably leads to a violation of **Consistency**. Suppose $B$ contains the belief $p$ (“It is raining”), the belief $p \to \neg q$ (“If it is raining, the picnic is cancelled”), and consequently the belief $\neg q$ (“The picnic is cancelled”). Let's focus on these core beliefs: $\{ p, p \rightarrow \neg q, \neg q \} \subseteq B$.
> 
> Suppose you learn $q$ (“The picnic is on!”) and revise $B$ using $*_{naive}$. First, the operator removes $\neg q$ and adds $q$, leaving us with the intermediate set containing $\{ p, p \rightarrow \neg q, q \}$. However, the definition of $*_{naive}$ then requires us to apply $Cn$ to satisfy **Closure**. Since $p$ and $p \to \neg q$ are still in the set and they logically entail $\neg q$, applying $Cn$ brings $\neg q$ right back! Because the closed set now logically contains both $q$ and $\neg q$, it logically explodes into the absurd belief set $\mathcal{L}$ (i.e., $B *_{naive} q = \mathcal{L}$).
> 
> Notice that the new information $q$ is perfectly non-contradictory on its own ($q \nvdash \bot$). Yet, our revised belief set became $\mathcal{L}$, which is a direct violation of **Consistency**.
> 
> This shows that belief revision cannot just be simple set addition and subtraction of elements from $B$. When you add new information that contradicts the old, you don't just have to remove the direct contradiction; you have to track down and modify the underlying beliefs that logically entail it.

The fourth postulate is called **Inclusion**:

$$
B*\phi \subseteq Cn(B \cup \{ \phi \}) \tag{Inclusion}
$$

and it sets an “upper bound” to the effects of revision. To fully grasp this, let me clarify what $Cn(B \cup \{ \phi \})$ is. In the belief revision literature, the operation that takes a set $B$ and a sentence $\phi$ and returns $Cn(B \cup \{ \phi \})$ is called **expansion** (or sometimes *augmentation*). It is usually denoted by $+$, meaning $B + \phi := Cn(B \cup \{ \phi \})$. It has a very straightforward meaning: you simply add the new information to your set of beliefs and take the logical closure of the result. So, **Inclusion** simply says that, at most, belief revision may amount to expansion. 

The fifth postulate is called **Vacuity**:

$$
\text{If } B\nvdash \neg \phi \text{, then } B*\phi = Cn(B \cup \{ \phi \}) \tag{Vacuity}
$$

This postulate requires more discussion, for its meaning and its role are not completely obvious.

1. First, notice that the right-hand side of the equation is exactly the expansion operation $+$ we just defined above. So, **Vacuity** tells us that revision $*$ is strictly identical with expansion $+$ in certain cases.
2. Let us look closely at the condition $B \nvdash \neg \phi$. 
	1. First of all, let's intuitively clarify its meaning. Informally, $B\nvdash \neg \phi$ means two things. First, it means that $B$ is consistent. Recall that $B=Cn(B)$, so if $B$ were inconsistent, then $Cn(B)=\mathcal{L}$, which means $B \vdash \psi$ for *all* $\psi\in \mathcal{L}$ (including $\neg\phi$). So, if $B \nvdash \neg\phi$, it must be consistent. Second, $B \nvdash \neg \phi$ means that $B$ is “compatible” with $\phi$. To see this, recall that $\Gamma \vdash \psi$ is a universal statement, saying that *every* world $w$ satisfying $\Gamma$ satisfies $\psi$ as well. Its negation, then, is an existential statement, saying that there exists a world where all $\gamma\in \Gamma$ are true but $\psi$ is false. Thus, $B\nvdash\neg \phi$ means that there exists at least a world $w$ where all $b\in B$ are true but $\neg \phi$ is false, i.e. $\phi$ is true. The fact that there exists a world where both $B$ and $\phi$ are true means that the two are compatible. *Note*: this does not amount to saying that there exists exactly one world where $B$ and $\phi$ are both true. $B$ and $\phi$ may be compatible also in the case where $B \vdash\phi$.
	2. Now that we understand what the condition “$B \nvdash \neg \phi$” says: why does AGM say that revision and expansion coincide *only if* $B \nvdash \neg \phi$ is the case? That is, why not define $*$ in such a way that it just is $+$ for *every case*? After all, $+$ is a very simple operation. The problem is that, precisely when $B \vdash \neg \phi$, claiming that $*=+$ has disastrous consequences. Suppose that $B\vdash \neg \phi$, i.e., $\neg \phi \in Cn(B)$. Since $B \subseteq B \cup \{ \phi \}$ obviously holds, it follows by the monotonicity of $Cn$ that $Cn(B)\subseteq Cn(B \cup \{ \phi \})$. So, $\neg \phi \in Cn(B\cup \{ \phi \})$, and we also have $\phi\in Cn(B\cup \{ \phi \})$ by the reflexivity of $Cn$. Therefore, their conjunction $\phi \land \neg \phi \in Cn(B \cup \{ \phi \})$, which means $Cn(B \cup \{ \phi \}) = \mathcal{L}$. If we forced $* = +$ across the board, it would follow by **Closure** that $B*\phi= \mathcal{L}$ whenever the new information contradicts our prior beliefs. The problem, however, is that if the new information $\phi$ is not contradictory in itself ($\phi \nvdash \bot$), this is a direct violation of the **Consistency** postulate! To avoid this problem, we do not equate $*$ with $+$ across the board, but only in a specific, safe case: when $B \nvdash \neg \phi$.

The sixth postulate is called **Congruence**:

$$
\text{If } Cn(\{ \phi \})=Cn(\{ \psi \}) \text{, then } B*\phi=B*\psi \tag{Congruence}
$$

and it simply says that, if $\phi$ and $\psi$ are logically equivalent, then revising by $\phi$ is exactly the same as revising by $\psi$. That is, what you end up believing as a result of revision depends on the *content* of a proposition (world-theoretically, its truth-set) and not on its syntactic presentation. (This postulate is sometimes called Dalal's Principle of Irrelevance of Syntax). Take a moment to convince yourself that $\phi$ and $\psi$ are logically equivalent in the semantic sense (i.e., $\textlbrackdbl \phi \textrbrackdbl=\textlbrackdbl \psi \textrbrackdbl$) if, and only if, $Cn(\{ \phi \})=Cn(\{ \psi \})$.

This concludes our discussion of the main AGM postulates. The following two rules, usually called the supplementary postulates, are slightly more cumbersome. However, they are necessary for proving the representation theorem, as they will significantly constrain the kind of structure $S$ we will consider.

## 2.1. Supplementary Postulates

The seventh postulate is called **Superexpansion**:

$$
B*(\phi \land \psi) \subseteq (B*\phi)+\psi
\tag{Superexpansion}
$$

This postulate is similar to **Inclusion** in [[#2. Belief Revision Theory]] above. It says that revising $B$ by a conjunction may result in, at most, revising by one conjunct and then expanding by the other. Alternatively, you are not permitted to believe more by revising by $\phi \land \psi$ than you would if you simply revised by $\phi$ and then expanded by $\psi$.

The eighth postulate is called **Subexpansion**:

$$
\text{If } B*\phi \nvdash \neg \psi \text{, then } (B*\phi)+ \psi \subseteq B*(\phi \land \psi)
\tag{Subexpansion}
$$

This postulate says that when $B*\phi$ is compatible with $\psi$, expanding by $\psi$ on top of revising by $\phi$ may result in having at most the same beliefs as in the case where you simply revise by the conjunction $\phi \land \psi$. It is very important to appreciate a consequence of these two postulates taken together: if the result of revising by one conjunct, i.e., $B*\phi$, is compatible with the other conjunct $\psi$, then

$$
B*(\phi \land \psi) = (B*\phi) + \psi
$$

That is, revising by the conjunction of the two is exactly the same as revising by the first and then expanding by the second. Let me clarify two points here:

1. The equality above is not affected by the order of the conjuncts, i.e., by whether we revise by $\phi \land \psi$ or $\psi \land \phi$. The reason is that $B*(\phi \land \psi) = B*(\psi \land \phi)$ as a result of **Congruence**, since $Cn(\phi \land \psi) = Cn(\psi \land \phi)$.
2. The requirement that $B*\phi$ (or $B*\psi$) is compatible with $\psi$ (or $\phi$) is crucial. For if $B*\phi \vdash \neg \psi$, we would have that $B*(\phi \land \psi) \neq \mathcal{L}$ as a result of **Consistency**, but $(B*\phi)+\psi = \mathcal{L}$. Here is why:
	1. $(B*\phi)+\psi = Cn((B*\phi) \cup \{ \psi \})$ by definition.
	2. Obviously, $B*\phi \subseteq (B*\phi) \cup \{ \psi \}$.
	3. By the monotonicity of $Cn$, $Cn(B*\phi) \subseteq Cn((B*\phi) \cup \{ \psi \})$.
	4. $\neg \psi \in Cn(B*\phi)$ *ex hypothesi*, while $\psi \in Cn((B*\phi) \cup \{ \psi \})$ by the reflexivity of $Cn$.
	5. Therefore, $\psi \land \neg \psi \in Cn((B*\phi) \cup \{ \psi \}) = (B*\phi)+\psi = \mathcal{L}$.

> [!info]- Why We Need the Supplementary Postulates
> You might wonder why we bother with these two extra rules. The answer lies in the Completeness Result we mentioned earlier. 
> 
> The first six postulates only guarantee a “weak” kind of revision (called *partial meet revision*). As we will see, the mathematical structures that allow us to encode these belief revision rules are ordered structures. As we will see, by adding **Superexpansion** and **Subexpansion** we enforce a strict, transitive order on our beliefs. That is, adding the supplementary postulates allows us to prove that AGM-rational revision corresponds exactly to elegant semantic structures, such as a system of concentric spheres (where we fall back to the “closest” possible worlds when revising) or an epistemic entrenchment ordering (where we always sacrifice our least valuable beliefs first).

## 2.2. Derivative Rules of AGM

The basic AGM postulates entail several intuitive derivative rules. Here are some of the most important ones that follow strictly from the first six postulates:

$$
\text{If } B \nvdash \neg \phi \text{, then } B\subseteq B*\phi
\tag{Preservation}
$$

$$
\text{If } \psi\in B*\phi_{1} \text{ and } \psi \in B*\phi_{2} \text{, then } \psi\in B*(\phi_{1} \lor \phi_{2}) \tag{Or}
$$

$$
\text{If } \psi \notin B*\phi \text{ and } \psi \notin B*\neg \phi \text{, then } \psi \notin B
\tag{Negation Rationality}
$$

We can also derive a very famous rule concerning conditional beliefs and material implication:

$$
\text{If } \psi \in B*\phi \text{, then } \phi \rightarrow \psi \in B
\tag{Frontloading}
$$

Once we adopt **Superexpansion** and **Subexpansion**, we unlock a new set of derivative rules that govern how revision behaves when we build up more complex pieces of new information, particularly conjunctions and disjunctions.

The following rules dictate the logic of sequential and conjunctive learning:

$$
\text{If } \chi \in B*\phi \text{ and } \psi \in B*\phi \text{, then } \chi \in B*(\phi \land \psi)
\tag{Cautious Monotony}
$$

$$
\text{If } \chi \in B*(\phi \land \psi) \text{ and } \psi \in B*\phi \text{, then } \chi \in B*\phi
\tag{Cut}
$$

$$
\text{If } \chi \in B*\phi \text{ and } \neg \psi \notin B*\phi \text{, then } \chi \in B*(\phi \land \psi)
\tag{Rational Monotony}
$$

(*Note*: **Rational Monotony** is a sort of “generalized” version of **Preservation**. To convince your self, note that **Rational Monotony** is equivalent to **Preservation** when $\phi=\top$.)

We also gain derivative rules that dictate how revision handles disjunctions (situations where we learn that at least one of two things is true, but we don't know which):

$$
\text{If } \psi \in B*(\phi_{1} \lor \phi_{2}) \text{, then } \psi \in B*\phi_{1} \text{ or } \psi \in B*\phi_{2}
\tag{Disjunction Rationality}
$$

Finally, there is an important rule, called **Disjunctive Factoring**, which is logically equivalent to the combination of both supplementary postulates (given the six basic postulates):

$$
B*(\phi_{1} \lor \phi_{2}) \text{ is equal to } B*\phi_{1} \text{, or } B*\phi_{2} \text{, or } B*\phi_{1} \cap B*\phi_{2}
\tag{Disjunctive Factoring}
$$

# 3. Ordered Structures

# 4. Exercises

**1.** Prove [[#^41852b]] (i.e., that classical semantic consequence $\vdash$ is reflexive, transitive, and monotonic).
**2.** Prove [[#^db37aa]] (i.e., that the classical consequence operator $Cn$ satisfies reflexivity, transitivity, monotonicity, and idempotence).
**3.** The properties of consequence relations $\triangleright$ and consequence operators $C$ are not all logically independent. Explore their logical interactions by proving the following claims:

1. **Reflexivity + Transitivity $\implies$ Monotonicity:** Prove that if a consequence relation $\triangleright$ (or operator $C$) is reflexive and transitive, it must necessarily be monotonic.
2. **Monotonicity + Idempotence $\implies$ Transitivity:** For a consequence operator $C$, prove that if $C$ is monotonic and idempotent, then $C$ is transitive.
3. **Reflexivity + Monotonicity $\cancel{ \implies }$ Transitivity:** Provide a counterexample (e.g., a custom, restricted consequence relation or operator) that is reflexive and monotonic, but fails to be transitive.

**4. Cumulative Transitivity and Non-Monotonicity.** As you proved in 3.1, standard Transitivity is so strong that, when paired with Reflexivity, it forces Monotonicity. If we want to build a *non-monotonic* logic (e.g., to model default reasoning where learning new facts can make us drop previous conclusions), we must replace standard Transitivity with a weaker version. 

> [!def]+ Cumulative Transitivity (Cut)
> A consequence relation $\triangleright$ is cumulatively transitive iff:
> $$
>\text{If }\quad \Gamma \triangleright \delta \text{ for all } \delta\in \Delta \quad \text{ and } \quad\Gamma \cup \Delta \triangleright \phi, \quad\text{ then }\quad \Gamma \triangleright \phi
>$$
> Equivalently, for a consequence operator $C$, cumulative transitivity is defined as:
> $$
>\text{For all } \Gamma,\Delta \subseteq \mathcal{L}:\quad \text{ if }\quad \Gamma \subseteq \Delta \subseteq C(\Gamma),\quad \text{ then } \quad C(\Delta)\subseteq C(\Gamma)
>$$

Provide a counterexample demonstrating that a consequence relation $\triangleright$ (or operator $C$) can be both **Reflexive** and **Cumulatively Transitive** (and even Idempotent!), but still fail to be **Monotonic**.

5. [Other exercises to be added]

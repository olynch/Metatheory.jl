var documenterSearchIndex = {"docs":
[{"location":"api/#API-Documentation","page":"API Documentation","title":"API Documentation","text":"","category":"section"},{"location":"api/","page":"API Documentation","title":"API Documentation","text":"Modules = [Metatheory, Metatheory.Library]","category":"page"},{"location":"api/#Metatheory.BackoffScheduler","page":"API Documentation","title":"Metatheory.BackoffScheduler","text":"A Rewrite Scheduler that implements exponential rule backoff. For each rewrite, there exists a configurable initial match limit. If a rewrite search yield more than this limit, then we ban this rule for number of iterations, double its limit, and double the time it will be banned next time.\n\nThis seems effective at preventing explosive rules like associativity from taking an unfair amount of resources.\n\n\n\n\n\n","category":"type"},{"location":"api/#Metatheory.RhsFunCache","page":"API Documentation","title":"Metatheory.RhsFunCache","text":"Type representing a cache of RuntimeGeneratedFunctions corresponding to right hand sides of dynamic rules\n\n\n\n\n\n","category":"type"},{"location":"api/#Metatheory.amp-Tuple{Any}","page":"API Documentation","title":"Metatheory.amp","text":"Add a & expression\n\n\n\n\n\n","category":"method"},{"location":"api/#Metatheory.block-Tuple","page":"API Documentation","title":"Metatheory.block","text":"Make a block expression from an array of exprs\n\n\n\n\n\n","category":"method"},{"location":"api/#Metatheory.cleanast-Tuple{Any}","page":"API Documentation","title":"Metatheory.cleanast","text":"Binarize n-ary operators (+ and *) and call rmlines\n\n\n\n\n\n","category":"method"},{"location":"api/#Metatheory.dollar-Tuple{Any}","page":"API Documentation","title":"Metatheory.dollar","text":"Add a dollar expression\n\n\n\n\n\n","category":"method"},{"location":"api/#Metatheory.eval_types_in_assertions-Tuple{Any,Module}","page":"API Documentation","title":"Metatheory.eval_types_in_assertions","text":"When creating a theory, type assertions in the left hand contain symbols. We want to replace the type symbols with the real type values, to fully support the subtyping mechanism during pattern matching.\n\n\n\n\n\n","category":"method"},{"location":"api/#Metatheory.genrhsfun-Tuple{Rule,Module}","page":"API Documentation","title":"Metatheory.genrhsfun","text":"Generates a tuple containing the list of formal parameters (Symbols) and the RuntimeGeneratedFunction corresponding to the right hand side of a :dynamic Rule.\n\n\n\n\n\n","category":"method"},{"location":"api/#Metatheory.rmlines-Tuple{Expr}","page":"API Documentation","title":"Metatheory.rmlines","text":"Remove LineNumberNode from quoted blocks of code\n\n\n\n\n\n","category":"method"},{"location":"#Metatheory.jl","page":"Metatheory.jl","title":"Metatheory.jl","text":"","category":"section"},{"location":"","page":"Metatheory.jl","title":"Metatheory.jl","text":"Docs will appear here some time in the near future.","category":"page"}]
}
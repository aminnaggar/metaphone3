# metaphone3

I Ported/Transpiled Lawrence Philips's metaphone3 using [cincheo/jsweet](https://github.com/cincheo/jsweet). 
Because it's transpiled the inner method names are all borked, but it works well enough.

You can find the original in [OpenRefine's repo here](https://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/clustering/binning/Metaphone3.java)


## Small modification
As I was transpiling this I found this maybe bug? I read it a few times, and I'm no expert but it doesn't seem like the "MC" statement should be negated.

https://github.com/OpenRefine/OpenRefine/blob/6ea0542ce3324bf16b65b4913f9da6ef7c7a3c21/main/src/com/google/refine/clustering/binning/Metaphone3.java#L3262

```diff
--- OpenRefine/main/src/com/google/refine/clustering/binning/Metaphone3.java
+++ OpenRefine/main/src/com/google/refine/clustering/binning/Metaphone3.java
@@ -3261,3264 +3261,3264 @@
					// don't encode KG or KK if e.g. "mcgill"
-					if(!((m_current == 2) && StringAt(0, 2, "MC", ""))
+					if(((m_current == 2) && StringAt(0, 2, "MC", "")) 
						   || ((m_current == 3) && StringAt(0, 3, "MAC", "")))
					{
```

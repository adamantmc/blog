"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[924],{5392:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return h}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}function o(e){const t=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",code:"code",h1:"h1",pre:"pre",strong:"strong",ol:"ol",li:"li",a:"a",em:"em",h3:"h3",h4:"h4"},r(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"TL;DR"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Python uses ",a.createElement(t.code,null,"pymalloc")," for small (< 512 bytes) objects. Pymalloc requests memory in chunks called Arenas, which are 256KB each. An Arena is only freed only if all objects that are allocated on it are deleted. So allocating 1.000.000 objects of 512 bytes, totaling 512MB and deleting half of them does not mean that half of the memory (256MB) will be freed and returned to the OS."),"\n"),"\n",a.createElement(t.h1,null,"Intro"),"\n",a.createElement(t.p,null,"Say you have a big tree. Suddenly you realize that some of the nodes can be pruned so as to reduce memory. You prune the nodes, but the memory usage remains largely the same, if not unaffected. What gives?"),"\n",a.createElement(t.h2,null,"Background"),"\n",a.createElement(t.p,null,"The tree in question is a Trie Tree. A Trie Tree, also known as a Prefix Tree, is a data structure for string lookups, which can be also used for prefix searches."),"\n",a.createElement(t.p,null,"The words ",a.createElement(t.code,null,"dart"),", ",a.createElement(t.code,null,"dance"),", ",a.createElement(t.code,null,"dancer")," and ",a.createElement(t.code,null,"danger")," are stored in a Trie Tree as follows:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"root ─ d ─ a ─ r ─ t (dart)\n       │\n       └─ n ─ c ─ e (dance)\n          │       └─ r (dancer)\n          └─ g ─ e ─ r (danger)\n")),"\n",a.createElement(t.p,null,"Each letter is a node, and it points to the next letter. All leaf nodes are in fact words, and there exists a single path from the root to them. This can be also true for non-leaf nodes, in case a word is a prefix of another (e.g. ",a.createElement(t.code,null,"dance")," and ",a.createElement(t.code,null,"dancer"),")."),"\n",a.createElement(t.p,null,"This kind of tree supports use cases where we want to fetch all keys that start with a certain prefix. For example, say we want to search for all words that begin with 'dan'. This query would be executed as follows:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"node = root\nfor char in query:\n    # find child node for given character\n    next_node = node.get_child(char)\n\n    if next_node is None:\n        # If we can't find the character, collect and return all words under the current node with a traversal (e.g. depth-first search)\n        return collect_words_under_node(node)\n    else:\n        # else just step over to the next node and continue the loop\n        node = next_node\n")),"\n",a.createElement(t.p,null,"For ",a.createElement(t.code,null,"dan"),", we would stop at node ",a.createElement(t.code,null,"n")," and return the words ",a.createElement(t.code,null,"dance"),", ",a.createElement(t.code,null,"dancer")," and ",a.createElement(t.code,null,"danger"),". For a different query (e.g. ",a.createElement(t.code,null,"dab"),"), we can stop at node ",a.createElement(t.code,null,"a")," and return\nthe words ",a.createElement(t.code,null,"dart"),", ",a.createElement(t.code,null,"dance"),", ",a.createElement(t.code,null,"dancer")," and ",a.createElement(t.code,null,"danger")," (or even return an error if we don't want to allow searches using prefixes that are not in our tree)."),"\n",a.createElement(t.p,null,"Now if we wanted to reduce the memory footprint of such a tree, we could try compressing the paths. There are certain nodes that are only part of paths and have no extra information. These can be bundled together, so as to avoid the memory overhead of each node."),"\n",a.createElement(t.p,null,"The initial idea was to do this as a ",a.createElement(t.strong,null,"post-processing step"),". So the tree is generated as above, and after it is generated, we:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Start from the root node"),"\n",a.createElement(t.li,null,"For each node ",a.createElement(t.code,null,"a"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"If ",a.createElement(t.code,null,"a")," has a single child named ",a.createElement(t.code,null,"b"),", replace ",a.createElement(t.code,null,"a")," and ",a.createElement(t.code,null,"b")," with a single node ",a.createElement(t.code,null,"ab")),"\n",a.createElement(t.li,null,"Repeat for ",a.createElement(t.code,null,"ab")),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"Compressing the tree above would yield the following:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"root ─ da ─ rt (dart)\n        │\n        └─ n ─ ce (dance)\n           │    └─ r (dancer)\n           └─ ger (danger)\n")),"\n",a.createElement(t.p,null,"In this case, we went from 11 nodes in the original tree down to 7 nodes. Not bad - we removed ~42% of the original nodes. But did the memory usage also reduce by a proportional amount?"),"\n",a.createElement(t.h2,null,"The problem"),"\n",a.createElement(t.p,null,"Well, no. That's where Python's ",a.createElement(t.code,null,"pymalloc")," comes into play."),"\n",a.createElement(t.p,null,"Python uses its own memory allocator called ",a.createElement(t.code,null,"pymalloc")," for small (< 512 bytes) objects. It works by reserving chunks of 256KB of memory called Arenas, and fitting these small objects in those chunks ",a.createElement("sup",null,"[",a.createElement(t.a,{href:"https://docs.python.org/3/c-api/memory.html#the-pymalloc-allocator"},"1"),"]")," (",a.createElement(t.em,null,"oversimplification - Arenas are organized into pools which are organized into blocks, but for the sake of this post, we'll consider an Arena to be just a chunk of memory"),")."),"\n",a.createElement(t.p,null,"The catch here is that an Arena is freed and given back to the OS only when it's emptied. So even if we delete some of these small objects, we cannot be sure if their memory is given back to the OS, as we don't know if we cleared an Arena."),"\n",a.createElement(t.p,null,"Here's an over-simplified example - let's say we have 12 nodes, which made it into 3 Arenas, like so:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"|=========|=========|=========|\n| Node 1  | Node 6  | Node 11 |\n| Node 2  | Node 7  | Node 12 |\n| Node 3  | Node 8  |         |\n| Node 4  | Node 9  |         |\n| Node 5  | Node 10 |         |\n|---------|---------|---------|\n| Arena 1 | Arena 2 | Arena 3 |\n|=========|=========|=========|\n")),"\n",a.createElement(t.p,null,"Let's say that after compression, we've removed nodes 2, 3, 4, 7, 8, 11 and 12. We end up with the following memory allocation:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"|=========|=========|=========|\n| Node 1  | Node 6  |         |\n|         |         |         |\n|         |         |         |\n|         | Node 9  |         |\n| Node 5  | Node 10 |         |\n|---------|---------|---------|\n| Arena 1 | Arena 2 | Arena 3 |\n|=========|=========|=========|\n")),"\n",a.createElement(t.p,null,"In this example, we've removed 7 nodes out of 12, which is about 58%. We would naively expect that 58% of our memory is freed, but since only Arena 3 is emptied, we'll only see a 33% decrease in memory usage. If a single node was left in Arena 3, we would see no difference in memory usage."),"\n",a.createElement(t.h2,null,"How to spot this issue"),"\n",a.createElement(t.p,null,"We can use ",a.createElement(t.code,null,"sys._debugmallocstats()")," to get some info about the memory usage. This function prints various memory usage metrics, and among other things the number of currently allocated arenas:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"...\n# arenas allocated total   = 106\n# arenas reclaimed         =  73\n# arenas highwater mark    = 106\n# arenas allocated current =  33\n...\n")),"\n",a.createElement(t.p,null,"This tells us that:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"106 arenas have been allocated so far"),"\n",a.createElement(t.li,null,"73 of them have been freed (reclaimed)"),"\n",a.createElement(t.li,null,"106 arenas were used at any point in time"),"\n",a.createElement(t.li,null,"33 arenas are used now"),"\n"),"\n",a.createElement(t.p,null,"Here's a script that performs the following experiment:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Print memory stats"),"\n",a.createElement(t.li,null,"Store 1.000.000 strings and print memory stats"),"\n",a.createElement(t.li,null,"Remove strings based on probability and print memory stats"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},'import random\nimport sys\nimport gc\n\nprint("Startup memory stats")\nsys._debugmallocstats()\n\nstrings = []\nfor i in range(1000000):\n    strings.append(str(random.random()))\n\nprint(f"{len(strings)} strings allocated memory stats")\nsys._debugmallocstats()\n\np = 0.5\n# Keep some of the strings based on a given probability\nstrings = [s for s in strings if random.random() < p]\n\n# Try to force cleanup of these strings, since they are not referenced anywhere else\ngc.collect()\n\nprint(f"{len(strings)} strings allocated memory stats")\nsys._debugmallocstats()\n')),"\n",a.createElement(t.p,null,"Here's what was printed after running this script with Python3.11."),"\n",a.createElement(t.p,null,"Startup stats:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"# arenas allocated total   = 2\n# arenas reclaimed         = 0\n# arenas highwater mark    = 2\n# arenas allocated current = 2\n")),"\n",a.createElement(t.p,null,"1 million strings allocated stats:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"# arenas allocated total   = 80\n# arenas reclaimed         = 0\n# arenas highwater mark    = 80\n# arenas allocated current = 80\n")),"\n",a.createElement(t.p,null,"~500k strings allocated stats (after removing ~500k strings randomly):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"# arenas allocated total   = 80\n# arenas reclaimed         = 0\n# arenas highwater mark    = 80\n# arenas allocated current = 80\n")),"\n",a.createElement(t.p,null,"No arenas have been reclaimed. That's expected - sampling at random would yield something close to picking the same amount of strings out of every arena, so we don't expect any of them to be empty."),"\n",a.createElement(t.p,null,"And if we reduce ",a.createElement(t.code,null,"p")," (probability with which we keep a string) to 0.00005, where we end up with 50 strings, we get the following allocation stats:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"# arenas allocated total    = 80\n# arenas reclaimed          = 41\n# arenas highwater mark     = 80\n# arenas allocated current  = 39\n")),"\n",a.createElement(t.p,null,"Again, since we're using random sampling to remove strings, it makes sense that most of the arenas won't be emptied. Same behavior as above, but since we cleared many more strings, we do see a drop in currently allocated arenas."),"\n",a.createElement(t.p,null,"On the other hand, if we just keep the first 500k strings (",a.createElement(t.code,null,"strings = strings[:500000]"),"), we end up cleaning almost half of the arenas:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"# arenas allocated total   = 80\n# arenas reclaimed         = 37\n# arenas highwater mark    = 80\n# arenas allocated current = 43\n")),"\n",a.createElement(t.p,null,"This is expected, as the last-allocated arenas most probably contain the last-generated strings. In other words, we're assuming that the first allocated Arena will contain the first X strings, while the last allocated Arena will contain the last X strings (where X is the number of strings that can fit in an Arena)."),"\n",a.createElement(t.p,null,"So deleting the last 500k strings means that we're probably clearing whole arenas, as they were probably stored next to each other."),"\n",a.createElement(t.h2,null,"Is this a Python problem?"),"\n",a.createElement(t.p,null,"Well, pymalloc is a Python construct, but generally speaking, memory fragmentation is not something that happens only in Python. It's something unavoidable, but manageable when you can control how memory is allocated. It's the kind of problem that makes perfect sense as to why it happens, but you only think of it when you stumble upon it."),"\n",a.createElement(t.h2,null,"Is there a solution?"),"\n",a.createElement(t.p,null,"There's not a single solution per se; in fact, the only way to make sure that we don't have half-empty arenas is to never allocate so many of them in the first place."),"\n",a.createElement(t.p,null,"In this example, this means that we cannot create X nodes and delete Y of them down the road - we either have to create only Y nodes, or find a different solution like creating all X nodes, deleting some of them, writing the tree to disk in some format and re-reading it in a way that we only create Y nodes."),"\n",a.createElement(t.h3,null,"Further reading / references:"),"\n",a.createElement(t.h4,null,a.createElement(t.a,{href:"https://stackoverflow.com/a/3770572"},"https://stackoverflow.com/a/3770572")),"\n",a.createElement(t.h4,null,a.createElement(t.a,{href:"https://docs.python.org/3/c-api/memory.html#the-pymalloc-allocator"},"https://docs.python.org/3/c-api/memory.html#the-pymalloc-allocator")),"\n",a.createElement(t.h4,null,a.createElement(t.a,{href:"https://www.evanjones.ca/memoryallocator/"},"https://www.evanjones.ca/memoryallocator/")),"\n",a.createElement(t.h4,null,a.createElement(t.a,{href:"https://stackoverflow.com/a/40663945"},"https://stackoverflow.com/a/40663945")))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},r(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=n(2921),i=n(7541);function m(e){let t=e.split(/\W+/).filter((e=>e.length>=2));return Math.ceil(t.length/220)}const d=e=>{let{data:t,children:n}=e;return a.createElement(c.Z,{postTitle:t.mdx.frontmatter.title,postDate:t.mdx.frontmatter.date,readingTime:m(t.mdx.body)},n)},u=e=>{let{data:t}=e;return a.createElement(i.Z,{title:t.mdx.frontmatter.title})};function h(e){return a.createElement(d,e,a.createElement(s,e))}},2921:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1883),r="TopBar-module--nav-link-item--0b14f",o="TopBar-module--nav-link-text--cd3dc";var s=e=>{let{pageTitle:t,children:n}=e;const s=(0,l.K2)("3159585216");return a.createElement("div",{className:"TopBar-module--topbar--b171c"},a.createElement("header",{className:"TopBar-module--site-title--e2d2a"},s.site.siteMetadata.title),a.createElement("nav",null,a.createElement("ul",{className:"TopBar-module--nav-links--830f7"},a.createElement("li",{className:r},a.createElement(l.rU,{to:"/",className:o},"Home")),a.createElement("li",{className:r},a.createElement(l.rU,{to:"/about",className:o},"About")))))};var c=e=>{let{postTitle:t,postDate:n,readingTime:l,children:r}=e,o=n;return void 0!==l&&(o+=" - "+l+" min read"),a.createElement("main",null,a.createElement("h1",{className:"Post-module--heading--41f36"},t),a.createElement("p",{className:"Post-module--info--058fa"},o),a.createElement("div",{className:"Post-module--postBody--9d1db"},r))};var i=e=>{let{postTitle:t,postDate:n,readingTime:l,children:r}=e;return a.createElement("div",{className:"Layout-module--container--172c3"},a.createElement(s,null),a.createElement(c,{postTitle:t,postDate:n,readingTime:l,children:r}))}},7541:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,l.K2)("3159585216");return a.createElement("title",null,t," | ",n.site.siteMetadata.title)}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-slug-js-content-file-path-blog-pymalloc-mdx-78a903101d304b459f44.js.map
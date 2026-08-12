## ✅⚠️[MegaLinter](https://megalinter.io/10.0.0) analysis: Success with warnings



| Descriptor  |                                                Linter                                                |Files|Fixed|Errors|Max errors|Warnings|Elapsed time|
|-------------|------------------------------------------------------------------------------------------------------|----:|----:|-----:|---------:|-------:|-----------:|
|✅ ACTION    |[actionlint](https://megalinter.io/10.0.0/descriptors/action_actionlint)                              |    1|     |     0|          |       0|       0.01s|
|⚠️ ACTION    |[zizmor](https://megalinter.io/10.0.0/descriptors/action_zizmor)                                      |    1|    0|     1|          |       0|       0.27s|
|⚠️ COPYPASTE |[jscpd](https://megalinter.io/10.0.0/descriptors/copypaste_jscpd)                                     |  yes|     |   119|          |      no|       0.88s|
|✅ DOCKERFILE|[hadolint](https://megalinter.io/10.0.0/descriptors/dockerfile_hadolint)                              |    1|     |     0|          |       0|       0.02s|
|⚠️ HTML      |[djlint](https://megalinter.io/10.0.0/descriptors/html_djlint)                                        |    1|     |     1|          |       0|        0.6s|
|✅ HTML      |[htmlhint](https://megalinter.io/10.0.0/descriptors/html_htmlhint)                                    |    1|     |     0|          |       0|       0.21s|
|✅ JAVASCRIPT|[standard](https://megalinter.io/10.0.0/descriptors/javascript_standard)                              |    2|    0|     0|          |       0|       1.09s|
|✅ JSON      |[jsonlint](https://megalinter.io/10.0.0/descriptors/json_jsonlint)                                    |    2|     |     0|          |       0|       0.05s|
|✅ JSON      |[npm-package-json-lint](https://megalinter.io/10.0.0/descriptors/json_npm_package_json_lint)          |  yes|     |    no|          |      no|       0.25s|
|✅ JSON      |[prettier](https://megalinter.io/10.0.0/descriptors/json_prettier)                                    |    2|    0|     0|          |       0|        0.3s|
|✅ JSON      |[v8r](https://megalinter.io/10.0.0/descriptors/json_v8r)                                              |    2|     |     0|          |       0|       6.33s|
|⚠️ MARKDOWN  |[markdownlint](https://megalinter.io/10.0.0/descriptors/markdown_markdownlint)                        |    3|    0|     1|          |       0|       0.32s|
|✅ MARKDOWN  |[markdown-table-formatter](https://megalinter.io/10.0.0/descriptors/markdown_markdown_table_formatter)|    3|    0|     0|          |       0|       0.11s|
|✅ REPOSITORY|[betterleaks](https://megalinter.io/10.0.0/descriptors/repository_betterleaks)                        |  yes|     |    no|          |      no|       0.41s|
|⚠️ REPOSITORY|[checkov](https://megalinter.io/10.0.0/descriptors/repository_checkov)                                |  yes|     |     1|          |      no|      23.72s|
|⚠️ REPOSITORY|[devskim](https://megalinter.io/10.0.0/descriptors/repository_devskim)                                |  yes|     |     1|          |      no|       1.56s|
|✅ REPOSITORY|[dustilock](https://megalinter.io/10.0.0/descriptors/repository_dustilock)                            |  yes|     |    no|          |      no|        0.2s|
|⚠️ REPOSITORY|[git_diff](https://megalinter.io/10.0.0/descriptors/repository_git_diff)                              |  yes|     |     1|          |      no|       0.07s|
|⚠️ REPOSITORY|[grype](https://megalinter.io/10.0.0/descriptors/repository_grype)                                    |  yes|     |    16|          |      no|      50.52s|
|✅ REPOSITORY|[kingfisher](https://megalinter.io/10.0.0/descriptors/repository_kingfisher)                          |  yes|     |    no|          |      no|      16.27s|
|⚠️ REPOSITORY|[osv-scanner](https://megalinter.io/10.0.0/descriptors/repository_osv_scanner)                        |  yes|     |    26|          |      no|        0.9s|
|✅ REPOSITORY|[secretlint](https://megalinter.io/10.0.0/descriptors/repository_secretlint)                          |  yes|     |    no|          |      no|       0.94s|
|✅ REPOSITORY|[syft](https://megalinter.io/10.0.0/descriptors/repository_syft)                                      |  yes|     |    no|          |      no|       1.45s|
|⚠️ REPOSITORY|[trivy](https://megalinter.io/10.0.0/descriptors/repository_trivy)                                    |  yes|     |     1|          |      no|       9.65s|
|✅ REPOSITORY|[trivy-sbom](https://megalinter.io/10.0.0/descriptors/repository_trivy_sbom)                          |  yes|     |    no|          |      no|       0.48s|
|✅ REPOSITORY|[trufflehog](https://megalinter.io/10.0.0/descriptors/repository_trufflehog)                          |  yes|     |    no|          |      no|       2.77s|
|⚠️ SPELL     |[cspell](https://megalinter.io/10.0.0/descriptors/spell_cspell)                                       |   19|     |   349|          |       0|       7.65s|
|⚠️ SPELL     |[lychee](https://megalinter.io/10.0.0/descriptors/spell_lychee)                                       |   11|     |   115|          |       0|      64.69s|
|✅ YAML      |[prettier](https://megalinter.io/10.0.0/descriptors/yaml_prettier)                                    |    4|    1|     0|          |       0|       0.17s|
|✅ YAML      |[v8r](https://megalinter.io/10.0.0/descriptors/yaml_v8r)                                              |    4|     |     0|          |       0|       2.14s|
|✅ YAML      |[yamllint](https://megalinter.io/10.0.0/descriptors/yaml_yamllint)                                    |    4|     |     0|          |       0|       0.26s|

## Detailed Issues

<details>
<summary>⚠️ REPOSITORY / checkov - 1 error</summary>

```
dockerfile scan results:

Passed checks: 23, Failed checks: 1, Skipped checks: 0

Check: CKV_DOCKER_3: "Ensure that a user for the container has been created"
	FAILED for resource: /Dockerfile.
	File: /Dockerfile:1-20
	Guide: https://docs.prismacloud.io/en/enterprise-edition/policy-reference/docker-policies/docker-policy-index/ensure-that-a-user-for-the-container-has-been-created

		1  | # Generated by https://smithery.ai. See: https://smithery.ai/docs/build/project-config
		2  | FROM node:lts-alpine
		3  | 
		4  | # Create app directory
		5  | WORKDIR /app
		6  | 
		7  | # Copy package.json and lockfile
		8  | COPY package.json package-lock.json ./
		9  | 
		10 | # Install dependencies (including dev for source start)
		11 | RUN npm install --ignore-scripts
		12 | 
		13 | # Copy source
		14 | COPY . .
		15 | 
		16 | # Expose port for practices (stdio use)
		17 | EXPOSE 8080
		18 | 
		19 | # Default command (overridden by MCP start)
		20 | CMD ["node", "index.js"]
```

</details>

<details>
<summary>⚠️ SPELL / cspell - 349 errors</summary>

```
.github/dependabot.yml:12:28     - Unknown word (chirag)     -- dependency-name: "@chirag127/*" # workspace
	 Suggestions: [chirac, chiral, Chirac, chia, crag]
.github/workflows/megalinter.yml:38:15     - Unknown word (stefanzweifel) -- uses: stefanzweifel/git-auto-commit-action
	 Suggestions: []
.gitignore:14:1      - Unknown word (pids)       -- pids
	 Suggestions: [pads, peds, pi's, pics, pies]
.gitignore:19:48     - Unknown word (jscoverage) -- nstrumented libs generated by jscoverage/JSCover
	 Suggestions: [coverage]
.gitignore:36:7      - Unknown word (wscript)    -- .lock-wscript
	 Suggestions: [script, Script, scrip, scrips, scrypt]
.gitignore:43:1      - Unknown word (jspm)       -- jspm_packages/
	 Suggestions: [jsm, jsp, JSM, jump, ppsm]
.gitignore:55:2      - Unknown word (eslintcache) -- .eslintcache
	 Suggestions: []
.gitignore:58:2      - Unknown word (stylelintcache) -- .stylelintcache
	 Suggestions: []
.gitignore:60:3      - Unknown word (Microbundle)    -- # Microbundle cache
	 Suggestions: []
.gitignore:75:3      - Unknown word (dotenv)         -- # dotenv environment variable
	 Suggestions: [dotenvx, dotnet, dote, doted, doter]
.gitignore:90:3      - Unknown word (Nuxt)           -- # Nuxt.js build / generate
	 Suggestions: [Next, NEXT, nut, Nut, Unit]
.gitignore:91:2      - Unknown word (nuxt)           -- .nuxt
	 Suggestions: [next, NEXT, nut, Nut, unit]
.gitignore:100:3     - Unknown word (vuepress)       -- # vuepress build output
	 Suggestions: [suppress, verses, veepees, viewless]
.gitignore:101:2     - Unknown word (vuepress)       -- .vuepress/dist
	 Suggestions: [suppress, verses, veepees, viewless]
.gitignore:103:3     - Unknown word (vuepress)       -- # vuepress v2.x temp and cache
	 Suggestions: [suppress, verses, veepees, viewless]
CHANGELOG.md:12:20     - Unknown word (stochasticalgorithm) -- - Implemented the `stochasticalgorithm` tool with support for
	 Suggestions: []
CHANGELOG.md:14:30     - Unknown word (MCTS)                -- Monte Carlo Tree Search (MCTS)
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
docs/CNAME:1:32      - Unknown word (oriz)       -- thinking-mcp-server.oriz.in
	 Suggestions: [orig, orin, ortiz, Orin, Ortiz]
docs/index.html:38:12     - Unknown word (MCTS)       -- <li><b>MCTS</b>Monte Carlo Tree
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
docs/index.html:47:33     - Unknown word (Chirag)     -- MIT Licensed &middot; Chirag Singhal (chirag127)
	 Suggestions: [chirac, Chirac, Chiral, Chia, Crag]
docs/index.html:47:40     - Unknown word (Singhal)    -- Licensed &middot; Chirag Singhal (chirag127)</footer
	 Suggestions: [signal, Signal, singh, Singh, Sangha]
docs/index.html:47:49     - Unknown word (chirag)     -- middot; Chirag Singhal (chirag127)</footer>
	 Suggestions: [chirac, chiral, Chirac, chia, crag]
index.js:2:26      - Unknown word (modelcontextprotocol) -- import { Server } from '@modelcontextprotocol/sdk/server/index.js
	 Suggestions: []
index.js:3:40      - Unknown word (modelcontextprotocol) -- StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js
	 Suggestions: []
index.js:9:10      - Unknown word (modelcontextprotocol) -- } from '@modelcontextprotocol/sdk/types.js'
	 Suggestions: []
index.js:57:3      - Unknown word (mcts)                 -- mctsOneLineSummary (params
	 Suggestions: [mats, mots, muts, MATS, acts]
index.js:83:15     - Unknown word (mcts)                 -- case 'mcts':
	 Suggestions: [mats, mots, muts, MATS, acts]
index.js:84:26     - Unknown word (mcts)                 -- summary = this.mctsOneLineSummary(validatedInput
	 Suggestions: [mats, mots, muts, MATS, acts]
index.js:124:10    - Unknown word (stochasticalgorithm)  -- name: 'stochasticalgorithm',
	 Suggestions: []
index.js:128:28    - Unknown word (MCTS)                 -- Monte Carlo Tree Search (MCTS): Simulate future action
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
index.js:141:12    - Unknown word (mcts)                 -- 'mcts',
	 Suggestions: [mats, mots, muts, MATS, acts]
index.js:166:7     - Unknown word (stochasticalgorithm)  -- stochasticalgorithm: STOCHASTIC_TOOL
	 Suggestions: []
index.js:178:11    - Unknown word (stochasticalgorithm)  -- case 'stochasticalgorithm':
	 Suggestions: []
LICENSE:3:20      - Unknown word (Chirag)     -- Copyright (c) 2026 Chirag Singhal
	 Suggestions: [chirac, Chirac, Chiral, Chia, Crag]
LICENSE:3:27      - Unknown word (Singhal)    -- Copyright (c) 2026 Chirag Singhal
	 Suggestions: [Signal, singh, Singh, Sangha, Singh's]
llm.txt:17:6      - Unknown word (Apify)      -- | [Apify MCP Tester][Apify MCP
	 Suggestions: [Aifc, Aiff, Airy, Api3, Apia]
llm.txt:17:24     - Unknown word (Apify)      -- [Apify MCP Tester][Apify MCP Tester]     | ❌
	 Suggestions: [Aifc, Aiff, Airy, Api3, Apia]
llm.txt:29:135    - Unknown word (multimodal) -- | ✅     | Full multimodal MCP support, with end
	 Suggestions: [multivocal, multifoil, multimedia, multipolar, multiradial]
llm.txt:30:6      - Unknown word (FLUJO)      -- | [FLUJO][FLUJO]
	 Suggestions: [FLUB, FLUE, FLUS, flux, FLUX]
llm.txt:30:13     - Unknown word (FLUJO)      -- | [FLUJO][FLUJO]
	 Suggestions: [FLUB, FLUE, FLUS, flux, FLUX]
llm.txt:31:6      - Unknown word (Genkit)     -- | [Genkit][Genkit]
	 Suggestions: [Genit, gent, Gent, genet, Genet]
llm.txt:31:14     - Unknown word (Genkit)     -- | [Genkit][Genkit]
	 Suggestions: [Genit, gent, Gent, genet, Genet]
llm.txt:32:6      - Unknown word (Glama)      -- | [Glama][Glama]
	 Suggestions: [gama, Gama, Glam, Lama, Llama]
llm.txt:32:13     - Unknown word (Glama)      -- | [Glama][Glama]
	 Suggestions: [gama, Gama, Glam, Lama, Llama]
llm.txt:35:6      - Unknown word (gptme)      -- | [gptme][gptme]
	 Suggestions: [game, gate, gite, gimme, glume]
llm.txt:35:13     - Unknown word (gptme)      -- | [gptme][gptme]
	 Suggestions: [game, gate, gite, gimme, glume]
llm.txt:37:6      - Unknown word (Klavis)     -- | [Klavis AI Slack/Discord/Web
	 Suggestions: [Kalis, Kadis, Kakis, Kavas, Klans]
llm.txt:37:35     - Unknown word (Klavis)     -- AI Slack/Discord/Web][Klavis AI] | ✅           |
	 Suggestions: [Kalis, Kadis, Kakis, Kavas, Klans]
llm.txt:39:6      - Unknown word (Lutra)      -- | [Lutra][Lutra]
	 Suggestions: [Ultra, Lubra, Lustra, putra, Putra]
llm.txt:39:13     - Unknown word (Lutra)      -- | [Lutra][Lutra]
	 Suggestions: [Ultra, Lubra, Lustra, putra, Putra]
llm.txt:41:187    - Unknown word (llms)       -- http connection, local llms-agents.
	 Suggestions: [lams, lems, LEMs, alms, elms]
llm.txt:46:6      - Unknown word (Msty)       -- | [Msty Studio][Msty Studio
	 Suggestions: [misty, Misty, Musty, Mst, MST]
llm.txt:46:19     - Unknown word (Msty)       -- | [Msty Studio][Msty Studio]
	 Suggestions: [misty, Misty, Musty, Mst, MST]
llm.txt:47:10     - Unknown word (Sumi)       -- | [OpenSumi][OpenSumi]
	 Suggestions: [Semi, sufi, Sufi, Sumo, Sump]
llm.txt:47:20     - Unknown word (Sumi)       -- | [OpenSumi][OpenSumi]
	 Suggestions: [Semi, sufi, Sufi, Sumo, Sump]
llm.txt:47:152    - Unknown word (Sumi)       -- Supports tools in OpenSumi
	 Suggestions: [Semi, sufi, Sufi, Sumo, Sump]
llm.txt:48:6      - Unknown word (oterm)      -- | [oterm][oterm]
	 Suggestions: [term, xterm, orem, Orem, o'er]
llm.txt:48:13     - Unknown word (oterm)      -- | [oterm][oterm]
	 Suggestions: [term, xterm, orem, Orem, o'er]
llm.txt:48:171    - Unknown word (Ollama)     -- prompts and sampling for Ollama.
	 Suggestions: [Llama, Lama, Olla, obama, Obama]
llm.txt:52:6      - Unknown word (Sourcegraph) -- | [Sourcegraph Cody][Cody]
	 Suggestions: [sourcetrash, sourceTrash, Sourcetrash, SourceTrash, Sourcemap]
llm.txt:54:6      - Unknown word (Superinterface) -- | [Superinterface][Superinterface]
	 Suggestions: []
llm.txt:54:22     - Unknown word (Superinterface) -- | [Superinterface][Superinterface] | ❌
	 Suggestions: []
llm.txt:55:6      - Unknown word (Theia)          -- | [TheiaAI/TheiaIDE][TheiaAI
	 Suggestions: [thea, Thea, Theca, Their, Theta]
llm.txt:55:14     - Unknown word (Theia)          -- | [TheiaAI/TheiaIDE][TheiaAI/TheiaIDE
	 Suggestions: [thea, Thea, Theca, Their, Theta]
llm.txt:55:24     - Unknown word (Theia)          -- [TheiaAI/TheiaIDE][TheiaAI/TheiaIDE] | ❌
	 Suggestions: [thea, Thea, Theca, Their, Theta]
llm.txt:55:32     - Unknown word (Theia)          -- TheiaAI/TheiaIDE][TheiaAI/TheiaIDE] | ❌
	 Suggestions: [thea, Thea, Theca, Their, Theta]
llm.txt:55:159    - Unknown word (Theia)          -- tools for Agents in Theia AI and the AI-powered
	 Suggestions: [thea, Thea, Theca, Their, Theta]
llm.txt:60:6      - Unknown word (Witsy)          -- | [Witsy][Witsy]
	 Suggestions: [Wits, Withy, Witty, Bitsy, Ditsy]
llm.txt:60:13     - Unknown word (Witsy)          -- | [Witsy][Witsy]
	 Suggestions: [Wits, Withy, Witty, Bitsy, Ditsy]
llm.txt:60:148    - Unknown word (Witsy)          -- | Supports tools in Witsy.
	 Suggestions: [Wits, Withy, Witty, Bitsy, Ditsy]
llm.txt:71:4      - Unknown word (Apify)          -- [Apify MCP Tester]: https:
	 Suggestions: [Aifc, Aiff, Airy, Api3, Apia]
llm.txt:93:4      - Unknown word (Klavis)         -- [Klavis AI]: https://www.klavis
	 Suggestions: [Kalis, Kadis, Kakis, Kavas, Klans]
llm.txt:99:4      - Unknown word (FLUJO)          -- [FLUJO]: https://github.com
	 Suggestions: [FLUB, FLUE, FLUS, flux, FLUX]
llm.txt:101:4     - Unknown word (Glama)          -- [Glama]: https://glama.ai/chat
	 Suggestions: [gama, Gama, Glam, Lama, Llama]
llm.txt:103:4     - Unknown word (Genkit)         -- [Genkit]: https://github.com
	 Suggestions: [Genit, gent, Gent, genet, Genet]
llm.txt:111:4     - Unknown word (Lutra)          -- [Lutra]: https://lutra.ai
	 Suggestions: [Ultra, Lubra, Lustra, putra, Putra]
llm.txt:125:4     - Unknown word (Msty)           -- [Msty Studio]: https://msty
	 Suggestions: [misty, Misty, Musty, Mst, MST]
llm.txt:127:8     - Unknown word (Sumi)           -- [OpenSumi]: https://github.com
	 Suggestions: [Semi, sufi, Sufi, Sumo, Sump]
llm.txt:129:4     - Unknown word (oterm)          -- [oterm]: https://github.com
	 Suggestions: [term, xterm, orem, Orem, o'er]
llm.txt:141:4     - Unknown word (Superinterface) -- [Superinterface]: https://superinterface
	 Suggestions: []
llm.txt:153:4     - Unknown word (gptme)          -- [gptme]: https://github.com
	 Suggestions: [game, gate, gite, gimme, glume]
llm.txt:155:4     - Unknown word (Witsy)          -- [Witsy]: https://github.com
	 Suggestions: [Wits, Withy, Witty, Bitsy, Ditsy]
llm.txt:193:68    - Unknown word (Ollama)         -- Anthropic, Gemini, Ollama, and all OpenAI API
	 Suggestions: [Llama, Lama, Olla, obama, Obama]
llm.txt:230:5     - Unknown word (Apify)          -- ### Apify MCP Tester
	 Suggestions: [Aifc, Aiff, Airy, Api3, Apia]
llm.txt:232:2     - Unknown word (Apify)          -- [Apify MCP Tester](https:/
	 Suggestions: [Aifc, Aiff, Airy, Api3, Apia]
llm.txt:258:191   - Unknown word (Ollama)         -- local AI models (via Ollama, LM Studio or LMX)
	 Suggestions: [Llama, Lama, Olla, obama, Obama]
llm.txt:345:221   - Unknown word (gptel)          -- for AI plugins like [gptel](https://github.com
	 Suggestions: [gael, gate, gite, gated, gater]
llm.txt:362:5     - Unknown word (FLUJO)          -- ### FLUJO
	 Suggestions: [FLUB, FLUE, FLUS, flux, FLUX]
llm.txt:364:22    - Unknown word (FLUJO)          -- Think n8n + ChatGPT. FLUJO is an desktop application
	 Suggestions: [FLUB, FLUE, FLUS, flux, FLUX]
llm.txt:364:207   - Unknown word (ollama)         -- online and offline (ollama) models, it manages
	 Suggestions: [llama, lama, olla, obama, ollas]
llm.txt:374:5     - Unknown word (Genkit)         -- ### Genkit
	 Suggestions: [Genit, gent, Gent, genet, Genet]
llm.txt:376:2     - Unknown word (Genkit)         -- [Genkit](https://github.com
	 Suggestions: [Genit, gent, Gent, genet, Genet]
llm.txt:376:138   - Unknown word (genkitx)        -- into applications. The [genkitx-mcp](https://github
	 Suggestions: [genit, gentil, genetic, gent, genet]
llm.txt:381:34    - Unknown word (Genkit's)       -- discovery with support in Genkit's Dev UI playground
	 Suggestions: [gent's, Gent's, genet's, Genet's, Genie's]
llm.txt:382:34    - Unknown word (Genkit's)       -- interoperability with Genkit's existing tools and prompts
	 Suggestions: [gent's, Gent's, genet's, Genet's, Genie's]
llm.txt:385:5     - Unknown word (Glama)          -- ### Glama
	 Suggestions: [gama, Gama, Glam, Lama, Llama]
llm.txt:387:2     - Unknown word (Glama)          -- [Glama](https://glama.ai/chat
	 Suggestions: [gama, Gama, Glam, Lama, Llama]
llm.txt:419:5     - Unknown word (gptme)          -- ### gptme
	 Suggestions: [game, gate, gite, gimme, glume]
llm.txt:421:2     - Unknown word (gptme)          -- [gptme](https://github.com
	 Suggestions: [game, gate, gite, gimme, glume]
llm.txt:439:62    - Unknown word (Hyperbrowser)   -- hundreds of sessions via [Hyperbrowser](https://www.hyperbrowser
	 Suggestions: [hoverbrowser, hOverbrowser, Hoverbrowser, HOverbrowser, hoverBrowser]
llm.txt:440:38    - Unknown word (Composio)       -- Connect to tools like Composio for full workflows
	 Suggestions: [Compos, Compose, Compost, Composed, Composer]
llm.txt:442:5     - Unknown word (Klavis)         -- ### Klavis AI Slack/Discord/Web
	 Suggestions: [Kalis, Kadis, Kakis, Kavas, Klans]
llm.txt:444:2     - Unknown word (Klavis)         -- [Klavis AI](https://www.klavis
	 Suggestions: [Kalis, Kadis, Kakis, Kavas, Klans]
llm.txt:466:24    - Unknown word (hostable)       -- Open-source and self-hostable, with secure multi-user
	 Suggestions: [hoistable, hatable, hostage, hostile, hashable]
llm.txt:469:5     - Unknown word (Lutra)          -- ### Lutra
	 Suggestions: [Ultra, Lubra, Lustra, putra, Putra]
llm.txt:471:2     - Unknown word (Lutra)          -- [Lutra](https://lutra.ai) is
	 Suggestions: [Ultra, Lubra, Lustra, putra, Putra]
llm.txt:478:13    - Unknown word (Automations)    -- * Shareable Automations: Easily share your saved
	 Suggestions: [automation, Automation, Automatons, Automation's, Automaton]
llm.txt:504:16    - Unknown word (langchain)      -- * Supports all langchain supported models, also
	 Suggestions: [linchpin, longhair]
llm.txt:516:3     - Unknown word (Inegrates)      -- * Inegrates with popular Neovim
	 Suggestions: [Ingrates, Integrates, Ingrate, Iterates, Indurates]
llm.txt:516:46    - Unknown word (Avante)         -- Neovim chat plugins Avante.nvim and CodeCompanion
	 Suggestions: [avnet, Avnet, Adnate, Agnate, Ante]
llm.txt:516:53    - Unknown word (nvim)           -- chat plugins Avante.nvim and CodeCompanion.nvim
	 Suggestions: [nim, vim, Vim, naia, naif]
llm.txt:516:76    - Unknown word (nvim)           -- nvim and CodeCompanion.nvim
	 Suggestions: [nim, vim, Vim, naia, naif]
llm.txt:557:5     - Unknown word (Msty)           -- ### Msty Studio
	 Suggestions: [misty, Misty, Musty, Mst, MST]
llm.txt:559:2     - Unknown word (Msty)           -- [Msty Studio](https://msty
	 Suggestions: [misty, Misty, Musty, Mst, MST]
llm.txt:563:15    - Unknown word (Toolsets)       -- * **Toolbox & Toolsets**: Connect AI models
	 Suggestions: [Toolset, Toilets, Toolers, Toolless, Toolsheds]
llm.txt:563:125   - Unknown word (Toolsets)       -- figurations. Group tools into Toolsets to enable dynamic, multi
	 Suggestions: [Toolset, Toilets, Toolers, Toolless, Toolsheds]
llm.txt:572:9     - Unknown word (Sumi)           -- ### OpenSumi
	 Suggestions: [Semi, sufi, Sufi, Sumo, Sump]
llm.txt:581:5     - Unknown word (oterm)          -- ### oterm
	 Suggestions: [term, xterm, orem, Orem, o'er]
llm.txt:583:2     - Unknown word (oterm)          -- [oterm] is a terminal client
	 Suggestions: [term, xterm, orem, Orem, o'er]
llm.txt:583:34    - Unknown word (Ollama)         -- terminal client for Ollama allowing users to create
	 Suggestions: [Llama, Lama, Olla, obama, Obama]
llm.txt:587:62    - Unknown word (Ollama)         -- stomizable chat sessions with Ollama connected with tools
	 Suggestions: [Llama, Lama, Olla, obama, Obama]
llm.txt:609:29    - Unknown word (varibles)       -- Integration with history, varibles, and collections for
	 Suggestions: [variables*, varies, varices, variole, variable]
llm.txt:621:5     - Unknown word (Sourcegraph)    -- ### Sourcegraph Cody
	 Suggestions: [sourcetrash, sourceTrash, Sourcetrash, SourceTrash, Sourcemap]
llm.txt:623:68    - Unknown word (Sourcegraph's)  -- modelcontextprotocol) is Sourcegraph's AI coding assistant
	 Suggestions: []
llm.txt:628:20    - Unknown word (Sourcegraph's)  -- * Integration with Sourcegraph's code intelligence
	 Suggestions: []
llm.txt:643:5     - Unknown word (Superinterface) -- ### Superinterface
	 Suggestions: []
llm.txt:645:2     - Unknown word (Superinterface) -- [Superinterface](https://superinterface
	 Suggestions: []
llm.txt:717:5     - Unknown word (Witsy)          -- ### Witsy
	 Suggestions: [Wits, Withy, Witty, Bitsy, Ditsy]
llm.txt:719:71    - Unknown word (supoorting)     -- AI desktop assistant, supoorting Anthropic models and
	 Suggestions: [supporting*, sporting, Sporting, spooring, supportings]
llm.txt:805:84    - Unknown word (permissioning)  -- experiences with granular permissioning, standardized interaction
	 Suggestions: [permission, permissions, permission's]
llm.txt:807:4     - Unknown word (Multimodality)  -- ## Multimodality
	 Suggestions: []
llm.txt:855:6     - Unknown word (Peder)          -- [Peder Holdgaard Pedersen]
	 Suggestions: [Peer, Pedes, peter, Peter, Pedler]
llm.txt:855:12    - Unknown word (Holdgaard)      -- [Peder Holdgaard Pedersen](http://github
	 Suggestions: [hildegard, Hildegard]
llm.txt:855:22    - Unknown word (Pedersen)       -- [Peder Holdgaard Pedersen](http://github.com/PederHP
	 Suggestions: [petersen, Petersen, peterson, Peterson, Peeress]
llm.txt:871:82    - Unknown word (Tanzu)          -- Spring AI at VMware Tanzu is now
	 Suggestions: [Kanzu, Tabu, tana, Tana, Tang]
llm.txt:890:5     - Unknown word (Dockerized)     -- * Dockerized MCP servers in the
	 Suggestions: [Dockerize, Dockerd, Dickered, Docketed, Dasherized]
llm.txt:1113:30   - Unknown word (modelcontextprotocol) -- import { Server } from "@modelcontextprotocol/sdk/server/index.js
	 Suggestions: []
llm.txt:1114:44   - Unknown word (modelcontextprotocol) -- StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js
	 Suggestions: []
llm.txt:1145:12   - Unknown word (asyncio)              -- import asyncio
	 Suggestions: [async, asuncion, Asuncion, asunción, Asunción]
llm.txt:1170:9    - Unknown word (asyncio)              -- asyncio.run(main())
	 Suggestions: [async, asuncion, Asuncion, asunción, Asunción]
llm.txt:1453:30   - Unknown word (modelcontextprotocol) -- import { Server } from "@modelcontextprotocol/sdk/server";
	 Suggestions: []
llm.txt:1457:14   - Unknown word (modelcontextprotocol) -- } from "@modelcontextprotocol/sdk/types";
	 Suggestions: []
llm.txt:1954:28   - Unknown word (myapp)                -- /home/user/projects/myapp
	 Suggestions: [maypop, mcap, myup, myUp, Myup]
llm.txt:2703:21   - Unknown word (fastmcp)              -- from mcp.server.fastmcp import FastMCP
	 Suggestions: [fast, fasts, fast's, fasted, fasten]
llm.txt:2943:10   - Unknown word (starlette)            -- from starlette.applications import
	 Suggestions: [starlet, starlets, starlet's, statuette, storiette]
llm.txt:2943:40   - Unknown word (Starlette)            -- applications import Starlette
	 Suggestions: [Starlet, Starlets, Starlet's, Statuette, Storiette]
llm.txt:2944:10   - Unknown word (starlette)            -- from starlette.routing import Route
	 Suggestions: [starlet, starlets, starlet's, statuette, storiette]
llm.txt:2956:5    - Unknown word (starlette)            -- starlette_app = Starlette(
	 Suggestions: [starlet, starlets, starlet's, statuette, storiette]
llm.txt:2956:21   - Unknown word (Starlette)            -- starlette_app = Starlette(
	 Suggestions: [Starlet, Starlets, Starlet's, Statuette, Storiette]
llm.txt:2999:7    - Unknown word (onclose)              -- onclose?: () => void;
	 Suggestions: [close, onces, nocode, once, ochone]
llm.txt:3007:60   - Unknown word (asyncio)              -- often implemented with asyncio, we recommend
	 Suggestions: [async, asuncion, Asuncion, asunción, Asunción]
llm.txt:3008:61   - Unknown word (anyio)                -- like transports with `anyio` for wider compatibility
	 Suggestions: [anzio, Anzio, agio, anil, anim]
llm.txt:3011:6    - Unknown word (contextmanager)       -- @contextmanager
	 Suggestions: []
llm.txt:3023:20   - Unknown word (anyio)                -- async with anyio.create_task_group()
	 Suggestions: [anzio, Anzio, agio, anil, anim]
llm.txt:3038:36   - Unknown word (aclose)               -- await write_stream.aclose()
	 Suggestions: [close, aloes, alcove, acls, acos]
llm.txt:3039:35   - Unknown word (aclose)               -- await read_stream.aclose()
	 Suggestions: [close, aloes, alcove, acls, acos]
llm.txt:3082:60   - Unknown word (asyncio)              -- often implemented with asyncio, we recommend
	 Suggestions: [async, asuncion, Asuncion, asunción, Asunción]
llm.txt:3083:61   - Unknown word (anyio)                -- like transports with `anyio` for wider compatibility
	 Suggestions: [anzio, Anzio, agio, anil, anim]
llm.txt:3086:6    - Unknown word (contextmanager)       -- @contextmanager
	 Suggestions: []
llm.txt:3090:47   - Unknown word (anyio)                -- writer, read_stream = anyio.create_memory_object
	 Suggestions: [anzio, Anzio, agio, anil, anim]
llm.txt:3091:49   - Unknown word (anyio)                -- write_stream_reader = anyio.create_memory_object
	 Suggestions: [anzio, Anzio, agio, anil, anim]
llm.txt:3112:40   - Unknown word (aclose)               -- await write_stream.aclose()
	 Suggestions: [close, aloes, alcove, acls, acos]
llm.txt:3113:39   - Unknown word (aclose)               -- await read_stream.aclose()
	 Suggestions: [close, aloes, alcove, acls, acos]
llm.txt:3132:11   - Unknown word (backpressure)         -- 8. Handle backpressure in message queues
	 Suggestions: []
llm.txt:3279:20   - Unknown word (modelcontextprotocol) -- "args": ["-y", "@modelcontextprotocol/server-filesystem",
	 Suggestions: []
llm.txt:3294:28   - Unknown word (myapp)                -- command": "mcp-server-myapp",
	 Suggestions: [maypop, mcap, myup, myUp, Myup]
llm.txt:3296:8    - Unknown word (MYAPP)                -- "MYAPP_API_KEY": "some_key
	 Suggestions: [MAYPOP, mcap, MCAP, MYUP, myUp]
llm.txt:3497:85   - Unknown word (testdb)               -- postgres://127.0.0.1/testdb
	 Suggestions: [test, tsdb, testa, tests, testy]
llm.txt:3658:6    - Unknown word (Browserbase)          -- * **[Browserbase](https://github.com
	 Suggestions: [browsername, browserName, Browsername, BrowserName, Browserpage]
llm.txt:3665:6    - Unknown word (Qdrant)               -- * **[Qdrant](https://github.com
	 Suggestions: [Quant, quran, Quran, Drat, Rant]
llm.txt:3665:100  - Unknown word (Qdrant)               -- semantic memory using the Qdrant vector search engine
	 Suggestions: [Quant, quran, Quran, Drat, Rant]
llm.txt:3666:6    - Unknown word (Raygun)               -- * **[Raygun](https://github.com
	 Suggestions: [Rayon, Rayban, RayBan, rayburn, Rayburn]
llm.txt:3670:6    - Unknown word (Tinybird)             -- * **[Tinybird](https://github.com
	 Suggestions: [Trihybrid, Tineid, Tanyard]
llm.txt:3670:83   - Unknown word (Tinybird)             -- Interface with the Tinybird serverless ClickHouse
	 Suggestions: [Trihybrid, Tineid, Tanyard]
llm.txt:3742:4    - Unknown word (Supergateway)         -- * [Supergateway](https://github.com
	 Suggestions: [storegateway, Storegateway, squaregateway, Squaregateway, storeGateway]
llm.txt:3781:172  - Unknown word (duplicative)          -- created significant duplicative work—every developer
	 Suggestions: [duplicate, duplicating, duplication, duplicature, duplicated]
llm.txt:3894:91   - Unknown word (llms)                 -- tutorials/building-mcp-with-llms">
	 Suggestions: [lams, lems, LEMs, alms, elms]
llm.txt:3984:8    - Unknown word (venv)                 -- uv venv
	 Suggestions: [vena, vend, venn, vent, Venn]
llm.txt:3988:6    - Unknown word (venv)                 -- .venv\Scripts\activate
	 Suggestions: [vena, vend, venn, vent, Venn]
llm.txt:3990:13   - Unknown word (venv)                 -- source .venv/bin/activate
	 Suggestions: [vena, vend, venn, vent, Venn]
llm.txt:3993:33   - Unknown word (dotenv)               -- mcp anthropic python-dotenv
	 Suggestions: [dotenvx, dotnet, dote, doted, doter]
llm.txt:4039:12   - Unknown word (asyncio)              -- import asyncio
	 Suggestions: [async, asuncion, Asuncion, asunción, Asunción]
llm.txt:4041:10   - Unknown word (contextlib)           -- from contextlib import AsyncExitStack
	 Suggestions: [context, contexts, contently, context's, contextual]
llm.txt:4047:10   - Unknown word (dotenv)               -- from dotenv import load_dotenv
	 Suggestions: [dotenvx, dotnet, dote, doted, doter]
llm.txt:4047:29   - Unknown word (dotenv)               -- from dotenv import load_dotenv
	 Suggestions: [dotenvx, dotnet, dote, doted, doter]
llm.txt:4049:10   - Unknown word (dotenv)               -- load_dotenv() # load environment
	 Suggestions: [dotenvx, dotnet, dote, doted, doter]
llm.txt:4071:40   - Unknown word (endswith)             -- server_script_path.endswith('.py')
	 Suggestions: [netswitch, netSwitch, edith, endwise, endowing]
llm.txt:4072:36   - Unknown word (endswith)             -- server_script_path.endswith('.js')
	 Suggestions: [netswitch, netSwitch, edith, endwise, endowing]
llm.txt:4132:13   - Unknown word (elif)                 -- elif content.type == 'tool
	 Suggestions: [leif, elia, elis, eliz, enif]
llm.txt:4194:31   - Unknown word (aclose)               -- await self.exit_stack.aclose()
	 Suggestions: [close, aloes, alcove, acls, acos]
llm.txt:4399:63   - Unknown word (dotenv)               -- modelcontextprotocol/sdk dotenv
	 Suggestions: [dotenvx, dotnet, dote, doted, doter]
llm.txt:4814:10   - Unknown word (mvnw)                 -- ./mvnw clean install
	 Suggestions: [mown, mana, mane, mani, mann]
llm.txt:4819:10   - Unknown word (mvnw)                 -- ./mvnw spring-boot:run
	 Suggestions: [mown, mana, mane, mani, mann]
llm.txt:4836:22   - Unknown word (springframework)      -- <groupId>org.springframework.ai</groupId>
	 Suggestions: []
llm.txt:4840:22   - Unknown word (springframework)      -- <groupId>org.springframework.ai</groupId>
	 Suggestions: []
llm.txt:4860:13   - Unknown word (toolcallback)         -- toolcallback:
	 Suggestions: []
llm.txt:4867:31   - Unknown word (toolcallback)         -- spring.ai.mcp.client.toolcallback.enabled=true` property
	 Suggestions: []
llm.txt:4915:7    - Unknown word (mvnw)                 -- ./mvnw clean install
	 Suggestions: [mown, mana, mane, mani, mann]
llm.txt:4922:7    - Unknown word (mvnw)                 -- ./mvnw spring-boot:run
	 Suggestions: [mown, mana, mane, mani, mann]
llm.txt:4938:50   - Unknown word (Customizer)           -- through `McpSyncClientCustomizer` or `McpAsyncClientCustomizer
	 Suggestions: [Customize, Customized, Customizes, Customer, Kustomize]
llm.txt:4938:80   - Unknown word (Customizer)           -- Customizer` or `McpAsyncClientCustomizer`
	 Suggestions: [Customize, Customized, Customizes, Customer, Kustomize]
llm.txt:4947:22   - Unknown word (springframework)      -- <groupId>org.springframework.ai</groupId>
	 Suggestions: []
llm.txt:4948:42   - Unknown word (webflux)              -- spring-ai-mcp-client-webflux-spring-boot-starter
	 Suggestions: [efflux, webex, weblog, webfeet, webfont]
llm.txt:5033:26   - Unknown word (johnrengelman)        -- id("com.github.johnrengelman.shadow") version "8
	 Suggestions: []
llm.txt:5039:26   - Unknown word (johnrengelman)        -- id 'com.github.johnrengelman.shadow' version '8.
	 Suggestions: []
llm.txt:5068:17   - Unknown word (lateinit)             -- private lateinit var tools: List<ToolUnion
	 Suggestions: [latent, latinist, latinity, Latinist, Latinity]
llm.txt:5121:13   - Unknown word (println)              -- println("Connected to server
	 Suggestions: [print, pintle, printf, prints, print's]
llm.txt:5123:13   - Unknown word (println)              -- println("Failed to connect to
	 Suggestions: [print, pintle, printf, prints, print's]
llm.txt:5213:9    - Unknown word (println)              -- println("\nMCP Client Started
	 Suggestions: [print, pintle, printf, prints, print's]
llm.txt:5214:9    - Unknown word (println)              -- println("Type your queries or
	 Suggestions: [print, pintle, printf, prints, print's]
llm.txt:5221:13   - Unknown word (println)              -- println("\n$response")
	 Suggestions: [print, pintle, printf, prints, print's]
llm.txt:5247:7    - Unknown word (gradlew)              -- ./gradlew build
	 Suggestions: [gradle, gradely, grade, grable, graded]
llm.txt:5574:91   - Unknown word (llms)                 -- tutorials/building-mcp-with-llms">
	 Suggestions: [lams, lems, LEMs, alms, elms]
llm.txt:5664:10   - Unknown word (venv)                 -- uv venv
	 Suggestions: [vena, vend, venn, vent, Venn]
llm.txt:5665:15   - Unknown word (venv)                 -- source .venv/bin/activate
	 Suggestions: [vena, vend, venn, vent, Venn]
llm.txt:5668:25   - Unknown word (httpx)                -- uv add "mcp[cli]" httpx
	 Suggestions: [http, httpd, https, HTTP, HTTPS]
llm.txt:5684:23   - Unknown word (httpx)               -- uv add mcp[cli] httpx
	 Suggestions: [http, httpd, https, HTTP, HTTPS]
llm.txt:5701:12   - Unknown word (httpx)               -- import httpx
	 Suggestions: [http, httpd, https, HTTP, HTTPS]
llm.txt:5702:21   - Unknown word (fastmcp)             -- from mcp.server.fastmcp import FastMCP
	 Suggestions: [fast, fasts, fast's, fasted, fasten]
llm.txt:5712:50   - Unknown word (docstrings)          -- Python type hints and docstrings to automatically generate
	 Suggestions: [docstring, doctrines, doctrine, ductings, doctoring]
llm.txt:5725:20   - Unknown word (httpx)               -- async with httpx.AsyncClient() as client
	 Suggestions: [http, httpd, https, HTTP, HTTPS]
llm.txt:6369:32   - Unknown word (springframework)     -- <groupId>org.springframework.ai</groupId>
	 Suggestions: []
llm.txt:6374:32   - Unknown word (springframework)     -- <groupId>org.springframework</groupId>
	 Suggestions: []
llm.txt:6489:7    - Unknown word (mvnw)                -- ./mvnw clean install
	 Suggestions: [mown, mana, mane, mani, mann]
llm.txt:6538:19   - Unknown word (Dspring)             -- "-Dspring.ai.mcp.server.stdio
	 Suggestions: [Spring, Daring, Doping, Dprint, Duping]
llm.txt:6555:19   - Unknown word (Dspring)             -- "-Dspring.ai.mcp.server.transport
	 Suggestions: [Spring, Daring, Doping, Dprint, Duping]
llm.txt:6630:18   - Unknown word (webflux)             -- The [starter-webflux-server](https://github
	 Suggestions: [efflux, webex, weblog, webfeet, webfont]
llm.txt:6691:11   - Unknown word (ktor)                -- val ktorVersion = "3.1.1"
	 Suggestions: [kor, ctor, dtor, stor, tor]
llm.txt:6696:30   - Unknown word (ktor)                -- implementation("io.ktor:ktor-client-content
	 Suggestions: [kor, ctor, dtor, stor, tor]
llm.txt:6696:35   - Unknown word (ktor)                -- implementation("io.ktor:ktor-client-content-negotiation
	 Suggestions: [kor, ctor, dtor, stor, tor]
llm.txt:6696:68   - Unknown word (ktor)                -- content-negotiation:$ktorVersion")
	 Suggestions: [kor, ctor, dtor, stor, tor]
llm.txt:6697:30   - Unknown word (ktor)                -- implementation("io.ktor:ktor-serialization-kotlinx
	 Suggestions: [kor, ctor, dtor, stor, tor]
llm.txt:6697:54   - Unknown word (kotlinx)             -- ktor:ktor-serialization-kotlinx-json:$ktorVersion")
	 Suggestions: [kotlin, Kotlin, kitling, kotlin's, Kotlin's]
llm.txt:6710:54   - Unknown word (kotlinx)             -- ktor:ktor-serialization-kotlinx-json:$ktorVersion"
	 Suggestions: [kotlin, Kotlin, kitling, kotlin's, Kotlin's]
llm.txt:6721:26   - Unknown word (johnrengelman)       -- id("com.github.johnrengelman.shadow") version "8
	 Suggestions: []
llm.txt:6728:26   - Unknown word (johnrengelman)       -- id 'com.github.johnrengelman.shadow' version '8.
	 Suggestions: []
llm.txt:6930:25   - Unknown word (gradlew)             -- Make sure to run `./gradlew build` to build your
	 Suggestions: [gradle, gradely, grade, grable, graded]
llm.txt:7088:230  - Unknown word (neccessary)          -- console. This is only neccessary for servers using STDIO
	 Suggestions: [necessary*, necessity, necessarily, necessary's]
llm.txt:7358:91   - Unknown word (llms)                -- tutorials/building-mcp-with-llms">
	 Suggestions: [lams, lems, LEMs, alms, elms]
llm.txt:7581:21   - Unknown word (ENOENT)              -- <Accordion title="ENOENT error and `${APPDATA
	 Suggestions: [NONET, EVENT, ENFANT, EXTENT, ENTENTE]
llm.txt:7644:129  - Unknown word (webflux)             -- ontextprotocol.sdk:mcp-spring-webflux` for [Spring Framework
	 Suggestions: [efflux, webex, weblog, webfeet, webfont]
llm.txt:7777:66   - Unknown word (webflux)             -- transport. Requires the mcp-webflux-sse-transport dependency
	 Suggestions: [efflux, webex, weblog, webfeet, webfont]
llm.txt:8106:32   - Unknown word (webflux)             -- artifactId>mcp-spring-webflux</artifactId>
	 Suggestions: [efflux, webex, weblog, webfeet, webfont]
llm.txt:8112:32   - Unknown word (webmvc)              -- artifactId>mcp-spring-webmvc</artifactId>
	 Suggestions: [webm, wbtc, weba, webb, webs]
llm.txt:8139:71   - Unknown word (webmvc)              -- ontextprotocol.sdk:mcp-spring-webmvc")
	 Suggestions: [webm, wbtc, weba, webb, webs]
llm.txt:8195:45   - Unknown word (webmvc)              -- ontextprotocol.sdk:mcp-spring-webmvc` - WebMVC-based Server
	 Suggestions: [webm, wbtc, weba, webb, webs]
llm.txt:8227:181  - Unknown word (webmvc)              -- ontextprotocol.sdk:mcp-spring-webmvc` for [Spring Framework
	 Suggestions: [webm, wbtc, weba, webb, webs]
llm.txt:8351:88   - Unknown word (webmvc)              -- the <code>mcp-spring-webmvc</code> dependency.<
	 Suggestions: [webm, wbtc, weba, webb, webs]
llm.txt:8391:53   - Unknown word (Configurer)          -- ServerConfig implements WebMvcConfigurer {
	 Suggestions: [Configure, Configured, Configures, Confiture, Confitures]
llm.txt:8471:31   - Unknown word (jsonschema)          -- "id" : "urn:jsonschema:Operation",
	 Suggestions: []
llm.txt:8501:31   - Unknown word (jsonschema)          -- "id" : "urn:jsonschema:Operation",
	 Suggestions: []
llm.txt:8625:49   - Unknown word (pyside)              -- python", "pytorch", "pyside"),
	 Suggestions: [psid, pride, pyoid, pyxie, pesade]
llm.txt:8656:49   - Unknown word (pyside)              -- python", "pytorch", "pyside"),
	 Suggestions: [psid, pride, pyoid, pyxie, pesade]
llm.txt:8678:73   - Unknown word (Refernce)            -- defines the type (`PromptRefernce` or `ResourceRefernce
	 Suggestions: [Reference*, References*, Referee, reverence, Reverence]
llm.txt:8678:95   - Unknown word (Refernce)            -- PromptRefernce` or `ResourceRefernce`) and the identifier
	 Suggestions: [Reference*, References*, Referee, reverence, Reverence]
llm.txt:8679:57   - Unknown word (complition)          -- requests and returns the complition response.
	 Suggestions: [completion*, compilation, coalition, compaction, complexion]
llm.txt:9828:44   - Unknown word (myproject)           -- /home/user/projects/myproject",
	 Suggestions: [project]
llm.txt:9880:38   - Unknown word (myproject)           -- /home/user/projects/myproject",
	 Suggestions: [project]
llm.txt:11255:22  - Unknown word (exfiltration)        -- accidental data exfiltration
	 Suggestions: [exhilaration, exaltation, excitation, exfiltrate, expiration]
llm.txt:11320:40  - Unknown word (pyside)              -- python", "pytorch", "pyside"],
	 Suggestions: [psid, pride, pyoid, pyxie, pesade]
llm.txt:11582:28  - Unknown word (Ijog)                -- nextCursor": "eyJwYWdlIjogM30="
	 Suggestions: [Ijg, IJG, Jog, iago, Iago]
llm.txt:11597:24  - Unknown word (Ijog)                -- "cursor": "eyJwYWdlIjogMn0="
	 Suggestions: [Ijg, IJG, Jog, iago, Iago]
llm.txt:11910:73  - Unknown word (PKCE)                -- public clients using PKCE.
	 Suggestions: [PACE, PICE, pkcs, PKCS, PUCE]
llm.txt:12050:27  - Unknown word (PKCE)                -- Note over C: Generate PKCE Parameters
	 Suggestions: [PACE, PICE, pkcs, PKCS, PUCE]
llm.txt:12078:22  - Unknown word (PKCE)                -- J --> K[Generate PKCE Parameters]
	 Suggestions: [PACE, PICE, pkcs, PKCS, PUCE]
llm.txt:12145:4   - Unknown word (PKCE)                -- 2. PKCE is **REQUIRED** for
	 Suggestions: [PACE, PICE, pkcs, PKCS, PUCE]
llm.txt:12216:31  - Unknown word (PKCE)                -- Utilizing code challenges (PKCE) for authorization requests
	 Suggestions: [PACE, PICE, pkcs, PKCS, PUCE]
llm.txt:12618:5   - Unknown word (Streamable)          -- 2. [Streamable HTTP](#streamable-http
	 Suggestions: [Stealable, Spreadable, streamfile, streamFile, Streamfile]
llm.txt:12618:23  - Unknown word (streamable)          -- [Streamable HTTP](#streamable-http)
	 Suggestions: [stealable, spreadable, streamfile, streamFile, streamenable]
llm.txt:12657:4   - Unknown word (Streamable)          -- ## Streamable HTTP
	 Suggestions: [Stealable, Spreadable, streamfile, streamFile, Streamfile]
llm.txt:12664:10  - Unknown word (Streamable)         -- In the **Streamable HTTP** transport, the
	 Suggestions: [Stealable, Spreadable, streamfile, streamFile, Streamfile]
llm.txt:12677:19  - Unknown word (Streamable)         -- When implementing Streamable HTTP transport:
	 Suggestions: [Stealable, Spreadable, streamfile, streamFile, Streamfile]
llm.txt:12728:21  - Unknown word (resumability)       -- [resumable](#resumability-and-redelivery).
	 Suggestions: [reusability, refutability, reputability, reachability]
llm.txt:12747:18  - Unknown word (resumability)       -- [resuming](#resumability-and-redelivery) a stream
	 Suggestions: [reusability, refutability, reputability, reachability]
llm.txt:12758:19  - Unknown word (resumability)       -- [resumable](#resumability-and-redelivery).
	 Suggestions: [reusability, refutability, reputability, reachability]
llm.txt:12760:5   - Unknown word (Resumability)       -- ### Resumability and Redelivery
	 Suggestions: [Reusability, Refutability, Reputability, reachability, Reachability]
llm.txt:12789:23  - Unknown word (Streamable)         -- A server using the Streamable HTTP transport **MAY
	 Suggestions: [Stealable, Spreadable, streamfile, streamFile, Streamfile]
llm.txt:13159:58  - Unknown word (streamable)         -- 26/basic/transports#streamable-http)** (PR
	 Suggestions: [stealable, spreadable, streamfile, streamFile, streamenable]
llm.txt:13252:44  - Unknown word (myproject)          -- /home/user/projects/myproject",
	 Suggestions: [project]
llm.txt:13304:38  - Unknown word (myproject)          -- /home/user/projects/myproject",
	 Suggestions: [project]
llm.txt:14718:22  - Unknown word (exfiltration)       -- accidental data exfiltration
	 Suggestions: [exhilaration, exaltation, excitation, exfiltrate, expiration]
llm.txt:14795:40  - Unknown word (pyside)             -- python", "pytorch", "pyside"],
	 Suggestions: [psid, pride, pyoid, pyxie, pesade]
llm.txt:15066:28  - Unknown word (Ijog)               -- nextCursor": "eyJwYWdlIjogM30="
	 Suggestions: [Ijg, IJG, Jog, iago, Iago]
llm.txt:15081:24  - Unknown word (Ijog)               -- "cursor": "eyJwYWdlIjogMn0="
	 Suggestions: [Ijg, IJG, Jog, iago, Iago]
llm.txt:15390:89  - Unknown word (authorizaton)       -- Server Discovery](#2-3-authorizaton-server-discovery)
	 Suggestions: [authorization*, authorizations, authorization's]
llm.txt:16089:10  - Unknown word (rgba)               -- rect rgba(255, 17, 0, 0.67)
	 Suggestions: [reba, Reba, grab, gab, rabi]
llm.txt:16138:23  - Unknown word (streamable)         -- [Streamable HTTP](#streamable-http)
	 Suggestions: [stealable, spreadable, streamfile, streamFile, streamenable]
llm.txt:16238:21  - Unknown word (resumability)       -- [resumable](#resumability-and-redelivery).
	 Suggestions: [reusability, refutability, reputability, reachability]
llm.txt:16255:18  - Unknown word (resumability)       -- [resuming](#resumability-and-redelivery) a stream
	 Suggestions: [reusability, refutability, reputability, reachability]
llm.txt:16268:5   - Unknown word (Resumability)       -- ### Resumability and Redelivery
	 Suggestions: [Reusability, Refutability, Reputability, reachability, Reachability]
llm.txt:16745:44  - Unknown word (myproject)          -- /home/user/projects/myproject",
	 Suggestions: [project]
llm.txt:18361:22  - Unknown word (exfiltration)       -- accidental data exfiltration
	 Suggestions: [exhilaration, exaltation, excitation, exfiltrate, expiration]
llm.txt:18438:40  - Unknown word (pyside)             -- python", "pytorch", "pyside"],
	 Suggestions: [psid, pride, pyoid, pyxie, pesade]
llm.txt:18709:28  - Unknown word (Ijog)               -- nextCursor": "eyJwYWdlIjogM30="
	 Suggestions: [Ijg, IJG, Jog, iago, Iago]
llm.txt:19068:81  - Unknown word (streamable)         -- delcontextprotocol/sdk/server/streamableHttp.js";
	 Suggestions: [stealable, spreadable, streamfile, streamFile, streamenable]
llm.txt:19092:7   - Unknown word (onsessioninitialized) -- onsessioninitialized: (sessionId) => {
	 Suggestions: []
llm.txt:19099:15  - Unknown word (onclose)              -- transport.onclose = () => {
	 Suggestions: [close, onces, nocode, once, ochone]
llm.txt:19341:263  - Unknown word (notificaions)         -- corresponding listChanged notificaions:
	 Suggestions: [notifications*, notification, notification's]
llm.txt:19371:34  - Unknown word (vadmin)               -- permission: z.enum(["write', vadmin"])},
	 Suggestions: [admin, ADMIN, vain, vadis, vanman]
llm.txt:19541:41  - Unknown word (tranport)             -- with StreamableHttp tranport can maintain backwards
	 Suggestions: [transport*, Transport, transports, trapt, teapot]
llm.txt:19547:81  - Unknown word (streamable)           -- delcontextprotocol/sdk/client/streamableHttp.js";
	 Suggestions: [stealable, spreadable, streamfile, streamFile, streamenable]
llm.txt:19723:25  - Unknown word (httpx)                -- uv add "mcp[cli]" httpx
	 Suggestions: [http, httpd, https, HTTP, HTTPS]
llm.txt:19757:21  - Unknown word (fastmcp)              -- from mcp.server.fastmcp import FastMCP
	 Suggestions: [fast, fasts, fast's, fasted, fasten]
llm.txt:19767:50  - Unknown word (docstrings)           -- Python type hints and docstrings to automatically generate
	 Suggestions: [docstring, doctrines, doctrine, ductings, doctoring]
llm.txt:20593:19  - Unknown word (Dspring)              -- "-Dspring.ai.mcp.server.stdio
	 Suggestions: [Spring, Daring, Doping, Dprint, Duping]
llm.txt:20610:19  - Unknown word (Dspring)              -- "-Dspring.ai.mcp.server.transport
	 Suggestions: [Spring, Daring, Doping, Dprint, Duping]
llm.txt:20752:54  - Unknown word (kotlinx)              -- ktor:ktor-serialization-kotlinx-json:$ktorVersion")
	 Suggestions: [kotlin, Kotlin, kitling, kotlin's, Kotlin's]
llm.txt:20765:54  - Unknown word (kotlinx)              -- ktor:ktor-serialization-kotlinx-json:$ktorVersion"
	 Suggestions: [kotlin, Kotlin, kitling, kotlin's, Kotlin's]
llm.txt:20776:26  - Unknown word (johnrengelman)        -- id("com.github.johnrengelman.shadow") version "8
	 Suggestions: []
llm.txt:20985:25  - Unknown word (gradlew)              -- Make sure to run `./gradlew build` to build your
	 Suggestions: [gradle, gradely, grade, grable, graded]
llm.txt:21143:230  - Unknown word (neccessary)           -- console. This is only neccessary for servers using STDIO
	 Suggestions: [necessary*, necessity, necessarily, necessary's]
llm.txt:21413:91  - Unknown word (llms)                 -- tutorials/building-mcp-with-llms">
	 Suggestions: [lams, lems, LEMs, alms, elms]
package.json:21:14     - Unknown word (Chirag)     -- "author": "Chirag Singhal (chirag127)
	 Suggestions: [chirac, Chirac, Chiral, Chia, Crag]
package.json:21:21     - Unknown word (Singhal)    -- "author": "Chirag Singhal (chirag127)",
	 Suggestions: [Signal, singh, Singh, Sangha, Singh's]
package.json:21:30     - Unknown word (chirag)     -- author": "Chirag Singhal (chirag127)",
	 Suggestions: [chirac, chiral, Chirac, chia, crag]
package.json:24:7      - Unknown word (modelcontextprotocol) -- "@modelcontextprotocol/sdk": "^1.11.4"
	 Suggestions: []
prompt.md:23:26     - Unknown word (MCTS)       -- Monte Carlo Tree Search (MCTS)
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
prompt.md:55:26     - Unknown word (MCTS)       -- Monte Carlo Tree Search (MCTS)
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
prompt.md:87:26     - Unknown word (modelcontextprotocol) -- import { Server } from "@modelcontextprotocol/sdk/server/index.js
	 Suggestions: []
prompt.md:88:40     - Unknown word (modelcontextprotocol) -- StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js
	 Suggestions: []
prompt.md:89:87     - Unknown word (modelcontextprotocol) -- ErrorCode, } from "@modelcontextprotocol/sdk/types.js";
	 Suggestions: []
prompt.md:133:5     - Unknown word (mcts)                 -- mctsOneLineSummary(params
	 Suggestions: [mats, mots, muts, MATS, acts]
prompt.md:155:23    - Unknown word (mcts)                 -- case 'mcts':
	 Suggestions: [mats, mots, muts, MATS, acts]
prompt.md:156:36    - Unknown word (mcts)                 -- summary = this.mctsOneLineSummary(validatedInput
	 Suggestions: [mats, mots, muts, MATS, acts]
prompt.md:196:12    - Unknown word (stochasticalgorithm)  -- name: "stochasticalgorithm",
	 Suggestions: []
prompt.md:200:28    - Unknown word (MCTS)                 -- Monte Carlo Tree Search (MCTS): Simulate future action
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
prompt.md:213:22    - Unknown word (mcts)                 -- "mcts",
	 Suggestions: [mats, mots, muts, MATS, acts]
prompt.md:237:13    - Unknown word (stochasticalgorithm)  -- stochasticalgorithm: STOCHASTIC_TOOL
	 Suggestions: []
prompt.md:247:15    - Unknown word (stochasticalgorithm)  -- case "stochasticalgorithm":
	 Suggestions: []
README.md:16:5      - Unknown word (MCTS)       -- | **MCTS** — Monte Carlo Tree
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
README.md:24:31     - Unknown word (chirag)     -- smithery/cli install @chirag127/stochastic-thinking
	 Suggestions: [chirac, chiral, Chirac, chia, crag]
README.md:38:14     - Unknown word (stochasticalgorithm) -- Single tool `stochasticalgorithm`:
	 Suggestions: []
README.md:52:39     - Unknown word (mcts)                -- algorithm` values: `mdp`, `mcts`, `bandit`, `bayesian
	 Suggestions: [mats, mots, muts, MATS, acts]
README.md:56:7      - Unknown word (Chirag)              -- MIT — Chirag Singhal (chirag127)
	 Suggestions: [chirac, Chirac, Chiral, Chia, Crag]
README.md:56:14     - Unknown word (Singhal)             -- MIT — Chirag Singhal (chirag127)
	 Suggestions: [Signal, singh, Singh, Sangha, Singh's]
README.md:56:23     - Unknown word (chirag)              -- MIT — Chirag Singhal (chirag127)
	 Suggestions: [chirac, chiral, Chirac, chia, crag]
test.js:2:26      - Unknown word (modelcontextprotocol) -- import { Client } from '@modelcontextprotocol/sdk/client/index.js
	 Suggestions: []
test.js:3:40      - Unknown word (modelcontextprotocol) -- StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js
	 Suggestions: []
test.js:30:14     - Unknown word (stochasticalgorithm)  -- name: 'stochasticalgorithm',
	 Suggestions: []
test.js:43:13     - Unknown word (MCTS)                 -- // Test MCTS algorithm
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
test.js:44:28     - Unknown word (MCTS)                 -- console.log('\nTesting MCTS algorithm...')
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
test.js:45:11     - Unknown word (mcts)                 -- const mctsResult = await client
	 Suggestions: [mats, mots, muts, MATS, acts]
test.js:46:14     - Unknown word (stochasticalgorithm)  -- name: 'stochasticalgorithm',
	 Suggestions: []
test.js:48:21     - Unknown word (mcts)                 -- algorithm: 'mcts',
	 Suggestions: [mats, mots, muts, MATS, acts]
test.js:57:18     - Unknown word (MCTS)                 -- console.log('MCTS Result:', JSON.stringify
	 Suggestions: [mats, MATS, MOTS, MUTS, ACTS]
test.js:57:48     - Unknown word (mcts)                 -- Result:', JSON.stringify(mctsResult, null, 2))
	 Suggestions: [mats, mots, muts, MATS, acts]
test.js:62:14     - Unknown word (stochasticalgorithm)  -- name: 'stochasticalgorithm',
	 Suggestions: []
test.js:78:14     - Unknown word (stochasticalgorithm)  -- name: 'stochasticalgorithm',
	 Suggestions: []
test.js:97:14     - Unknown word (stochasticalgorithm)  -- name: 'stochasticalgorithm',
	 Suggestions: []
CSpell: Files checked: 18, Issues found: 349 in 13 files.


You can skip this misspellings by defining the following .cspell.json file at the root of your repository
Of course, please correct real typos before :)

{
    "version": "0.2",
    "language": "en",
    "ignorePaths": [
        "**/node_modules/**",
        "**/vscode-extension/**",
        "**/.git/**",
        "**/.pnpm-lock.json",
        ".vscode",
        "package-lock.json",
        "megalinter-reports"
    ],
    "words": [
        "Apify",
        "Automations",
        "Avante",
        "Browserbase",
        "Chirag",
        "Composio",
        "Configurer",
        "Customizer",
        "Dockerized",
        "Dspring",
        "ENOENT",
        "FLUJO",
        "Genkit",
        "Genkit's",
        "Glama",
        "Holdgaard",
        "Hyperbrowser",
        "Ijog",
        "Inegrates",
        "Klavis",
        "Lutra",
        "MCTS",
        "MYAPP",
        "Microbundle",
        "Msty",
        "Multimodality",
        "Nuxt",
        "Ollama",
        "PKCE",
        "Peder",
        "Pedersen",
        "Qdrant",
        "Raygun",
        "Refernce",
        "Resumability",
        "Singhal",
        "Sourcegraph",
        "Sourcegraph's",
        "Starlette",
        "Streamable",
        "Sumi",
        "Supergateway",
        "Superinterface",
        "Tanzu",
        "Theia",
        "Tinybird",
        "Toolsets",
        "Witsy",
        "aclose",
        "anyio",
        "asyncio",
        "authorizaton",
        "backpressure",
        "chirag",
        "complition",
        "contextlib",
        "contextmanager",
        "docstrings",
        "dotenv",
        "duplicative",
        "elif",
        "endswith",
        "eslintcache",
        "exfiltration",
        "fastmcp",
        "genkitx",
        "gptel",
        "gptme",
        "gradlew",
        "hostable",
        "httpx",
        "johnrengelman",
        "jscoverage",
        "jsonschema",
        "jspm",
        "kotlinx",
        "ktor",
        "langchain",
        "lateinit",
        "llms",
        "mcts",
        "modelcontextprotocol",
        "multimodal",
        "mvnw",
        "myapp",
        "myproject",
        "neccessary",
        "notificaions",
        "nuxt",
        "nvim",
        "ollama",
        "onclose",
        "onsessioninitialized",
        "oriz",
        "oterm",
        "permissioning",
        "pids",
        "println",
        "pyside",
        "resumability",
        "rgba",
        "springframework",
        "starlette",
        "stefanzweifel",
        "stochasticalgorithm",
        "streamable",
        "stylelintcache",
        "supoorting",
        "testdb",
        "toolcallback",
        "tranport",
        "vadmin",
        "varibles",
        "venv",
        "vuepress",
        "webflux",
        "webmvc",
        "wscript"
    ]
}


You can also copy-paste megalinter-reports/.cspell.json at the root of your repository
```

</details>

<details>
<summary>⚠️ REPOSITORY / devskim - 1 error</summary>

```
{"$schema":"https://schemastore.azurewebsites.net/schemas/json/sarif-2.1.0-rtm.6.json","version":"2.1.0","runs":[{"tool":{"driver":{"name":"devskim","fullName":"Microsoft DevSkim Command Line Interface","version":"1.0.70+d69541fde7","informationUri":"https://github.com/microsoft/DevSkim/","rules":[{"id":"DS176209","name":"SuspiciousComment","fullDescription":{"text":"Suspicious comment: A \"TODO\" or similar was left in source code, possibly indicating incomplete functionality"},"help":{"text":"A \"TODO\" or similar was left in source code, possibly indicating incomplete functionality","markdown":"Visit [https://github.com/Microsoft/DevSkim/blob/main/guidance/DS176209.md](https://github.com/Microsoft/DevSkim/blob/main/guidance/DS176209.md) for additional guidance on this issue."},"shortDescription":{"text":"A \"TODO\" or similar was left in source code, possibly indicating incomplete functionality"},"defaultConfiguration":{"level":"note"},"helpUri":"https://github.com/Microsoft/DevSkim/blob/main/guidance/DS176209.md","properties":{"precision":"high","problem.severity":"recommendation","DevSkimSeverity":"ManualReview","DevSkimConfidence":"High"}}]}},"versionControlProvenance":[{"repositoryUri":"https://github.com/chirag127/Stochastic-Thinking-MCP-Server","revisionId":"7d8cafcc82b1932f7b72d00c1d023d3280bf3b14","branch":"dependabot/github_actions/oxsecurity/megalinter-10"}],"results":[{"ruleId":"DS176209","level":"note","message":{"text":"Suspicious comment"},"locations":[{"physicalLocation":{"artifactLocation":{"uri":"llm.txt"},"region":{"startLine":16669,"startColumn":2,"endLine":16669,"endColumn":6,"charOffset":541180,"charLength":4,"snippet":{"text":"TODO","rendered":{"text":"TODO","markdown":"`TODO`"}},"sourceLanguage":"plaintext"}}}],"properties":{"tags":["Hygiene.Comment.Suspicious"],"DevSkimSeverity":"ManualReview","DevSkimConfidence":"High"}},{"ruleId":"DS176209","level":"note","message":{"text":"Suspicious comment"},"locations":[{"physicalLocation":{"artifactLocation":{"uri":"llm.txt"},"region":{"startLine":16665,"startColumn":3,"endLine":16665,"endColumn":7,"charOffset":541147,"charLength":4,"snippet":{"text":"TODO","rendered":{"text":"TODO","markdown":"`TODO`"}},"sourceLanguage":"plaintext"}}}],"properties":{"tags":["Hygiene.Comment.Suspicious"],"DevSkimSeverity":"ManualReview","DevSkimConfidence":"High"}}],"columnKind":"utf16CodeUnits"}]}
```

</details>

<details>
<summary>⚠️ HTML / djlint - 1 error</summary>

```
::warning file=docs/index.html,line=47::H023 Do not use entity references.
```

</details>

<details>
<summary>⚠️ REPOSITORY / git_diff - 1 error</summary>

```
megalinter-reports/sbom/syft.txt:2: trailing whitespace.
+NAME                                  VERSION  TYPE           
megalinter-reports/sbom/syft.txt:3: trailing whitespace.
+@modelcontextprotocol/sdk             1.11.4   npm            
megalinter-reports/sbom/syft.txt:4: trailing whitespace.
+accepts                               2.0.0    npm            
megalinter-reports/sbom/syft.txt:5: trailing whitespace.
+actions/checkout                      v4       github-action  
megalinter-reports/sbom/syft.txt:6: trailing whitespace.
+ajv                                   8.17.1   npm            
megalinter-reports/sbom/syft.txt:7: trailing whitespace.
+body-parser                           2.2.0    npm            
megalinter-reports/sbom/syft.txt:8: trailing whitespace.
+bytes                                 3.1.2    npm            
megalinter-reports/sbom/syft.txt:9: trailing whitespace.
+call-bind-apply-helpers               1.0.2    npm            
megalinter-reports/sbom/syft.txt:10: trailing whitespace.
+call-bound                            1.0.4    npm            
megalinter-reports/sbom/syft.txt:11: trailing whitespace.
+content-disposition                   1.0.0    npm            
megalinter-reports/sbom/syft.txt:12: trailing whitespace.
+content-type                          1.0.5    npm            
megalinter-reports/sbom/syft.txt:13: trailing whitespace.
+cookie                                0.7.2    npm            
megalinter-reports/sbom/syft.txt:14: trailing whitespace.
+cookie-signature                      1.2.2    npm            
megalinter-reports/sbom/syft.txt:15: trailing whitespace.
+cors                                  2.8.5    npm            
megalinter-reports/sbom/syft.txt:16: trailing whitespace.
+cross-spawn                           7.0.6    npm            
megalinter-reports/sbom/syft.txt:17: trailing whitespace.
+debug                                 4.4.1    npm            
megalinter-reports/sbom/syft.txt:18: trailing whitespace.
+depd                                  2.0.0    npm            
megalinter-reports/sbom/syft.txt:19: trailing whitespace.
+dunder-proto                          1.0.1    npm            
megalinter-reports/sbom/syft.txt:20: trailing whitespace.
+ee-first                              1.1.1    npm            
megalinter-reports/sbom/syft.txt:21: trailing whitespace.
+encodeurl                             2.0.0    npm            
megalinter-reports/sbom/syft.txt:22: trailing whitespace.
+es-define-property                    1.0.1    npm            
megalinter-reports/sbom/syft.txt:23: trailing whitespace.
+es-errors                             1.3.0    npm            
megalinter-reports/sbom/syft.txt:24: trailing whitespace.
+es-object-atoms                       1.1.1    npm            
megalinter-reports/sbom/syft.txt:25: trailing whitespace.
+escape-html                           1.0.3    npm            
megalinter-reports/sbom/syft.txt:26: trailing whitespace.
+etag                                  1.8.1    npm            
megalinter-reports/sbom/syft.txt:27: trailing whitespace.
+eventsource                           3.0.7    npm            
megalinter-reports/sbom/syft.txt:28: trailing whitespace.
+eventsource-parser                    3.0.2    npm            
megalinter-reports/sbom/syft.txt:29: trailing whitespace.
+express                               5.1.0    npm            
megalinter-reports/sbom/syft.txt:30: trailing whitespace.
+express-rate-limit                    7.5.0    npm            
megalinter-reports/sbom/syft.txt:31: trailing whitespace.
+fast-deep-equal                       3.1.3    npm            
megalinter-reports/sbom/syft.txt:32: trailing whitespace.
+fast-uri                              3.0.6    npm            
megalinter-reports/sbom/syft.txt:33: trailing whitespace.
+finalhandler                          2.1.0    npm            
megalinter-reports/sbom/syft.txt:34: trailing whitespace.
+forwarded                             0.2.0    npm            
megalinter-reports/sbom/syft.txt:35: trailing whitespace.
+fresh                                 2.0.0    npm            
megalinter-reports/sbom/syft.txt:36: trailing whitespace.
+function-bind                         1.1.2    npm            
megalinter-reports/sbom/syft.txt:37: trailing whitespace.
+get-intrinsic                         1.3.0    npm            
megalinter-reports/sbom/syft.txt:38: trailing whitespace.
+get-proto                             1.0.1    npm            
megalinter-reports/sbom/syft.txt:39: trailing whitespace.
+gopd                                  1.2.0    npm            
megalinter-reports/sbom/syft.txt:40: trailing whitespace.
+has-symbols                           1.1.0    npm            
megalinter-reports/sbom/syft.txt:41: trailing whitespace.
+hasown                                2.0.2    npm            
megalinter-reports/sbom/syft.txt:42: trailing whitespace.
+http-errors                           2.0.0    npm            
megalinter-reports/sbom/syft.txt:43: trailing whitespace.
+iconv-lite                            0.6.3    npm            
megalinter-reports/sbom/syft.txt:44: trailing whitespace.
+inherits                              2.0.4    npm            
megalinter-reports/sbom/syft.txt:45: trailing whitespace.
+ipaddr.js                             1.9.1    npm            
megalinter-reports/sbom/syft.txt:46: trailing whitespace.
+is-promise                            4.0.0    npm            
megalinter-reports/sbom/syft.txt:47: trailing whitespace.
+isexe                                 2.0.0    npm            
megalinter-reports/sbom/syft.txt:48: trailing whitespace.
+json-schema-traverse                  1.0.0    npm            
megalinter-reports/sbom/syft.txt:49: trailing whitespace.
+math-intrinsics                       1.1.0    npm            
megalinter-reports/sbom/syft.txt:50: trailing whitespace.
+media-typer                           1.1.0    npm            
megalinter-reports/sbom/syft.txt:51: trailing whitespace.
+merge-descriptors                     2.0.0    npm            
megalinter-reports/sbom/syft.txt:52: trailing whitespace.
+mime-db                               1.54.0   npm            
megalinter-reports/sbom/syft.txt:53: trailing whitespace.
+mime-types                            3.0.1    npm            
megalinter-reports/sbom/syft.txt:54: trailing whitespace.
+ms                                    2.1.3    npm            
megalinter-reports/sbom/syft.txt:55: trailing whitespace.
+negotiator                            1.0.0    npm            
megalinter-reports/sbom/syft.txt:56: trailing whitespace.
+object-assign                         4.1.1    npm            
megalinter-reports/sbom/syft.txt:57: trailing whitespace.
+object-inspect                        1.13.4   npm            
megalinter-reports/sbom/syft.txt:58: trailing whitespace.
+on-finished                           2.4.1    npm            
megalinter-reports/sbom/syft.txt:59: trailing whitespace.
+once                                  1.4.0    npm            
megalinter-reports/sbom/syft.txt:60: trailing whitespace.
+oxsecurity/megalinter                 v10      github-action  
megalinter-reports/sbom/syft.txt:61: trailing whitespace.
+parseurl                              1.3.3    npm            
megalinter-reports/sbom/syft.txt:62: trailing whitespace.
+path-key                              3.1.1    npm            
megalinter-reports/sbom/syft.txt:63: trailing whitespace.
+path-to-regexp                        8.2.0    npm            
megalinter-reports/sbom/syft.txt:64: trailing whitespace.
+pkce-challenge                        5.0.0    npm            
megalinter-reports/sbom/syft.txt:65: trailing whitespace.
+proxy-addr                            2.0.7    npm            
megalinter-reports/sbom/syft.txt:66: trailing whitespace.
+qs                                    6.14.0   npm            
megalinter-reports/sbom/syft.txt:67: trailing whitespace.
+range-parser                          1.2.1    npm            
megalinter-reports/sbom/syft.txt:68: trailing whitespace.
+raw-body                              3.0.0    npm            
megalinter-reports/sbom/syft.txt:69: trailing whitespace.
+require-from-string                   2.0.2    npm            
megalinter-reports/sbom/syft.txt:70: trailing whitespace.
+router                                2.2.0    npm            
megalinter-reports/sbom/syft.txt:71: trailing whitespace.
+safe-buffer                           5.2.1    npm            
megalinter-reports/sbom/syft.txt:72: trailing whitespace.
+safer-buffer                          2.1.2    npm            
megalinter-reports/sbom/syft.txt:73: trailing whitespace.
+send                                  1.2.0    npm            
megalinter-reports/sbom/syft.txt:74: trailing whitespace.
+serve-static                          2.2.0    npm            
megalinter-reports/sbom/syft.txt:75: trailing whitespace.
+setprototypeof                        1.2.0    npm            
megalinter-reports/sbom/syft.txt:76: trailing whitespace.
+shebang-command                       2.0.0    npm            
megalinter-reports/sbom/syft.txt:77: trailing whitespace.
+shebang-regex                         3.0.0    npm            
megalinter-reports/sbom/syft.txt:78: trailing whitespace.
+side-channel                          1.1.0    npm            
megalinter-reports/sbom/syft.txt:79: trailing whitespace.
+side-channel-list                     1.0.0    npm            
megalinter-reports/sbom/syft.txt:80: trailing whitespace.
+side-channel-map                      1.0.1    npm            
megalinter-reports/sbom/syft.txt:81: trailing whitespace.
+side-channel-weakmap                  1.0.2    npm            
megalinter-reports/sbom/syft.txt:82: trailing whitespace.
+statuses                              2.0.1    npm            
megalinter-reports/sbom/syft.txt:83: trailing whitespace.
+stefanzweifel/git-auto-commit-action  v5       github-action  
megalinter-reports/sbom/syft.txt:84: trailing whitespace.
+stochastic-thinking-mcp-server        0.1.0    npm            
megalinter-reports/sbom/syft.txt:85: trailing whitespace.
+toidentifier                          1.0.1    npm            
megalinter-reports/sbom/syft.txt:86: trailing whitespace.
+type-is                               2.0.1    npm            
megalinter-reports/sbom/syft.txt:87: trailing whitespace.
+unpipe                                1.0.0    npm            
megalinter-reports/sbom/syft.txt:88: trailing whitespace.
+vary                                  1.1.2    npm            
megalinter-reports/sbom/syft.txt:89: trailing whitespace.
+which                                 2.0.2    npm            
megalinter-reports/sbom/syft.txt:90: trailing whitespace.
+wrappy                                1.0.2    npm            
megalinter-reports/sbom/syft.txt:91: trailing whitespace.
+zod                                   3.24.4   npm
```

</details>

<details>
<summary>⚠️ REPOSITORY / grype - 16 errors</summary>

```
[0000]  WARN no explicit name and version provided for directory source, deriving artifact ID from the given path (which is not ideal) from=syft
NAME                       INSTALLED  FIXED IN  TYPE  VULNERABILITY        SEVERITY  EPSS         RISK   
path-to-regexp             8.2.0      8.4.0     npm   GHSA-j3q9-mxjg-w52f  High      0.8% (52nd)  0.6    
@modelcontextprotocol/sdk  1.11.4     1.24.0    npm   GHSA-w48q-cv73-mx4w  High      0.5% (41st)  0.4    
fast-uri                   3.0.6      3.1.1     npm   GHSA-q3j6-qgpj-74h6  High      0.5% (41st)  0.4    
fast-uri                   3.0.6      3.1.2     npm   GHSA-v39h-62p7-jpjc  High      0.5% (38th)  0.4    
@modelcontextprotocol/sdk  1.11.4     1.25.2    npm   GHSA-8r9q-7v3j-jr4g  High      0.4% (33rd)  0.3    
fast-uri                   3.0.6      3.1.3     npm   GHSA-4c8g-83qw-93j6  High      0.4% (31st)  0.3    
ajv                        8.17.1     8.18.0    npm   GHSA-2g4f-4pwh-qvx6  Medium    0.5% (39th)  0.3    
qs                         6.14.0     6.14.1    npm   GHSA-6rw7-vpxm-498p  Medium    0.4% (34th)  0.2    
@modelcontextprotocol/sdk  1.11.4     1.26.0    npm   GHSA-345p-7cg4-v4c7  High      0.3% (18th)  0.2    
body-parser                2.2.0      2.2.1     npm   GHSA-wqch-xfxh-vrr4  Medium    0.4% (30th)  0.2    
qs                         6.14.0     6.15.2    npm   GHSA-q8mj-m7cp-5q26  Medium    0.4% (28th)  0.2    
path-to-regexp             8.2.0      8.4.0     npm   GHSA-27v5-c462-wpq7  Medium    0.4% (28th)  0.2    
fast-uri                   3.0.6      3.1.4     npm   GHSA-v2hh-gcrm-f6hx  High      0.3% (16th)  0.2    
fast-uri                   3.0.6      3.1.5     npm   GHSA-7p8r-x3mc-p8w7  High      0.2% (12th)  0.2    
qs                         6.14.0     6.14.2    npm   GHSA-w7fw-mjwx-w883  Low       0.5% (38th)  0.2    
body-parser                2.2.0      2.3.0     npm   GHSA-v422-hmwv-36x6  Low       0.3% (19th)  < 0.1
[0050] ERROR discovered vulnerabilities at or above the severity threshold
```

</details>

<details>
<summary>⚠️ COPYPASTE / jscpd - 119 errors</summary>

```
Using config from megalinter-reports/jscpd-config.json
Clone found (txt)
 - llm.txt [2329:5 - 2341:12] (13 lines, 61 tokens)
   llm.txt [2677:5 - 2689:12]
Clone found (txt)
 - llm.txt [3002:5 - 3012:14] (11 lines, 50 tokens)
   llm.txt [3077:5 - 3087:14]
Clone found (txt)
 - llm.txt [4020:5 - 4036:15] (17 lines, 59 tokens)
   llm.txt [4466:5 - 4482:15]
Clone found (txt)
 - llm.txt [4301:5 - 4316:9] (16 lines, 89 tokens)
   llm.txt [4703:5 - 4718:9]
Clone found (txt)
 - llm.txt [4303:5 - 4316:9] (14 lines, 84 tokens)
   llm.txt [5297:5 - 5310:9]
Clone found (txt)
 - llm.txt [4325:8 - 4337:58] (13 lines, 92 tokens)
   llm.txt [4723:8 - 4735:58]
Clone found (txt)
 - llm.txt [4330:5 - 4337:6] (8 lines, 57 tokens)
   llm.txt [5320:5 - 5327:6]
Clone found (txt)
 - llm.txt [4351:5 - 4367:8] (17 lines, 63 tokens)
   llm.txt [4749:5 - 4765:8]
Clone found (txt)
 - llm.txt [4351:5 - 4367:8] (17 lines, 63 tokens)
   llm.txt [5342:5 - 5358:8]
Clone found (txt)
 - llm.txt [4392:13 - 4404:27] (13 lines, 52 tokens)
   llm.txt [4410:10 - 4422:27]
Clone found (txt)
 - llm.txt [4965:16 - 4980:12] (16 lines, 68 tokens)
   llm.txt [6648:13 - 6663:12]
Clone found (txt)
 - llm.txt [4991:7 - 5007:10] (17 lines, 117 tokens)
   llm.txt [6675:7 - 6691:10]
Clone found (txt)
 - llm.txt [5587:1 - 7361:13] (1775 lines, 8749 tokens)
   llm.txt [19642:3 - 21416:13]
Clone found (txt)
 - llm.txt [5818:5 - 5852:32] (35 lines, 187 tokens)
   llm.txt [6264:5 - 6298:32]
Clone found (txt)
 - llm.txt [5820:5 - 5853:16] (34 lines, 189 tokens)
   llm.txt [7163:5 - 7193:16]
Clone found (txt)
 - llm.txt [5831:5 - 5847:8] (17 lines, 81 tokens)
   llm.txt [6509:5 - 6525:8]
Clone found (txt)
 - llm.txt [6262:60 - 6275:7] (14 lines, 99 tokens)
   llm.txt [6930:62 - 6943:7]
Clone found (txt)
 - llm.txt [6499:55 - 6511:6] (13 lines, 88 tokens)
   llm.txt [6937:201 - 6949:6]
Clone found (txt)
 - llm.txt [7850:1 - 7859:56] (10 lines, 59 tokens)
   llm.txt [8799:1 - 8808:56]
Clone found (txt)
 - llm.txt [7862:98 - 7868:3] (7 lines, 89 tokens)
   llm.txt [8452:12 - 8458:3]
Clone found (txt)
 - llm.txt [7862:99 - 7868:3] (7 lines, 88 tokens)
   llm.txt [8840:10 - 8846:3]
Clone found (txt)
 - llm.txt [8712:21 - 8725:48] (14 lines, 84 tokens)
   llm.txt [8757:26 - 8770:48]
Clone found (txt)
 - llm.txt [8856:1 - 8966:3] (111 lines, 575 tokens)
   llm.txt [11652:1 - 11762:3]
Clone found (txt)
 - llm.txt [8856:1 - 9011:37] (156 lines, 866 tokens)
   llm.txt [15152:1 - 15313:48]
Clone found (txt)
 - llm.txt [8978:1 - 9029:48] (52 lines, 293 tokens)
   llm.txt [11762:1 - 11813:48]
Clone found (txt)
 - llm.txt [9064:1 - 9079:40] (16 lines, 157 tokens)
   llm.txt [12243:1 - 12258:40]
Clone found (txt)
 - llm.txt [9124:40 - 9193:4] (70 lines, 300 tokens)
   llm.txt [12369:40 - 12438:4]
Clone found (txt)
 - llm.txt [9124:40 - 9236:53] (113 lines, 504 tokens)
   llm.txt [15770:35 - 15886:26]
Clone found (txt)
 - llm.txt [9193:1 - 9217:6] (25 lines, 83 tokens)
   llm.txt [12444:1 - 12468:6]
Clone found (txt)
 - llm.txt [9218:3 - 9233:26] (16 lines, 68 tokens)
   llm.txt [12470:3 - 12485:26]
Clone found (txt)
 - llm.txt [9237:38 - 9261:84] (25 lines, 288 tokens)
   llm.txt [12489:38 - 12513:84]
Clone found (txt)
 - llm.txt [9237:38 - 9261:67] (25 lines, 283 tokens)
   llm.txt [15890:33 - 15914:84]
Clone found (txt)
 - llm.txt [9267:88 - 9294:42] (28 lines, 165 tokens)
   llm.txt [12519:88 - 12546:42]
Clone found (txt)
 - llm.txt [9267:88 - 9294:42] (28 lines, 165 tokens)
   llm.txt [15920:83 - 15947:42]
Clone found (txt)
 - llm.txt [9294:52 - 9307:38] (14 lines, 108 tokens)
   llm.txt [12546:52 - 12559:38]
Clone found (txt)
 - llm.txt [9294:52 - 9307:38] (14 lines, 108 tokens)
   llm.txt [15947:47 - 15960:38]
Clone found (txt)
 - llm.txt [9353:62 - 9371:3] (19 lines, 96 tokens)
   llm.txt [12268:88 - 12286:3]
Clone found (txt)
 - llm.txt [9373:40 - 9391:2] (19 lines, 70 tokens)
   llm.txt [12288:89 - 12306:2]
Clone found (txt)
 - llm.txt [9422:55 - 9434:13] (13 lines, 63 tokens)
   llm.txt [12618:38 - 12630:13]
Clone found (txt)
 - llm.txt [9435:46 - 9458:3] (24 lines, 176 tokens)
   llm.txt [12634:23 - 12657:3]
Clone found (txt)
 - llm.txt [9435:46 - 9509:7] (75 lines, 558 tokens)
   llm.txt [16152:73 - 16211:44]
Clone found (txt)
 - llm.txt [9465:33 - 9471:118] (7 lines, 82 tokens)
   llm.txt [12677:35 - 12683:118]
Clone found (txt)
 - llm.txt [9500:1 - 9513:15] (14 lines, 97 tokens)
   llm.txt [12882:1 - 12895:15]
Clone found (txt)
 - llm.txt [9517:40 - 9599:15] (83 lines, 441 tokens)
   llm.txt [12899:40 - 12981:15]
Clone found (txt)
 - llm.txt [9517:40 - 9599:15] (83 lines, 441 tokens)
   llm.txt [16407:35 - 16489:15]
Clone found (txt)
 - llm.txt [9603:40 - 9668:15] (66 lines, 310 tokens)
   llm.txt [12985:40 - 13050:15]
Clone found (txt)
 - llm.txt [9603:40 - 9668:15] (66 lines, 310 tokens)
   llm.txt [16493:35 - 16558:15]
Clone found (txt)
 - llm.txt [9672:40 - 9704:28] (33 lines, 168 tokens)
   llm.txt [13054:40 - 13086:28]
Clone found (txt)
 - llm.txt [9672:40 - 9767:42] (96 lines, 489 tokens)
   llm.txt [16562:35 - 16654:15]
Clone found (txt)
 - llm.txt [9720:66 - 9760:2] (41 lines, 214 tokens)
   llm.txt [13105:86 - 13145:2]
Clone found (txt)
 - llm.txt [9765:40 - 9788:33] (24 lines, 183 tokens)
   llm.txt [13189:40 - 13212:33]
Clone found (txt)
 - llm.txt [9765:40 - 9788:33] (24 lines, 183 tokens)
   llm.txt [16682:35 - 16705:33]
Clone found (txt)
 - llm.txt [9788:43 - 9954:15] (167 lines, 596 tokens)
   llm.txt [13212:43 - 13378:15]
Clone found (txt)
 - llm.txt [9788:43 - 9954:15] (167 lines, 596 tokens)
   llm.txt [16705:38 - 16871:15]
Clone found (txt)
 - llm.txt [9958:40 - 9964:25] (7 lines, 66 tokens)
   llm.txt [13382:40 - 13388:25]
Clone found (txt)
 - llm.txt [9958:40 - 9990:40] (33 lines, 241 tokens)
   llm.txt [16875:35 - 16907:33]
Clone found (txt)
 - llm.txt [9964:26 - 9990:33] (27 lines, 172 tokens)
   llm.txt [13388:34 - 13414:33]
Clone found (txt)
 - llm.txt [9990:43 - 10109:4] (120 lines, 395 tokens)
   llm.txt [13414:43 - 13533:4]
Clone found (txt)
 - llm.txt [9990:43 - 10189:90] (200 lines, 840 tokens)
   llm.txt [16907:38 - 17110:15]
Clone found (txt)
 - llm.txt [10106:1 - 10183:15] (78 lines, 426 tokens)
   llm.txt [13540:1 - 13617:15]
Clone found (txt)
 - llm.txt [10187:1 - 10195:19] (9 lines, 65 tokens)
   llm.txt [13621:1 - 13629:19]
Clone found (txt)
 - llm.txt [10187:1 - 10195:19] (9 lines, 65 tokens)
   llm.txt [17114:1 - 17122:19]
Clone found (txt)
 - llm.txt [10197:1 - 10279:13] (83 lines, 503 tokens)
   llm.txt [13631:1 - 13713:13]
Clone found (txt)
 - llm.txt [10197:1 - 10326:32] (130 lines, 764 tokens)
   llm.txt [17124:1 - 17249:15]
Clone found (txt)
 - llm.txt [10280:4 - 10320:15] (41 lines, 237 tokens)
   llm.txt [13716:4 - 13756:15]
Clone found (txt)
 - llm.txt [10324:40 - 10356:15] (33 lines, 355 tokens)
   llm.txt [13760:40 - 13792:15]
Clone found (txt)
 - llm.txt [10324:40 - 10356:15] (33 lines, 355 tokens)
   llm.txt [17253:35 - 17285:15]
Clone found (txt)
 - llm.txt [10360:40 - 10377:53] (18 lines, 144 tokens)
   llm.txt [13796:40 - 13813:53]
Clone found (txt)
 - llm.txt [10360:40 - 10377:53] (18 lines, 144 tokens)
   llm.txt [17289:35 - 17306:53]
Clone found (txt)
 - llm.txt [10379:1 - 10386:33] (8 lines, 55 tokens)
   llm.txt [13815:1 - 13822:33]
Clone found (txt)
 - llm.txt [10379:1 - 10386:33] (8 lines, 55 tokens)
   llm.txt [17308:1 - 17315:33]
Clone found (txt)
 - llm.txt [10386:43 - 10407:29] (22 lines, 80 tokens)
   llm.txt [13822:43 - 13842:38]
Clone found (txt)
 - llm.txt [10386:43 - 10407:29] (22 lines, 80 tokens)
   llm.txt [17315:38 - 17335:38]
Clone found (txt)
 - llm.txt [10407:39 - 10450:60] (44 lines, 142 tokens)
   llm.txt [13842:48 - 13885:60]
Clone found (txt)
 - llm.txt [10407:39 - 10450:60] (44 lines, 142 tokens)
   llm.txt [17335:43 - 17378:60]
Clone found (txt)
 - llm.txt [10450:70 - 10569:5] (120 lines, 445 tokens)
   llm.txt [13885:70 - 14004:5]
Clone found (txt)
 - llm.txt [10450:70 - 10623:66] (174 lines, 746 tokens)
   llm.txt [17378:65 - 17558:15]
Clone found (txt)
 - llm.txt [10567:39 - 10615:15] (49 lines, 247 tokens)
   llm.txt [14017:38 - 14065:15]
Clone found (txt)
 - llm.txt [10619:40 - 10638:45] (20 lines, 154 tokens)
   llm.txt [14069:40 - 14088:45]
Clone found (txt)
 - llm.txt [10619:40 - 10638:45] (20 lines, 154 tokens)
   llm.txt [17562:35 - 17581:45]
Clone found (txt)
 - llm.txt [10640:1 - 10703:29] (64 lines, 232 tokens)
   llm.txt [14090:1 - 14152:38]
Clone found (txt)
 - llm.txt [10640:1 - 10703:29] (64 lines, 232 tokens)
   llm.txt [17583:1 - 17645:38]
Clone found (txt)
 - llm.txt [10703:39 - 10777:60] (75 lines, 227 tokens)
   llm.txt [14152:48 - 14226:60]
Clone found (txt)
 - llm.txt [10703:39 - 10777:60] (75 lines, 227 tokens)
   llm.txt [17645:43 - 17719:60]
Clone found (txt)
 - llm.txt [10777:70 - 10884:33] (108 lines, 398 tokens)
   llm.txt [14226:70 - 14333:33]
Clone found (txt)
 - llm.txt [10777:70 - 10977:27] (201 lines, 830 tokens)
   llm.txt [17719:65 - 17916:15]
Clone found (txt)
 - llm.txt [10886:1 - 10973:15] (88 lines, 423 tokens)
   llm.txt [14336:1 - 14423:15]
Clone found (txt)
 - llm.txt [10977:40 - 11028:29] (52 lines, 304 tokens)
   llm.txt [14427:40 - 14478:29]
Clone found (txt)
 - llm.txt [10977:40 - 11028:29] (52 lines, 304 tokens)
   llm.txt [17920:35 - 17971:29]
Clone found (txt)
 - llm.txt [11028:39 - 11155:58] (128 lines, 442 tokens)
   llm.txt [14478:39 - 14605:58]
Clone found (txt)
 - llm.txt [11028:39 - 11157:3] (130 lines, 444 tokens)
   llm.txt [17971:34 - 18099:4]
Clone found (txt)
 - llm.txt [11157:1 - 11180:5] (24 lines, 68 tokens)
   llm.txt [14611:1 - 14634:5]
Clone found (txt)
 - llm.txt [11159:6 - 11183:56] (25 lines, 97 tokens)
   llm.txt [18111:23 - 18144:28]
Clone found (txt)
 - llm.txt [11182:38 - 11262:15] (81 lines, 301 tokens)
   llm.txt [14646:38 - 14725:15]
Clone found (txt)
 - llm.txt [11182:38 - 11197:3] (16 lines, 66 tokens)
   llm.txt [18144:33 - 18158:3]
Clone found (txt)
 - llm.txt [11197:1 - 11262:15] (66 lines, 237 tokens)
   llm.txt [18303:1 - 18368:15]
Clone found (txt)
 - llm.txt [11266:40 - 11285:3] (20 lines, 127 tokens)
   llm.txt [14729:40 - 14748:3]
Clone found (txt)
 - llm.txt [11266:40 - 11420:18] (155 lines, 820 tokens)
   llm.txt [18372:35 - 18529:15]
Clone found (txt)
 - llm.txt [11285:1 - 11377:3] (93 lines, 490 tokens)
   llm.txt [14760:1 - 14852:3]
Clone found (txt)
 - llm.txt [11377:1 - 11402:15] (26 lines, 98 tokens)
   llm.txt [14861:1 - 14886:15]
Clone found (txt)
 - llm.txt [11406:40 - 11547:15] (142 lines, 749 tokens)
   llm.txt [14890:40 - 15031:15]
Clone found (txt)
 - llm.txt [11406:40 - 11547:15] (142 lines, 749 tokens)
   llm.txt [18533:35 - 18674:15]
Clone found (txt)
 - llm.txt [11551:40 - 11647:2] (97 lines, 454 tokens)
   llm.txt [15035:40 - 15131:2]
Clone found (txt)
 - llm.txt [11551:40 - 11647:2] (97 lines, 454 tokens)
   llm.txt [18678:35 - 18774:2]
Clone found (txt)
 - llm.txt [11830:40 - 11856:2] (27 lines, 171 tokens)
   llm.txt [15330:35 - 15356:2]
Clone found (txt)
 - llm.txt [12094:5 - 12113:5] (20 lines, 103 tokens)
   llm.txt [15535:15 - 15554:5]
Clone found (txt)
 - llm.txt [12132:1 - 12142:3] (11 lines, 132 tokens)
   llm.txt [15570:1 - 15580:3]
Clone found (txt)
 - llm.txt [12241:40 - 12339:48] (99 lines, 641 tokens)
   llm.txt [15642:35 - 15740:48]
Clone found (txt)
 - llm.txt [12339:58 - 12355:27] (17 lines, 125 tokens)
   llm.txt [15740:53 - 15756:27]
Clone found (txt)
 - llm.txt [12559:48 - 12567:30] (9 lines, 76 tokens)
   llm.txt [15960:43 - 15968:30]
Clone found (txt)
 - llm.txt [12567:40 - 12574:30] (8 lines, 62 tokens)
   llm.txt [15968:35 - 15975:30]
Clone found (txt)
 - llm.txt [12574:40 - 12605:2] (32 lines, 136 tokens)
   llm.txt [15975:35 - 16006:2]
Clone found (txt)
 - llm.txt [12610:40 - 12632:11] (23 lines, 160 tokens)
   llm.txt [16130:35 - 16152:11]
Clone found (txt)
 - llm.txt [12700:18 - 12706:16] (7 lines, 88 tokens)
   llm.txt [16212:58 - 16218:16]
Clone found (txt)
 - llm.txt [12706:58 - 12711:50] (6 lines, 78 tokens)
   llm.txt [16218:39 - 16223:50]
Clone found (txt)
 - llm.txt [12721:42 - 12741:84] (21 lines, 274 tokens)
   llm.txt [16231:40 - 16251:84]
Clone found (txt)
 - llm.txt [12744:4 - 12786:66] (43 lines, 469 tokens)
   llm.txt [16252:4 - 16294:66]
Clone found (txt)
 - llm.txt [12786:76 - 12895:15] (110 lines, 1044 tokens)
   llm.txt [16294:71 - 16403:15]
Clone found (txt)
 - llm.txt [14606:1 - 14613:13] (8 lines, 50 tokens)
   llm.txt [18100:1 - 18107:13]
┌────────────┬────────────────┬─────────────┬──────────────┬──────────────┬──────────────────┬───────────────────┐
│ Format     │ Files analyzed │ Total lines │ Total tokens │ Clones found │ Duplicated lines │ Duplicated tokens │
├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤
│ javascript │ 2              │ 314         │ 1316         │ 0            │ 0 (0.00%)        │ 0 (0.00%)         │
├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤
│ txt        │ 1              │ 21416       │ 116554       │ 119          │ 7525 (35.14%)    │ 39058 (33.51%)    │
├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤
│ Total:     │ 3              │ 21730       │ 117870       │ 119          │ 7525 (34.63%)    │ 39058 (33.14%)    │
└────────────┴────────────────┴─────────────┴──────────────┴──────────────┴──────────────────┴───────────────────┘
Found 119 clones.
HTML report saved to megalinter-reports/copy-paste/jscpd-report.html
ERROR: jscpd found too many duplicates (34.6%) over threshold (0.0%)
time: 148.659ms
```

</details>

<details>
<summary>⚠️ SPELL / lychee - 115 errors</summary>

```
[ERROR] failed to verify TLS certificate: invalid peer certificate: certificate not valid for name "stochastic-thinking-mcp-server.oriz.in"; certificate is only valid for DnsName("*.github.com"), DnsName("*.github.io"), DnsName("*.githubusercontent.com"), DnsName("github.com"), DnsName("github.io") or DnsName("githubusercontent.com")
 [ERROR] failed to verify TLS certificate: invalid peer certificate: certificate not valid for name "openctx.org"; certificate is only valid for DnsName("*.netlify.app") or DnsName("netlify.app")
📝 Summary
---------------------
🔍 Total..........857
🔗 Unique.........570
✅ Successful.....708
⏳ Timeouts.........0
🔀 Redirected......95
👻 Excluded........16
❓ Unknown..........0
🚫 Errors.........115
⛔ Unsupported....115

Errors in llm.txt
[ERROR] file:///%7Bpath%7D (at 10798:25) | File not found. Check if file exists and path is correct
[ERROR] file:///%7Bpath%7D (at 11335:84) | File not found. Check if file exists and path is correct
[ERROR] file:///%7Bpath%7D (at 14247:25) | File not found. Check if file exists and path is correct
[ERROR] file:///%7Bpath%7D (at 14810:84) | File not found. Check if file exists and path is correct
[ERROR] file:///%7Bpath%7D (at 17740:25) | File not found. Check if file exists and path is correct
[ERROR] file:///%7Bpath%7D (at 18453:84) | File not found. Check if file exists and path is correct
[ERROR] file:///example.png (at 10904:11) | File not found. Check if file exists and path is correct
[ERROR] file:///example.png (at 14354:11) | File not found. Check if file exists and path is correct
[ERROR] file:///example.png (at 17847:11) | File not found. Check if file exists and path is correct
[ERROR] file:///example.txt (at 10894:11) | File not found. Check if file exists and path is correct
[ERROR] file:///example.txt (at 14344:11) | File not found. Check if file exists and path is correct
[ERROR] file:///example.txt (at 17837:11) | File not found. Check if file exists and path is correct
[ERROR] file:///example.txt (at 19488:9) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/documents/report.pdf (at 1723:4) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/projects/frontend (at 2007:15) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/projects/myapp (at 1954:1) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/projects/myproject (at 13252:17) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/projects/myproject (at 13304:11) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/projects/myproject (at 16745:17) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/projects/myproject (at 16797:11) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/projects/myproject (at 9828:17) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/projects/myproject (at 9880:11) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/repos/backend (at 13318:13) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/repos/backend (at 16811:13) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/repos/backend (at 9894:13) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/repos/frontend (at 13314:13) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/repos/frontend (at 16807:13) | File not found. Check if file exists and path is correct
[ERROR] file:///home/user/repos/frontend (at 9890:13) | File not found. Check if file exists and path is correct
[ERROR] file:///logs/app.log (at 1846:19) | File not found. Check if file exists and path is correct
[ERROR] file:///logs/app.log (at 1858:20) | File not found. Check if file exists and path is correct
[ERROR] file:///logs/app.log (at 1884:22) | File not found. Check if file exists and path is correct
[ERROR] file:///logs/app.log (at 1892:25) | File not found. Check if file exists and path is correct
[ERROR] file:///nonexistent.txt (at 10958:15) | File not found. Check if file exists and path is correct
[ERROR] file:///nonexistent.txt (at 14408:15) | File not found. Check if file exists and path is correct
[ERROR] file:///nonexistent.txt (at 17901:15) | File not found. Check if file exists and path is correct
[ERROR] file:///path (at 7687:30) | File not found. Check if file exists and path is correct
[ERROR] file:///path (at 7688:24) | File not found. Check if file exists and path is correct
[ERROR] file:///path (at 7741:45) | File not found. Check if file exists and path is correct
[ERROR] file:///path (at 7742:42) | File not found. Check if file exists and path is correct
[ERROR] file:///path (at 7804:26) | File not found. Check if file exists and path is correct
[ERROR] file:///path (at 7807:20) | File not found. Check if file exists and path is correct
[ERROR] file:///path/to/code.py (at 1403:19) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 10727:17) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 10750:13) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 10764:17) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 10833:13) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 10845:13) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 14176:17) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 14199:13) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 14213:17) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 14282:13) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 14294:13) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 17669:17) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 17692:13) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 17706:17) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 17775:13) | File not found. Check if file exists and path is correct
[ERROR] file:///project/src/main.rs (at 17787:13) | File not found. Check if file exists and path is correct
[ERROR] http://localhost:3000/callback (at 19522:30) | Connection refused - server may be down or port blocked
[ERROR] http://localhost:3000/sse (at 2934:16) | Connection refused - server may be down or port blocked
[ERROR] http://localhost:8000/sse (at 2967:28) | Connection refused - server may be down or port blocked
[ERROR] http://your-mcp-server/ (at 7772:64) | Connection failed. Check network connectivity and firewall settings
[ERROR] http://your-mcp-server/ (at 7781:19) | Connection failed. Check network connectivity and firewall settings
[401] https://api.weather.com/$%7Bcity%7D (at 19018:35) | Rejected status code: 401 Unauthorized
[401] https://apify.com/apify/actors-mcp-server (at 239:37) | Rejected status code: 401 Unauthorized | Followed 1 redirect. Redirects: https://apify.com/apify/actors-mcp-server --[308]--> https://mcp.apify.com/
[ERROR] https://auth.external.com/oauth2/v1/authorize (at 19508:28) | Network error: received fatal alert: InternalError
[ERROR] https://auth.external.com/oauth2/v1/revoke (at 19510:25) | Network error: received fatal alert: InternalError
[ERROR] https://auth.external.com/oauth2/v1/token (at 19509:20) | Network error: received fatal alert: InternalError
[404] https://block.github.io/goose/docs/goose-architecture/#interoperability-with-extensions (at 107:12) | Rejected status code: 404 Not Found
[404] https://block.github.io/goose/docs/tutorials/custom-extensions (at 416:83) | Rejected status code: 404 Not Found
[404] https://block.github.io/goose/v1/extensions/ (at 415:65) | Rejected status code: 404 Not Found
[403] https://claude.ai/ (at 77:16) | Rejected status code: 403 Forbidden
[403] https://claude.ai/code (at 79:18) | Rejected status code: 403 Forbidden
[404] https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-client-docs.html (at 20681:62) | Error (cached)
[404] https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-client-docs.html (at 6626:62) | Rejected status code: 404 Not Found
[404] https://github.com/AdamStrojek/rust-agentai/blob/master/examples/tools_mcp.rs (at 189:37) | Rejected status code: 404 Not Found
[404] https://github.com/calclavia/mcp-obsidian (at 3663:31) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/java-sdk/blob/main/migration-0.8.0.md (at 8026:73) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/java-sdk/blob/main/migration-0.8.0.md (at 8209:73) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server (at 3651:24) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search (at 3637:20) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search (at 4778:157) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/everart (at 3649:15) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive (at 3626:20) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/github (at 3631:14) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab (at 3632:14) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps (at 3644:19) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/postgres (at 3624:18) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer (at 3639:17) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/sentry (at 3633:14) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/slack (at 3643:13) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite (at 3625:14) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/specification/compare/2025-03-26...draft (at 16674:14) | Rejected status code: 404 Not Found | Followed 1 redirect. Redirects: https://github.com/modelcontextprotocol/specification/compare/2025-03-26...draft --[301]--> https://github.com/modelcontextprotocol/modelcontextprotocol/compare/2025-03-26...draft
[404] https://github.com/modelcontextprotocol/specification/issues/117 (at 812:17) | Rejected status code: 404 Not Found
[404] https://github.com/modelcontextprotocol/specification/issues/97 (at 805:169) | Rejected status code: 404 Not Found
[429] https://mindpal.io/ (at 123:14) | Rejected status code: 429 Too Many Requests
[429] https://mindpal.io/ (at 543:11) | Rejected status code: 429 Too Many Requests
[403] https://mintlify.s3.us-west-1.amazonaws.com/mcp/images/claude-desktop-mcp-hammer-icon.svg (at 21294:155) | Error (cached)
[403] https://mintlify.s3.us-west-1.amazonaws.com/mcp/images/claude-desktop-mcp-hammer-icon.svg (at 3221:24) | Rejected status code: 403 Forbidden
[403] https://mintlify.s3.us-west-1.amazonaws.com/mcp/images/claude-desktop-mcp-hammer-icon.svg (at 7239:155) | Error (cached)
[403] https://mintlify.s3.us-west-1.amazonaws.com/mcp/images/claude-desktop-mcp-hammer-icon.svg (at 7485:52) | Error (cached)
[403] https://mintlify.s3.us-west-1.amazonaws.com/mcp/images/quickstart-hammer.png (at 7488:13) | Rejected status code: 403 Forbidden
[404] https://modelcontextprotocol.io/development/updates (at 827:9) | Rejected status code: 404 Not Found
[404] https://modelcontextprotocol.io/sdk/java/mcp-client (at 7625:9) | Rejected status code: 404 Not Found
[404] https://modelcontextprotocol.io/sdk/java/mcp-overview (at 8015:9) | Rejected status code: 404 Not Found
[404] https://modelcontextprotocol.io/sdk/java/mcp-server (at 8201:9) | Rejected status code: 404 Not Found
[404] https://modelcontextprotocol.io/specification/contributing (at 15132:9) | Rejected status code: 404 Not Found
[403] https://npmjs.com/ (at 3490:50) | Rejected status code: 403 Forbidden | Followed 1 redirect. Redirects: https://npmjs.com/ --[301]--> https://www.npmjs.com/
[ERROR] https://openctx.org/docs/providers/modelcontextprotocol (at 623:8) | SSL certificate error. Check certificate validity
[ERROR] https://spec.modelcontextprotocol.io/ (at 783:247) | TLS handshake failed. Check SSL/TLS configuration
[404] https://www.youtube.com/watch?v=W5ZpN0cMY70 (at 482:30) | Rejected status code: 404 Not Found

Errors in package-lock.json
[403] https://www.patreon.com/feross (at 1480:19) | Rejected status code: 403 Forbidden

Errors in README.md
[404] https://github.com/chirag127/Stochastic-Thinking-MCP-Server/stargazers (at 3:1) | Rejected status code: 404 Not Found
[500] https://smithery.ai/badge/@chirag127/stochastic-thinking-mcp-server (at 5:2) | Rejected status code: 500 Internal Server Error
[ERROR] https://stochastic-thinking-mcp-server.oriz.in/ (at 7:12) | SSL certificate error. Check certificate validity

Errors in smithery.yaml
[404] https://smithery.ai/docs/build/project-config (at 1:32) | Rejected status code: 404 Not Found

Hint: Encountered rate limit responses. You might be able to work around this by adding `[hosts."mindpal.io"]` to the TOML config to adjust the `concurrency` and `request_interval` values.
Hint: Followed 95 redirects. You might want to consider replacing redirecting URLs with the resolved URLs. Use verbose mode (`-v`/`-vv`) to see redirection details.
Hint: You can configure accepted/rejected response codes with `-a` or `--accept`
```

</details>

<details>
<summary>⚠️ MARKDOWN / markdownlint - 1 error</summary>

```
prompt.md:1 error MD041/first-line-heading/first-line-h1 First line in a file should be a top-level heading [Context: "create the Stochastic Thinking..."]
```

</details>

<details>
<summary>⚠️ REPOSITORY / osv-scanner - 26 errors</summary>

```
Scanning dir .
Starting filesystem walk for root: /
Scanned package-lock.json file and found 140 packages
End status: 6 dirs visited, 25 inodes visited, 1 Extract calls, 3.328379ms elapsed, 3.328533ms wall time

Total 10 packages affected by 26 known vulnerabilities (0 Critical, 16 High, 7 Medium, 3 Low, 0 Unknown) from 1 ecosystem.
26 vulnerabilities can be fixed.

+-------------------------------------+------+-----------+---------------------------+---------+---------------+-------------------+
| OSV URL                             | CVSS | ECOSYSTEM | PACKAGE                   | VERSION | FIXED VERSION | SOURCE            |
+-------------------------------------+------+-----------+---------------------------+---------+---------------+-------------------+
| https://osv.dev/GHSA-345p-7cg4-v4c7 | 7.1  | npm       | @modelcontextprotocol/sdk | 1.11.4  | 1.26.0        | package-lock.json |
| https://osv.dev/GHSA-8r9q-7v3j-jr4g | 8.7  | npm       | @modelcontextprotocol/sdk | 1.11.4  | 1.25.2        | package-lock.json |
| https://osv.dev/GHSA-w48q-cv73-mx4w | 7.6  | npm       | @modelcontextprotocol/sdk | 1.11.4  | 1.24.0        | package-lock.json |
| https://osv.dev/GHSA-2g4f-4pwh-qvx6 | 5.5  | npm       | ajv                       | 8.17.1  | 8.18.0        | package-lock.json |
| https://osv.dev/GHSA-v422-hmwv-36x6 | 3.7  | npm       | body-parser               | 2.2.0   | 2.3.0         | package-lock.json |
| https://osv.dev/GHSA-wqch-xfxh-vrr4 | 5.5  | npm       | body-parser               | 2.2.0   | 2.2.1         | package-lock.json |
| https://osv.dev/GHSA-3jxr-9vmj-r5cp | 7.7  | npm       | brace-expansion (dev)     | 2.0.1   | 2.1.2         | package-lock.json |
| https://osv.dev/GHSA-f886-m6hf-6m8v | 6.5  | npm       | brace-expansion (dev)     | 2.0.1   | 2.0.3         | package-lock.json |
| https://osv.dev/GHSA-mh99-v99m-4gvg | 7.5  | npm       | brace-expansion (dev)     | 2.0.1   | 2.1.3         | package-lock.json |
| https://osv.dev/GHSA-rgw5-rvv9-x895 | 7.5  | npm       | brace-expansion (dev)     | 2.0.1   | 2.1.4         | package-lock.json |
| https://osv.dev/GHSA-v6h2-p8h4-qcjw | 3.1  | npm       | brace-expansion (dev)     | 2.0.1   | 2.0.2         | package-lock.json |
| https://osv.dev/GHSA-67mh-4wv8-2f99 | 5.3  | npm       | esbuild (dev)             | 0.20.2  | 0.25.0        | package-lock.json |
| https://osv.dev/GHSA-4c8g-83qw-93j6 | 7.5  | npm       | fast-uri                  | 3.0.6   | 3.1.3         | package-lock.json |
| https://osv.dev/GHSA-7p8r-x3mc-p8w7 | 7.5  | npm       | fast-uri                  | 3.0.6   | 3.1.5         | package-lock.json |
| https://osv.dev/GHSA-q3j6-qgpj-74h6 | 7.5  | npm       | fast-uri                  | 3.0.6   | 3.1.1         | package-lock.json |
| https://osv.dev/GHSA-v2hh-gcrm-f6hx | 7.5  | npm       | fast-uri                  | 3.0.6   | 3.1.4         | package-lock.json |
| https://osv.dev/GHSA-v39h-62p7-jpjc | 7.5  | npm       | fast-uri                  | 3.0.6   | 3.1.2         | package-lock.json |
| https://osv.dev/GHSA-5j98-mcp5-4vw2 | 7.5  | npm       | glob (dev)                | 10.4.5  | 10.5.0        | package-lock.json |
| https://osv.dev/GHSA-23c5-xmqv-rm74 | 7.5  | npm       | minimatch (dev)           | 9.0.5   | 9.0.7         | package-lock.json |
| https://osv.dev/GHSA-3ppc-4f35-3m26 | 8.7  | npm       | minimatch (dev)           | 9.0.5   | 9.0.6         | package-lock.json |
| https://osv.dev/GHSA-7r86-cg39-jmmj | 7.5  | npm       | minimatch (dev)           | 9.0.5   | 9.0.7         | package-lock.json |
| https://osv.dev/GHSA-27v5-c462-wpq7 | 5.9  | npm       | path-to-regexp            | 8.2.0   | 8.4.0         | package-lock.json |
| https://osv.dev/GHSA-j3q9-mxjg-w52f | 7.5  | npm       | path-to-regexp            | 8.2.0   | 8.4.0         | package-lock.json |
| https://osv.dev/GHSA-6rw7-vpxm-498p | 6.3  | npm       | qs                        | 6.14.0  | 6.14.1        | package-lock.json |
| https://osv.dev/GHSA-q8mj-m7cp-5q26 | 6.3  | npm       | qs                        | 6.14.0  | 6.15.2        | package-lock.json |
| https://osv.dev/GHSA-w7fw-mjwx-w883 | 3.7  | npm       | qs                        | 6.14.0  | 6.14.2        | package-lock.json |
+-------------------------------------+------+-----------+---------------------------+---------+---------------+-------------------+
```

</details>

<details>
<summary>⚠️ REPOSITORY / trivy - 1 error</summary>

```
2026-08-12T20:47:13Z	INFO	[vulndb] Need to update DB
2026-08-12T20:47:13Z	INFO	[vulndb] Downloading vulnerability DB...
2026-08-12T20:47:13Z	INFO	[vulndb] Downloading artifact...	repo="mirror.gcr.io/aquasec/trivy-db:2"
2.11 MiB / 104.31 MiB [->____________________________________________________________] 2.02% ? p/s ?20.72 MiB / 104.31 MiB [----------->________________________________________________] 19.87% ? p/s ?32.79 MiB / 104.31 MiB [------------------>_________________________________________] 31.44% ? p/s ?45.70 MiB / 104.31 MiB [-------------------->__________________________] 43.82% 72.63 MiB p/s ETA 0s65.48 MiB / 104.31 MiB [----------------------------->_________________] 62.77% 72.63 MiB p/s ETA 0s85.22 MiB / 104.31 MiB [-------------------------------------->________] 81.70% 72.63 MiB p/s ETA 0s103.90 MiB / 104.31 MiB [--------------------------------------------->] 99.61% 74.21 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 74.21 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 74.21 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 69.46 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 69.46 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 69.46 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 64.98 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 64.98 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 64.98 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 60.79 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 60.79 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 60.79 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 56.87 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 56.87 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 56.87 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 53.20 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 53.20 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 53.20 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 49.77 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 49.77 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 49.77 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 46.56 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 46.56 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 46.56 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 43.55 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 43.55 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 43.55 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-------------------------------------------->] 100.00% 40.74 MiB p/s ETA 0s104.31 MiB / 104.31 MiB [-----------------------------------------------] 100.00% 15.61 MiB p/s 6.9s2026-08-12T20:47:20Z	INFO	[vulndb] Artifact successfully downloaded	repo="mirror.gcr.io/aquasec/trivy-db:2"
2026-08-12T20:47:20Z	INFO	[vuln] Vulnerability scanning is enabled
2026-08-12T20:47:20Z	INFO	[misconfig] Misconfiguration scanning is enabled
2026-08-12T20:47:20Z	INFO	[checks-client] Need to update the checks bundle
2026-08-12T20:47:20Z	INFO	[checks-client] Downloading the checks bundle...
234.65 KiB / 234.65 KiB [--------------------------------------------------------->] 100.00% ? p/s ?234.65 KiB / 234.65 KiB [--------------------------------------------------------->] 100.00% ? p/s ?234.65 KiB / 234.65 KiB [---------------------------------------------] 100.00% 690.27 KiB p/s 500ms2026-08-12T20:47:22Z	INFO	[npm] Run "npm install" to collect the license information of packages	dir="node_modules"
2026-08-12T20:47:22Z	INFO	Suppressing dependencies for development and testing. To display them, try the '--include-dev-deps' flag.
2026-08-12T20:47:22Z	INFO	Number of language-specific files	num=1
2026-08-12T20:47:22Z	INFO	[npm] Detecting vulnerabilities...
2026-08-12T20:47:22Z	INFO	Detected config files	num=1

Report Summary

┌───────────────────┬────────────┬─────────────────┬───────────────────┐
│      Target       │    Type    │ Vulnerabilities │ Misconfigurations │
├───────────────────┼────────────┼─────────────────┼───────────────────┤
│ package-lock.json │    npm     │       16        │         -         │
├───────────────────┼────────────┼─────────────────┼───────────────────┤
│ Dockerfile        │ dockerfile │        -        │         2         │
└───────────────────┴────────────┴─────────────────┴───────────────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


For OSS Maintainers: VEX Notice
--------------------------------
If you're an OSS maintainer and Trivy has detected vulnerabilities in your project that you believe are not actually exploitable, consider issuing a VEX (Vulnerability Exploitability eXchange) statement.
VEX allows you to communicate the actual status of vulnerabilities in your project, improving security transparency and reducing false positives for your users.
Learn more and start using VEX: https://trivy.dev/docs/v0.73/guide/supply-chain/vex/repo#publishing-vex-documents

To disable this notice, set the TRIVY_DISABLE_VEX_NOTICE environment variable.


package-lock.json (npm)
=======================
Total: 16 (UNKNOWN: 0, LOW: 2, MEDIUM: 5, HIGH: 9, CRITICAL: 0)

┌───────────────────────────┬────────────────┬──────────┬────────┬───────────────────┬─────────────────────┬──────────────────────────────────────────────────────────────┐
│          Library          │ Vulnerability  │ Severity │ Status │ Installed Version │    Fixed Version    │                            Title                             │
├───────────────────────────┼────────────────┼──────────┼────────┼───────────────────┼─────────────────────┼──────────────────────────────────────────────────────────────┤
│ @modelcontextprotocol/sdk │ CVE-2025-66414 │ HIGH     │ fixed  │ 1.11.4            │ 1.24.0              │ Model Context Protocol (MCP) TypeScript SDK does not enable  │
│                           │                │          │        │                   │                     │ DNS rebinding protection...                                  │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2025-66414                   │
│                           ├────────────────┤          │        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-0621  │          │        │                   │ 1.25.2              │ Anthropic's MCP TypeScript SDK has a ReDoS vulnerability     │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-0621                    │
│                           ├────────────────┤          │        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-25536 │          │        │                   │ 1.26.0              │ @modelcontextprotocol/sdk: @modelcontextprotocol/sdk         │
│                           │                │          │        │                   │                     │ cross-client data leak                                       │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-25536                   │
├───────────────────────────┼────────────────┼──────────┤        ├───────────────────┼─────────────────────┼──────────────────────────────────────────────────────────────┤
│ ajv                       │ CVE-2025-69873 │ MEDIUM   │        │ 8.17.1            │ 8.18.0, 6.14.0      │ ajv: ReDoS via $data reference                               │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2025-69873                   │
├───────────────────────────┼────────────────┤          │        ├───────────────────┼─────────────────────┼──────────────────────────────────────────────────────────────┤
│ body-parser               │ CVE-2025-13466 │          │        │ 2.2.0             │ 2.2.1               │ body-parser: body-parser denial of service                   │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2025-13466                   │
│                           ├────────────────┼──────────┤        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-12590 │ LOW      │        │                   │ 1.20.6, 2.3.0       │ body-parser: body-parser: Denial of Service via invalid      │
│                           │                │          │        │                   │                     │ limit option                                                 │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-12590                   │
├───────────────────────────┼────────────────┼──────────┤        ├───────────────────┼─────────────────────┼──────────────────────────────────────────────────────────────┤
│ fast-uri                  │ CVE-2026-13676 │ HIGH     │        │ 3.0.6             │ 4.0.1, 3.1.3, 2.4.2 │ fast-uri: fast-uri: Security policy bypass due to improper   │
│                           │                │          │        │                   │                     │ Unicode hostname canonicalization                            │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-13676                   │
│                           ├────────────────┤          │        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-16221 │          │        │                   │ 2.4.3, 3.1.4, 4.1.1 │ Impact: fast-uri versions from 2.3.1 through 4.1.0           │
│                           │                │          │        │                   │                     │ (including the 3.x ......                                    │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-16221                   │
│                           ├────────────────┤          │        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-18446 │          │        │                   │ 2.4.4, 3.1.5, 4.1.2 │ fast-uri: fast-uri: Host confusion vulnerability via         │
│                           │                │          │        │                   │                     │ backslash in URI authority                                   │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-18446                   │
│                           ├────────────────┤          │        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-6321  │          │        │                   │ 3.1.1, 2.4.1        │ fast-uri: fast-uri: Path traversal vulnerability allows      │
│                           │                │          │        │                   │                     │ bypass of security policies                                  │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-6321                    │
│                           ├────────────────┤          │        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-6322  │          │        │                   │ 3.1.2, 2.4.1        │ fast-uri: fast-uri: URI authority bypass due to improper     │
│                           │                │          │        │                   │                     │ delimiter handling                                           │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-6322                    │
├───────────────────────────┼────────────────┤          │        ├───────────────────┼─────────────────────┼──────────────────────────────────────────────────────────────┤
│ path-to-regexp            │ CVE-2026-4926  │          │        │ 8.2.0             │ 8.4.0               │ path-to-regexp: path-to-regexp: Denial of Service via        │
│                           │                │          │        │                   │                     │ crafted regular expressions                                  │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-4926                    │
│                           ├────────────────┼──────────┤        │                   │                     ├──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-4923  │ MEDIUM   │        │                   │                     │ path-to-regexp: path-to-regexp: Denial of Service via        │
│                           │                │          │        │                   │                     │ specially crafted paths with multiple wildcards...           │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-4923                    │
├───────────────────────────┼────────────────┤          │        ├───────────────────┼─────────────────────┼──────────────────────────────────────────────────────────────┤
│ qs                        │ CVE-2025-15284 │          │        │ 6.14.0            │ 6.14.1              │ qs: qs: Denial of Service via improper input validation in   │
│                           │                │          │        │                   │                     │ array parsing...                                             │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2025-15284                   │
│                           ├────────────────┤          │        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-8723  │          │        │                   │ 6.15.2              │ ### Summary `qs.stringify` throws `TypeError` when called    │
│                           │                │          │        │                   │                     │ with `arr...                                                 │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-8723                    │
│                           ├────────────────┼──────────┤        │                   ├─────────────────────┼──────────────────────────────────────────────────────────────┤
│                           │ CVE-2026-2391  │ LOW      │        │                   │ 6.14.2              │ qs: qs's arrayLimit bypass in comma parsing allows denial of │
│                           │                │          │        │                   │                     │ service                                                      │
│                           │                │          │        │                   │                     │ https://avd.aquasec.com/nvd/cve-2026-2391                    │
└───────────────────────────┴────────────────┴──────────┴────────┴───────────────────┴─────────────────────┴──────────────────────────────────────────────────────────────┘

Dockerfile (dockerfile)
=======================
Tests: 27 (SUCCESSES: 25, FAILURES: 2)
Failures: 2 (UNKNOWN: 0, LOW: 1, MEDIUM: 0, HIGH: 1, CRITICAL: 0)

DS-0002 (HIGH): Specify at least 1 USER command in Dockerfile with non-root user as argument
════════════════════════════════════════
Running containers with 'root' user can lead to a container escape situation. It is a best practice to run containers as non-root users, which can be done by adding a 'USER' statement to the Dockerfile.

See https://avd.aquasec.com/misconfig/ds-0002
────────────────────────────────────────


DS-0026 (LOW): Add HEALTHCHECK instruction in your Dockerfile
════════════════════════════════════════
You should add HEALTHCHECK instruction in your docker container images to perform the health check on running containers.

See https://avd.aquasec.com/misconfig/ds-0026
────────────────────────────────────────
```

</details>

<details>
<summary>⚠️ ACTION / zizmor - 1 error</summary>

```
INFO zizmor: 🌈 zizmor v1.25.0
fatal: no audit was performed
'ref-confusion' audit failed on file://.github/workflows/megalinter.yml

Caused by:
    0: error in 'ref-confusion' audit
    1: couldn't list branches for actions/checkout
    2: request error while accessing GitHub API
    3: HTTP status client error (401 Unauthorized) for url (https://github.com/actions/checkout.git/git-upload-pack)


[ACTION_ZIZMOR_ERROR_GITHUB_API_UNREACHABLE] Zizmor could not access a repository referenced by a `uses:` clause via the GitHub API (missing token, insufficient scope, or cross-repo private access).
To allow zizmor to authenticate with GITHUB_TOKEN (or a PAT with `Contents: read-only`), whitelist the variable in your .mega-linter.yml:
ACTION_ZIZMOR_UNSECURED_ENV_VARIABLES:
  - GITHUB_TOKEN
If the referenced workflow is in a private repo outside the current one, provide a PAT with cross-repo access instead of the default GITHUB_TOKEN, or run zizmor in offline mode.
```

</details>

See detailed reports in MegaLinter artifacts

[![MegaLinter is provided by OX Security](https://raw.githubusercontent.com/oxsecurity/megalinter/main/docs/assets/images/ox-banner.png)](https://www.ox.security/?ref=megalinter)
Show us your support by [**starring ⭐ the repository**](https://github.com/oxsecurity/megalinter)
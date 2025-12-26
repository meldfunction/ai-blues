// Reusable UI components
const Components = {

    // Home page with three entry points
    home: () => `
        <div class="fade-in">
            <div class="content">
                <h1>How to Not Get the AI Blues</h1>
                <p class="text-center text-muted">when everyone's celebrating AI but you feel the earthquake</p>
                
                <p style="max-width: 600px; margin: 2rem auto;">
                    The tech world won't shut up about AI. But in private conversations, a different story emerges. 
                    We found one of those conversations. What they're saying doesn't match the hype.
                </p>

                <div class="entry-points">
                    <div class="entry-point" onclick="router.navigate('#diagnostic')">
                        <div class="entry-point-icon">😰</div>
                        <h3 class="entry-point-title">I Feel Anxious</h3>
                        <p class="entry-point-description">Take a quick diagnostic to find your path forward</p>
                    </div>
                    
                    <div class="entry-point" onclick="router.navigate('#discover')">
                        <div class="entry-point-icon">👁️</div>
                        <h3 class="entry-point-title">Show Me How to See Needs</h3>
                        <p class="entry-point-description">Learn how to discover what's valued (before you're the walmart greeter)</p>
                    </div>
                    
                    <div class="entry-point" onclick="router.navigate('#systems')">
                        <div class="entry-point-icon">🧠</div>
                        <h3 class="entry-point-title">I Want to Understand</h3>
                        <p class="entry-point-description">See the systems view - why this is happening</p>
                    </div>
                </div>

                <div class="conversation">
                    <h3 style="margin-top: 0;">The conversation we found in the wild:</h3>
                    ${SITE_DATA.conversation.lines.map(line => `
                        <div class="conversation-line">
                            <span class="conversation-speaker">${line.speaker}:</span> "${line.text}"
                        </div>
                    `).join('')}
                </div>

                <div class="text-center mt-lg">
                    <p><strong>Key insight from Person C:</strong></p>
                    <p style="font-style: italic; font-size: 1.125rem; color: var(--color-primary-dark);">
                        "I don't want to say it's lack of imagination. But maybe it's lack of access to the right signals to chart a coherent path."
                    </p>
                </div>
            </div>
        </div>
    `,

    // Discovery page - THE KEY MISSING PIECE
    discover: () => `
        <div class="fade-in">
            <nav class="breadcrumb">
                <a href="#home">Home</a> / How to See Needs
            </nav>

            <div class="content">
                <h1>${SITE_DATA.discovery.title}</h1>
                <p class="text-muted" style="font-size: 1.125rem;">${SITE_DATA.discovery.subtitle}</p>

                <div class="card" style="background: #fffbf5; border-color: var(--color-accent);">
                    <p><strong>The question underneath the AI blues:</strong></p>
                    <p style="font-size: 1.125rem; font-style: italic;">
                        "How do I build the signal network that lets me see what the YouTube dad saw, before I'm the Walmart greeter?"
                    </p>
                </div>

                <h2>${SITE_DATA.discovery.realStory.title}</h2>
                
                ${SITE_DATA.discovery.realStory.steps.map(step => `
                    <div class="card">
                        <div style="display: flex; gap: 1rem; align-items: start;">
                            <div class="exercise-number">${step.number}</div>
                            <div style="flex: 1;">
                                <h3 style="margin: 0 0 0.5rem 0;">${step.title}</h3>
                                <p class="text-muted">${step.description}</p>
                                <p><strong>Key insight:</strong> ${step.insight}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}

                <h2 class="mt-lg">Practical Exercises to Develop This Capacity</h2>
                
                <div class="exercise-grid">
                    ${SITE_DATA.discovery.exercises.map(exercise => `
                        <div class="exercise">
                            <div class="exercise-number">${exercise.number}</div>
                            <h3>${exercise.title}</h3>
                            <p class="text-muted"><em>${exercise.duration}</em></p>
                            <p>${exercise.description}</p>
                            <ul>
                                ${exercise.actions.map(action => `<li>${action}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>

                <div class="card" style="background: linear-gradient(135deg, #f8f6f3, #fff); border: 2px solid var(--color-primary);">
                    <h3>The Meta-Pattern</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
                        ${SITE_DATA.discovery.metaPattern.steps.map((step, i) => `
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="font-size: 2rem; color: var(--color-primary);">${i < SITE_DATA.discovery.metaPattern.steps.length - 1 ? '↓' : ''}</div>
                                <div style="flex: 1; padding: 0.75rem; background: white; border-radius: 4px; border-left: 3px solid var(--color-accent);">
                                    ${step}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="card mt-lg">
                    <h3>Why This Works</h3>
                    <p>${SITE_DATA.discovery.whyThisWorks}</p>
                    <p><strong>Signal networks come after:</strong> ${SITE_DATA.discovery.signaLNetworksComeAfter}</p>
                </div>

                <div class="related-links">
                    <h3>Related Paths</h3>
                    <ul>
                        <li><a href="#signals">Building Signal Networks</a> - How to navigate once you've found the path</li>
                        <li><a href="#diagnostic">Find Your Profession Path</a> - Get specific guidance for your situation</li>
                        <li><a href="#amish">What the Amish Know</a> - The 200-year perspective</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    // Diagnostic quiz
    diagnostic: () => `
        <div class="fade-in">
            <nav class="breadcrumb">
                <a href="#home">Home</a> / Find Your Path
            </nav>

            <div class="quiz">
                <h1>Find Your Path Forward</h1>
                <p class="text-center text-muted">Answer two questions to get personalized guidance</p>

                <div id="quiz-container">
                    ${SITE_DATA.diagnostic.questions.map((q, idx) => `
                        <div class="quiz-question">
                            <h3>${q.question}</h3>
                            <div class="quiz-options">
                                ${q.options.map(opt => `
                                    <div class="quiz-option" onclick="handleQuizSelection('${q.id}', '${opt.route}', this)">
                                        ${opt.label}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div id="quiz-result" style="display: none;" class="mt-lg">
                    <!-- Result will be inserted here -->
                </div>
            </div>
        </div>
    `,

    // Individual path page
    pathPage: (pathData) => `
        <div class="fade-in">
            <nav class="breadcrumb">
                <a href="#home">Home</a> / <a href="#diagnostic">Find Your Path</a> / ${pathData.title}
            </nav>

            <div class="path-section">
                <div class="path-header">
                    <h1>${pathData.title}</h1>
                    <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">${pathData.profile}</p>
                </div>

                <div class="card">
                    <h2>The AI Blues You're Feeling</h2>
                    <p style="font-style: italic; font-size: 1.125rem;">
                        "${pathData.aiBlues}"
                    </p>
                </div>

                <h2>What's Actually Happening</h2>
                <ul>
                    ${pathData.whatsHappening.map(item => `<li>${item}</li>`).join('')}
                </ul>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
                    <div class="card">
                        <h3 style="color: #5c9c5c;">Your Advantages</h3>
                        <ul>
                            ${pathData.advantages.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="card">
                        <h3 style="color: #e07c4c;">Your Traps</h3>
                        <ul>
                            ${pathData.traps.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <h2>Before → After</h2>
                <div class="before-after">
                    <div class="before">
                        <h4>Before</h4>
                        <p>${pathData.before}</p>
                    </div>
                    <div class="after">
                        <h4>After</h4>
                        <p>${pathData.after}</p>
                    </div>
                </div>

                <h2 class="mt-lg">Your Path Forward</h2>
                <div class="monthly-plan">
                    ${pathData.monthlyPlan.map(block => `
                        <div class="month-block">
                            <div class="month-title">Months ${block.months}</div>
                            <ul>
                                ${block.actions.map(action => `<li>${action}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>

                <div class="card" style="background: #f0f8ff; border-color: var(--color-primary);">
                    <h3>Key Metric</h3>
                    <p style="font-size: 1.125rem; margin: 0;">
                        <strong>${pathData.keyMetric}</strong>
                    </p>
                </div>

                <div class="related-links mt-lg">
                    <h3>Next Steps</h3>
                    <ul>
                        <li><a href="#discover">How to Discover What's Needed</a> - Build capacity to see opportunities</li>
                        <li><a href="#signals">Building Signal Networks</a> - Navigate your path with others</li>
                        <li><a href="#diagnostic">Try Another Path</a> - See other profession perspectives</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    // Systems View - full content
    systems: () => `
        <div class="fade-in">
            <nav class="breadcrumb">
                <a href="#home">Home</a> / Systems View
            </nav>
            <div class="content">
                <h1>${SITE_DATA.systems.title}</h1>
                <p class="text-muted" style="font-size: 1.125rem;">${SITE_DATA.systems.subtitle}</p>

                <p style="margin: 2rem 0;">${SITE_DATA.systems.intro}</p>

                ${SITE_DATA.systems.systemsCollapsing.map(system => `
                    <div class="card">
                        <h2 style="margin-top: 0;">System ${system.number}: ${system.title}</h2>
                        <p><strong>What's happening:</strong> ${system.whatsHappening}</p>
                        ${system.pattern ? `<p><strong>The pattern:</strong> ${system.pattern}</p>` : ''}
                        ${system.problem ? `<p><strong>The problem:</strong> ${system.problem}</p>` : ''}
                        ${system.probably ? `<p><strong>Probably:</strong> ${system.probably}</p>` : ''}
                        ${system.shift ? `<p><strong>The shift:</strong> ${system.shift}</p>` : ''}
                        ${system.escape ? `<p><strong>The escape:</strong> ${system.escape}</p>` : ''}
                        ${system.response ? `<p><strong>The response:</strong> ${system.response}</p>` : ''}
                        ${system.walmartGreeterLacks ? `<p><strong>What walmart greeter lacks:</strong> ${system.walmartGreeterLacks}</p>` : ''}
                        ${system.interventionPoint ? `<p><strong>The intervention point:</strong> ${system.interventionPoint}</p>` : ''}
                    </div>
                `).join('')}

                <div class="card" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); color: white;">
                    <h2 style="color: white; margin-top: 0;">The Convergence</h2>
                    <p style="font-size: 1.125rem; margin: 0;">${SITE_DATA.systems.convergence}</p>
                </div>

                <div class="card mt-lg" style="background: #fffbf5; border: 2px solid var(--color-primary);">
                    <h2 style="margin-top: 0;">The Strategic Response</h2>
                    <p style="font-size: 1.125rem;"><strong>${SITE_DATA.systems.strategicResponse}</strong></p>
                </div>

                <div class="related-links mt-lg">
                    <h3>Apply This Understanding</h3>
                    <ul>
                        <li><a href="#discover">How to Discover What's Needed</a></li>
                        <li><a href="#diagnostic">Find Your Specific Path</a></li>
                        <li><a href="#signals">Build Signal Networks</a></li>
                        <li><a href="#amish">What the Amish Know</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    amish: () => `
        <div class="fade-in">
            <nav class="breadcrumb">
                <a href="#home">Home</a> / What the Amish Know
            </nav>
            <div class="content">
                <h1>${SITE_DATA.amish.title}</h1>
                <p class="text-muted" style="font-size: 1.125rem;">${SITE_DATA.amish.subtitle}</p>

                <p style="margin: 2rem 0; font-size: 1.125rem;"><strong>${SITE_DATA.amish.intro}</strong></p>

                <h2>Here's what they do that mainstream society doesn't:</h2>

                ${SITE_DATA.amish.principles.map(principle => `
                    <div class="card">
                        <div style="display: flex; gap: 1rem; align-items: start;">
                            <div class="exercise-number">${principle.number}</div>
                            <div style="flex: 1;">
                                <h3 style="margin: 0 0 0.5rem 0;">${principle.title}</h3>
                                <p>${principle.description}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}

                <div class="card mt-lg" style="background: linear-gradient(135deg, #f8f6f3, #fff); border: 2px solid var(--color-primary);">
                    <h2 style="margin-top: 0;">The Question They Ask</h2>
                    <p style="font-size: 1.5rem; text-align: center; margin: 1rem 0; color: var(--color-primary-dark);">
                        <strong>"${SITE_DATA.amish.coreQuestion}"</strong>
                    </p>
                    <p style="margin-top: 1.5rem;">${SITE_DATA.amish.coreQuestionExplanation}</p>
                </div>

                <div class="card" style="background: #fffbf5;">
                    <h3>The Principle</h3>
                    <p style="font-size: 1.125rem; font-style: italic;">${SITE_DATA.amish.principle}</p>
                </div>

                <h2 class="mt-lg">What You Can Do (Without Joining the Amish)</h2>
                <div class="card">
                    <ul>
                        ${SITE_DATA.amish.practicalSteps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>

                <div class="card mt-lg" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); color: white;">
                    <h3 style="color: white; margin-top: 0;">The Amish Proved</h3>
                    <p style="font-size: 1.125rem; margin: 0;">${SITE_DATA.amish.conclusion}</p>
                </div>

                <div class="related-links mt-lg">
                    <h3>Related Sections</h3>
                    <ul>
                        <li><a href="#systems">The Systems View</a> - Understand why this is happening</li>
                        <li><a href="#signals">Building Signal Networks</a> - Build collective infrastructure</li>
                        <li><a href="#discover">How to Discover What's Needed</a> - Find your path</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    signals: () => `
        <div class="fade-in">
            <nav class="breadcrumb">
                <a href="#home">Home</a> / Building Signal Networks
            </nav>
            <div class="content">
                <h1>${SITE_DATA.signals.title}</h1>
                <p class="text-muted" style="font-size: 1.125rem;">${SITE_DATA.signals.subtitle}</p>

                <p style="margin: 2rem 0;">${SITE_DATA.signals.intro}</p>

                <div class="card">
                    <h2 style="margin-top: 0;">${SITE_DATA.signals.whatAreSignals.title}</h2>
                    <p>${SITE_DATA.signals.whatAreSignals.description}</p>
                    <ul>
                        ${SITE_DATA.signals.whatAreSignals.examples.map(ex => `<li>${ex}</li>`).join('')}
                    </ul>
                </div>

                <div class="card">
                    <h2 style="margin-top: 0;">${SITE_DATA.signals.whereSignalsComeFrom.title}</h2>
                    <p>${SITE_DATA.signals.whereSignalsComeFrom.amishExample}</p>

                    <h3>Signal networks are:</h3>
                    <ul>
                        ${SITE_DATA.signals.whereSignalsComeFrom.signalNetworksAre.map(item => `<li>${item}</li>`).join('')}
                    </ul>

                    <h3>Signal networks are NOT:</h3>
                    <ul>
                        ${SITE_DATA.signals.whereSignalsComeFrom.signalNetworksAreNot.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <h2 class="mt-lg">How to Build Signal Networks (Practical Steps)</h2>

                ${SITE_DATA.signals.layers.map(layer => `
                    <div class="card">
                        <div style="display: flex; gap: 1rem; align-items: start;">
                            <div class="exercise-number">${layer.number}</div>
                            <div style="flex: 1;">
                                <h3 style="margin: 0 0 0.5rem 0;">${layer.title}</h3>
                                <p><em>${layer.timeline}</em></p>
                                <p>${layer.description}</p>

                                ${layer.howToIdentify ? `
                                    <p><strong>How to identify good signal networks:</strong></p>
                                    <ul>${layer.howToIdentify.map(item => `<li>${item}</li>`).join('')}</ul>
                                ` : ''}

                                ${layer.structure ? `
                                    <p><strong>Structure:</strong></p>
                                    <ul>${layer.structure.map(item => `<li>${item}</li>`).join('')}</ul>
                                ` : ''}

                                ${layer.whoToInvite ? `
                                    <p><strong>Who to invite:</strong></p>
                                    <ul>${layer.whoToInvite.map(item => `<li>${item}</li>`).join('')}</ul>
                                ` : ''}

                                ${layer.startSimple ? `
                                    <p><strong>Start simple:</strong></p>
                                    <ul>${layer.startSimple.map(item => `<li>${item}</li>`).join('')}</ul>
                                ` : ''}

                                ${layer.whatToShare ? `
                                    <p><strong>What to share:</strong></p>
                                    <ul>${layer.whatToShare.map(item => `<li>${item}</li>`).join('')}</ul>
                                ` : ''}

                                ${layer.whyMatters ? `<p><strong>Why this matters:</strong> ${layer.whyMatters}</p>` : ''}

                                ${layer.examples ? `
                                    <p><strong>Examples:</strong></p>
                                    <ul>${layer.examples.map(item => `<li>${item}</li>`).join('')}</ul>
                                ` : ''}

                                ${layer.whyLayer4 ? `<p><strong>Why this is layer 4:</strong> ${layer.whyLayer4}</p>` : ''}

                                <p style="margin-top: 1rem;"><strong>Time investment:</strong> ${layer.timeInvestment}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}

                <div class="card mt-lg" style="background: linear-gradient(135deg, #f8f6f3, #fff); border: 2px solid var(--color-primary);">
                    <h2 style="margin-top: 0;">${SITE_DATA.signals.metaPattern.title}</h2>
                    <p>${SITE_DATA.signals.metaPattern.description}</p>
                    <ul>
                        ${SITE_DATA.signals.metaPattern.characteristics.map(char => `<li><strong>${char}</strong></li>`).join('')}
                    </ul>
                </div>

                <div class="card" style="background: #fffbf5;">
                    <h2 style="margin-top: 0;">${SITE_DATA.signals.whySignalsMatterMore.title}</h2>
                    <p><strong>Credentials:</strong> ${SITE_DATA.signals.whySignalsMatterMore.credentials}</p>
                    <p><strong>Signal networks:</strong> ${SITE_DATA.signals.whySignalsMatterMore.signalNetworks}</p>
                    <p style="margin-top: 1rem;"><em>${SITE_DATA.signals.whySignalsMatterMore.fork}</em></p>
                </div>

                <div class="card mt-lg" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); color: white;">
                    <h2 style="color: white; margin-top: 0;">${SITE_DATA.signals.coreAnswer.title}</h2>
                    <p style="font-style: italic; margin-bottom: 1rem;">"${SITE_DATA.signals.coreAnswer.question}"</p>
                    <p style="font-size: 1.25rem; margin: 1rem 0;"><strong>${SITE_DATA.signals.coreAnswer.answer}</strong></p>
                    <p><strong>You:</strong></p>
                    <ol style="margin-left: 1.5rem;">
                        ${SITE_DATA.signals.coreAnswer.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                    <p style="margin-top: 1rem;">${SITE_DATA.signals.coreAnswer.compounding}</p>
                    <p><strong>${SITE_DATA.signals.coreAnswer.howToAvoid}</strong></p>
                </div>

                <div class="card mt-lg">
                    <h3>Start Today:</h3>
                    <ul>
                        ${SITE_DATA.signals.coreAnswer.startToday.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <p style="font-style: italic; margin-top: 1.5rem;">${SITE_DATA.signals.coreAnswer.conclusion}</p>
                </div>

                <div class="card" style="background: #fffbf5;">
                    <h3>Remember</h3>
                    <p>Signal networks help you NAVIGATE once you've found the path.</p>
                    <p><strong>But DISCOVERY requires:</strong> embedding in communities, having space to notice, following your own pain, cheap experimentation, real conversations.</p>
                    <p><a href="#discover">Learn how to discover needs first →</a></p>
                </div>

                <div class="related-links mt-lg">
                    <h3>Related Sections</h3>
                    <ul>
                        <li><a href="#discover">How to Discover What's Needed</a> - Find opportunities before building networks</li>
                        <li><a href="#amish">What the Amish Know</a> - Collective infrastructure that works</li>
                        <li><a href="#diagnostic">Find Your Path</a> - Get profession-specific guidance</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    // 404 / Not found
    notFound: () => `
        <div class="fade-in">
            <div class="content text-center">
                <h1>Path Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a href="#home" class="btn btn-large">Go Home</a>
            </div>
        </div>
    `
};

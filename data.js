// All site content organized as structured data
const SITE_DATA = {
    
    conversation: {
        lines: [
            { speaker: "Person A", text: "I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a magnitude 9 earthquake rocking the profession." },
            { speaker: "Person B", text: "What products will be needed in the presence of general purpose intelligence and adjacent moats? Hope the answer is not nothing 😐" },
            { speaker: "Person C", text: "No one has a good answer... but maybe that's okay" },
            { speaker: "Person C", text: "There's the guy who becomes the walmart greeter and the guy who does youtube videos for kids teaching them things a dad would. The world of difference between them is our challenge right now." },
            { speaker: "Person C", text: "I don't want to say it's lack of imagination. But maybe it's lack of access to the right signals to chart a coherent path" }
        ]
    },

    diagnostic: {
        questions: [
            {
                id: 'feeling',
                question: 'What best describes how you feel right now?',
                options: [
                    { value: 'behind', label: 'I feel constantly behind and can\'t catch up', route: 'falling-behind' },
                    { value: 'commoditized', label: 'My skills are being devalued/automated', route: 'commoditization' },
                    { value: 'powerless', label: 'I see the system failing but feel powerless', route: 'system-collapse' },
                    { value: 'inheritance', label: 'I don\'t know what to teach my kids', route: 'inheritance' },
                    { value: 'fork', label: 'I\'m terrified of becoming the walmart greeter', route: 'fork' }
                ]
            },
            {
                id: 'profession',
                question: 'Which best describes your work situation?',
                options: [
                    { value: 'tech', label: 'Tech worker / Programmer', route: 'tech-worker' },
                    { value: 'business', label: 'Business owner / Entrepreneur', route: 'business-owner' },
                    { value: 'manager', label: 'Middle manager / Career professional', route: 'middle-manager' },
                    { value: 'parent', label: 'Parent / Primary caregiver', route: 'parent-caregiver' },
                    { value: 'young', label: 'Young person / Early career', route: 'young-person' },
                    { value: 'late', label: 'Late career / Pre-retirement', route: 'late-career' },
                    { value: 'trades', label: 'Skilled trades / Physical work', route: 'skilled-trades' }
                ]
            }
        ]
    },

    discovery: {
        title: "How to Stumble Onto What's Needed",
        subtitle: "The youtube dad didn't plan it. Here's what he probably did.",
        
        realStory: {
            title: "The actual process of discovery",
            steps: [
                {
                    number: "1",
                    title: "He was IN the space where the need existed",
                    description: "Scrolling YouTube/Reddit/Twitter, saw comments: 'I wish my dad taught me this.' Pattern recognition: this keeps appearing.",
                    insight: "You can't see needs from outside - you have to be IN spaces"
                },
                {
                    number: "2",
                    title: "He had his own version of the problem",
                    description: "Probably had father wounds himself, or struggled as a new dad.",
                    insight: "You see needs you've experienced or adjacent to"
                },
                {
                    number: "3",
                    title: "He experimented cheaply",
                    description: "Made one video, saw response, made another.",
                    insight: "Low-cost validation before commitment"
                },
                {
                    number: "4",
                    title: "He had time/resources to notice",
                    description: "Not working 80 hours/week, mental space to pay attention.",
                    insight: "You can't see patterns while drowning"
                }
            ]
        },

        exercises: [
            {
                number: "1",
                title: "Embed Yourself",
                duration: "1 month",
                description: "Pick a space/community, participate daily, just observe.",
                actions: [
                    "What do people complain about?",
                    "What questions keep appearing?",
                    "What do they wish existed?",
                    "Document patterns weekly"
                ]
            },
            {
                number: "2",
                title: "Follow Your Own Pain",
                duration: "Ongoing",
                description: "Your unsolved problems = potential paths.",
                actions: [
                    "What do YOU struggle with?",
                    "Who else struggles with this?",
                    "What would have helped you 6 months ago?",
                    "Is this pain shared or unique?"
                ]
            },
            {
                number: "3",
                title: "Cheap Experiments",
                duration: "3 months",
                description: "When you notice a pattern, test if it's real.",
                actions: [
                    "Write one blog post addressing it",
                    "Make one video",
                    "Have 5 conversations",
                    "Does it resonate? Does anyone care?"
                ]
            },
            {
                number: "4",
                title: "Create Space to Notice",
                duration: "Ongoing",
                description: "You can't see opportunities while optimizing survival.",
                actions: [
                    "Reduce work hours if possible",
                    "Take walks without podcasts",
                    "Have unstructured time",
                    "Be bored - boredom = space for pattern recognition"
                ]
            },
            {
                number: "5",
                title: "Have Real Conversations",
                duration: "Weekly",
                description: "Not networking - actual conversations about struggles.",
                actions: [
                    "What's hard for you right now?",
                    "What do you wish existed?",
                    "What would make your life better?",
                    "Needs emerge in conversation"
                ]
            }
        ],

        metaPattern: {
            title: "The Discovery Pattern",
            steps: [
                "EMBED in spaces",
                "NOTICE patterns (this keeps appearing)",
                "TEST cheaply (does anyone care?)",
                "ITERATE (what actually helps?)",
                "BUILD infrastructure (make it accessible to others)"
            ]
        },

        whyThisWorks: "YouTube dad path wasn't FOUND in a signal network. It was DISCOVERED by being in YouTube comment sections, noticing patterns (fatherless kids asking questions), having experienced version of problem himself, testing with first video, and iterating based on response.",

        signaLNetworksComeAfter: "Signal networks help you NAVIGATE once you've found the path. But DISCOVERY requires: embedding in communities, having space to notice, following your own pain, cheap experimentation, and real conversations."
    },

    amish: {
        title: "What the Amish Know",
        subtitle: "The 200-year perspective on technology disruption",
        intro: "The Amish aren't technophobes. They're the most sophisticated technology adopters in America.",

        principles: [
            {
                number: "1",
                title: "They evaluate technology collectively before adopting",
                description: "When a new technology appears, they don't ask 'is this good or bad?' They ask: 'what does this do to our relationships? To our community? To how we raise our children?' Then the bishop brings it to a congregational vote. The whole community decides together."
            },
            {
                number: "2",
                title: "They use mainstream society as beta testers",
                description: "They literally watch what happens when we adopt new technology, observe the consequences over decades, then decide whether to adopt themselves. One Amish researcher said: 'The Amish use us as an experiment. They watch what happens when we adopt new technology, and then they decide whether that's something they want to adopt themselves.'"
            },
            {
                number: "3",
                title: "They modify technology to fit their values",
                description: "They don't just accept or reject - they 'hack' technology to work within their moral order. Example: They allow pneumatic tools (compressed air) but not electric tools. Same function, different infrastructure. They use phones, but in shanties 300 meters from the house (for business, not to interrupt family dinner). They use computers, but stripped-down versions with no internet."
            },
            {
                number: "4",
                title: "They're willing to be 'behind' - it's strategic",
                description: "They operate on 50-year test cycles. By the time they adopt something, they know what it actually does to communities. They're 'slow geeks' by design."
            },
            {
                number: "5",
                title: "They understand: 'you can't do it alone'",
                description: "Individual optimization fails. Collective infrastructure survives. Their model: Decisions made collectively, early adopters test while community evaluates, infrastructure built together (barn raisings not individual accumulation), mutual aid as default not backup plan."
            }
        ],

        coreQuestion: "What does this do to how we relate?",
        coreQuestionExplanation: "Not: 'what does this let me do?' Not: 'will this make me more productive?' Not: 'am I falling behind if I don't adopt this?' But: 'does this strengthen or weaken the relationships that make life worth living?'",

        principle: "Technology changes relationships first, productivity second. Answer the relationship question first, or you'll wake up one day and discover you've become a product.",

        practicalSteps: [
            "Form a tech evaluation circle - 5-10 people who discuss major tech adoption together before deciding",
            "Create household/team tech policy - collectively decide what you use/don't use",
            "Practice saying no - pick one technology everyone uses that violates your values, don't use it",
            "Build alternative infrastructure - start tiny (shared tools, food, childcare, skills)",
            "Slow down adoption - give yourself permission to wait, observe, decide collectively"
        ],

        conclusion: "The amish proved: You can thrive economically while maintaining human dignity and community coherence. You just have to build different infrastructure."
    },

    systems: {
        title: "The Systems View",
        subtitle: "Why This Is Happening (And What It Means)",
        intro: "Multiple systems are collapsing simultaneously. Understanding why helps you navigate.",

        systemsCollapsing: [
            {
                number: "1",
                title: "Abstraction Layer Collapse",
                whatsHappening: "Hardware → commoditized by software. Software → commoditized by SaaS. SaaS → commoditized by agents. Agents → commoditized by... what?",
                pattern: "Each layer commoditizes the one below. Value keeps moving up the stack.",
                problem: "There might not be a layer above 'general intelligence.' The pattern breaks. Value must come from somewhere OTHER than position in stack.",
                probably: "Value comes from what can't be stacked - relationships, embodiment, place."
            },
            {
                number: "2",
                title: "Career Ladder Dissolution",
                whatsHappening: "Entry-level positions eliminated (AI does that work). Senior positions commodified (AI does that thinking). Middle management automated (AI coordinates). Ladders assume vertical progression in stable organizations. Organizations are neither vertical nor stable anymore.",
                shift: "From hierarchical progression to network navigation. Value comes from who you know, what you can navigate, how you help others - not your rung."
            },
            {
                number: "3",
                title: "The Commoditization Paradox",
                whatsHappening: "More knowledge work gets automated → more relational/physical/ethical work becomes valuable. But economic system designed to extract and automate exactly those things too. Individual skills commodify faster than you can reskill. Ownership of tools/infrastructure commodifies next.",
                escape: "Build value through relationships that can't exist without the relationship. Cooperative ownership. Mutual aid. Value that requires participation."
            },
            {
                number: "4",
                title: "Feedback Loop Acceleration",
                whatsHappening: "Tools changing cognition changing tools (recursive loop). Feedback loops accelerating past human adaptation speed. Trying to keep up IS the trap. You're optimizing for a game rewriting rules faster than you can learn them.",
                response: "Stop trying to keep up. Build capacity for navigation, not mastery. Let others beta test. Make decisions on longer time horizons."
            },
            {
                number: "5",
                title: "The Fork That Determines Everything",
                whatsHappening: "Two paths emerging: walmart greeter vs youtube dad. Difference isn't capability, imagination, or work ethic. Difference is access to signals to chart coherent path. Most people don't have access to those signals.",
                walmartGreeterLacks: "Networks that showed the path. Resources to experiment. Time to figure it out. Knowledge it was possible. Confidence to try.",
                interventionPoint: "Democratize access to signals. Build infrastructure that makes youtube dad path accessible to 70% not 7%."
            },
            {
                number: "6",
                title: "Temporal Horizon Visibility",
                whatsHappening: "The system won't work for next generation. Gen Z is 30 with no prospects. Millennials will be 'gone completely' by 50. Social contract broken: education → job → career → stability. Inheritance crisis: can't leave kids economic stability.",
                response: "Leave them capacity to create value through relationship when systems fail. Relational networks, hybrid skills, mutual aid infrastructure, practice communities."
            }
        ],

        convergence: "When abstraction layers collapse + career ladders dissolve + skills commodify + feedback loops accelerate + access to signals is unequal + temporal horizon becomes visible = phase transition between economic regimes",

        strategicResponse: "Don't optimize for current regime OR next regime. Build infrastructure that works across regimes. That's what the Amish did. That's what works."
    },

    signals: {
        title: "Building Signal Networks",
        subtitle: "The Core Question: How do I build the signal network that lets me see what the YouTube dad saw, before I'm the Walmart greeter?",
        intro: "This is it. This is the question underneath all the AI blues. Person C in the conversation identified it: 'The world of difference between [walmart greeter and youtube dad] is our challenge right now. I don't want to say it's lack of imagination. But maybe it's lack of access to the right signals to chart a coherent path.'",

        whatAreSignals: {
            title: "What Are Signals?",
            description: "Signals aren't advice. They're accumulated knowledge from people who've navigated the path you're trying to navigate.",
            examples: [
                "Knowledge that a path exists ('youtube dad is possible')",
                "How to get started ('here's step 1')",
                "Who to learn from ('talk to these 3 people')",
                "How to navigate failure ('when X happens, do Y')",
                "When to make the jump ('keep day job until Z')",
                "Which platforms/tools/approaches work ('try A, avoid B')",
                "What the actual economics look like ('expect to earn $X in year 1')",
                "Pattern recognition ('this worked for similar people in similar situations')"
            ]
        },

        whereSignalsComeFrom: {
            title: "Where Do Signals Come From?",
            amishExample: "The Amish have 200 years of accumulated signals. You inherit them by being born into the community. The rest of us? We have to build signal networks intentionally.",
            signalNetworksAre: [
                "Communities of practice where people share what they're learning",
                "Peer learning groups where everyone's navigating similar transitions",
                "Mentorship relationships (not advice - actual knowledge transfer)",
                "Documentation of what works/doesn't work",
                "Case studies and pattern recognition",
                "Mutual aid networks where information flows freely"
            ],
            signalNetworksAreNot: [
                "Social media followers",
                "Professional networking (transactional)",
                "Conferences and events (one-way information)",
                "Credentials or certifications",
                "Individual research and optimization"
            ]
        },

        layers: [
            {
                number: "1",
                title: "Join Existing Signal Networks",
                timeline: "0-3 months",
                description: "Find 1-2 communities where people share what they're learning: Industry-specific slack/discord communities (where people help each other, not just promote), local meetups focused on practice not pitching, online cohorts/groups around specific transitions, mutual aid networks in your area.",
                howToIdentify: [
                    "People share failures not just successes",
                    "Information flows freely (not gatekept)",
                    "Mix of experience levels (not just beginners OR experts)",
                    "Focus on practice/doing not theory",
                    "Actual helping happens (not just talking about helping)"
                ],
                timeInvestment: "3-5 hours/month participating"
            },
            {
                number: "2",
                title: "Create Your Own Signal Pod",
                timeline: "3-6 months",
                description: "Form a small group (5-10 people) explicitly for signal sharing.",
                structure: [
                    "Meet monthly (in person or zoom)",
                    "Each person shares: (1) what they're navigating, (2) what they're learning, (3) what they need help with",
                    "Group helps: (1) share relevant signals, (2) make connections, (3) troubleshoot together",
                    "Document: what signals mattered? what worked? what didn't?"
                ],
                whoToInvite: [
                    "People navigating similar transitions (not identical, but overlapping)",
                    "Mix of slightly ahead and slightly behind (nobody benefits if everyone's at same point)",
                    "Trusted enough to share real struggles (not just highlight reel)",
                    "Willing to help not just get help"
                ],
                timeInvestment: "3-4 hours/month (2-hour meeting + prep/follow-up)"
            },
            {
                number: "3",
                title: "Document and Share Signals",
                timeline: "6-12 months",
                description: "As you learn, make it accessible to others.",
                startSimple: [
                    "Blog/newsletter sharing what you're learning",
                    "Twitter/social threads documenting experiments",
                    "Local meetups teaching what you know",
                    "Office hours where you help others"
                ],
                whatToShare: [
                    "Actual failures and how you navigated them",
                    "Specific resources that helped ('these 3 people/articles/tools changed my thinking')",
                    "Economics/numbers (what actually costs, what actually earns)",
                    "Decision points (when you knew to jump/pivot/quit)"
                ],
                whyMatters: "Teaching forces you to clarify your own thinking. Sharing signals creates reciprocity. People who benefit from your signals will share theirs.",
                timeInvestment: "2-3 hours/week creating + sharing"
            },
            {
                number: "4",
                title: "Build Infrastructure for Others",
                timeline: "12-24 months",
                description: "Create pathways that didn't exist.",
                examples: [
                    "Cohort-based courses teaching what you learned",
                    "Mentorship programs matching people navigating similar transitions",
                    "Cooperative/mutual aid infrastructure that pools signals",
                    "Field guides documenting paths others can follow"
                ],
                whyLayer4: "You can't build infrastructure for others until you've navigated the path yourself and know what signals actually matter.",
                timeInvestment: "5-10 hours/week building + maintaining"
            }
        ],

        metaPattern: {
            title: "The Meta-Pattern",
            description: "All signal networks share these characteristics:",
            characteristics: [
                "Reciprocal - everyone gives and receives",
                "Practice-focused - about doing not just talking",
                "Failure-friendly - safe to share what didn't work",
                "Documented - accumulated knowledge accessible to newcomers",
                "Relational - built on trust not transactions"
            ]
        },

        whySignalsMatterMore: {
            title: "Why Signal Networks Matter More Than Credentials",
            credentials: "Credentials tell you what someone learned 5 years ago.",
            signalNetworks: "Signal networks tell you what's working NOW, for people navigating what you're navigating, in real time.",
            fork: "The walmart greeter → youtube dad fork isn't determined by degrees or intelligence. It's determined by access to real-time signals from people on the path."
        },

        coreAnswer: {
            title: "The Answer to the Core Question",
            question: "How do I build the signal network that lets me see what the YouTube dad saw, before I'm the Walmart greeter?",
            answer: "You don't build it alone. That's the whole point.",
            steps: [
                "Join existing networks (3 months)",
                "Form signal pod with peers (6 months)",
                "Document and share your learning (12 months)",
                "Build infrastructure for others (24 months)"
            ],
            compounding: "Each layer compounds. By month 24, you're embedded in multiple signal networks, creating signals others need, and building infrastructure that makes paths visible.",
            howToAvoid: "That's how you avoid the walmart greeter path. Not by individual optimization. By building collective infrastructure that democratizes access to signals.",
            startToday: [
                "Pick ONE existing community to join",
                "Reach out to 2-3 people to form a signal pod",
                "Start documenting what you're learning (even just for yourself)"
            ],
            conclusion: "The amish have 200 years of signals. You can build yours in 2."
        }
    },

    paths: {
        'tech-worker': {
            title: "Tech Worker Path",
            profile: "Senior programmer, software engineer, technical professional",
            aiBlues: "I've never felt this much behind. The profession is being refactored. There's a magnitude 9 earthquake and I can't build mental models fast enough.",
            
            whatsHappening: [
                "Abstraction layer collapse (deterministic → stochastic)",
                "Tool mastery cycles shorter than human learning cycles",
                "Professional identity dissolving",
                "'Staying current' = permanent treadmill"
            ],
            
            advantages: [
                "You have the best tools to adapt",
                "You understand systems thinking",
                "You can teach/document/create",
                "Your network is valuable"
            ],
            
            traps: [
                "Trying to master every new tool",
                "Competing on technical skills that commodify",
                "Individual optimization in a phase transition"
            ],
            
            before: "Try to master every new AI tool, feel anxious about being behind, compete on technical mastery",
            after: "Pick 2-3 tools, go deep on orchestration patterns not features, focus on teaching/connecting, build 'learning to learn' capacity",
            
            monthlyPlan: [
                {
                    months: "1-6",
                    actions: [
                        "Pick 2 tools, go deep on orchestration patterns (not features)",
                        "Start teaching publicly (blog, youtube, newsletter)",
                        "Build portfolio of 'problems solved' not 'tools mastered'",
                        "Join/create peer learning group (3-5 people, monthly)"
                    ]
                },
                {
                    months: "7-12",
                    actions: [
                        "Transition from 'mastering tools' to 'teaching navigation'",
                        "Develop consulting/teaching practice",
                        "Allocate 20% time to domains AI can't touch",
                        "Document your learning process"
                    ]
                },
                {
                    months: "13-18",
                    actions: [
                        "Assess: is network/teaching more valuable than tool mastery?",
                        "If yes: lean into community building, education, consulting",
                        "If no: refine and iterate"
                    ]
                },
                {
                    months: "19-24",
                    actions: [
                        "Build sustainable practice around meta-skills",
                        "Create peer support infrastructure",
                        "Position as orchestrator/teacher not technician"
                    ]
                }
            ],
            
            keyMetric: "Value from network/teaching vs value from technical mastery"
        },

        'business-owner': {
            title: "Business Owner Path",
            profile: "Entrepreneur, consultant, business owner wondering what products survive",
            aiBlues: "What products will be needed in the presence of general purpose intelligence? Hope the answer is not nothing 😐",
            
            whatsHappening: [
                "Skills commodifying rapidly",
                "Knowledge work being automated",
                "Value shifting from labor to capital",
                "But: what if AI commodifies infrastructure too?"
            ],
            
            advantages: [
                "You already think structurally (about systems, not jobs)",
                "You understand business models",
                "You have networks and resources",
                "You can experiment"
            ],
            
            traps: [
                "Trying to predict which products survive",
                "Individual ownership in extractive models",
                "Competing on what AI will commodify anyway"
            ],
            
            before: "Search for the perfect AI-proof business idea, try to predict which products survive, individual ownership",
            after: "Build value through relationships that can't exist without the relationship, cooperative ownership, mutual aid infrastructure",
            
            monthlyPlan: [
                {
                    months: "1-6",
                    actions: [
                        "Map existing networks (who do you trust? what could you build together?)",
                        "Join 1-2 cooperatives or mutual aid networks",
                        "Experiment with gift economy (offer skills freely to 3-5 people, track what flows back)",
                        "Document patterns: which collaborations create value? Which feel extractive?"
                    ]
                },
                {
                    months: "7-12",
                    actions: [
                        "Start worker cooperative with 2-4 people around shared skill",
                        "Practice collective ownership (no one owns it, everyone participates)",
                        "Invest in physical assets that produce (land, tools, equipment others can use)"
                    ]
                },
                {
                    months: "13-18",
                    actions: [
                        "Track: does shared ownership change how you work?",
                        "Does removing profit motive reveal different value?",
                        "Build toward cooperative ecosystem"
                    ]
                }
            ],
            
            keyMetric: "Resilience from shared ownership vs individual ownership"
        },

        'parent-caregiver': {
            title: "Parent / Caregiver Path",
            profile: "Primary caregiver, stay-at-home parent, person doing invisible labor",
            aiBlues: "I do the actual work of raising humans and maintaining households. It's not valued economically but it's essential. And now I'm supposed to 'upskill' in my nonexistent free time?",
            
            whatsHappening: [
                "Care work is foundation of all other work (someone has to raise the workers)",
                "But it's economically invisible/devalued",
                "AI can't do it (requires embodiment, attachment, love)",
                "That doesn't translate to economic security"
            ],
            
            advantages: [
                "You're doing the most AI-resistant work that exists",
                "You have relationships with other parents/caregivers",
                "You understand cooperation out of necessity",
                "You know how to create value outside market economy"
            ],
            
            traps: [
                "Trying to 'have it all'",
                "Individual optimization",
                "Comparing to people without care responsibilities",
                "Feeling invisible"
            ],
            
            before: "Cobble together part-time work, side gigs, burn out trying to do everything, feel invisible",
            after: "Build cooperative care infrastructure that shares work AND economic value, childcare co-ops, meal swaps, pod learning",
            
            monthlyPlan: [
                {
                    months: "1-3",
                    actions: [
                        "Form childcare co-op with 3-5 other families (rotate care, share costs)",
                        "OR create meal swap network (cook 2x once/week, share with others)",
                        "Start ONE cooperative care project"
                    ]
                },
                {
                    months: "4-6",
                    actions: [
                        "Add second cooperative project",
                        "Document: time saved, economic value, relationship quality",
                        "Organize pod learning (2-3 families share educational activities)"
                    ]
                },
                {
                    months: "7-9",
                    actions: [
                        "Assess: does cooperative care create different economic security?",
                        "Does sharing reduce workload?",
                        "Does it change how you think about value/work?",
                        "Expand or refine"
                    ]
                }
            ],
            
            keyMetric: "Hours saved + economic value + relationship quality"
        },

        'middle-manager': {
            title: "Middle Manager Path",
            profile: "Middle management, career professional, ladder climber",
            aiBlues: "My entire career was climbing a ladder that's disappearing. Junior positions eliminated, senior positions automated. I'm stuck in the shrinking middle.",

            whatsHappening: [
                "Career ladders breaking",
                "Entry-level jobs eliminated (AI does that)",
                "Senior strategy commodified (AI does that)",
                "Middle management being squeezed out"
            ],

            advantages: [
                "15-20 years of organizational navigation expertise",
                "Know how to read politics, translate between departments, see patterns",
                "Built trust and relationships",
                "Understand judgment calls"
            ],

            traps: [
                "Trying to climb a ladder that's dissolving",
                "Optimizing for promotion",
                "Managing through control",
                "Proving indispensability"
            ],

            before: "Climb corporate ladder, optimize for promotion, manage through control, compete for shrinking positions",
            after: "Become organizational navigator/connector, build consulting practice, create value through relationships and judgment",

            monthlyPlan: [
                {
                    months: "1-3",
                    actions: [
                        "Map your actual value: what do you do that requires relationships/trust/judgment?",
                        "Document organizational knowledge",
                        "Identify what requires you vs what could be automated"
                    ]
                },
                {
                    months: "4-6",
                    actions: [
                        "Offer free 'organizational navigation' consulting to 5 people outside your company",
                        "Use your middle management skills (reading politics, translating, seeing patterns) to help them",
                        "Track: is this skill valuable outside your specific org?"
                    ]
                },
                {
                    months: "7-9",
                    actions: [
                        "Build peer learning group with other middle managers",
                        "Experiment with horizontal value creation",
                        "Become explicitly valuable to your network (not just your org)"
                    ]
                },
                {
                    months: "10-12",
                    actions: [
                        "Assess: can organizational navigation skills translate to practice outside corporate context?",
                        "If yes: build consulting/teaching practice",
                        "If no: refine and iterate"
                    ]
                }
            ],

            keyMetric: "Value of navigation skills outside your specific organization"
        },

        'young-person': {
            title: "Young Person / Early Career Path",
            profile: "Gen Z, early career, 22-35, entry-level to mid-level",
            aiBlues: "I did everything right - degree, internships, hustle - and there's no job. Entry level wants 3 years experience. Senior positions being automated. What's the point?",

            whatsHappening: [
                "Social contract is broken",
                "Education doesn't guarantee employment",
                "Hard work doesn't guarantee stability",
                "Entry-level eliminated, career paths unclear",
                "Student debt enormous, wages stagnant"
            ],

            advantages: [
                "Less invested in the broken system",
                "More time to experiment",
                "Native digital literacy",
                "Less to lose",
                "Can build WITH peers instead of competing"
            ],

            traps: [
                "Individual optimization (side hustle harder)",
                "Competing for scraps of old economy",
                "Credential collecting",
                "Comparison to boomers"
            ],

            before: "Hustle harder, compete for entry-level jobs, collect credentials, individual side gigs, feel hopeless",
            after: "Build cooperative infrastructure with peers, share resources and risks, create value outside wage system",

            monthlyPlan: [
                {
                    months: "1-6",
                    actions: [
                        "Find 3-5 people with complementary skills",
                        "Form a collective/cooperative",
                        "Pool resources (housing, food, equipment, skills)"
                    ]
                },
                {
                    months: "7-12",
                    actions: [
                        "Experiment with cooperative housing OR collective business",
                        "Share costs, share work, share risks",
                        "Each person brings different skills",
                        "Build together instead of competing"
                    ]
                },
                {
                    months: "13-18",
                    actions: [
                        "Assess: does cooperation create more stability than individual hustle?",
                        "Does shared infrastructure reduce anxiety?",
                        "Iterate and refine"
                    ]
                }
            ],

            keyMetric: "Economic security + creative output + mental health vs individual grinding"
        },

        'late-career': {
            title: "Late Career / Pre-Retirement Path",
            profile: "50-65, pre-retirement, experienced professional facing obsolescence",
            aiBlues: "I've got 10-15 years left before retirement. My skills are outdated. I can't compete with AI or younger workers. But I can't afford to retire yet.",

            whatsHappening: [
                "Caught between obsolescence and necessity",
                "Skills developed over decades becoming irrelevant",
                "Can't out-compete AI or younger workers on new tools",
                "Must keep working financially",
                "Age discrimination real"
            ],

            advantages: [
                "Decades of organizational memory",
                "Pattern recognition across multiple cycles",
                "Mentorship capacity",
                "Potentially more economic stability to experiment",
                "Possibly paid-off mortgage, assets, networks"
            ],

            traps: [
                "Trying to compete on technical skills",
                "Individual optimization",
                "Feeling obsolete",
                "Panic about retirement"
            ],

            before: "Try to keep up with young workers, compete on technical skills, fear obsolescence, panic about retirement",
            after: "Become mentor/teacher, leverage experience and networks, design transition to different work not no work",

            monthlyPlan: [
                {
                    months: "1-4",
                    actions: [
                        "Document your expertise publicly (blog, video, course)",
                        "Start mentoring 3-5 younger people (trade your knowledge for their energy/help)",
                        "Convert network into value (make introductions, broker deals, connect people)"
                    ]
                },
                {
                    months: "5-8",
                    actions: [
                        "Join/start cooperative project that needs organizational experience",
                        "Offer experience, benefit from collective support",
                        "Design your 'retirement' as transition to different work, not no work"
                    ]
                },
                {
                    months: "9-12",
                    actions: [
                        "Assess: does teaching + cooperative involvement create sustainable path?",
                        "Track: income + satisfaction + relationships vs traditional employment",
                        "Refine your 'elder' role"
                    ]
                }
            ],

            keyMetric: "Income + satisfaction + relationships vs traditional employment"
        },

        'skilled-trades': {
            title: "Skilled Trades Path",
            profile: "Electrician, plumber, carpenter, HVAC, mechanic - hands-on physical work",
            aiBlues: "I work with my hands in unpredictable environments. AI can't do what I do. But my industry is consolidating and margins are shrinking.",

            whatsHappening: [
                "Physical/embodied work highly resistant to automation (94-97% AI-resistant)",
                "But economic pressure from other directions",
                "Consolidation, platform capitalism, race to bottom on pricing",
                "Big companies and platforms extracting value"
            ],

            advantages: [
                "Most defensible skills in the economy",
                "Have infrastructure already (tools, trucks, client relationships)",
                "Understand physical problem-solving",
                "Can teach embodied knowledge"
            ],

            traps: [
                "Competing on price",
                "Working alone",
                "Treating each job as transaction",
                "Physical toll of the work"
            ],

            before: "Race to bottom on pricing, work alone, compete with big companies, physical burnout",
            after: "Form tool co-ops, build apprentice pipeline, embed in community infrastructure, cooperative trades model",

            monthlyPlan: [
                {
                    months: "1-4",
                    actions: [
                        "Form tool co-op with 3-5 other trades workers (share expensive equipment)",
                        "Start apprentice pipeline (teach 1-2 people, even informally)",
                        "Document your knowledge (youtube, blog)"
                    ]
                },
                {
                    months: "5-8",
                    actions: [
                        "Connect with community land project, food co-op, or housing cooperative",
                        "Offer trades work in exchange for involvement in the project",
                        "Create service agreements with intentional communities"
                    ]
                },
                {
                    months: "9-12",
                    actions: [
                        "Assess: does embedding in community infrastructure create different security?",
                        "Does it change your economic position?",
                        "Build toward cooperative trades model"
                    ]
                }
            ],

            keyMetric: "Resilience from community embeddedness vs traditional client work"
        }
    }
};

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
        }
        
        // Additional paths would go here (middle-manager, young-person, etc.)
        // Keeping the data file manageable for now
    }
};

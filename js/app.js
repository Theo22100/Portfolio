Vue.component("carousel", {
    template: "#v-carousel",
    data() {
        return {
            currentOffset: 0,
            windowSize: window.innerWidth >= 900 ? 3 : 1,
            paginationFactor: 220,
            items: [
                {
                    name: 'CosmicLink',
                    image: 'https://images.unsplash.com/photo-1516797045820-6edca89b2830?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8c3Rhcnx8fHx8fDE2OTYzNzQwMjI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
                    tag: ["PHP", "JS", "Html", "CSS"],
                    link: 'https://github.com/Theo22100/CosmicLink'
                },
                {
                    name: 'BreizhCoin',
                    image: 'https://images.unsplash.com/photo-1629656620986-396143dbfa8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJldGFnbmV8fHx8fHwxNjk2Mzc0ODY5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
                    tag: ["PHP", "JS"],
                    link: 'https://github.com/Theo22100/BreizhCoin'
                },
                {
                    name: 'PortFolio',
                    image: 'https://images.unsplash.com/photo-1568161300532-8d90fa3e56f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Zmxvd2VyfHx8fHx8MTY5NjM3NDc2Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
                    tag: ["VueJS", "Html", "CSS"],
                    link: 'https://github.com/Theo22100/PortFolio'
                },
                {
                    name: 'Début VueJS',
                    image: 'https://images.unsplash.com/photo-1687603863378-0761c86232bc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8dnVlanN8fHx8fHwxNjk2Mzc0MTgy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
                    tag: ["VueJS"],
                    link: 'https://github.com/Theo22100/VueJS'
                },
                {
                    name: 'Service Admin',
                    image: 'https://images.unsplash.com/photo-1632406897767-2319bcedac9c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8YWRtaW58fHx8fHwxNjk2Mzc0MzA0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
                    tag: ["Tailwind", "Symfony"],
                    link: 'https://github.com/imPayne/service_administratif'
                }
            ]
        }
    },
    computed: {
        atEndOfList() {
            return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
        },
        atHeadOfList() {
            return this.currentOffset === 0;
        },
    },
    methods: {
        moveCarousel(direction) {
            if (direction === 1 && !this.atEndOfList) {
                this.currentOffset -= this.paginationFactor;
            } else if (direction === -1 && !this.atHeadOfList) {
                this.currentOffset += this.paginationFactor;
            }
        },
        openCodeLink(link) {
            window.open(link, '_blank');
        },
    }
});
//Instance pour Carrousel
var vm1 = new Vue({
    el: "#app_carousel",
});

//Instance Vue pour Presentation
var vm2 = new Vue({
    el: "#HOME",
    data() {
        return {
            message_presentation: "Je m’appelle Théo Guérin,\nje suis un Développeur FullStack en apprentissage, en combinant mes cours ainsi que mes recherches personnelles.",
        }
    }
});

//Instance Vue pour Presentation
var vm3 = new Vue({
    el: "#app_intro",
    data() {
        return {
            message_intro_1: "Je suis très motivé pour apprendre et progresser en tant que développeur et je suis impatient d'appliquer mes compétences et mes connaissances à des projets.",

            message_intro_2: "Je possède une solide base dans le développement à la fois front-end et back-end, avec une expérience dans des langages tels que HTML, CSS, JavaScript et PHP.",

            message_intro_3: "Je maîtrise également les méthodologies agiles et j’ai de l’experience dans le travail en équipe.",

            message_projet_1: "Je suis très motivé pour apprendre et progresser en tant que développeur et je suis impatient d'appliquer mes compétences et mes connaissances à des projets.",
        }
    }
});



//Instance Vue pour Technologies
var vm4 = new Vue({
    el: "#app_techno",
    data() {
        return {
            message_technologie_1: "Je suis impatient de relever de nouveaux défis et de contribuer au succès de votre équipe. Je me réjouis d'avoir l'occasion de travailler avec vous et de développer mes compétences.",

        }
    }
});

//Instance Vue pour Contact
var vm5 = new Vue({
    el: "#app_contact",
    data() {
        return {
            message_contact_1: "Vous pouvez me contacter via Mail ou bien sur ces plateformes :",

            message_contact_2: "Je suis impatient de relever de nouveaux défis et de contribuer au succès de votre équipe.",

            message_contact_3: "Je me réjouis d'avoir l'occasion de travailler avec vous et de développer mes compétences.",

            mail: "Theo.Guerin35000@gmail.com",
        }
    }
});

var vm6 = new Vue({
    el: '#app_technolist',
    data: {
        technologies: [
            {
                name: 'HTML',
                description: 'Langage de balisage utilisé pour créer la structure et la présentation des pages web.',
                icon: 'img/icons/html.webp'
            },
            {
                name: 'CSS',
                description: 'Langage de feuilles de style utilisé pour décrire la présentation d\'un document écrit en HTML.',
                icon: 'img/icons/css.webp'
            },
            {
                name: 'JavaScript',
                description: 'Langage de programmation utilisé pour créer des sites web interactifs et dynamiques.',
                icon: 'img/icons/js.webp'
            },
            {
                name: 'Vue.js',
                description: 'Cadre JavaScript open-source pour la création d\'interfaces utilisateur.',
                icon: 'img/icons/vuejs.webp'
            },
            {
                name: 'Scala',
                description: 'Langage de programmation polyvalent, compatible avec Java, et offrant des fonctionnalités de programmation fonctionnelle et orientée objet.',
                icon: 'img/icons/scala.webp'
            },
            {
                name: 'GIT',
                description: 'Système de contrôle de version qui permet aux développeurs de suivre les modifications apportées à leur code, de collaborer avec d\'autres personnes et de revenir facilement aux versions précédentes.',
                icon: 'img/icons/git.webp'
            },
            {
                name: 'PHP',
                description: 'Langage de script côté serveur utilisé pour créer des pages web dynamiques.',
                icon: 'img/icons/php.webp'
            },
            {
                name: 'MySQL',
                description: 'Système de gestion de base de données relationnelle utilisé pour stocker et récupérer des données.',
                icon: 'img/icons/mysql.webp'
            },
            {
                name: 'Java',
                description: 'Langage de programmation polyvalent et orienté objet, fonctionnant sur une machine virtuelle pour une portabilité accrue.',
                icon: 'img/icons/java.webp'
            },
            {
                name: 'Tailwind',
                description: 'Framework CSS utilisant des classes utilitaires pour simplifier la création d\'interfaces web élégantes et personnalisables.',
                icon: 'img/icons/tailwind.webp'
            }
        ],
        leftColumn: [],
        rightColumn: [],
    },
    created() {
        // Divisez le tableau de technologies en deux colonnes
        const middleIndex = Math.ceil(this.technologies.length / 2);
        this.leftColumn = this.technologies.slice(0, middleIndex);
        this.rightColumn = this.technologies.slice(middleIndex);
    }
});





<template>
  <div class="recipe-details container my-5">
    <div class="row">
      <!-- Titre de la recette -->
      <RecipeTitle :title="currentRecipe?.title || 'Chargement...'" />

      <!-- Onglet image avec RecipeImage -->
      <RecipeImage 
        v-if="currentRecipe?.image" 
        :imageSrc="currentRecipe.image" 
        :altText="currentRecipe.title || 'Recette'" 
      />

      <!-- Étoiles et avis -->
      <RecipeReviews 
        v-if="currentRecipe?.rating !== undefined && currentRecipe?.reviews !== undefined" 
        :rating="currentRecipe.rating" 
        :totalReviews="currentRecipe.reviews" 
      />
    </div>

    <!-- Section principale en deux colonnes -->
    <div class="row">
      <div class="col-lg-8 col-md-12">
        <StepDescription v-if="currentRecipe?.steps" :steps="currentRecipe.steps" />
      </div>

      <div class="col-lg-4 col-md-12 mt-4 mt-md-0">
        <Ingredient v-if="currentRecipe?.ingredients" :ingredients="currentRecipe.ingredients" />
        <Informations 
          v-if="currentRecipe?.prepTime !== undefined && currentRecipe?.cookTime !== undefined && currentRecipe?.servings !== undefined"
          :prepTime="currentRecipe.prepTime"
          :cookTime="currentRecipe.cookTime"
          :servings="currentRecipe.servings"
          :favoritesLink="currentRecipe.favoritesLink"
          @add-to-favorites="addToFavorites" 
        />
      </div>
    </div>

    <!-- Section des commentaires -->
    <Comments v-if="currentRecipe" />
    <div class="comment-form-section mt-5" v-if="currentRecipe">
      <CommentForm @comment-submitted="addComment" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CommentForm from './CommentForm.vue';
import Comments from './Comments.vue';
import RecipeImage from './RecipeImage.vue';
import RecipeTitle from './RecipeTitle.vue';
import RecipeReviews from './RecipeReviews.vue';
import Ingredient from './Ingredient.vue';
import Informations from './Informations.vue';
import StepDescription from './StepDescription.vue';

export default {
  name: 'RecipeDetail',
  components: {
    CommentForm,
    Comments,
    RecipeImage,
    RecipeTitle,
    StepDescription,
    RecipeReviews,
    Ingredient,
    Informations,
  },
  data() {
    return {
      currentRecipeIndex: 0, // Index de la recette actuellement sélectionnée
      recipes: [ // Tableau de recettes, dont chaque recette contient les données nécessaires
        {
          title: "Boeuf sauté aux légumes et graines de sésame",
          image: "/assets/boeuf_saute.jpg",
          alt: "Boeuf sauté aux légumes",
          reviews: 12,
          rating: 4,
          prepTime: 20,
          cookTime: 15,
          servings: 4,
          ingredients: [
            '500g de bœuf (type sauté)',
            '1 poivron rouge',
            '1 carotte',
            '1 brocoli',
            '2 cuillères à soupe de graines de sésame',
            '3 cuillères à soupe de sauce soja',
            '1 cuillère à soupe de miel',
            '2 gousses d\'ail',
            '1 cuillère à soupe de gingembre râpé',
            'Huile de cuisson',
            'Sel et poivre',
          ],
          steps: [
            { title: 'Étape 1 : Préparer les ingrédients', description: 'Préparez tous les ingrédients.' },
            { title: 'Étape 2 : Dorer le bœuf', description: 'Faites dorer le bœuf dans une poêle.' },
            // Ajouter toutes les étapes ici...
          ]
        },
        // Ajouter d'autres recettes ici...
      ]
    };
  },
  computed: {
    // Récupère la recette actuelle en fonction de l'index
    currentRecipe() {
      return this.recipes[this.currentRecipeIndex] || null;
    }
  },
  methods: {
    addToFavorites() {
      // Gérer l'ajout à la liste des favoris
    },
    addComment(comment) {
      // Gérer l'ajout de commentaires
    },
  },
};
</script>

<style scoped>
/* Style personnalisé */
</style>

  data() {
    return {
      currentRecipeIndex: 0,  // Index de la recette actuellement sélectionnée

      recipes: [
      {
    "slug": "boeuf_saute",
    "title": "Boeuf sauté aux légumes et graines de sésame",
    "image": "/assets/boeuf_saute.jpg",
    "alt": "Boeuf sauté aux légumes",
    "description": "Découvrez notre délicieux Bœuf Sauté aux Légumes et Graines de Sésame...",
    "reviews": 12,
    "rating": 4
  },
        {
          title: 'Boeuf sauté aux légumes et graines de sésame',
          rating: 4,
          reviews: 12,
          prepTime: 20,
          cookTime: 15,
          servings: 4,
          image: '@/assets/boeuf_saute.jpg',
          favoritesLink: '/favorites',
          ingredients: [
            '500g de bœuf (type sauté)',
            '1 poivron rouge',
            '1 carotte',
            '1 brocoli',
            '2 cuillères à soupe de graines de sésame',
            '3 cuillères à soupe de sauce soja',
            '1 cuillère à soupe de miel',
            '2 gousses d\'ail',
            '1 cuillère à soupe de gingembre râpé',
            'Huile de cuisson',
            'Sel et poivre',
          ],
          steps: [
            { 
              title: 'Étape 1 : Préparer les ingrédients', 
              description: 'Commencez par préparer tous les ingrédients. Coupez les morceaux de bœuf en cubes de taille uniforme pour une cuisson homogène. Lavez et découpez les légumes : coupez les poivrons en lanières, les carottes en rondelles et le brocoli en petits bouquets.'
            },
            { 
              title: 'Étape 2 : Dorer le bœuf', 
              description: "Faire chauffer un peu d'huile dans une grande poêle à feu moyen. Lorsque l'huile est chaude, ajoutez les morceaux de bœuf et faites-les dorer de tous les côtés jusqu'à ce qu'ils soient bien caramélisés. Retirez les morceaux de bœuf de la poêle et réservez-les dans un plat."
            },
            { 
              title: 'Étape 3 : Sauter les légumes', 
              description: "Dans la même poêle, ajoutez un peu d'huile si nécessaire. Ajoutez les légumes coupés (poivrons, carottes, brocolis) et faites-les sauter à feu moyen-élevé. Remuez fréquemment jusqu'à ce qu'ils soient tendres mais encore croquants. Vous pouvez ajouter un peu d'eau pour aider à la cuisson des légumes si nécessaire."
            },
            { 
              title: 'Étape 4 : Ajouter les épices et les graines de sésame', 
              description: "Incorporez les graines de sésame grillées, le gingembre râpé et l'ail émincé aux légumes. Faites sauter pendant une minute pour libérer les arômes. Assurez-vous que les graines de sésame soient bien réparties et que les épices couvrent uniformément les légumes."
            },
            { 
              title: 'Étape 5 : Déglacer et mijoter', 
              description: "Remettez les morceaux de bœuf dans la poêle avec les légumes. Ajoutez la sauce soja, le miel, et un peu d'eau pour déglacer la poêle. Remuez bien pour que la sauce enrobe les morceaux de bœuf et les légumes. Laissez mijoter pendant environ 5 minutes jusqu'à ce que la sauce épaississe légèrement et enrobe bien le mélange."
            },
            { 
              title: 'Étape 6 : Finaliser et servir', 
              description: "Goûtez la sauce et rectifiez l'assaisonnement avec du sel et du poivre si nécessaire. Vous pouvez également ajouter un peu de sauce soja ou de miel selon vos préférences. Servez chaud avec du riz basmati ou des nouilles asiatiques. Garnissez avec des oignons verts hachés ou des feuilles de coriandre si désiré."
            },
            { 
              title: 'Étape 7 : Conseils et variantes', 
              description: "Pour varier les saveurs, vous pouvez ajouter des champignons shiitake ou des pousses de bambou dans la poêle. Si vous aimez les plats épicés, n'hésitez pas à ajouter un peu de piment rouge ou de sauce chili pendant la cuisson. Pour une option sans gluten, utilisez de la sauce soja sans gluten."
            },
          ]
        },
        {
          title: 'Chakchouka',
          rating: 4,
          reviews: 7,
          prepTime: 20,
          cookTime: 30,
          servings: 4,
          image: new URL('../../images/chakchouka.jpg', import.meta.url).href,
          favoritesLink: '/favorites',
          ingredients: [
            '4 poivrons',
            '2 oignons',
            '4 gousses d\'ail',
            '6 tomates',
            '4 œufs',
            '2 cuillères à soupe d\'huile d\'olive',
            '1 cuillère à café de paprika',
            '1 cuillère à café de cumin',
            'Sel et poivre',
            'Persil frais',
          ],
          steps: [
            { 
              title: 'Étape 1 : Préparer les ingrédients', 
              description: "Coupez les poivrons en lanières, émincez les oignons et hachez l'ail. Épluchez et concassez les tomates."
            },
            { 
              title: 'Étape 2 : Faire revenir les légumes', 
              description: "Dans une grande poêle, faites chauffer l'huile d'olive. Ajoutez les oignons et l'ail, faites revenir jusqu'à ce qu'ils soient translucides. Ajoutez les poivrons et laissez cuire pendant 10 minutes."
            },
            { 
              title: 'Étape 3 : Ajouter les tomates et les épices', 
              description: "Ajoutez les tomates concassées, le paprika, le cumin, le sel et le poivre. Laissez mijoter à feu doux pendant 15-20 minutes."
            },
            { 
              title: 'Étape 4 : Casser les œufs', 
              description: "Faites des petits puits dans la préparation et cassez-y les œufs. Couvrez la poêle et laissez cuire jusqu'à ce que les œufs soient cuits à votre goût."
            },
            { 
              title: 'Étape 5 : Servir', 
              description: "Servez la chakchouka chaude, parsemée de persil frais haché, avec du pain frais."
            },
            { 
              title: 'Étape 6 : Conseils et variantes', 
              description: "Vous pouvez ajouter des épices comme le piment de Cayenne pour un goût plus relevé. Pour une version végétarienne, ajoutez des courgettes et des aubergines."
            },
          ]
        },

        {
          title: 'Tarte à la noix de coco',
          rating: 4,
          reviews: 40,
          prepTime: 15,
          cookTime: 30,
          servings: 8,
          image: new URL('../../images/tarte_coco.jpg', import.meta.url).href,
          favoritesLink: '/favorites',
          ingredients: [
            '1 pâte brisée',
            '3 œufs',
            '150g de sucre',
            '200ml de crème liquide',
            '200g de noix de coco râpée',
          ],
          steps: [
            {
              title: 'Étape 1 : Préparer la pâte',
              description: 'Préchauffez le four à 180°C. Étalez la pâte brisée dans un moule à tarte et piquez le fond avec une fourchette.'
            },
            {
              title: 'Étape 2 : Préparer la garniture',
              description: 'Dans un saladier, mélangez les œufs, le sucre, la crème liquide et la noix de coco râpée jusqu\'à obtenir un mélange homogène.'
            },
            {
              title: 'Étape 3 : Garnir la tarte',
              description: 'Versez la préparation à la noix de coco sur le fond de tarte. Lissez la surface avec une spatule.'
            },
            {
              title: 'Étape 4 : Cuire la tarte',
              description: 'Enfournez la tarte pendant environ 25-30 minutes, jusqu\'à ce qu\'elle soit dorée. Laissez refroidir avant de servir.'
            },
            {
              title: 'Étape 5 : Servir',
              description: 'Servez la tarte froide ou à température ambiante, accompagnée de crème fouettée ou de glace à la vanille.'
            },
          ]
        },
        {
            title: 'Mojito à l\'orange sanguine',
            rating: 4,
            reviews: 25,
            prepTime: 10,
            servings: 1,
            image: new URL('../../images/mojito_orange.jpg', import.meta.url).href,
            ingredients: [
                '2 oranges sanguines',
                '10 feuilles de menthe',
                '2 cuillères à soupe de sucre',
                '1 citron vert',
                '60 ml de rhum blanc',
                'Eau gazeuse',
                'Glaçons'
            ],
            steps: [
                { title: 'Étape 1 : Préparer les ingrédients', description: 'Coupez les oranges sanguines en quartiers et pressez-en une pour obtenir le jus. Réservez.' },
                { title: 'Étape 2 : Mélanger les saveurs', description: 'Dans un verre, écrasez les feuilles de menthe avec le sucre et le jus de citron vert.' },
                { title: 'Étape 3 : Ajouter les liquides', description: 'Ajoutez les quartiers d\'orange sanguine, le jus d\'orange sanguine et le rhum. Remplissez le verre de glace pilée.' },
                { title: 'Étape 4 : Compléter avec l\'eau gazeuse', description: 'Complétez avec de l\'eau gazeuse. Remuez doucement pour bien mélanger.' },
                { title: 'Étape 5 : Décorer et servir', description: 'Décorez avec une tranche d\'orange sanguine et quelques feuilles de menthe. Servez immédiatement.' }
            ]
        },
        {
            title: 'Nouilles aux crevettes et œufs de caille',
            rating: 4,
            reviews: 7,
            prepTime: 15,
            cookTime: 20,
            servings: 4,
            image: new URL('../../images/nouilles.jpg', import.meta.url).href,
            ingredients: [
                '200g de nouilles',
                '300g de crevettes',
                '12 œufs de caille',
                '2 gousses d\'ail',
                '1 morceau de gingembre',
                '1 poivron rouge',
                '1 poivron vert',
                '3 cuillères à soupe de sauce soja',
                '1 cuillère à soupe de miel',
                '2 cuillères à soupe d\'huile d\'olive',
                'Sel et poivre',
                'Coriandre fraîche'
            ],
            steps: [
                { title: 'Étape 1 : Préparer les ingrédients', description: 'Décortiquez les crevettes, épluchez et hachez l\'ail et le gingembre. Coupez les légumes en fines lanières.' },
                { title: 'Étape 2 : Cuire les nouilles', description: 'Faites cuire les nouilles selon les instructions du paquet. Égouttez et réservez.' },
                { title: 'Étape 3 : Sauter les crevettes', description: 'Dans une grande poêle, faites chauffer l\'huile d\'olive. Ajoutez l\'ail, le gingembre et les crevettes, faites revenir jusqu\'à ce que les crevettes soient roses.' },
                { title: 'Étape 4 : Ajouter les légumes et la sauce', description: 'Ajoutez les légumes dans la poêle et faites-les sauter pendant 5 minutes. Ajoutez la sauce soja et le miel, mélangez bien.' },
                { title: 'Étape 5 : Incorporer les nouilles et les œufs de caille', description: 'Ajoutez les nouilles cuites et les œufs de caille dans la poêle. Mélangez délicatement pour bien enrober les nouilles de sauce. Laissez cuire encore 2-3 minutes.' },
                { title: 'Étape 6 : Servir', description: 'Servez les nouilles aux crevettes et œufs de caille chaudes, parsemées de coriandre fraîche.' },
                { title: 'Étape 7 : Conseils et variantes', description: 'Vous pouvez ajouter des épices comme du piment rouge pour un goût plus relevé. Remplacez les légumes par ceux de votre choix.' }
            ]
        },
        {
            title: 'Pâtes à la crème',
            rating: 4,
            reviews: 12,
            prepTime: 10,
            cookTime: 20,
            servings: 4,
            image: new URL('../../images/pates_creme.jpg', import.meta.url).href,
            ingredients: [
                '400g de pâtes',
                '200ml de crème fraîche',
                '50g de parmesan râpé',
                '2 gousses d\'ail',
                '1 oignon',
                '2 cuillères à soupe de beurre',
                'Sel et poivre',
                'Persil frais'
            ],
            steps: [
                { title: 'Étape 1 : Préparer les ingrédients', description: 'Hachez finement l\'ail et l\'oignon. Râpez le parmesan.' },
                { title: 'Étape 2 : Cuire les pâtes', description: 'Faites cuire les pâtes selon les instructions du paquet. Égouttez et réservez.' },
                { title: 'Étape 3 : Préparer la sauce', description: 'Dans une poêle, faites fondre le beurre. Ajoutez l\'ail et l\'oignon, faites revenir jusqu\'à ce qu\'ils soient translucides.' },
                { title: 'Étape 4 : Ajouter la crème et le fromage', description: 'Ajoutez la crème fraîche dans la poêle et laissez mijoter à feu doux. Incorporez le parmesan râpé et mélangez jusqu\'à obtenir une sauce onctueuse.' },
                { title: 'Étape 5 : Incorporer les pâtes', description: 'Ajoutez les pâtes cuites dans la poêle avec la sauce. Mélangez bien pour enrober les pâtes de sauce. Laissez cuire encore 2-3 minutes.' },
                { title: 'Étape 6 : Servir', description: 'Servez les pâtes à la crème chaudes, parsemées de persil frais haché et de poivre noir moulu.' },
                { title: 'Étape 7 : Conseils et variantes', description: 'Ajoutez des lardons ou du poulet pour une version plus gourmande. Utilisez du fromage bleu pour une saveur différente.' }
            ]
        },
        {
                title: 'Burger du chef',
                rating: 4,
                reviews: 25,
                prepTime: 15,
                cookTime: 15,
                servings: 4,
                image: new URL('@/assets/burger.jpg', import.meta.url).href,
                favoritesLink: '/favorites',
                ingredients: [
                    '500g de viande hachée',
                    '4 pains à burger',
                    '1 oignon',
                    '2 tomates',
                    'Feuilles de laitue',
                    'Mayonnaise',
                    'Huile de cuisson',
                    'Sel et poivre',
                ],
                steps: [
                    { 
                      title: 'Étape 1 : Préparer les ingrédients', 
                      description: 'Commencez par préparer tous les ingrédients. Coupez les oignons en fines rondelles, tranchez les tomates et préparez les feuilles de laitue. Assurez-vous que la viande hachée soit à température ambiante.'
                    },
                    { 
                      title: 'Étape 2 : Préparer les galettes de bœuf', 
                      description: "Formez des galettes avec la viande hachée, assaisonnez-les avec du sel et du poivre. Faites chauffer un peu d'huile dans une poêle à feu moyen et faites cuire les galettes jusqu'à ce qu'elles soient bien dorées de chaque côté."
                    },
                    { 
                      title: 'Étape 3 : Cuisson des oignons', 
                      description: "Dans la même poêle, ajoutez un peu d'huile si nécessaire et faites revenir les rondelles d'oignon jusqu'à ce qu'elles soient tendres et légèrement caramélisées."
                    },
                    { 
                      title: 'Étape 4 : Assembler les burgers', 
                      description: "Faites griller légèrement les pains à burger. Étalez une fine couche de mayonnaise sur chaque moitié de pain. Placez une feuille de laitue, une tranche de tomate et une galette de bœuf sur la moitié inférieure du pain. Ajoutez des oignons caramélisés avant de refermer avec l'autre moitié du pain."
                    },
                    { 
                      title: 'Étape 5 : Servir', 
                      description: "Servez les burgers immédiatement avec des frites ou une salade pour un repas complet."
                    }
                ]
            },
            {
                title: 'Salade gourmande au poulet grillé',
                rating: 4.5,
                reviews: 5,
                prepTime: 15,
                cookTime: 10,
                servings: 4,
                image: new URL('@/assets/salade_poulet-grille.jpg', import.meta.url).href,
                ingredients: [
                    '2 filets de poulet',
                    '200g de salade verte',
                    '1 concombre',
                    '2 tomates',
                    '1 avocat',
                    '50g de noix',
                    '50g de fromage râpé',
                    'Sel et poivre',
                    'Huile d\'olive',
                    'Vinaigre balsamique',
                    'Miel',
                    'Moutarde'
                ],
                steps: [
                    { title: 'Étape 1 : Préparer les ingrédients', description: 'Coupez le poulet en fines tranches. Lavez et coupez les légumes.' },
                    { title: 'Étape 2 : Griller le poulet', description: 'Faites griller les tranches de poulet dans une poêle chaude avec un peu d\'huile d\'olive. Assaisonnez de sel et de poivre.' },
                    { title: 'Étape 3 : Préparer la vinaigrette', description: 'Dans un bol, mélangez l\'huile d\'olive, le vinaigre balsamique, le miel, la moutarde, le sel et le poivre.' },
                    { title: 'Étape 4 : Assembler la salade', description: 'Dans un grand saladier, mélangez les légumes, le poulet grillé et la vinaigrette. Ajoutez des noix et du fromage râpé.' },
                    { title: 'Étape 5 : Servir', description: 'Servez immédiatement ou réfrigérez jusqu\'au moment de servir.' },
                    { title: 'Étape 6 : Conseils et variantes', description: 'Ajoutez des fruits frais comme des fraises ou des pommes pour une touche sucrée. Utilisez du fromage feta pour une saveur différente.' }
                ]
             }
         ]
      }
      
  },
   
  computed: {
    // Récupère la recette actuelle en fonction de l'index
    currentRecipe() {
      return this.recipes[this.currentRecipeIndex] || null;
    }
  },
  methods: {
    addToFavorites() {
      // Gérer l'ajout à la liste des favoris
    },
    addComment(comment) {
      // Gérer l'ajout de commentaires
    },
  },
};
</script>

<style scoped>
/* Ton style personnalisé */
</style>
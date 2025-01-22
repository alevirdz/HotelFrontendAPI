<template>
    <div>
        <v-container class="bg-surface-variant mb-6">
            <v-row>
                <v-col v-for="(item, index) in card" :key="index" cols="12" sm="4">
                    <v-card class="mx-auto" max-width="344">
                        <v-img :src="item.image" height="200px" cover></v-img>

                        <v-card-title>
                            {{ item.title }}
                        </v-card-title>

                        <v-card-subtitle>
                            {{ item.subtitle }}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn color="orange-lighten-2" variant="text">
                                {{ item.buttontext }}
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                @click="item.show = !item.show"></v-btn>
                            <!-- <v-btn :id="index" @click="test"></v-btn> -->
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="item.show">
                                <v-divider></v-divider>

                                <v-card-text>
                                    {{ item.description }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'ComponentCard',
    props: {
        card: {
            type: Array,
            default: () => [{
                image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                title: 'Top western road trips',
                subtitle: '1,000 miles of wonder',
                buttontext: 'Explore',
                description: `Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.`
            }],
            require: false
        }
    },
    data() {
        return {
            show: false,
        }
    }
}
</script>
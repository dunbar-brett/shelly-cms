<template>
	<v-app dark>
		<TheNav v-if="isLoggedIn"></TheNav>
		<v-content>
			<v-container>
				<nuxt />
			</v-container>
		</v-content>
		<v-footer :fixed="fixed" app>
			<span>&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
import TheNav from "../components/TheNav";

export default {
	components: {
		TheNav
	},
	data() {
		return {
			fixed: false // does something with footer
		};
	},
	computed: {
		isLoggedIn() {
			// this.$store.getters['login/isUserLoggedIn']
			return this.$store.getters["login/isUserLoggedIn"];
		}
	}
};
</script>

<style lang="scss" scoped>
</style>

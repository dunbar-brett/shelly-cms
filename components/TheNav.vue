<template>
	<section>
		<!-- TODO NEED LOG OUT BUTTON -->
		<v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
			<v-list>
				<v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar :clipped-left="clipped" fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>
				<nuxt-link to="/shellyCms" class="toolbar-title">{{title}}</nuxt-link>
			</v-toolbar-title>
			<v-spacer />
		</v-app-bar>
	</section>
</template>

<script>
export default {
	data() {
		return {
			clipped: true, // this toggles the header to be on top of side menu
			drawer: false,
			items: [
				{
					icon: "panorama",
					title: "Front Gallery",
					to: "/table/front"
				},
				{
					icon: "local_drink",
					title: "Oils Gallery",
					to: "/table/oils"
				},
				{
					icon: "palette",
					title: "Watercolor Gallery",
					to: "/table/watercolor"
				}
			],
			right: true,
			title: "Shelly Weasel CMS"
		};
	}
};
</script>

<style lang="scss" scoped>
.toolbar-title {
	color: inherit;
	text-decoration: inherit;
}
</style>
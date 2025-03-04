<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
</script>

<header class="bg-white shadow-md dark:bg-gray-800">
	<div class="container mx-auto flex items-center justify-between p-4">
		<div class="flex items-center">
			<img src="/logo.svg" alt="Logo" class="mr-2 h-12 w-12" />
			<span class="text-xl font-bold">
				{language.isJapanese() ? 'AIコンサルティング' : 'AI Consulting'}
			</span>
		</div>

		<nav>
			<ul class="flex space-x-6">
				<li>
					<a
						href="/"
						class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{language.isJapanese() ? 'ホーム' : 'Home'}
					</a>
				</li>
				<li>
					<a
						href="/about"
						class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{language.isJapanese() ? '私たちについて' : 'About Us'}
					</a>
				</li>
				<li>
					<a
						href="/services"
						class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{language.isJapanese() ? 'サービス' : 'Services'}
					</a>
				</li>
				<li>
					<a
						href="/contact"
						class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{language.isJapanese() ? 'お問い合わせ' : 'Contact'}
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

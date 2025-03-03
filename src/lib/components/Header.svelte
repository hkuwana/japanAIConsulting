<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
</script>

<header class="bg-white shadow-md dark:bg-gray-800">
	<div class="container mx-auto flex items-center justify-between p-4">
		<div class="flex items-center">
			<img src="/logo.svg" alt="Logo" class="mr-2 h-8 w-8" />
			<span class="text-xl font-bold">
				{language === 'ja' ? 'AIコンサルティング' : 'AI Consulting'}
			</span>
		</div>

		<nav>
			<ul class="flex space-x-6">
				<li>
					<a
						href="#"
						class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{language === 'ja' ? 'ホーム' : 'Home'}
					</a>
				</li>
				<li>
					<a
						href="#about"
						class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{language === 'ja' ? '私たちについて' : 'About Us'}
					</a>
				</li>
				<li>
					<a
						href="#services"
						class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{language === 'ja' ? 'サービス' : 'Services'}
					</a>
				</li>
				<li>
					<a
						href="#contact"
						class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{language === 'ja' ? 'お問い合わせ' : 'Contact'}
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

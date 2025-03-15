<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { language } from '$lib/stores/language.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="flex min-h-screen flex-col">
		<!-- Site header with language toggle -->
		<header class="bg-base-100 shadow-sm">
			<div class="container mx-auto flex items-center justify-between px-4 py-3">
				<div class="flex items-center">
					<a href="/" class="text-primary text-xl font-bold">Japan AI Consulting</a>
					<nav class="ml-8 hidden md:block">
						<ul class="flex space-x-4">
							<li>
								<a href="/" class="hover:text-primary">{language.isEnglish() ? 'Home' : 'ホーム'}</a
								>
							</li>
							<li>
								<a href="/services" class="hover:text-primary"
									>{language.isEnglish() ? 'Services' : 'サービス'}</a
								>
							</li>
							<li>
								<a href="/price" class="hover:text-primary"
									>{language.isEnglish() ? 'Pricing' : '料金'}</a
								>
							</li>
							<li>
								<a href="/about" class="hover:text-primary"
									>{language.isEnglish() ? 'About Us' : '会社概要'}</a
								>
							</li>
						</ul>
					</nav>
				</div>

				<!-- Language toggle button -->
				<button on:click={() => language.toggle()} class="btn btn-primary btn-sm">
					{language.isEnglish() ? '日本語' : 'English'}
				</button>
			</div>
		</header>

		<!-- Main content -->
		<main class="flex-grow">
			{@render children()}
		</main>

		<!-- Site footer -->
		<footer class="bg-base-200 py-8">
			<div class="container mx-auto px-4">
				<div class="grid gap-8 md:grid-cols-3">
					<div>
						<h3 class="mb-4 text-lg font-semibold">
							{language.isEnglish() ? 'Japan AI Consulting' : '日本AIコンサルティング'}
						</h3>
						<p class="text-base-content/70">
							{language.isEnglish()
								? 'Strategic AI solutions for Japanese businesses.'
								: '日本企業向け戦略的AIソリューション。'}
						</p>
					</div>
					<div>
						<h3 class="mb-4 text-lg font-semibold">
							{language.isEnglish() ? 'Quick Links' : 'クイックリンク'}
						</h3>
						<ul class="text-base-content/70 space-y-2">
							<li>
								<a href="/services" class="hover:text-primary"
									>{language.isEnglish() ? 'Services' : 'サービス'}</a
								>
							</li>
							<li>
								<a href="/price" class="hover:text-primary"
									>{language.isEnglish() ? 'Pricing' : '料金'}</a
								>
							</li>
							<li>
								<a href="/about" class="hover:text-primary"
									>{language.isEnglish() ? 'About Us' : '会社概要'}</a
								>
							</li>
						</ul>
					</div>
					<div>
						<h3 class="mb-4 text-lg font-semibold">
							{language.isEnglish() ? 'Contact' : 'お問い合わせ'}
						</h3>
						<ul class="text-base-content/70 space-y-2">
							<li>Email: contact@example.com</li>
							<li>{language.isEnglish() ? 'Phone' : '電話'}: +81 XX-XXXX-XXXX</li>
						</ul>
					</div>
				</div>
				<div class="text-base-content/70 mt-8 text-center">
					<p>
						© {new Date().getFullYear()} Japan AI Consulting. {language.isEnglish()
							? 'All rights reserved.'
							: '無断複写・転載を禁じます。'}
					</p>
				</div>
			</div>
		</footer>
	</div>
</ParaglideJS>

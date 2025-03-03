<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
</script>

<footer class="mt-16 bg-gray-100 py-8 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<div class="mb-8 grid gap-8 md:grid-cols-3">
			<div>
				<h3 class="mb-4 text-lg font-medium">
					{language === 'ja' ? 'AIコンサルティング' : 'AI Consulting'}
				</h3>
				<p class="text-gray-600 dark:text-gray-400">
					{language === 'ja'
						? 'AI技術を活用してビジネスを次のレベルへ。'
						: 'Elevate your business with AI technology.'}
				</p>
			</div>

			<div>
				<h3 class="mb-4 text-lg font-medium">
					{language === 'ja' ? 'リンク' : 'Links'}
				</h3>
				<ul class="space-y-2 text-gray-600 dark:text-gray-400">
					<li>
						<a href="#" class="hover:text-blue-600 dark:hover:text-blue-400">
							{language === 'ja' ? 'ホーム' : 'Home'}
						</a>
					</li>
					<li>
						<a href="#about" class="hover:text-blue-600 dark:hover:text-blue-400">
							{language === 'ja' ? '私たちについて' : 'About Us'}
						</a>
					</li>
					<li>
						<a href="#services" class="hover:text-blue-600 dark:hover:text-blue-400">
							{language === 'ja' ? 'サービス' : 'Services'}
						</a>
					</li>
					<li>
						<a href="#contact" class="hover:text-blue-600 dark:hover:text-blue-400">
							{language === 'ja' ? 'お問い合わせ' : 'Contact'}
						</a>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 text-lg font-medium">
					{language === 'ja' ? 'お問い合わせ' : 'Contact Us'}
				</h3>
				<address class="text-gray-600 not-italic dark:text-gray-400">
					<p>
						{language === 'ja' ? '東京都千代田区' : 'Chiyoda-ku, Tokyo, Japan'}
					</p>
					<p>contact@ai-consulting.jp</p>
					<p>+81 3-1234-5678</p>
				</address>
			</div>
		</div>

		<div class="border-t border-gray-300 pt-6 dark:border-gray-700">
			<p class="text-center text-sm text-gray-600 dark:text-gray-400">
				&copy; {new Date().getFullYear()} AI Consulting. {language === 'ja'
					? '全ての権利を保有します。'
					: 'All rights reserved.'}
			</p>
		</div>
	</div>
</footer>

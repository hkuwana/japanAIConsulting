<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
	import { formData } from '$lib/stores/formData.svelte';

	// Define industry options with translations
	type Industry = {
		id: string;
		en: string;
		ja: string;
	};

	const industries: Industry[] = [
		{ id: 'finance', en: 'Finance & Banking', ja: '金融・銀行' },
		{ id: 'healthcare', en: 'Healthcare', ja: '医療・ヘルスケア' },
		{ id: 'manufacturing', en: 'Manufacturing', ja: '製造業' },
		{ id: 'retail', en: 'Retail', ja: '小売業' },
		{ id: 'technology', en: 'Technology', ja: 'テクノロジー' },
		{ id: 'education', en: 'Education', ja: '教育' },
		{ id: 'legal', en: 'Legal Services', ja: '法律サービス' },
		{ id: 'consulting', en: 'Consulting', ja: 'コンサルティング' },
		{ id: 'real_estate', en: 'Real Estate', ja: '不動産' },
		{ id: 'hospitality', en: 'Hospitality & Tourism', ja: '接客・観光' },
		{ id: 'other', en: 'Other', ja: 'その他' }
	];

	function selectIndustry(id: string) {
		formData.industry = id;
	}
</script>

<section class="space-y-4">
	<p class="text-gray-600 dark:text-gray-300">
		{language.currentLanguage === 'ja'
			? '当てはまる業界を選択してください'
			: 'Please select your industry'}
	</p>

	<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
		{#each industries as industry}
			<button
				type="button"
				class="flex w-full items-center justify-between rounded-lg border p-3 text-left transition-colors {formData.industry ===
				industry.id
					? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/30'
					: 'border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'}"
				onclick={() => selectIndustry(industry.id)}
			>
				<span class="font-medium">
					{language.currentLanguage === 'ja' ? industry.ja : industry.en}
				</span>

				{#if formData.industry === industry.id}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-blue-500 dark:text-blue-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				{/if}
			</button>
		{/each}
	</div>

	{#if !formData.industry}
		<p class="text-sm text-red-500">
			{language.currentLanguage === 'ja' ? '業界を選択してください' : 'Please select an industry'}
		</p>
	{/if}
</section>

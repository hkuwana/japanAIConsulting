<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
	import { formData } from '$lib/stores/formData.svelte';

	// Time ranges with translations
	type TimeRange = {
		value: number;
		en: string;
		ja: string;
	};

	const timeRanges: TimeRange[] = [
		{ value: 1, en: 'Less than 1 hour', ja: '1時間未満' },
		{ value: 3, en: '1-5 hours', ja: '1-5時間' },
		{ value: 10, en: '5-15 hours', ja: '5-15時間' },
		{ value: 20, en: '15-25 hours', ja: '15-25時間' },
		{ value: 30, en: 'More than 25 hours', ja: '25時間以上' }
	];

	// Select time spent
	function selectTimeSpent(value: number): void {
		formData.timeSpent = value;
	}
</script>

<section class="mt-8">
	<h3 class="mb-3 text-lg font-medium">
		{language.currentLanguage === 'ja'
			? '週あたりの手作業の時間'
			: 'Hours spent on manual tasks per week'}
	</h3>

	<p class="mb-4 text-gray-600 dark:text-gray-300">
		{language.currentLanguage === 'ja'
			? '選択した業務に週あたり何時間程度費やしていますか？'
			: 'How many hours per week do you spend on these tasks?'}
	</p>

	<div class="space-y-2">
		{#each timeRanges as range}
			<button
				type="button"
				class="flex w-full items-center justify-between rounded-lg border p-3 text-left transition-colors {formData.timeSpent ===
				range.value
					? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/30'
					: 'border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'}"
				onclick={() => selectTimeSpent(range.value)}
			>
				<span>
					{language.currentLanguage === 'ja' ? range.ja : range.en}
				</span>

				{#if formData.timeSpent === range.value}
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

	{#if !formData.timeSpent}
		<p class="mt-2 text-sm text-red-500">
			{language.currentLanguage === 'ja' ? '時間を選択してください' : 'Please select an option'}
		</p>
	{/if}
</section>

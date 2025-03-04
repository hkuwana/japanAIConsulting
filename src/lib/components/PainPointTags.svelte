<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
	import { formData } from '$lib/stores/formData.svelte';

	// Define pain point tags with translations
	type PainPoint = {
		id: string;
		en: string;
		ja: string;
		icon: string;
	};

	const painPoints: PainPoint[] = [
		{
			id: 'data_entry',
			en: 'Data Entry',
			ja: 'データ入力',
			icon: 'pencil'
		},
		{
			id: 'spreadsheets',
			en: 'Spreadsheet Work',
			ja: 'スプレッドシート作業',
			icon: 'table'
		},
		{
			id: 'client_lookup',
			en: 'Client Information Lookup',
			ja: '顧客情報検索',
			icon: 'search'
		},
		{
			id: 'market_research',
			en: 'Market Research',
			ja: '市場調査',
			icon: 'globe'
		},
		{
			id: 'scheduling',
			en: 'Schedule Management',
			ja: 'スケジュール管理',
			icon: 'calendar'
		},
		{
			id: 'meeting_minutes',
			en: 'Meeting Minutes',
			ja: '会議議事録',
			icon: 'mic'
		},
		{
			id: 'reporting',
			en: 'Report Creation',
			ja: 'レポート作成',
			icon: 'file-text'
		},
		{
			id: 'data_analysis',
			en: 'Data Analysis',
			ja: 'データ分析',
			icon: 'bar-chart'
		},
		{
			id: 'translation',
			en: 'Translation Work',
			ja: '翻訳作業',
			icon: 'languages'
		},
		{
			id: 'customer_support',
			en: 'Customer Support',
			ja: 'カスタマーサポート',
			icon: 'help-circle'
		},
		{
			id: 'inventory',
			en: 'Inventory Management',
			ja: '在庫管理',
			icon: 'package'
		},
		{
			id: 'documentation',
			en: 'Documentation',
			ja: '文書作成',
			icon: 'file'
		}
	];

	// Initialize selected pain points if not already set
	if (!formData.painPoints) {
		formData.painPoints = [];
	}

	// Toggle pain point selection
	function togglePainPoint(id: string): void {
		if (formData.painPoints.includes(id)) {
			formData.painPoints = formData.painPoints.filter((item: string) => item !== id);
		} else {
			formData.painPoints = [...formData.painPoints, id];
		}
	}

	// Get icon for pain point
	function getIcon(iconName: string): string {
		switch (iconName) {
			case 'pencil':
				return 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z';
			case 'table':
				return 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z';
			case 'search':
				return 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z';
			case 'globe':
				return 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
			case 'calendar':
				return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
			case 'mic':
				return 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z';
			case 'file-text':
				return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
			case 'bar-chart':
				return 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z';
			case 'languages':
				return 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129';
			case 'help-circle':
				return 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
			case 'package':
				return 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4';
			case 'file':
				return 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z';
			default:
				return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
		}
	}
</script>

<section>
	<div class="mb-4">
		<p class="mb-4 text-gray-600 dark:text-gray-300">
			{language.currentLanguage === 'ja'
				? 'AIで効率化したい業務を選択してください（複数可）'
				: 'Select the activities you want to optimize with AI (multiple selection allowed)'}
		</p>
	</div>

	<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
		{#each painPoints as point}
			<button
				type="button"
				class="flex items-center rounded-lg border p-3 transition-colors"
				onclick={() => togglePainPoint(point.id)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d={getIcon(point.icon)} />
				</svg>
				<span>{language.currentLanguage === 'ja' ? point.ja : point.en}</span>
			</button>
		{/each}
	</div>

	{#if formData.painPoints.length === 0}
		<p class="mt-2 text-sm text-red-500">
			{language.currentLanguage === 'ja'
				? '少なくとも1つ選択してください'
				: 'Please select at least one option'}
		</p>
	{/if}
</section>

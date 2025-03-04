<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
	import { formData } from '$lib/stores/formData.svelte';

	// Company size options with translations
	type CompanySize = {
		id: string;
		en: string;
		ja: string;
	};

	const companySizes: CompanySize[] = [
		{ id: 'solo', en: 'Solo', ja: '個人' },
		{ id: 'micro', en: '2-10 employees', ja: '2-10人' },
		{ id: 'small', en: '11-50 employees', ja: '11-50人' },
		{ id: 'medium', en: '51-200 employees', ja: '51-200人' },
		{ id: 'large', en: '201-1000 employees', ja: '201-1000人' },
		{ id: 'enterprise', en: '1000+ employees', ja: '1000人以上' }
	];

	// Form validation
	let errors = $state({
		companyName: false,
		companySize: false,
		companyDescription: false
	});

	function validateForm() {
		// Reset errors
		errors = {
			companyName: false,
			companySize: false,
			companyDescription: false
		};

		// Validate required fields
		if (!formData.companyName || formData.companyName.trim() === '') {
			errors.companyName = true;
		}

		if (!formData.companySize || formData.companySize.trim() === '') {
			errors.companySize = true;
		}

		return !Object.values(errors).some(Boolean);
	}

	function handleInput() {
		validateForm();
	}

	function selectCompanySize(id: string) {
		formData.companySize = id;
		errors.companySize = false;
	}
</script>

<section>
	<div class="space-y-4">
		<!-- Company Name -->
		<div>
			<label for="companyName" class="mb-1 block font-medium">
				{language.currentLanguage === 'ja' ? '会社名' : 'Company Name'}
				<span class="text-red-500">*</span>
			</label>
			<input
				type="text"
				id="companyName"
				name="companyName"
				bind:value={formData.companyName}
				oninput={handleInput}
				placeholder={language.currentLanguage === 'ja' ? '御社名を入力' : 'Enter your company name'}
				class="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white {errors.companyName
					? 'border-red-500'
					: ''}"
			/>
			{#if errors.companyName}
				<p class="mt-1 text-sm text-red-500">
					{language.currentLanguage === 'ja'
						? '会社名を入力してください'
						: 'Please enter your company name'}
				</p>
			{/if}
		</div>

		<!-- Company Size -->
		<div>
			<p class="mb-1 font-medium">
				{language.currentLanguage === 'ja' ? '会社の規模' : 'Company Size'}
				<span class="text-red-500">*</span>
			</p>
			<div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
				{#each companySizes as size}
					<button
						type="button"
						class="flex items-center justify-between rounded-lg border p-2 text-left text-sm transition-colors {formData.companySize ===
						size.id
							? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/30'
							: 'border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'} {errors.companySize
							? 'border-red-500'
							: ''}"
						onclick={() => selectCompanySize(size.id)}
					>
						<span>
							{language.currentLanguage === 'ja' ? size.ja : size.en}
						</span>

						{#if formData.companySize === size.id}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 text-blue-500 dark:text-blue-400"
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
			{#if errors.companySize}
				<p class="mt-1 text-sm text-red-500">
					{language.currentLanguage === 'ja'
						? '会社規模を選択してください'
						: 'Please select your company size'}
				</p>
			{/if}
		</div>

		<!-- Company Description -->
		<div>
			<label for="companyDescription" class="mb-1 block font-medium">
				{language.currentLanguage === 'ja' ? '会社の説明' : 'Company Description'}
				<span class="text-sm font-normal text-gray-500">
					({language.currentLanguage === 'ja' ? '任意' : 'optional'})
				</span>
			</label>
			<textarea
				id="companyDescription"
				name="companyDescription"
				bind:value={formData.companyDescription}
				placeholder={language.currentLanguage === 'ja'
					? '会社の業務内容やAI化したい業務の詳細などを入力してください'
					: 'Please describe your company and any specific tasks you want to optimize with AI'}
				rows="3"
				class="w-full resize-y rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
			></textarea>
		</div>
	</div>
</section>

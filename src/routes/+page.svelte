<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { language } from '$lib/stores/language.svelte';
	import { formData } from '$lib/stores/formData.svelte';

	// Import components
	import Header from '$lib/components/Header.svelte';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';
	import IndustrySelect from '$lib/components/IndustrySelect.svelte';
	import TechStackSelect from '$lib/components/TechStackSelect.svelte';
	import PainPointTags from '$lib/components/PainPointTags.svelte';
	import CompanyForm from '$lib/components/CompanyForm.svelte';
	import TimeAssessment from '$lib/components/TimeAssessment.svelte';
	import EmailCapture from '$lib/components/EmailCapture.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Form state
	let currentStep = $state(1);
	let totalSteps = 5;
	let isSubmitting = $state(false);
	let submitSuccess = $state(false);
	let submitError = $state(false);

	// Navigation
	const nextStep = () => {
		if (currentStep < totalSteps) {
			currentStep++;
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			currentStep--;
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	// Form submission
	const handleSubmit = async () => {
		isSubmitting = true;
		submitError = false;

		try {
			const response = await fetch('/api/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				throw new Error('Submission failed');
			}

			submitSuccess = true;
			// Redirect to thank you page after delay
			setTimeout(() => {
				window.location.href = '/thank-you';
			}, 2000);
		} catch (error) {
			console.error('Error submitting form:', error);
			submitError = true;
		} finally {
			isSubmitting = false;
		}
	};

	// Initialize default language
	onMount(() => {
		// Set default language based on browser
		const userLang = navigator.language;
	});
</script>

<svelte:head>
	<title
		>{language.isJapanese()
			? 'AIコンサルティング | ビジネス効率化'
			: 'AI Consulting | Business Optimization'}</title
	>
	<meta
		name="description"
		content={language.isJapanese()
			? 'AIテクノロジーを活用してビジネスプロセスを最適化。無料のソフトウェア推奨リストを今すぐ入手。'
			: 'Optimize your business processes with AI technology. Get your free software recommendation list today.'}
	/>
</svelte:head>

<div
	class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 dark:from-gray-900 dark:to-indigo-950 dark:text-gray-200"
>
	<Header />

	<main class="container mx-auto max-w-4xl px-4 py-8">
		<div class="fixed top-4 right-4 z-20">
			<LanguageToggle />
		</div>

		<div class="mb-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
			<!-- Progress indicator -->
			<div class="mb-6">
				<div class="mb-2 flex items-center justify-between">
					<span class="text-sm font-medium">
						{language.isJapanese() ? 'ステップ' : 'Step'}
						{currentStep} / {totalSteps}
					</span>
					<span class="text-sm font-medium">
						{Math.round((currentStep / totalSteps) * 100)}%
					</span>
				</div>
				<div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
					<div
						class="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
						style="width: {(currentStep / totalSteps) * 100}%"
					></div>
				</div>
			</div>

			<!-- Form steps -->
			{#if currentStep === 1}
				<div in:fade={{ duration: 300 }}>
					<h2 class="mb-6 text-center text-2xl font-bold">
						{language.isJapanese() ? '業界を教えてください' : 'Tell us about your industry'}
					</h2>
					<IndustrySelect />
				</div>
			{:else if currentStep === 2}
				<div in:fade={{ duration: 300 }}>
					<h2 class="mb-6 text-center text-2xl font-bold">
						{language.isJapanese()
							? '現在使用しているテクノロジー'
							: 'Your current technology stack'}
					</h2>
					<TechStackSelect />
				</div>
			{:else if currentStep === 3}
				<div in:fade={{ duration: 300 }}>
					<h2 class="mb-6 text-center text-2xl font-bold">
						{language.isJapanese() ? '効率化したい業務' : 'Activities you want to optimize'}
					</h2>
					<PainPointTags />
					<TimeAssessment />
				</div>
			{:else if currentStep === 4}
				<div in:fade={{ duration: 300 }}>
					<h2 class="mb-6 text-center text-2xl font-bold">
						{language.isJapanese() ? '会社について' : 'About your company'}
					</h2>
					<CompanyForm />
				</div>
			{:else if currentStep === 5}
				<div in:fade={{ duration: 300 }}>
					<h2 class="mb-6 text-center text-2xl font-bold">
						{language.isJapanese()
							? '無料のAIソフトウェア推奨リストを入手'
							: 'Get your free AI software recommendations'}
					</h2>
					<EmailCapture />

					{#if submitError}
						<div class="mt-4 rounded-md bg-red-100 p-3 text-red-700">
							{language.isJapanese()
								? 'エラーが発生しました。もう一度お試しください。'
								: 'An error occurred. Please try again.'}
						</div>
					{/if}

					{#if submitSuccess}
						<div class="mt-4 rounded-md bg-green-100 p-3 text-green-700">
							{language.isJapanese()
								? 'ありがとうございます！まもなくメールをお送りします。'
								: 'Thank you! We will email you shortly.'}
						</div>
					{/if}
				</div>
			{/if}

			<!-- Navigation buttons -->
			<div class="mt-8 flex justify-between">
				{#if currentStep > 1}
					<button
						onclick={prevStep}
						class="rounded-md bg-gray-200 px-4 py-2 transition hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
						disabled={isSubmitting}
					>
						{language.isJapanese() ? '戻る' : 'Back'}
					</button>
				{:else}
					<div></div>
				{/if}

				{#if currentStep < totalSteps}
					<button
						onclick={nextStep}
						class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
					>
						{language.isJapanese() ? '次へ' : 'Next'}
					</button>
				{:else}
					<button
						onclick={handleSubmit}
						class="flex items-center rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
						disabled={isSubmitting}
					>
						{#if isSubmitting}
							<svg
								class="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						{/if}
						{language.isJapanese() ? '送信' : 'Submit'}
					</button>
				{/if}
			</div>
		</div>

		<SocialProof />
	</main>

	<Footer />
</div>

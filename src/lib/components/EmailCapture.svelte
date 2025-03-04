<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
	import { formData } from '$lib/stores/formData.svelte';

	// Email validation
	let emailError = $state(false);
	let isAccepted = $state(false);
	let acceptError = $state(false);

	function validateEmail(email: string) {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	}

	function handleEmailInput() {
		if (formData.email && !validateEmail(formData.email)) {
			emailError = true;
		} else {
			emailError = false;
		}
	}

	function validateForm() {
		let isValid = true;

		// Check email
		if (!formData.email || !validateEmail(formData.email)) {
			emailError = true;
			isValid = false;
		}

		// Check terms acceptance
		if (!isAccepted) {
			acceptError = true;
			isValid = false;
		}

		return isValid;
	}
</script>

<section>
	<div class="space-y-4">
		<!-- Email input -->
		<div>
			<label for="email" class="mb-1 block font-medium">
				{language.currentLanguage === 'ja' ? 'メールアドレス' : 'Email Address'}
				<span class="text-red-500">*</span>
			</label>
			<input
				type="email"
				id="email"
				name="email"
				bind:value={formData.email}
				oninput={handleEmailInput}
				placeholder={language.currentLanguage === 'ja'
					? 'your-email@example.com'
					: 'your-email@example.com'}
				class="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white {emailError
					? 'border-red-500'
					: ''}"
			/>
			{#if emailError}
				<p class="mt-1 text-sm text-red-500">
					{language.currentLanguage === 'ja'
						? '有効なメールアドレスを入力してください'
						: 'Please enter a valid email address'}
				</p>
			{/if}
		</div>

		<!-- Terms acceptance -->
		<div class="flex items-start">
			<div class="flex h-5 items-center">
				<input
					id="accept"
					type="checkbox"
					bind:checked={isAccepted}
					onchange={() => (acceptError = !isAccepted)}
					class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 {acceptError
						? 'border-red-500'
						: ''}"
				/>
			</div>
			<div class="ml-3 text-sm">
				<label
					for="accept"
					class={acceptError ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}
				>
					{language.currentLanguage === 'ja'
						? 'プライバシーポリシーに同意します。メールでのご連絡に同意します。'
						: 'I agree to the privacy policy. I consent to receiving emails.'}
				</label>
			</div>
		</div>

		{#if acceptError}
			<p class="mt-1 text-sm text-red-500">
				{language.currentLanguage === 'ja'
					? '続行するには同意が必要です'
					: 'You must agree to continue'}
			</p>
		{/if}

		<!-- Summary -->
		<div class="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
			<h4 class="text-lg font-medium text-blue-800 dark:text-blue-300">
				{language.currentLanguage === 'ja' ? '無料で受け取れるもの:' : 'You will receive for free:'}
			</h4>
			<ul class="mt-2 space-y-1 text-blue-700 dark:text-blue-200">
				<li class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					{language.currentLanguage === 'ja'
						? 'カスタマイズされたAIソフトウェア推奨リスト'
						: 'Customized AI software recommendations'}
				</li>
				<li class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					{language.currentLanguage === 'ja'
						? '導入方法の基本ガイド'
						: 'Basic implementation guides'}
				</li>
				<li class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					{language.currentLanguage === 'ja'
						? '無料コンサルティングセッションの予約案内'
						: 'Instructions to book a free consultation'}
				</li>
			</ul>
		</div>
	</div>
</section>

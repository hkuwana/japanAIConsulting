<script lang="ts">
	import { onMount } from 'svelte';
	import { language } from '$lib/stores/language.svelte';

	// Form data based on the FormDataType from the store
	let formData = {
		industry: '',
		techStack: [],
		painPoints: [],
		timeSpent: 0,
		companyName: '',
		companySize: '',
		companyDescription: '',
		email: '',
		languagePreference: language.getCurrent()
	};

	// Form submission
	async function handleSubmit(event: Event) {
		event.preventDefault();
		try {
			// Form submission logic to be implemented
			console.log('Form submitted:', formData);
			alert(
				language.isEnglish() ? 'Thank you for your inquiry!' : 'お問い合わせありがとうございます！'
			);
			// Reset form after submission
			formData = {
				industry: '',
				techStack: [],
				painPoints: [],
				timeSpent: 0,
				companyName: '',
				companySize: '',
				companyDescription: '',
				email: '',
				languagePreference: language.getCurrent()
			};
		} catch (error) {
			console.error('Error submitting form:', error);
			alert(
				language.isEnglish()
					? 'Error submitting form. Please try again.'
					: 'フォームの送信中にエラーが発生しました。もう一度お試しください。'
			);
		}
	}

	onMount(() => {
		// Any client-side initialization can go here
	});
</script>

<svelte:head>
	<title>{language.isEnglish() ? 'AI Consulting Services' : 'AIコンサルティングサービス'}</title>
	<meta
		name="description"
		content={language.isEnglish()
			? 'Expert AI consulting services tailored for Japanese businesses'
			: '日本企業向けの専門的なAIコンサルティングサービス'}
	/>
	<meta
		name="keywords"
		content={language.isEnglish()
			? 'AI consulting, Japanese business, AI strategy, AI implementation'
			: 'AIコンサルティング, 日本企業, AI戦略, AI実装'}
	/>
	<meta
		property="og:title"
		content={language.isEnglish() ? 'AI Consulting Services' : 'AIコンサルティングサービス'}
	/>
	<meta
		property="og:description"
		content={language.isEnglish()
			? 'Expert AI consulting services tailored for Japanese businesses'
			: '日本企業向けの専門的なAIコンサルティングサービス'}
	/>
	<meta property="og:type" content="website" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="container mx-auto max-w-6xl px-4 py-8">
	<!-- Language toggle button -->
	<div class="mb-4 flex justify-end">
		<button onclick={() => language.toggle()} class="btn btn-primary btn-sm">
			{language.isEnglish() ? '日本語' : 'English'}
		</button>
	</div>

	<!-- Header section -->
	<header class="bg-base-200 mb-12 rounded-lg p-8 text-center">
		<h1 class="text-primary mb-2 text-4xl font-bold">
			{language.isEnglish() ? 'AI Consulting Services' : 'AIコンサルティングサービス'}
		</h1>
		<p class="text-base-content/70 mx-auto max-w-3xl text-xl">
			{language.isEnglish()
				? 'Strategic AI solutions tailored for Japanese business environments'
				: '日本のビジネス環境に合わせた戦略的AIソリューション'}
		</p>
	</header>

	<!-- Services section -->
	<section class="mb-12">
		<h2 class="text-primary mb-6 text-3xl font-bold">
			{language.isEnglish() ? 'AI Advisory Services' : 'AIアドバイザリーサービス'}
		</h2>

		<div class="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
			<!-- Strategic AI Consultation -->
			<div class="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Strategic AI Consultation' : '戦略的AIコンサルテーション'}
					</h3>
					<ul class="list-disc space-y-2 pl-5">
						<li>
							{language.isEnglish()
								? 'Premium advisory retainer (4-8 hours monthly)'
								: 'プレミアムアドバイザリーリテイナー（月4〜8時間）'}
						</li>
						<li>
							{language.isEnglish()
								? 'Expert guidance on AI implementation strategy'
								: 'AI実装戦略に関する専門的なガイダンス'}
						</li>
						<li>
							{language.isEnglish()
								? 'Personalized recommendations for Japanese business context'
								: '日本のビジネス文脈に合わせたパーソナライズされた推奨事項'}
						</li>
						<li>
							{language.isEnglish()
								? 'Access to exclusive AI insights relevant to your industry'
								: 'あなたの業界に関連する独占的なAIインサイトへのアクセス'}
						</li>
					</ul>
				</div>
			</div>

			<!-- AI Diagnostic Workshop -->
			<div class="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'AI Diagnostic Workshop' : 'AI診断ワークショップ'}
					</h3>
					<ul class="list-disc space-y-2 pl-5">
						<li>
							{language.isEnglish()
								? '3-4 hour comprehensive assessment'
								: '3〜4時間の包括的な評価'}
						</li>
						<li>
							{language.isEnglish()
								? 'Identification of key AI opportunities specific to your business'
								: 'あなたのビジネスに特化した主要なAIの機会の特定'}
						</li>
						<li>
							{language.isEnglish()
								? 'Prioritized implementation roadmap'
								: '優先順位付けされた実装ロードマップ'}
						</li>
						<li>
							{language.isEnglish()
								? 'ROI analysis of potential AI solutions'
								: '潜在的なAIソリューションのROI分析'}
						</li>
					</ul>
				</div>
			</div>

			<!-- Implementation Partnership Program -->
			<div class="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish()
							? 'Implementation Partnership Program'
							: '実装パートナーシッププログラム'}
					</h3>
					<ul class="list-disc space-y-2 pl-5">
						<li>
							{language.isEnglish()
								? 'Strategic oversight of AI implementation projects'
								: 'AI実装プロジェクトの戦略的監督'}
						</li>
						<li>
							{language.isEnglish()
								? 'Connection to vetted technical partners'
								: '審査済みの技術パートナーへの接続'}
						</li>
						<li>
							{language.isEnglish()
								? 'Quality assurance and progress monitoring'
								: '品質保証と進捗モニタリング'}
						</li>
						<li>
							{language.isEnglish()
								? 'Minimized risk and optimized outcomes'
								: 'リスクの最小化と結果の最適化'}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Choose Us section -->
	<section class="mb-12">
		<h2 class="text-primary mb-6 text-3xl font-bold">
			{language.isEnglish() ? 'Why Choose Our Services' : '当社のサービスが選ばれる理由'}
		</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- Japanese Business Expertise -->
			<div class="card bg-base-100 text-center shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-4xl">🔍</div>
					<h3 class="text-primary text-xl font-semibold">
						{language.isEnglish() ? 'Japanese Business Expertise' : '日本のビジネス専門知識'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Specialized knowledge of AI applications for Japanese businesses'
							: '日本企業向けのAIアプリケーションに関する専門知識'}
					</p>
				</div>
			</div>

			<!-- Time-Efficient Approach -->
			<div class="card bg-base-100 text-center shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-4xl">⏱️</div>
					<h3 class="text-primary text-xl font-semibold">
						{language.isEnglish() ? 'Time-Efficient Approach' : '時間効率の良いアプローチ'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Time-efficient approach that delivers maximum value'
							: '最大の価値を提供する時間効率の良いアプローチ'}
					</p>
				</div>
			</div>

			<!-- Practical Solutions -->
			<div class="card bg-base-100 text-center shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-4xl">📊</div>
					<h3 class="text-primary text-xl font-semibold">
						{language.isEnglish() ? 'Practical Solutions' : '実用的なソリューション'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Focus on practical solutions with measurable results'
							: '測定可能な結果を持つ実用的なソリューションに焦点'}
					</p>
				</div>
			</div>

			<!-- Strategic Expertise -->
			<div class="card bg-base-100 text-center shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-4xl">💡</div>
					<h3 class="text-primary text-xl font-semibold">
						{language.isEnglish() ? 'Strategic Expertise' : '戦略的な専門知識'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Strategic thinking combined with technical expertise'
							: '技術的な専門知識と戦略的思考の組み合わせ'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials section -->
	<section class="mb-12">
		<h2 class="text-primary mb-6 text-3xl font-bold">
			{language.isEnglish() ? 'Client Testimonials' : 'クライアントの声'}
		</h2>
		<div class="card bg-base-100 text-base-content/70 p-8 text-center italic shadow-lg">
			{language.isEnglish()
				? 'Testimonials will be added here as they become available.'
				: 'お客様の声は、入手可能になり次第ここに追加されます。'}
		</div>
	</section>

	<!-- Contact section -->
	<section class="mb-12" id="contact">
		<h2 class="text-primary mb-6 text-3xl font-bold">
			{language.isEnglish() ? 'Contact Us' : 'お問い合わせ'}
		</h2>
		<div class="grid gap-8 md:grid-cols-3">
			<!-- Contact information -->
			<div class="card bg-primary text-primary-content col-span-1">
				<div class="card-body">
					<h3 class="card-title text-xl font-semibold">
						{language.isEnglish() ? 'Get in Touch' : 'お問い合わせ方法'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Ready to transform your business with AI? Contact us to discuss your specific needs.'
							: 'AIでビジネスを変革する準備はできていますか？特定のニーズについて話し合うには、お問い合わせください。'}
					</p>
					<div class="mt-6 space-y-2">
						<p><strong>Email:</strong> contact@example.com</p>
						<p>
							<strong>{language.isEnglish() ? 'Phone' : '電話番号'}:</strong> +81 XX-XXXX-XXXX
						</p>
					</div>
				</div>
			</div>

			<!-- Contact form -->
			<div class="card bg-base-100 col-span-2 shadow-lg">
				<div class="card-body">
					<form class="space-y-4" onsubmit={handleSubmit}>
						<!-- Company information fieldset -->
						<fieldset class="border-base-300 rounded-md border p-4">
							<legend class="px-2 font-semibold">
								{language.isEnglish() ? 'Company Information' : '会社情報'}
							</legend>

							<div class="form-control w-full">
								<label class="label" for="companyName">
									<span class="label-text">
										{language.isEnglish() ? 'Company Name' : '会社名'}
									</span>
								</label>
								<input
									type="text"
									id="companyName"
									bind:value={formData.companyName}
									placeholder={language.isEnglish() ? 'Your company name' : '会社名'}
									class="input input-bordered w-full"
								/>
							</div>

							<div class="form-control w-full">
								<label class="label" for="companySize">
									<span class="label-text">
										{language.isEnglish() ? 'Company Size' : '会社規模'}
									</span>
								</label>
								<select
									id="companySize"
									bind:value={formData.companySize}
									class="select select-bordered w-full"
								>
									<option value="" disabled selected>
										{language.isEnglish() ? 'Select company size' : '会社規模を選択'}
									</option>
									<option value="1-10">1-10</option>
									<option value="11-50">11-50</option>
									<option value="51-200">51-200</option>
									<option value="201-500">201-500</option>
									<option value="500+">500+</option>
								</select>
							</div>

							<div class="form-control w-full">
								<label class="label" for="industry">
									<span class="label-text">
										{language.isEnglish() ? 'Industry' : '業界'}
									</span>
								</label>
								<input
									type="text"
									id="industry"
									bind:value={formData.industry}
									placeholder={language.isEnglish() ? 'Your industry' : '業界'}
									class="input input-bordered w-full"
								/>
							</div>

							<div class="form-control w-full">
								<label class="label" for="companyDescription">
									<span class="label-text">
										{language.isEnglish() ? 'Company Description' : '会社概要'}
									</span>
								</label>
								<textarea
									id="companyDescription"
									bind:value={formData.companyDescription}
									placeholder={language.isEnglish()
										? 'Brief description of your company'
										: '会社の簡単な説明'}
									class="textarea textarea-bordered w-full"
									rows="3"
								></textarea>
							</div>
						</fieldset>

						<!-- Technical information fieldset -->
						<fieldset class="border-base-300 rounded-md border p-4">
							<legend class="px-2 font-semibold">
								{language.isEnglish() ? 'Technical Information' : '技術情報'}
							</legend>

							<div class="form-control w-full">
								<label class="label" for="techStack">
									<span class="label-text">
										{language.isEnglish() ? 'Current Technology Stack' : '現在の技術スタック'}
									</span>
								</label>
								<input
									type="text"
									id="techStack"
									placeholder={language.isEnglish()
										? 'Technologies you currently use'
										: '現在使用している技術'}
									class="input input-bordered w-full"
									onchange={(e) => {
										formData.techStack = e.target.value.split(',').map((item) => item.trim());
									}}
								/>
								<label class="label">
									<span class="label-text-alt">
										{language.isEnglish() ? 'Separate with commas' : 'カンマで区切ってください'}
									</span>
								</label>
							</div>

							<div class="form-control w-full">
								
								<label class="label" for="painPoints">
									<span class="label-text">
										{language.isEnglish() ? 'Current Pain Points' : '現在の課題点'}
									</span>
								</label>
								<textarea
									id="painPoints"
									placeholder={language.isEnglish()
										? 'Describe your current challenges'
										: '現在の課題を説明してください'}
									class="textarea textarea-bordered w-full"
									rows="3"
									onchange={(e) => {
										formData.painPoints = e.target.value.split('\n').filter(Boolean);
									}}
								></textarea>
							</div>

							<div class="form-control w-full">
								<label class="label" for="timeSpent">
									<span class="label-text">
										{language.isEnglish()
											? 'Time Spent on AI Research (hours/week)'
											: 'AI研究に費やす時間（時間/週）'}
									</span>
								</label>
								<input
									type="range"
									id="timeSpent"
									bind:value={formData.timeSpent}
									min="0"
									max="40"
									step="1"
									class="range"
								/>
								<div class="flex w-full justify-between text-xs">
									<span>0</span>
									<span>10</span>
									<span>20</span>
									<span>30</span>
									<span>40+</span>
								</div>
							</div>
						</fieldset>

						<!-- Contact information fieldset -->
						<fieldset class="border-base-300 rounded-md border p-4">
							<legend class="px-2 font-semibold">
								{language.isEnglish() ? 'Contact Information' : '連絡先情報'}
							</legend>

							<div class="form-control w-full">
								<label class="label" for="email">
									<span class="label-text">
										{language.isEnglish() ? 'Email' : 'メールアドレス'}
									</span>
								</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									placeholder={language.isEnglish() ? 'Your email address' : 'メールアドレス'}
									class="input input-bordered w-full"
									required
								/>
							</div>

							<div class="form-control w-full">
								<label class="label" for="languagePreference">
									<span class="label-text">
										{language.isEnglish() ? 'Preferred Communication Language' : '希望する連絡言語'}
									</span>
								</label>
								<select
									id="languagePreference"
									bind:value={formData.languagePreference}
									class="select select-bordered w-full"
								>
									<option value="en">English</option>
									<option value="ja">日本語</option>
								</select>
							</div>
						</fieldset>

						<button type="submit" class="btn btn-primary w-full">
							{language.isEnglish() ? 'Submit Inquiry' : '問い合わせを送信'}
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>

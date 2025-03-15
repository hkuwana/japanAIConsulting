<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
</script>

<svelte:head>
	<title
		>{language.isEnglish()
			? 'Our AI Consulting Services'
			: '当社のAIコンサルティングサービス'}</title
	>
	<meta
		name="description"
		content={language.isEnglish()
			? 'Comprehensive AI consulting services tailored for Japanese businesses'
			: '日本企業向けの包括的なAIコンサルティングサービス'}
	/>
	<meta
		name="keywords"
		content={language.isEnglish()
			? 'AI consulting, Japanese business, AI implementation, data strategy, machine learning'
			: 'AIコンサルティング, 日本企業, AI実装, データ戦略, 機械学習'}
	/>
</svelte:head>

<div class="container mx-auto max-w-6xl px-4 py-8">
	<!-- Header section -->
	<header class="bg-base-200 mb-12 rounded-lg p-8 text-center">
		<h1 class="text-primary mb-2 text-4xl font-bold">
			{language.isEnglish() ? 'Our AI Consulting Services' : '当社のAIコンサルティングサービス'}
		</h1>
		<p class="text-base-content/70 mx-auto max-w-3xl text-xl">
			{language.isEnglish()
				? 'Tailored AI solutions to transform your business in the Japanese market'
				: '日本市場でビジネスを変革するためのカスタマイズされたAIソリューション'}
		</p>
	</header>

	<!-- Service Overview section -->
	<section class="mb-16">
		<div class="grid gap-10 md:grid-cols-2">
			<div>
				<h2 class="text-primary mb-6 text-3xl font-bold">
					{language.isEnglish() ? 'Transforming Business Through AI' : 'AIによるビジネス変革'}
				</h2>
				<p class="mb-4">
					{language.isEnglish()
						? 'Our AI consulting services are designed to help Japanese businesses navigate the complex landscape of artificial intelligence and machine learning technologies.'
						: '当社のAIコンサルティングサービスは、日本企業が人工知能と機械学習技術の複雑な風景をナビゲートするのを支援するために設計されています。'}
				</p>
				<p class="mb-4">
					{language.isEnglish()
						? 'We focus on practical, results-driven approaches that align with your business goals and Japanese market realities.'
						: '私たちは、ビジネス目標と日本市場の現実に沿った実用的で結果主導のアプローチに焦点を当てています。'}
				</p>
				<p>
					{language.isEnglish()
						? 'With our expertise in both AI technologies and Japanese business culture, we bridge the gap between cutting-edge innovation and practical implementation.'
						: 'AI技術と日本のビジネス文化の両方における専門知識により、私たちは最先端のイノベーションと実用的な実装のギャップを埋めます。'}
				</p>
			</div>
			<div class="flex items-center justify-center">
				<img
					src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
					alt={language.isEnglish() ? 'AI Consulting' : 'AIコンサルティング'}
					class="max-h-80 rounded-lg object-cover shadow-lg"
				/>
			</div>
		</div>
	</section>

	<!-- Core Services section -->
	<section class="mb-16">
		<h2 class="text-primary mb-8 text-center text-3xl font-bold">
			{language.isEnglish() ? 'Our Core Services' : '主要サービス'}
		</h2>

		<!-- Strategic AI Consultation -->
		<div class="card bg-base-100 lg:card-side mb-8 shadow-lg">
			<figure class="lg:w-1/3">
				<img
					src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
					alt={language.isEnglish() ? 'Strategic Consultation' : '戦略的コンサルテーション'}
					class="h-full w-full object-cover"
				/>
			</figure>
			<div class="card-body lg:w-2/3">
				<h3 class="card-title text-primary text-2xl">
					{language.isEnglish() ? 'Strategic AI Consultation' : '戦略的AIコンサルテーション'}
				</h3>
				<p class="mb-4">
					{language.isEnglish()
						? 'Our premium advisory service provides dedicated access to senior AI strategists for 4-8 hours monthly. This retainer model ensures you have consistent expert guidance through your AI journey.'
						: '当社のプレミアムアドバイザリーサービスは、月に4〜8時間、上級AIストラテジストへの専用アクセスを提供します。このリテイナーモデルにより、AIの旅を通じて一貫した専門家のガイダンスを確保できます。'}
				</p>
				<div class="mt-4">
					<h4 class="mb-2 font-semibold">
						{language.isEnglish() ? 'Key Benefits:' : '主な利点:'}
					</h4>
					<ul class="list-disc space-y-1 pl-5">
						<li>
							{language.isEnglish()
								? 'Personalized AI strategy aligned with your business goals'
								: 'ビジネス目標に沿ったパーソナライズされたAI戦略'}
						</li>
						<li>
							{language.isEnglish()
								? 'Expert evaluation of AI opportunities and challenges'
								: 'AI機会と課題の専門的評価'}
						</li>
						<li>
							{language.isEnglish()
								? 'Access to exclusive industry insights and research'
								: '独占的な業界インサイトと研究へのアクセス'}
						</li>
						<li>
							{language.isEnglish()
								? 'Ongoing support from an experienced AI advisor'
								: '経験豊富なAIアドバイザーからの継続的なサポート'}
						</li>
					</ul>
				</div>
				<div class="card-actions mt-4 justify-end">
					<a href="/price" class="btn btn-primary">
						{language.isEnglish() ? 'View Pricing' : '料金を確認する'}
					</a>
				</div>
			</div>
		</div>

		<!-- AI Diagnostic Workshop -->
		<div class="card bg-base-100 lg:card-side mb-8 shadow-lg">
			<div class="card-body lg:w-2/3">
				<h3 class="card-title text-primary text-2xl">
					{language.isEnglish() ? 'AI Diagnostic Workshop' : 'AI診断ワークショップ'}
				</h3>
				<p class="mb-4">
					{language.isEnglish()
						? 'Our structured 3-4 hour workshop is designed to rapidly identify key AI opportunities within your business and create a prioritized implementation roadmap with ROI analysis.'
						: '当社の構造化された3〜4時間のワークショップは、ビジネス内の主要なAIの機会を迅速に特定し、ROI分析を含む優先順位付けされた実装ロードマップを作成するように設計されています。'}
				</p>
				<div class="mt-4">
					<h4 class="mb-2 font-semibold">
						{language.isEnglish() ? 'Workshop Process:' : 'ワークショッププロセス:'}
					</h4>
					<ul class="list-disc space-y-1 pl-5">
						<li>
							{language.isEnglish()
								? 'Business and technology landscape assessment'
								: 'ビジネスと技術の環境評価'}
						</li>
						<li>
							{language.isEnglish()
								? 'AI opportunity identification and prioritization'
								: 'AI機会の特定と優先順位付け'}
						</li>
						<li>
							{language.isEnglish()
								? 'Implementation roadmap development with timeline'
								: 'タイムラインを含む実装ロードマップの開発'}
						</li>
						<li>
							{language.isEnglish()
								? 'ROI and impact analysis for each opportunity'
								: '各機会のROIとインパクト分析'}
						</li>
						<li>
							{language.isEnglish()
								? 'Follow-up documentation and recommendations'
								: 'フォローアップ文書と推奨事項'}
						</li>
					</ul>
				</div>
				<div class="card-actions mt-4 justify-end">
					<a href="/price" class="btn btn-primary">
						{language.isEnglish() ? 'View Pricing' : '料金を確認する'}
					</a>
				</div>
			</div>
			<figure class="lg:w-1/3">
				<img
					src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
					alt={language.isEnglish() ? 'Diagnostic Workshop' : '診断ワークショップ'}
					class="h-full w-full object-cover"
				/>
			</figure>
		</div>

		<!-- Implementation Partnership -->
		<div class="card bg-base-100 lg:card-side shadow-lg">
			<figure class="lg:w-1/3">
				<img
					src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
					alt={language.isEnglish() ? 'Implementation Partnership' : '実装パートナーシップ'}
					class="h-full w-full object-cover"
				/>
			</figure>
			<div class="card-body lg:w-2/3">
				<h3 class="card-title text-primary text-2xl">
					{language.isEnglish() ? 'Implementation Partnership' : '実装パートナーシップ'}
				</h3>
				<p class="mb-4">
					{language.isEnglish()
						? 'For clients ready to implement AI solutions, we provide strategic oversight while connecting you with vetted technical partners for the development work, allowing you to minimize risk and optimize outcomes.'
						: 'AIソリューションを実装する準備ができているクライアントには、開発作業のために審査済みの技術パートナーとつなぎながら、戦略的な監督を提供し、リスクを最小限に抑え、結果を最適化できるようにします。'}
				</p>
				<div class="mt-4">
					<h4 class="mb-2 font-semibold">
						{language.isEnglish()
							? 'Partnership Includes:'
							: 'パートナーシップには以下が含まれます:'}
					</h4>
					<ul class="list-disc space-y-1 pl-5">
						<li>
							{language.isEnglish()
								? 'Selection of appropriate technical partners from our network'
								: '当社のネットワークから適切な技術パートナーの選択'}
						</li>
						<li>
							{language.isEnglish()
								? 'Strategic guidance throughout implementation'
								: '実装全体を通じた戦略的ガイダンス'}
						</li>
						<li>
							{language.isEnglish()
								? 'Quality assurance and milestone monitoring'
								: '品質保証とマイルストーンモニタリング'}
						</li>
						<li>
							{language.isEnglish()
								? 'Progress reporting and strategic adjustments'
								: '進捗報告と戦略的調整'}
						</li>
						<li>
							{language.isEnglish()
								? 'Final solution validation and optimization'
								: '最終ソリューションの検証と最適化'}
						</li>
					</ul>
				</div>
				<div class="card-actions mt-4 justify-end">
					<a href="/price" class="btn btn-primary">
						{language.isEnglish() ? 'View Pricing' : '料金を確認する'}
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Specialized AI Solutions -->
	<section class="mb-16">
		<h2 class="text-primary mb-8 text-center text-3xl font-bold">
			{language.isEnglish() ? 'Specialized AI Solutions' : '専門的なAIソリューション'}
		</h2>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Generative AI Integration -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Generative AI Integration' : '生成AIの統合'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Implement cutting-edge large language models and generative AI into your products and workflows to enhance productivity and innovation.'
							: '最先端の大規模言語モデルと生成AIを製品やワークフローに実装し、生産性とイノベーションを向上させます。'}
					</p>
				</div>
			</div>

			<!-- Computer Vision Solutions -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish()
							? 'Computer Vision Solutions'
							: 'コンピュータビジョンソリューション'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Leverage visual AI for quality control, process automation, customer experience, and security applications in your business.'
							: '品質管理、プロセス自動化、顧客体験、およびセキュリティアプリケーションでビジュアルAIを活用します。'}
					</p>
				</div>
			</div>

			<!-- Predictive Analytics -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Predictive Analytics' : '予測分析'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Harness your data to predict trends, optimize operations, and make data-driven decisions that increase efficiency and profitability.'
							: 'データを活用してトレンドを予測し、運用を最適化し、効率性と収益性を高めるデータ駆動型の意思決定を行います。'}
					</p>
				</div>
			</div>

			<!-- Natural Language Processing -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Natural Language Processing' : '自然言語処理'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Implement AI systems that understand, analyze, and generate human language for customer service, content analysis, and multilingual capabilities.'
							: '顧客サービス、コンテンツ分析、多言語機能のために、人間の言語を理解、分析、生成するAIシステムを実装します。'}
					</p>
				</div>
			</div>

			<!-- Process Automation -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Process Automation' : 'プロセス自動化'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Identify and implement intelligent automation opportunities that reduce manual effort and increase accuracy across your business processes.'
							: 'ビジネスプロセス全体で手動の労力を削減し、精度を向上させるインテリジェントな自動化の機会を特定して実装します。'}
					</p>
				</div>
			</div>

			<!-- Data Strategy & Governance -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Data Strategy & Governance' : 'データ戦略とガバナンス'}
					</h3>
					<p>
						{language.isEnglish()
							? 'Develop comprehensive strategies for data collection, management, and utilization that align with regulatory requirements and business objectives.'
							: '規制要件とビジネス目標に沿ったデータ収集、管理、活用のための包括的な戦略を開発します。'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Industries We Serve -->
	<section class="mb-16">
		<h2 class="text-primary mb-8 text-center text-3xl font-bold">
			{language.isEnglish() ? 'Industries We Serve' : 'サービス提供業界'}
		</h2>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- Manufacturing -->
			<div class="card bg-base-100 text-center shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-4xl">🏭</div>
					<h3 class="text-primary text-xl font-semibold">
						{language.isEnglish() ? 'Manufacturing' : '製造業'}
					</h3>
				</div>
			</div>

			<!-- Financial Services -->
			<div class="card bg-base-100 text-center shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-4xl">💹</div>
					<h3 class="text-primary text-xl font-semibold">
						{language.isEnglish() ? 'Financial Services' : '金融サービス'}
					</h3>
				</div>
			</div>

			<!-- Healthcare -->
			<div class="card bg-base-100 text-center shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-4xl">🏥</div>
					<h3 class="text-primary text-xl font-semibold">
						{language.isEnglish() ? 'Healthcare' : 'ヘルスケア'}
					</h3>
				</div>
			</div>

			<!-- Retail & E-commerce -->
			<div class="card bg-base-100 text-center shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-4xl">🛒</div>
					<h3 class="text-primary text-xl font-semibold">
						{language.isEnglish() ? 'Retail & E-commerce' : '小売・Eコマース'}
					</h3>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="mb-8">
		<div class="bg-primary text-primary-content rounded-lg p-8 text-center">
			<h2 class="mb-4 text-3xl font-bold">
				{language.isEnglish()
					? 'Ready to Transform Your Business with AI?'
					: 'AIであなたのビジネスを変革する準備はできていますか？'}
			</h2>
			<p class="mx-auto mb-6 max-w-2xl text-lg">
				{language.isEnglish()
					? 'Contact us today to discuss how our AI consulting services can help your organization achieve its strategic goals.'
					: '当社のAIコンサルティングサービスがあなたの組織の戦略的目標達成にどのように役立つかについて、今日お問い合わせください。'}
			</p>
			<div class="flex justify-center">
				<a href="/price#contact" class="btn btn-secondary">
					{language.isEnglish() ? 'Contact Us' : 'お問い合わせ'}
				</a>
			</div>
		</div>
	</section>
</div>

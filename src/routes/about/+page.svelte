<script lang="ts">
	import { language } from '$lib/stores/language.svelte';
</script>

<svelte:head>
	<title
		>{language.isEnglish() ? 'About Japan AI Consulting' : '日本AIコンサルティングについて'}</title
	>
	<meta
		name="description"
		content={language.isEnglish()
			? 'Learn about Japan AI Consulting - AI strategy experts for Japanese businesses'
			: '日本AIコンサルティングについて - 日本企業向けAI戦略の専門家'}
	/>
	<meta
		name="keywords"
		content={language.isEnglish()
			? 'AI consulting, Japanese business, company profile, AI experts, AI strategy'
			: 'AIコンサルティング, 日本企業, 会社概要, AI専門家, AI戦略'}
	/>
</svelte:head>

<div class="container mx-auto max-w-6xl px-4 py-8">
	<!-- Header section -->
	<header class="bg-base-200 mb-12 rounded-lg p-8 text-center">
		<h1 class="text-primary mb-2 text-4xl font-bold">
			{language.isEnglish() ? 'About Japan AI Consulting' : '日本AIコンサルティングについて'}
		</h1>
		<p class="text-base-content/70 mx-auto max-w-3xl text-xl">
			{language.isEnglish()
				? 'Bridging the gap between cutting-edge AI and practical business implementation in Japan'
				: '日本における最先端AIと実用的なビジネス実装の間のギャップを埋める'}
		</p>
	</header>

	<!-- Company Story section -->
	<section class="mb-16">
		<div class="grid gap-10 md:grid-cols-2">
			<div>
				<h2 class="text-primary mb-6 text-3xl font-bold">
					{language.isEnglish() ? 'Our Story' : '私たちのストーリー'}
				</h2>
				<p class="mb-4">
					{language.isEnglish()
						? 'Japan AI Consulting was founded with a clear mission: to help Japanese businesses harness the transformative power of artificial intelligence while navigating the unique cultural and business landscape of Japan.'
						: '日本AIコンサルティングは明確なミッションを持って設立されました：日本の独特な文化とビジネス環境を理解しながら、日本企業が人工知能の変革力を活用できるよう支援すること。'}
				</p>
				<p class="mb-4">
					{language.isEnglish()
						? 'Our founder recognized that while AI technology was advancing rapidly worldwide, many Japanese organizations faced challenges in effectively implementing these innovations due to language barriers, cultural differences, and traditional business practices.'
						: '創業者は、AI技術が世界中で急速に進歩している一方で、言語の壁、文化の違い、伝統的なビジネス慣行のために、多くの日本の組織がこれらのイノベーションを効果的に実装する上で課題に直面していることを認識しました。'}
				</p>
				<p>
					{language.isEnglish()
						? 'With deep expertise in both artificial intelligence and Japanese business culture, we bridge this gap – delivering strategic, practical AI solutions that respect tradition while embracing innovation.'
						: '人工知能と日本のビジネス文化の両方に深い専門知識を持つ当社は、このギャップを埋め、伝統を尊重しながらもイノベーションを受け入れる戦略的で実用的なAIソリューションを提供します。'}
				</p>
			</div>
			<div class="flex items-center justify-center">
				<img
					src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
					alt={language.isEnglish() ? 'Company office' : '会社オフィス'}
					class="max-h-80 rounded-lg object-cover shadow-lg"
				/>
			</div>
		</div>
	</section>

	<!-- Our Approach section -->
	<section class="bg-base-200 mb-16 rounded-lg p-8">
		<h2 class="text-primary mb-8 text-center text-3xl font-bold">
			{language.isEnglish() ? 'Our Approach' : '私たちのアプローチ'}
		</h2>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- Strategic Focus -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-center text-4xl">🎯</div>
					<h3 class="card-title text-primary justify-center">
						{language.isEnglish() ? 'Strategic Focus' : '戦略的焦点'}
					</h3>
					<p class="text-center">
						{language.isEnglish()
							? 'We prioritize business outcomes over technology hype, ensuring AI implementations are aligned with your strategic goals.'
							: '技術的な誇大広告よりもビジネス成果を優先し、AI実装が戦略的目標と一致していることを確認します。'}
					</p>
				</div>
			</div>

			<!-- Cultural Awareness -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-center text-4xl">🏮</div>
					<h3 class="card-title text-primary justify-center">
						{language.isEnglish() ? 'Cultural Awareness' : '文化的意識'}
					</h3>
					<p class="text-center">
						{language.isEnglish()
							? 'Our deep understanding of Japanese business culture ensures AI solutions that respect and enhance existing organizational structures.'
							: '日本のビジネス文化への深い理解により、既存の組織構造を尊重し、強化するAIソリューションを確保します。'}
					</p>
				</div>
			</div>

			<!-- Practical Implementation -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<div class="mb-4 text-center text-4xl">🛠️</div>
					<h3 class="card-title text-primary justify-center">
						{language.isEnglish() ? 'Practical Implementation' : '実用的な実装'}
					</h3>
					<p class="text-center">
						{language.isEnglish()
							? 'We focus on delivering measurable value through actionable AI solutions that can be implemented efficiently within your organization.'
							: '組織内で効率的に実装できる実行可能なAIソリューションを通じて、測定可能な価値の提供に焦点を当てています。'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Team section -->
	<section class="mb-16">
		<h2 class="text-primary mb-8 text-center text-3xl font-bold">
			{language.isEnglish() ? 'Our Leadership Team' : 'リーダーシップチーム'}
		</h2>

		<div class="grid gap-8 md:grid-cols-3">
			<!-- CEO -->
			<div class="card bg-base-100 shadow-lg">
				<figure class="px-8 pt-8">
					<img
						src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
						alt="CEO"
						class="mx-auto h-40 w-40 rounded-full object-cover"
					/>
				</figure>
				<div class="card-body text-center">
					<h3 class="card-title text-primary justify-center text-xl">Takeshi Yamamoto</h3>
					<p class="text-base-content/70 font-semibold">
						{language.isEnglish() ? 'Founder & CEO' : '創業者 & CEO'}
					</p>
					<p class="mt-2">
						{language.isEnglish()
							? 'Former AI researcher with 15+ years of experience in both Japanese corporations and Silicon Valley startups.'
							: '日本企業とシリコンバレーのスタートアップの両方で15年以上の経験を持つ元AI研究者。'}
					</p>
				</div>
			</div>

			<!-- CTO -->
			<div class="card bg-base-100 shadow-lg">
				<figure class="px-8 pt-8">
					<img
						src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
						alt="CTO"
						class="mx-auto h-40 w-40 rounded-full object-cover"
					/>
				</figure>
				<div class="card-body text-center">
					<h3 class="card-title text-primary justify-center text-xl">Akiko Tanaka</h3>
					<p class="text-base-content/70 font-semibold">
						{language.isEnglish() ? 'Chief Technology Officer' : '最高技術責任者'}
					</p>
					<p class="mt-2">
						{language.isEnglish()
							? 'AI systems specialist with expertise in machine learning implementation for enterprise environments.'
							: 'エンタープライズ環境向け機械学習実装の専門知識を持つAIシステムスペシャリスト。'}
					</p>
				</div>
			</div>

			<!-- Strategic Advisor -->
			<div class="card bg-base-100 shadow-lg">
				<figure class="px-8 pt-8">
					<img
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
						alt="Strategic Advisor"
						class="mx-auto h-40 w-40 rounded-full object-cover"
					/>
				</figure>
				<div class="card-body text-center">
					<h3 class="card-title text-primary justify-center text-xl">Hiroshi Nakamura</h3>
					<p class="text-base-content/70 font-semibold">
						{language.isEnglish() ? 'Strategic Advisor' : '戦略顧問'}
					</p>
					<p class="mt-2">
						{language.isEnglish()
							? 'Former executive at a major Japanese corporation with deep insights into traditional business transformation.'
							: '日本の大手企業の元幹部で、伝統的なビジネス変革に関する深い洞察を持つ。'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Our Values section -->
	<section class="mb-16">
		<h2 class="text-primary mb-8 text-center text-3xl font-bold">
			{language.isEnglish() ? 'Our Values' : '私たちの価値観'}
		</h2>

		<div class="grid gap-6 md:grid-cols-2">
			<!-- Integrity -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Integrity' : '誠実さ'}
					</h3>
					<p>
						{language.isEnglish()
							? 'We prioritize honesty and ethical practices in all our client relationships and AI implementations.'
							: 'すべてのクライアント関係とAI実装において、誠実さと倫理的な実践を優先します。'}
					</p>
				</div>
			</div>

			<!-- Excellence -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Excellence' : '卓越性'}
					</h3>
					<p>
						{language.isEnglish()
							? 'We are committed to delivering the highest quality of service and continuous improvement in everything we do.'
							: '私たちは、最高品質のサービスと、行うすべてのことにおける継続的な改善を提供することに尽力しています。'}
					</p>
				</div>
			</div>

			<!-- Innovation -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Innovation' : 'イノベーション'}
					</h3>
					<p>
						{language.isEnglish()
							? 'We embrace creative thinking and innovative approaches while ensuring practical, measurable outcomes.'
							: '実用的で測定可能な結果を確保しながら、創造的思考と革新的なアプローチを受け入れます。'}
					</p>
				</div>
			</div>

			<!-- Cultural Respect -->
			<div class="card bg-base-100 shadow-lg">
				<div class="card-body">
					<h3 class="card-title text-primary">
						{language.isEnglish() ? 'Cultural Respect' : '文化的尊重'}
					</h3>
					<p>
						{language.isEnglish()
							? 'We honor the unique aspects of Japanese business culture while introducing innovative AI solutions.'
							: '革新的なAIソリューションを導入しながら、日本のビジネス文化の独自の側面を尊重します。'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="mb-8">
		<div class="bg-primary text-primary-content rounded-lg p-8 text-center">
			<h2 class="mb-4 text-3xl font-bold">
				{language.isEnglish()
					? 'Partner with Japan AI Consulting'
					: '日本AIコンサルティングとパートナーになる'}
			</h2>
			<p class="mx-auto mb-6 max-w-2xl text-lg">
				{language.isEnglish()
					? 'Ready to transform your business with strategic AI solutions? Contact us today to schedule a consultation.'
					: '戦略的AIソリューションでビジネスを変革する準備はできていますか？今日お問い合わせいただき、コンサルテーションをスケジュールしてください。'}
			</p>
			<div class="flex justify-center">
				<a href="/price#contact" class="btn btn-secondary">
					{language.isEnglish() ? 'Contact Us' : 'お問い合わせ'}
				</a>
			</div>
		</div>
	</section>
</div>

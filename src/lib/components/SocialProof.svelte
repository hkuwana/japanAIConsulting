<script lang="ts">
	import { language } from '$lib/stores/language.svelte';

	// Testimonial data
	type TestimonialText = {
		en: string;
		ja: string;
	};

	type Testimonial = {
		id: number;
		name: TestimonialText;
		company: TestimonialText;
		role: TestimonialText;
		text: TestimonialText;
		avatar: string;
	};

	const testimonials: Testimonial[] = [
		{
			id: 1,
			name: { en: 'Tanaka Hiroshi', ja: '田中 浩' },
			company: { en: 'Tech Solutions Inc.', ja: 'テックソリューション株式会社' },
			role: { en: 'CTO', ja: '最高技術責任者' },
			text: {
				en: 'The AI solutions recommended by this service helped us reduce data entry time by 75%. Our team can now focus on more strategic tasks.',
				ja: 'このサービスが推奨するAIソリューションによって、データ入力時間を75%削減できました。チームはより戦略的なタスクに集中できるようになりました。'
			},
			avatar: '/images/testimonial-avatars/avatar-1.jpg'
		},
		{
			id: 2,
			name: { en: 'Yamada Keiko', ja: '山田 恵子' },
			company: { en: 'Health Partners', ja: 'ヘルスパートナーズ' },
			role: { en: 'Operations Director', ja: '運営部長' },
			text: {
				en: 'The customized recommendations perfectly matched our hospital needs. Implementation was smooth and our staff adapted quickly.',
				ja: 'カスタマイズされた推奨事項は私たちの病院のニーズに完全に一致しました。導入はスムーズで、スタッフもすぐに適応しました。'
			},
			avatar: '/images/testimonial-avatars/avatar-2.jpg'
		},
		{
			id: 3,
			name: { en: 'Suzuki Takashi', ja: '鈴木 孝' },
			company: { en: 'Finance Group', ja: 'ファイナンスグループ' },
			role: { en: 'Data Analyst', ja: 'データアナリスト' },
			text: {
				en: 'The AI tools recommended for our financial analysis have revolutionized our reporting process. What took days now takes hours.',
				ja: '私たちの財務分析のために推奨されたAIツールは、レポートプロセスに革命をもたらしました。以前は数日かかっていた作業が数時間で完了するようになりました。'
			},
			avatar: '/images/testimonial-avatars/avatar-3.jpg'
		}
	];

	function handleImageError(event: Event): void {
		const target = event.target as HTMLImageElement;
		target.src = '/images/testimonial-avatars/default-avatar.jpg';
	}
</script>

<section class="mt-16">
	<h2 class="mb-8 text-center text-2xl font-bold">
		{language === 'ja' ? '企業からの声' : 'What Our Clients Say'}
	</h2>

	<div class="grid gap-6 md:grid-cols-3">
		{#each testimonials as testimonial}
			<div class="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
				<div class="mb-4 flex items-center">
					<img
						src={testimonial.avatar}
						alt={language === 'ja' ? testimonial.name.ja : testimonial.name.en}
						class="mr-4 h-12 w-12 rounded-full object-cover"
						onerror={handleImageError}
					/>
					<div>
						<h3 class="font-medium">
							{language === 'ja' ? testimonial.name.ja : testimonial.name.en}
						</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							{language === 'ja' ? testimonial.role.ja : testimonial.role.en},
							{language === 'ja' ? testimonial.company.ja : testimonial.company.en}
						</p>
					</div>
				</div>
				<p class="text-gray-700 italic dark:text-gray-300">
					"{language === 'ja' ? testimonial.text.ja : testimonial.text.en}"
				</p>
			</div>
		{/each}
	</div>

	<div class="mt-10 text-center">
		<p class="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
			{language === 'ja'
				? '多くの企業がAIを活用して業務効率を大幅に向上させています。あなたのビジネスも次のレベルへ。'
				: 'Hundreds of businesses are improving their efficiency with AI. Your business could be next.'}
		</p>
	</div>
</section>

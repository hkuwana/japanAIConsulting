<script lang="ts">
	import { fly } from 'svelte/transition';
	import { writable } from 'svelte/store';

	// Language settings
	type Language = 'en' | 'ja';
	const currentLanguage = writable<Language>('en');

	// Translations
	const translations = {
		en: {
			title: 'Pricing | AI Workflow Consulting',
			meta: 'Transform your business with our AI workflow consulting services. Clear, value-based pricing with guaranteed ROI.',
			hero: {
				title: 'Transform Your Business with AI Workflow Solutions',
				subtitle:
					'Expert guidance and implementation tailored to your business needs—no matter where you are'
			},
			value:
				'Our consulting service bridges the gap between your existing business operations and cutting-edge AI technologies. We identify inefficiencies, implement tailored solutions, and guide your team through adoption—all while delivering measurable ROI. With our location-independent approach, you get world-class expertise without geographic limitations.',
			packages: {
				title: 'Service Packages',
				essential: {
					title: 'Essentials',
					price: '¥750,000 - ¥1,200,000',
					desc: 'Perfect for small businesses looking to identify and implement basic AI improvements.',
					features: [
						'Discovery & Assessment (2 weeks)',
						'Basic Implementation Planning',
						'Up to 3 workflow optimizations',
						'Remote implementation guidance',
						'30 days of post-implementation support'
					]
				},
				business: {
					title: 'Business Transformer',
					price: '¥1,800,000 - ¥2,700,000',
					badge: 'Most Popular',
					desc: 'Comprehensive solution for medium-sized businesses ready for significant workflow transformation.',
					features: [
						'In-depth Discovery & Assessment (3 weeks)',
						'Comprehensive Implementation Planning',
						'Up to 8 workflow optimizations',
						'Hybrid remote/on-site implementation',
						'Staff training program',
						'90 days of optimization support',
						'Quarterly performance reviews'
					]
				},
				enterprise: {
					title: 'Enterprise Solution',
					price: '¥3,750,000 - ¥6,000,000+',
					desc: 'End-to-end AI transformation for larger organizations with complex operational needs.',
					features: [
						'Comprehensive Discovery & Assessment (3-4 weeks)',
						'Strategic Implementation Planning',
						'Unlimited workflow optimizations',
						'Full implementation and integration',
						'Custom AI solution development',
						'Executive & staff training programs',
						'6 months of dedicated support',
						'Monthly performance reviews'
					]
				},
				maintenance: {
					title: 'Ongoing Maintenance & Optimization',
					price: 'From ¥225,000/month',
					desc: 'After implementation, keep your AI solutions performing at their best with our ongoing support services. Includes system monitoring, updates, troubleshooting, and continuous optimization.'
				}
			},
			cta: {
				schedule: 'Schedule Discovery Call',
				learnMore: 'Learn More',
				bookCall: 'Book Your Discovery Call'
			},
			testimonials: {
				title: 'What Our Clients Say',
				first: {
					quote:
						'The remote consulting process was seamless. Their team identified inefficiencies we never noticed and implemented AI solutions that reduced our processing time by 67%. The ROI was evident within just 2 months.',
					name: 'Akira Tanaka',
					position: 'Operations Director, Manufacturing Firm'
				},
				second: {
					quote:
						'Despite being located in Belgium while we operate from the US, their team was always available when needed. The AI solutions they implemented for our customer service department have increased satisfaction rates by 42%.',
					name: 'Sarah Johnson',
					position: 'CEO, Retail Chain'
				}
			},
			faq: {
				title: 'Frequently Asked Questions',
				q1: {
					question: 'How does remote consulting work for AI implementation?',
					answer:
						'Our remote consulting process begins with video meetings to understand your business. We use collaborative tools to document workflows, create implementation plans, and guide your team. For the execution phase, we combine remote guidance with local technical partners when needed. All projects include a client portal with resources and scheduled check-ins.'
				},
				q2: {
					question: "What's the typical ROI timeline for your AI solutions?",
					answer:
						'Most clients see initial ROI within 3-6 months of implementation. Simple workflow automations can show returns even faster, while more complex transformations may take longer but deliver greater long-term value. Every project includes ROI projections and tracking.'
				},
				q3: {
					question: 'Do we need technical staff to maintain the AI solutions?',
					answer:
						'Our implementations are designed to be user-friendly for non-technical staff. We provide comprehensive training and documentation. For ongoing maintenance, our support packages ensure your systems remain optimized without requiring dedicated technical personnel on your team.'
				},
				q4: {
					question: 'How do you handle different time zones?',
					answer:
						'We maintain flexible office hours that accommodate clients across Europe, Asia, and North America. All projects include clearly defined communication schedules and response times. For urgent matters, we have support systems that ensure timely assistance regardless of time zone differences.'
				}
			},
			final: {
				title: 'Ready to Transform Your Business?',
				text: 'Schedule a no-obligation discovery call to discuss your business needs and learn how our AI workflow solutions can deliver measurable results.'
			}
		},
		ja: {
			title: '料金プラン | AIワークフロー・コンサルティング',
			meta: 'AIワークフロー・コンサルティングサービスでビジネスを変革します。明確な価値ベースの料金設定と保証されたROI。',
			hero: {
				title: 'AIワークフローソリューションでビジネスを変革',
				subtitle: 'お客様のビジネスニーズに合わせた専門的なガイダンスと実装—場所を問わず'
			},
			value:
				'当社のコンサルティングサービスは、既存のビジネス運営と最先端AIテクノロジーの間のギャップを埋めます。非効率性を特定し、カスタマイズされたソリューションを実装し、採用プロセスを通じてチームをガイドします—すべて測定可能なROIを提供しながら。場所に依存しないアプローチにより、地理的制限なしで世界クラスの専門知識を得ることができます。',
			packages: {
				title: 'サービスパッケージ',
				essential: {
					title: 'エッセンシャル',
					price: '¥750,000 - ¥1,200,000',
					desc: '基本的なAI改善を特定し実装したい小規模ビジネスに最適。',
					features: [
						'発見と評価（2週間）',
						'基本的な実装計画',
						'最大3つのワークフロー最適化',
						'リモート実装ガイダンス',
						'実装後30日間のサポート'
					]
				},
				business: {
					title: 'ビジネストランスフォーマー',
					price: '¥1,800,000 - ¥2,700,000',
					badge: '人気No.1',
					desc: '重要なワークフロー変革の準備ができている中規模ビジネスのための包括的なソリューション。',
					features: [
						'詳細な発見と評価（3週間）',
						'包括的な実装計画',
						'最大8つのワークフロー最適化',
						'ハイブリッドリモート/オンサイト実装',
						'スタッフトレーニングプログラム',
						'90日間の最適化サポート',
						'四半期ごとのパフォーマンスレビュー'
					]
				},
				enterprise: {
					title: 'エンタープライズソリューション',
					price: '¥3,750,000 - ¥6,000,000+',
					desc: '複雑な運用ニーズを持つ大規模組織のためのエンドツーエンドAI変革。',
					features: [
						'包括的な発見と評価（3-4週間）',
						'戦略的実装計画',
						'無制限のワークフロー最適化',
						'フル実装と統合',
						'カスタムAIソリューション開発',
						'役員とスタッフのトレーニングプログラム',
						'6ヶ月間の専用サポート',
						'月次パフォーマンスレビュー'
					]
				},
				maintenance: {
					title: '継続的なメンテナンスと最適化',
					price: '¥225,000/月～',
					desc: '実装後も、AIソリューションを最高のパフォーマンスで維持します。システムの監視、更新、トラブルシューティング、継続的な最適化を含む継続的なサポートサービスを提供します。'
				}
			},
			cta: {
				schedule: 'ディスカバリーコールを予約',
				learnMore: '詳細を見る',
				bookCall: 'ディスカバリーコールを予約する'
			},
			testimonials: {
				title: 'お客様の声',
				first: {
					quote:
						'リモートコンサルティングプロセスはシームレスでした。彼らのチームは私たちが気づかなかった非効率性を特定し、処理時間を67％削減するAIソリューションを実装しました。ROIはわずか2か月で明らかになりました。',
					name: '田中 明',
					position: '製造会社 オペレーションディレクター'
				},
				second: {
					quote:
						'私たちが米国で運営している間、彼らはベルギーに拠点を置いていましたが、チームは常に必要なときに利用可能でした。カスタマーサービス部門に実装されたAIソリューションにより、満足度が42％向上しました。',
					name: 'サラ・ジョンソン',
					position: '小売チェーン CEO'
				}
			},
			faq: {
				title: 'よくある質問',
				q1: {
					question: 'AI実装のためのリモートコンサルティングはどのように機能しますか？',
					answer:
						'当社のリモートコンサルティングプロセスは、ビデオ会議からスタートし、お客様のビジネスを理解します。ワークフローを文書化し、実装計画を作成し、チームを導くために協働ツールを使用します。実行フェーズでは、必要に応じてリモートガイダンスと現地技術パートナーを組み合わせます。すべてのプロジェクトには、リソースとスケジュールされたチェックインを含むクライアントポータルが含まれています。'
				},
				q2: {
					question: 'AIソリューションの典型的なROIタイムラインはどのくらいですか？',
					answer:
						'ほとんどのクライアントは実装後3〜6ヶ月以内に初期ROIを確認できます。シンプルなワークフロー自動化はさらに早く結果を示すことができますが、より複雑な変革には時間がかかる場合がありますが、長期的な価値が高まります。すべてのプロジェクトにはROI予測と追跡が含まれています。'
				},
				q3: {
					question: 'AIソリューションを維持するために技術スタッフが必要ですか？',
					answer:
						'当社の実装は非技術スタッフにとって使いやすいように設計されています。包括的なトレーニングとドキュメントを提供します。継続的なメンテナンスについては、サポートパッケージによりチームに専任の技術者を必要とせずにシステムが最適化された状態を維持できます。'
				},
				q4: {
					question: '異なるタイムゾーンにどのように対応していますか？',
					answer:
						'当社は欧州、アジア、北米のクライアントに対応する柔軟なオフィスアワーを維持しています。すべてのプロジェクトには、明確に定義されたコミュニケーションスケジュールと応答時間が含まれています。緊急の問題については、タイムゾーンの違いに関わらず、タイムリーな支援を確保するサポートシステムを備えています。'
				}
			},
			final: {
				title: 'ビジネスを変革する準備はできていますか？',
				text: '無料ディスカバリーコールを予約して、ビジネスニーズについて話し合い、当社のAIワークフローソリューションがどのように測定可能な結果をもたらすかを学びましょう。'
			}
		}
	};

	function toggleLanguage() {
		currentLanguage.update((lang) => (lang === 'en' ? 'ja' : 'en'));
	}

	$: t = translations[$currentLanguage];
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.meta} />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Language Switcher -->
	<div class="fixed top-4 right-4 z-50">
		<button
			class="flex items-center space-x-2 rounded-md bg-white px-3 py-2 shadow-md transition-colors hover:bg-gray-100"
			on:click={toggleLanguage}
		>
			<span class="text-sm font-medium">{$currentLanguage === 'en' ? '日本語' : 'English'}</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
				/>
			</svg>
		</button>
	</div>

	<!-- Hero Section -->
	<section
		class="bg-gradient-to-r from-blue-900 to-blue-600 px-6 py-20 text-white"
		in:fly={{ y: 50, duration: 500 }}
	>
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl">{t.hero.title}</h1>
			<p class="mx-auto max-w-2xl text-xl opacity-90">{t.hero.subtitle}</p>
		</div>
	</section>

	<!-- Value Proposition -->
	<section class="bg-white px-6 py-16" in:fly={{ y: 50, duration: 500, delay: 100 }}>
		<div class="mx-auto max-w-4xl text-center">
			<p class="text-lg leading-relaxed text-gray-700">{t.value}</p>
		</div>
	</section>

	<!-- Pricing Plans -->
	<section class="px-6 py-16" in:fly={{ y: 50, duration: 500, delay: 200 }}>
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-blue-900">{t.packages.title}</h2>

			<div class="mb-12 grid gap-8 md:grid-cols-3">
				<!-- Essentials Plan -->
				<div
					class="transform overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="bg-gray-50 p-6 text-center">
						<h3 class="mb-2 text-2xl font-bold text-blue-900">{t.packages.essential.title}</h3>
						<p class="text-2xl font-extrabold">{t.packages.essential.price}</p>
					</div>
					<div class="p-6">
						<p class="mb-6 text-gray-600">{t.packages.essential.desc}</p>
						<ul class="mb-8 space-y-3">
							{#each t.packages.essential.features as feature}
								<li class="flex items-start">
									<svg
										class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="text-gray-700">{feature}</span>
								</li>
							{/each}
						</ul>
						<button
							class="w-full rounded border-2 border-blue-900 bg-white px-4 py-3 font-medium text-blue-900 transition-colors hover:bg-blue-50"
						>
							{t.cta.schedule}
						</button>
					</div>
				</div>

				<!-- Business Transformer Plan -->
				<div
					class="z-10 scale-105 transform overflow-hidden rounded-lg border-2 border-blue-900 bg-white shadow-xl"
				>
					<div class="relative bg-blue-50 p-6 text-center">
						<div
							class="absolute -top-3 right-6 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white"
						>
							{t.packages.business.badge}
						</div>
						<h3 class="mb-2 text-2xl font-bold text-blue-900">{t.packages.business.title}</h3>
						<p class="text-2xl font-extrabold">{t.packages.business.price}</p>
					</div>
					<div class="p-6">
						<p class="mb-6 text-gray-600">{t.packages.business.desc}</p>
						<ul class="mb-8 space-y-3">
							{#each t.packages.business.features as feature}
								<li class="flex items-start">
									<svg
										class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="text-gray-700">{feature}</span>
								</li>
							{/each}
						</ul>
						<button
							class="w-full rounded bg-blue-900 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-800"
						>
							{t.cta.schedule}
						</button>
					</div>
				</div>

				<!-- Enterprise Solution Plan -->
				<div
					class="transform overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="bg-gray-50 p-6 text-center">
						<h3 class="mb-2 text-2xl font-bold text-blue-900">{t.packages.enterprise.title}</h3>
						<p class="text-2xl font-extrabold">{t.packages.enterprise.price}</p>
					</div>
					<div class="p-6">
						<p class="mb-6 text-gray-600">{t.packages.enterprise.desc}</p>
						<ul class="mb-8 space-y-3">
							{#each t.packages.enterprise.features as feature}
								<li class="flex items-start">
									<svg
										class="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="text-gray-700">{feature}</span>
								</li>
							{/each}
						</ul>
						<button
							class="w-full rounded border-2 border-blue-900 bg-white px-4 py-3 font-medium text-blue-900 transition-colors hover:bg-blue-50"
						>
							{t.cta.schedule}
						</button>
					</div>
				</div>
			</div>

			<!-- Maintenance Plan -->
			<div class="rounded-lg bg-blue-50 p-8 text-center">
				<h3 class="mb-2 text-2xl font-bold text-blue-900">{t.packages.maintenance.title}</h3>
				<p class="mb-3 text-xl font-bold">{t.packages.maintenance.price}</p>
				<p class="mx-auto mb-6 max-w-3xl text-gray-700">{t.packages.maintenance.desc}</p>
				<button
					class="inline-block rounded border-2 border-blue-900 bg-white px-8 py-3 font-medium text-blue-900 transition-colors hover:bg-blue-50"
				>
					{t.cta.learnMore}
				</button>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="bg-gray-50 px-6 py-16" in:fly={{ y: 50, duration: 500, delay: 300 }}>
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-blue-900">{t.testimonials.title}</h2>

			<div class="grid gap-8 md:grid-cols-2">
				<div class="rounded-lg bg-white p-8 shadow-md">
					<p class="mb-6 leading-relaxed text-gray-700 italic">"{t.testimonials.first.quote}"</p>
					<div class="flex items-center">
						<div class="mr-4 h-12 w-12 rounded-full bg-gray-300"></div>
						<div>
							<p class="font-bold">{t.testimonials.first.name}</p>
							<p class="text-sm text-gray-600">{t.testimonials.first.position}</p>
						</div>
					</div>
				</div>

				<div class="rounded-lg bg-white p-8 shadow-md">
					<p class="mb-6 leading-relaxed text-gray-700 italic">"{t.testimonials.second.quote}"</p>
					<div class="flex items-center">
						<div class="mr-4 h-12 w-12 rounded-full bg-gray-300"></div>
						<div>
							<p class="font-bold">{t.testimonials.second.name}</p>
							<p class="text-sm text-gray-600">{t.testimonials.second.position}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="bg-white px-6 py-16" in:fly={{ y: 50, duration: 500, delay: 400 }}>
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-blue-900">{t.faq.title}</h2>

			<div class="space-y-8">
				<div>
					<h3 class="mb-3 text-xl font-semibold text-blue-900">{t.faq.q1.question}</h3>
					<p class="leading-relaxed text-gray-700">{t.faq.q1.answer}</p>
				</div>

				<div>
					<h3 class="mb-3 text-xl font-semibold text-blue-900">{t.faq.q2.question}</h3>
					<p class="leading-relaxed text-gray-700">{t.faq.q2.answer}</p>
				</div>

				<div>
					<h3 class="mb-3 text-xl font-semibold text-blue-900">{t.faq.q3.question}</h3>
					<p class="leading-relaxed text-gray-700">{t.faq.q3.answer}</p>
				</div>

				<div>
					<h3 class="mb-3 text-xl font-semibold text-blue-900">{t.faq.q4.question}</h3>
					<p class="leading-relaxed text-gray-700">{t.faq.q4.answer}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section
		class="bg-gradient-to-r from-blue-900 to-blue-600 px-6 py-16 text-center text-white"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
	>
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-4 text-3xl font-bold">{t.final.title}</h2>
			<p class="mx-auto mb-8 max-w-2xl text-xl opacity-90">{t.final.text}</p>
			<button
				class="rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-900 transition-colors hover:bg-blue-50"
			>
				{t.cta.bookCall}
			</button>
		</div>
	</section>
</div>

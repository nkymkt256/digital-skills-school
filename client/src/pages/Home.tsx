/* Design Philosophy: Organic Fluidity × Journey of Exploration
 * Flowing layouts with soft curves, warm colors, and generous spacing
 * to represent the natural journey of inquiry-based learning.
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Code, Lightbulb, Users, Sparkles, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">探求学習デジタルスクール</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">スクールについて</a>
            <a href="#programs" className="text-foreground/80 hover:text-primary transition-colors">プログラム</a>
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">特徴</a>
            <Button size="sm" className="rounded-full">
              無料体験申込
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section with Organic Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-sm z-0" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              好奇心が未来を<br />
              <span className="text-primary">創り出す</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              探求学習を通じて、子どもたちの「なぜ?」「どうして?」を大切にしながら、
              デジタル時代に必要なスキルを育みます
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                無料体験に申し込む
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-background/80 backdrop-blur">
                詳しく見る
              </Button>
            </div>
          </div>
        </div>

        {/* Floating decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                探求学習で育む<br />
                デジタルスキル
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                私たちのスクールでは、子どもたち一人ひとりの興味や疑問を出発点に、
                プログラミング、デザイン思考、デジタルリテラシーを学びます。
                答えを教えるのではなく、自ら問いを立て、探求し、創造するプロセスを大切にしています。
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                デジタルツールは、子どもたちの好奇心を形にし、アイデアを実現するための手段です。
                楽しみながら学び、失敗を恐れずチャレンジする環境を提供します。
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/digital-learning.png" 
                  alt="協働学習の様子" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative w-full h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,60 1200,50 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="text-muted"
          />
        </svg>
      </div>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              学びのプログラム
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              年齢や興味に応じた多様なプログラムで、一人ひとりの成長をサポートします
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">プログラミング基礎</h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  ビジュアルプログラミングから始めて、論理的思考力と創造力を育みます。
                  ゲームやアニメーション制作を通じて楽しく学びます。
                </p>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• 対象: 小学3年生〜中学生</li>
                  <li>• 期間: 3ヶ月コース</li>
                  <li>• 形式: 少人数グループ</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">デザイン思考</h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  問題発見から解決までのプロセスを体験。デジタルツールを使って
                  アイデアを形にし、プレゼンテーションスキルも磨きます。
                </p>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• 対象: 小学4年生〜中学生</li>
                  <li>• 期間: 6ヶ月コース</li>
                  <li>• 形式: プロジェクトベース</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">探求プロジェクト</h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  自分の興味あるテーマを深く探求。リサーチ、制作、発表まで
                  一貫したプロジェクトで実践的なスキルを身につけます。
                </p>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li>• 対象: 小学5年生〜中学生</li>
                  <li>• 期間: 1年間コース</li>
                  <li>• 形式: 個別指導+グループ</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative w-full h-24 bg-muted">
        <svg className="absolute top-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C300,20 600,100 900,60 C1050,40 1150,60 1200,50 L1200,0 L0,0 Z" 
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>

      {/* Features Section with Image */}
      <section id="features" className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              スクールの特徴
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              子どもたちが安心して探求できる環境と、成長を支えるサポート体制
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/coding-kids.png" 
                  alt="プログラミング学習" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">少人数制クラス</h3>
                  <p className="text-foreground/80">
                    最大6名の少人数制で、一人ひとりの興味や進度に合わせた
                    きめ細かい指導を行います。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">探求型カリキュラム</h3>
                  <p className="text-foreground/80">
                    決められた答えを教えるのではなく、子どもたち自身が問いを立て、
                    試行錯誤しながら学ぶプロセスを重視します。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">創造的な環境</h3>
                  <p className="text-foreground/80">
                    最新のデジタルツールと、自由に発想できる空間で、
                    子どもたちの創造性を最大限に引き出します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                学びの旅
              </h2>
              <p className="text-lg text-foreground/80">
                探求学習のプロセスを通じて、子どもたちは成長していきます
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/abstract-journey.png" 
                alt="学びの旅のイメージ" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              まずは無料体験から
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              お子さまの「やってみたい!」という気持ちを大切に、
              楽しく学べる環境を体験してください。
              保護者の方もぜひご一緒にお越しください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                無料体験を予約する
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-background">
                資料をダウンロード
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              保護者の声
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-none shadow-lg bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground/80 leading-relaxed">
                  「プログラミングを通じて、娘が論理的に考える力がついたと感じます。
                  何より、自分で作ったゲームを嬉しそうに見せてくれる姿が印象的です。」
                </p>
                <p className="text-sm text-card-foreground/60">小学5年生の保護者</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-none shadow-lg bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground/80 leading-relaxed">
                  「少人数制なので、息子のペースに合わせて丁寧に教えてもらえます。
                  先生方が子どもの興味を引き出すのが上手で、毎回楽しみにしています。」
                </p>
                <p className="text-sm text-card-foreground/60">小学4年生の保護者</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-none shadow-lg bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground/80 leading-relaxed">
                  「探求プロジェクトで、自分で課題を見つけて解決する力がつきました。
                  デジタルスキルだけでなく、考える力も育っていると実感しています。」
                </p>
                <p className="text-sm text-card-foreground/60">中学1年生の保護者</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="font-bold">探求学習デジタルスクール</span>
              </div>
              <p className="text-sm text-background/80">
                子どもたちの好奇心を育み、デジタル時代を生き抜く力を養います。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">プログラム</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">プログラミング基礎</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">デザイン思考</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">探求プロジェクト</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">スクール情報</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">スクールについて</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">講師紹介</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">アクセス</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">無料体験申込</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">資料請求</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">よくある質問</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
            <p>&copy; 2026 探求学習デジタルスクール. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

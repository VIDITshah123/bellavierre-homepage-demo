import { useState, useId } from 'react'
import { Award, ShieldCheck, TrendingUp, ArrowRight, Sparkles, Building, CheckCircle2, Coins, Calendar, PieChart } from 'lucide-react'
import './RoiCalculator.css'

const CURRENCIES = [
  { code: 'AED', symbol: 'AED ', rate: 1, label: 'AED (د.إ)' },
  { code: 'USD', symbol: '$', rate: 0.272, label: 'USD ($)' },
  { code: 'EUR', symbol: '€', rate: 0.252, label: 'EUR (€)' },
  { code: 'GBP', symbol: '£', rate: 0.215, label: 'GBP (£)' },
  { code: 'INR', symbol: '₹', rate: 22.8, label: 'INR (₹)' },
]

const PRESETS = [
  { label: 'Danube Starter', aed: 1200000 },
  { label: 'Golden Visa Tier', aed: 2000000 },
  { label: 'Sobha Hartland Villa', aed: 5770000 },
  { label: 'Sky Penthouse', aed: 10000000 },
]

export default function RoiCalculator() {
  const [investmentAED, setInvestmentAED] = useState(2500000)
  const [propertyType, setPropertyType] = useState('offplan') // 'offplan' | 'ready'
  const [currency, setCurrency] = useState(CURRENCIES[0])
  const sliderId = useId()

  // Yield calculation (Off-plan averages ~8.8% gross / 8.6% net; Ready ~7.4% net)
  const netYieldPercent = propertyType === 'offplan' ? 8.6 : 7.4
  const annualRentalAED = Math.round(investmentAED * (netYieldPercent / 100))
  const monthlyRentalAED = Math.round(annualRentalAED / 12)

  // 5-Year capital appreciation (Dubai historical top tier: ~38% off-plan, ~26% ready)
  const capitalGrowthPercent = propertyType === 'offplan' ? 38 : 26
  const capitalGrowthAED = Math.round(investmentAED * (capitalGrowthPercent / 100))
  const totalFiveYearReturnAED = (annualRentalAED * 5) + capitalGrowthAED

  // Golden Visa eligibility (AED 2,000,000 threshold)
  const isGoldenVisaEligible = investmentAED >= 2000000
  const shortfallAED = 2000000 - investmentAED

  // Milestone payment breakdown
  const bookingAED = Math.round(investmentAED * 0.20)
  const duringBuildAED = Math.round(investmentAED * 0.40)
  const handoverAED = Math.round(investmentAED * 0.40)

  // Format currency helper
  const formatCur = (amountInAED) => {
    const converted = amountInAED * currency.rate
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(Math.round(converted))
  }

  const handleConsultWithPlan = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      const messageField = document.getElementById('message')
      if (messageField) {
        messageField.value = `Hello Bellavierre Team, I calculated an investment of AED ${new Intl.NumberFormat().format(investmentAED)} (${currency.symbol}${formatCur(investmentAED)}) for ${propertyType === 'offplan' ? 'Prime Off-Plan' : 'Ready Luxury'}. I would like to explore opportunities with ${netYieldPercent}% projected yield and discuss Golden Visa eligibility.`
      }
    }
  }

  return (
    <section id="roi-calculator" className="roi-calculator-section" aria-label="Dubai Property ROI and Golden Visa Calculator">
      <div className="roi-calculator-container">
        {/* Section Header */}
        <div className="roi-header">
          <div className="roi-badge">
            <Sparkles size={14} className="roi-badge-icon" />
            <span>Interactive Portfolio Simulator</span>
          </div>
          <h2 className="roi-main-heading">
            DUBAI ROI &amp; GOLDEN VISA CALCULATOR
          </h2>
          <p className="roi-subtext">
            Simulate your projected rental yields, 5-year capital appreciation, and immediate 10-year UAE Golden Visa qualification with real-time multi-currency conversion.
          </p>

          {/* Interactive Currency Switcher */}
          <div className="roi-currency-bar" role="group" aria-label="Currency Selector">
            <span className="currency-bar-label">
              <Coins size={14} /> Currency:
            </span>
            <div className="currency-pills">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`currency-pill ${currency.code === c.code ? 'is-active' : ''}`}
                  onClick={() => setCurrency(c)}
                  aria-pressed={currency.code === c.code}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="roi-glass-card">
          <div className="roi-card-glow" aria-hidden="true" />

          {/* Left Column: Sliders & Controls */}
          <div className="roi-controls-col">
            {/* Property Strategy Toggle */}
            <div className="roi-control-group">
              <label className="roi-control-label">Investment Strategy</label>
              <div className="roi-strategy-toggle" role="group" aria-label="Investment Strategy">
                <button
                  type="button"
                  className={`roi-toggle-btn ${propertyType === 'offplan' ? 'is-active' : ''}`}
                  onClick={() => setPropertyType('offplan')}
                >
                  <Building size={16} />
                  <span>Curated Off-Plan (High Capital Growth)</span>
                </button>
                <button
                  type="button"
                  className={`roi-toggle-btn ${propertyType === 'ready' ? 'is-active' : ''}`}
                  onClick={() => setPropertyType('ready')}
                >
                  <TrendingUp size={16} />
                  <span>Ready Property (Immediate Rental Cashflow)</span>
                </button>
              </div>
            </div>

            {/* Investment Amount Slider */}
            <div className="roi-control-group">
              <div className="roi-label-value-row">
                <label htmlFor={sliderId} className="roi-control-label">
                  Target Investment Amount
                </label>
                <div className="roi-live-value-wrap">
                  <span className="roi-live-value">
                    {currency.symbol}{formatCur(investmentAED)}
                  </span>
                  {currency.code !== 'AED' && (
                    <span className="roi-live-value-sub">
                      (AED {new Intl.NumberFormat().format(investmentAED)})
                    </span>
                  )}
                </div>
              </div>

              <input
                id={sliderId}
                type="range"
                min={1000000}
                max={15000000}
                step={100000}
                value={investmentAED}
                onChange={(e) => setInvestmentAED(Number(e.target.value))}
                className="roi-range-slider"
                aria-label="Target Investment Amount Slider"
              />

              <div className="roi-slider-ticks">
                <span>{currency.symbol}{formatCur(1000000)}</span>
                <span>{currency.symbol}{formatCur(5000000)}</span>
                <span>{currency.symbol}{formatCur(10000000)}</span>
                <span>{currency.symbol}{formatCur(15000000)}+</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="roi-presets-wrap">
              <span className="roi-presets-caption">Quick Benchmarks:</span>
              <div className="roi-preset-chips">
                {PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`roi-preset-chip ${investmentAED === p.aed ? 'is-active' : ''}`}
                    onClick={() => setInvestmentAED(p.aed)}
                  >
                    <span>{p.label}</span>
                    <span className="chip-sub">({currency.symbol}{formatCur(p.aed)})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Payment Milestones Schedule */}
            <div className="roi-payment-schedule-box">
              <div className="schedule-header">
                <Calendar size={15} className="schedule-icon" />
                <span className="schedule-title">Projected Payment Plan Schedule</span>
              </div>
              <div className="schedule-bars-row">
                <div className="schedule-step">
                  <div className="step-bar step-20" />
                  <span className="step-pct">20% Booking</span>
                  <span className="step-val">{currency.symbol}{formatCur(bookingAED)}</span>
                </div>
                <div className="schedule-step">
                  <div className="step-bar step-40" />
                  <span className="step-pct">40% Construction</span>
                  <span className="step-val">{currency.symbol}{formatCur(duringBuildAED)}</span>
                </div>
                <div className="schedule-step">
                  <div className="step-bar step-handover" />
                  <span className="step-pct">40% Handover</span>
                  <span className="step-val">{currency.symbol}{formatCur(handoverAED)}</span>
                </div>
              </div>
            </div>

            {/* Golden Visa Status Certificate Card */}
            <div className={`roi-visa-status-card ${isGoldenVisaEligible ? 'is-eligible' : 'is-pending'}`}>
              <div className="roi-visa-icon-wrap">
                {isGoldenVisaEligible ? (
                  <Award size={28} className="roi-visa-icon gold" />
                ) : (
                  <ShieldCheck size={28} className="roi-visa-icon silver" />
                )}
              </div>
              <div className="roi-visa-text-wrap">
                <div className="roi-visa-title">
                  {isGoldenVisaEligible ? (
                    <>
                      <span>10-Year UAE Golden Visa Confirmed</span>
                      <span className="roi-visa-tag">Eligible</span>
                    </>
                  ) : (
                    <>
                      <span>Standard 2-Year Property Residency</span>
                      <span className="roi-visa-tag pending">AED 2M Minimum</span>
                    </>
                  )}
                </div>
                <p className="roi-visa-desc">
                  {isGoldenVisaEligible
                    ? 'Grants 100% self-sponsored, 10-year residency for you, your spouse, children of any age, and household staff without requiring a local UAE sponsor.'
                    : `Add ${currency.symbol}${formatCur(shortfallAED)} (AED ${new Intl.NumberFormat().format(shortfallAED)}) to meet the official UAE Golden Visa threshold.`}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Projection Dashboard */}
          <div className="roi-dashboard-col">
            <div className="roi-dashboard-inner">
              <div className="roi-dashboard-top">
                <div className="dashboard-title-row">
                  <PieChart size={18} className="dashboard-icon" />
                  <h3 className="roi-dashboard-title">Projected Financial Overview</h3>
                </div>
                <span className="dashboard-live-indicator">● Live Market Model</span>
              </div>

              {/* Metrics Grid */}
              <div className="roi-metrics-grid">
                {/* Metric 1: Annual Yield */}
                <div className="roi-metric-card">
                  <div className="roi-metric-header">
                    <span className="roi-metric-label">Estimated Net Annual Yield</span>
                    <span className="roi-metric-pct">{netYieldPercent}% p.a.</span>
                  </div>
                  <div className="roi-metric-value">{currency.symbol}{formatCur(annualRentalAED)}</div>
                  <div className="roi-metric-sub">~ {currency.symbol}{formatCur(monthlyRentalAED)} / month</div>
                </div>

                {/* Metric 2: 5-Yr Capital Appreciation */}
                <div className="roi-metric-card">
                  <div className="roi-metric-header">
                    <span className="roi-metric-label">5-Year Capital Appreciation</span>
                    <span className="roi-metric-pct growth">+{capitalGrowthPercent}%</span>
                  </div>
                  <div className="roi-metric-value">{currency.symbol}{formatCur(capitalGrowthAED)}</div>
                  <div className="roi-metric-sub">Based on prime Dubai master-plan trajectory</div>
                </div>

                {/* Metric 3: Total 5-Yr Projected Return */}
                <div className="roi-metric-card highlight">
                  <div className="roi-metric-header">
                    <span className="roi-metric-label">Total 5-Year Capital Return (Rental + Growth)</span>
                  </div>
                  <div className="roi-metric-value gold">{currency.symbol}{formatCur(totalFiveYearReturnAED)}</div>
                  <div className="roi-metric-sub">Projected cumulative capital return over 60 months</div>
                </div>
              </div>

              {/* Key Dubai Investor Safeguards */}
              <div className="roi-safeguards">
                <div className="roi-safeguard-item">
                  <CheckCircle2 size={15} className="roi-check-icon" />
                  <span>0% Personal Income Tax &amp; 0% Capital Gains Tax</span>
                </div>
                <div className="roi-safeguard-item">
                  <CheckCircle2 size={15} className="roi-check-icon" />
                  <span>Government-Regulated Escrow Bank Accounts (RERA)</span>
                </div>
                <div className="roi-safeguard-item">
                  <CheckCircle2 size={15} className="roi-check-icon" />
                  <span>100% Freehold Foreign Property Ownership Title</span>
                </div>
              </div>

              {/* CTA Action Button */}
              <button
                type="button"
                className="roi-action-btn"
                onClick={handleConsultWithPlan}
                aria-label="Discuss this portfolio plan with Bellavierre advisors"
              >
                <span>Discuss This Portfolio With Our Team</span>
                <span className="roi-btn-circle" aria-hidden="true">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

# Arthur AI — Shield / LLM firewall

- **URL:** https://www.arthur.ai/blog/
- **HTTP:** 200 | **Content-Type:** text/html; charset=utf-8

---

## Source: https://arxiv.org/pdf/2309.00710

MNRAS 000, 1–15 (2022)

Preprint 10 April 2024

Compiled using MNRAS LATEX style file v3.0

21cm Intensity Mapping cross-correlation with galaxy surveys: current
and forecasted cosmological parameters estimation for the SKAO
Maria Berti,1,2,3★ Marta Spinelli,4,5,6 and Matteo Viel1,2,3,5,7
1 SISSA- International School for Advanced Studies, Via Bonomea 265, 34136 Trieste, Italy
2 INFN – National Institute for Nuclear Physics, Via Valerio 2, 34127 Trieste, Italy
3 IFPU, Institute for Fundamental Physics of the Universe, via Beirut 2, 34151 Trieste, Italy

arXiv:2309.00710v2 [astro-ph.CO] 9 Apr 2024

4 Institute for Particle Physics and Astrophysics, ETH Zürich, Wolfgang Pauli Strasse 27, 8093 Zürich, Switzerland
5 INAF, Osservatorio Astronomico di Trieste, Via G. B. Tiepolo 11, I-34131 Trieste, Italy
6 Department of Physics and Astronomy, University of the Western Cape, Robert Sobukhwe Road, Bellville, 7535, South Africa
7 Italian Research Center on High Performance Computing, Big Data and Quantum Computing

Accepted XXX. Received YYY; in original form ZZZ

ABSTRACT

We present a comprehensive set of forecasts for the cross-correlation signal between 21cm intensity mapping and galaxy redshift
surveys. We focus on the data sets that will be provided by the SKAO for the 21cm signal, DESI and Euclid for galaxy clustering.
We build a likelihood which takes into account the effect of the beam for the radio observations, the Alcock-Paczynski effect, a
simple parameterization of astrophysical nuisances, and fully exploit the tomographic power of such observations in the range
𝑧 = 0.7 − 1.8 at linear and mildly non-linear scales (𝑘 < 0.25ℎ/Mpc). The forecasted constraints, obtained with Monte Carlo
Markov Chains techniques in a Bayesian framework, in terms of the six base parameters of the standard ΛCDM model, are
promising. The predicted signal-to-noise ratio for the cross-correlation can reach ∼ 50 for 𝑧 ∼ 1 and 𝑘 ∼ 0.1ℎ/ Mpc. When
the cross-correlation signal is combined with current Cosmic Microwave Background (CMB) data from Planck, the error bar
on Ωc ℎ2 and 𝐻0 is reduced by a factor 3 and 6, respectively, compared to CMB only data, due to the measurement of matter
clustering provided by the two observables. The cross-correlation signal has a constraining power that is comparable to the
auto-correlation one and combining all the clustering measurements a sub-percent error bar of 0.33% on 𝐻0 can be achieved,
which is about a factor 2 better than CMB only measurements. Finally, as a proof-of-concept, we test the full pipeline on the
real data measured by the MeerKat collaboration (Cunnington et al. 2022) presenting some (weak) constraints on cosmological
parameters.
Key words: cosmology: large-scale structure of Universe – cosmology: cosmological parameters – radio lines: general

1 INTRODUCTION
Efforts to seek new physics beyond the standard cosmological model,
which is grounded in cold dark matter and the cosmological constant
(ΛCDM), are currently centred on addressing the 𝐻0 and 𝑆8 tensions. These involve modifications of the theoretical framework and
the exploration of new observables with the potential to be sensitive
to various scales and redshifts while being subject to distinct systematics and statistical errors compared to well-established probes.
Neutral hydrogen (HI) has recently emerged as a new quantitative tracer of the large-scale structure (LSS) of the Universe (e.g.
Pritchard & Loeb 2012; Ansari et al. 2012; Santos et al. 2015) via
the intensity mapping (IM) technique. The 21cm IM line is produced by the hyperfine structure spin-flip transition of the electron
in atomic hydrogen (Furlanetto et al. 2006) and, compared to other
observables, has the great advantage of probing large volumes in an
efficient way at the expense of a relatively poor angular resolution.

★ E-mail: mberti@sissa.it

© 2022 The Authors

Several planned and ongoing experiments, like compact interferometers (e.g. CHIME (Bandura et al. 2014; Amiri et al. 2023),
CHORD or HIRAX (Newburgh et al. 2016)) or single-dish telescopes
(such as GBT (Masui et al. 2013; Wolz et al. 2022) or FAST (Hu
et al. 2020)) aim at measuring the IM signal (Bharadwaj et al. 2001;
Battye et al. 2004; McQuinn et al. 2006; Chang et al. 2008; Seo
et al. 2010; Kovetz et al. 2017; Villaescusa-Navarro et al. 2018) and
some of them have achieved the detection of the HI signal in crosscorrelation with galaxy surveys (Chang et al. 2010; Masui et al. 2013;
Anderson et al. 2018; Wolz et al. 2022), since this measurement is
likely to be less prone to systematics like foregrounds.
The SKA Observatory (SKAO)1 , consists of SKA-Low and SKAMid telescopes, which will be located in Australia and South Africa,
respectively. Using the SKA-Mid telescope array as a collection of
single-dishes (Battye et al. 2013; Santos et al. 2015) it will be possible
to perform 21cm IM at cosmological scales up to redshift 𝑧 ∼ 3 (SKA
Cosmology SWG 2020). The SKAO is currently under construction
1

https://www.skao.int/

2

M. Berti et al.

and MeerKAT, the SKA-Mid precursor, has been conducting IM
survey for cosmology (Santos et al. 2017, MeerKLASS). Preliminary
data analyses have provided interesting results on the potential of the
MeerKAT telescope intensity mapping surveys (Wang et al. 2021;
Irfan et al. 2022) along with a first MeerKLASS detection of the HI
signal in cross-correlation with WiggleZ galaxies (Cunnington et al.
2022). More recently, another breakthrough has been reached with
the detection at cosmological scales of HI with IM in the auto powerspectrum (Paul et al. 2023). However, mitigating the foregrounds
and their impact on the extracted signal, both in cross and autocorrelation, is challenging and several foreground removal techniques
have been proposed (Alonso et al. 2015; Wolz et al. 2016; Carucci
et al. 2020; Matshawule et al. 2020; Irfan & Bull 2021; Cunnington
et al. 2021; Soares et al. 2021, 2022; Spinelli et al. 2021).
From the theoretical point of view, it is of great importance to
refine the forecasts for the 21cm IM, both alone and in combination
with other probes, to optimise the survey design in order to enhance
the signal-to-noise ratio (Villaescusa-Navarro et al. 2015; Bull et al.
2016; Jiang et al. 2023), to address the non-linear scales modelling
in the context of the MeerKat detection (Padmanabhan et al. 2023),
to investigate the cross-correlation in the connection with galaxy
formation models (Spinelli et al. 2020), and to estimate the impact of
fundamental new physics on the observables, like non-gaussianities
or dark energy (Jolicoeur et al. 2023; Wu et al. 2023).
In Berti et al. (2023) we built on the formalism of Blake (2019);
Cunnington et al. (2020); Soares et al. (2021); Cunnington et al.
(2022) and study the redshift-space 21cm power spectrum monopole
and quadrupole, forecasting the constraining power of SKAO observations within multiple redshift bins. In this work, we extend this
analysis by including in our pipeline the modelling of the 21cm and
galaxy clustering cross-correlation signal. As before, we focus on
the parameters of the ΛCDM model and exploit the exquisite tomographic nature of the 21cm IM signal.
For the 21cm IM, we mimic SKA-Mid observations following the
SKAO Redbook prescriptions (SKA Cosmology SWG 2020). Regarding galaxies, we rely on the mocking of data sets for the galaxy
clustering signal which could be provided soon by Dark Energy Spectroscopic Survey (DESI) (Vargas-Magaña et al. 2018; Aghamousa
et al. 2016) and the Euclid mission (Blanchard et al. 2020). We will
build a full likelihood integrated within the CosmoMC code (Lewis &
Bridle 2002; Lewis 2013) and compute constraints through MarkovChain Monte-Carlo (MCMC) techniques. We assess the constraining
power of our mock 21cm data set in cross-correlation with galaxy
clustering alone and combined with CMB data.
We note that forecasts for future IM observations based on the
Fisher matrix formalism have also been presented in Obuljen et al.
(2018); Karagiannis et al. (2022); Viljoen et al. (2020). Our work
expands on previous studies in the following aspects: 𝑖) we constrain
the complete set of cosmological parameters, 𝑖𝑖) we cross-correlate
the signal with the most recent forecasts for state-of-the-art galaxy
surveys, 𝑖𝑖𝑖) we combine the 21cm data within multiple redshift bins
with the Planck latest available results, 𝑖𝑣) we conduct complete
MCMC analyses, to estimate the full posterior distribution.
The structure of the paper is as follows. The methodology, discussed more extensively in Berti et al. (2023), is briefly reviewed
in section 2. The building of the mock observations is detailed in
section 3. Results are discussed in section 4, where we present the
forecasted constraints obtained from 21cm and galaxy clustering
cross-correlation alone (section 4.1) and in combination with the
latest Planck 2018 CMB data (section 4.2). Results obtained with
MNRAS 000, 1–15 (2022)

data measured in Cunnington et al. (2022) are shown in subsection 4.3. A summary of the results and our conclusions is outlined
in section 5. We also provide two useful appendixes that discuss the
Alcock-Paczynski effect’s impact and a further cross-check on the
attained signal on present data sets.

2 MODELING THE CROSS-CORRELATION SIGNAL
The analysis presented in this work for the 21cm × galaxy clustering power spectrum is an extension of the one discussed in Berti
et al. (2023). Since we adopt analogous formalism and framework
of the previous study, in the following, we review only the essential
information. Having defined the cosmological model we consider in
section 2.1, we discuss the 21cm auto-power spectrum and the galaxy
power spectra in section 2.2 and section 2.3, which enter the error
estimation. The model for the cross-correlation power spectrum and
the power spectrum multipole expansion are presented in section 2.4
and section 2.5.

2.1 Fiducial cosmological model
We work within the standard cosmological model framework, i.e.
the ΛCDM model. We perform our analysis using the following
six parameters to define the fiducial cosmology: Ω𝑏 ℎ2 and Ω𝑐 ℎ2 ,
which describes the density of the baryonic and cold dark matter,
respectively, the scalar spectral index 𝑛𝑠 , the normalization of the
primordial power spectrum 𝐴𝑠 , the Thomson scattering optical depth
due to reionization 𝜏, and 𝜃 𝑀𝐶 , that is connected to the angular scale
of the sound horizon at decoupling. Moreover, we will focus on the
derived parameters 𝐻0 , i.e. the current expansion rate in km s −1
Mpc −1 and 𝜎8 , the root mean square matter fluctuations today in
linear theory.
Through all this work we assume a universe described by a
Planck 2018 (Planck Collaboration VI 2020) fiducial cosmology, i.e.
{Ω𝑏 ℎ2 = 0.022383, Ω𝑐 ℎ2 = 0.12011, 𝑛𝑠 = 0.96605, ln(1010 𝐴𝑠 ) =
3.0448, 𝜏 = 0.0543, 𝐻0 = 67.32 km s −1 Mpc −1 , Σ𝑚 𝜈 = 0.06eV},
where Σ𝑚 𝜈 is the sum of neutrino masses in eV.

2.2 Model for the observed 21cm signal power spectrum
The 21cm non-linear power spectrum can be modeled as (Kaiser
1987; Villaescusa-Navarro et al. 2018; SKA Cosmology SWG 2020)

𝑃21 (𝑧, 𝑘, 𝜇) = 𝑇¯b2 (𝑧)



𝑏 HI (𝑧) + 𝑓 (𝑧) 𝜇2

2


𝑃m (𝑧, 𝑘) + 𝑃SN (𝑧) ,
(1)

where 𝑇¯b is the HI mean brightness temperature, 𝑏 HI is the HI bias,
𝑓 is the growth rate, 𝜇 = 𝑘ˆ · 𝑧ˆ is the cosine of the angle between the
wave number and the line-of-sight, 𝑃m (𝑧, 𝑘) is the non-linear matter
power spectrum and 𝑃SN is the shot noise term.
For the evolution in redshift of the brightness temperature, we use
the parametrization defined in Battye et al. (2013). Given that we
lack an analytical model, 𝑏 HI (𝑧) and 𝑃SN (𝑧) at a given redshift are
computed by interpolating numerical results from hydrodynamical
simulations (Villaescusa-Navarro et al. 2015; Villaescusa-Navarro
et al. 2018). The growth rate 𝑓 (𝑧) and the non-linear matter power

Cosmological parameters estimation for the SKAO from cross-correlation
spectrum 𝑃m (𝑧, 𝑘) are, instead, computed numerically by means of
the Einstein-Boltzmann solver CAMB2 (Lewis et al. 2000).
To mimic a realistic observation, we introduce the effect of a Gaussian telescope beam, as a suppression of the power spectrum on scales
smaller than the beam’s full width at half maximum (Battye et al.
2013; Villaescusa-Navarro et al. 2017; Soares et al. 2021; Cunnington et al. 2020; Cunnington 2022). The corresponding damping factor
˜
𝐵(𝑧, 𝑘, 𝜇) can be written in terms of the beam’s physical dimension
𝑅beam , as
" 2 2
#
−𝑘 𝑅beam (𝑧)(1 − 𝜇2 )
˜
𝐵(𝑧, 𝑘, 𝜇) = exp
.
(2)
2
In a real-world scenario, one must consider the possibility of having chosen the wrong fiducial cosmology. This can be taken into
account with the Alcock–Paczynski (AP) modifications (Alcock &
Paczynski 1979). Anisotropies along the radial and transverse direction can be modelled as3
𝛼⊥ (𝑧) =

𝐷 𝐴 (𝑧)

and

𝐷 fid
(𝑧)
𝐴

𝛼 ∥ (𝑧) =

𝐻 fid (𝑧)
.
𝐻 (𝑧)

(3)

Here, 𝐷 fid
(𝑧) and 𝐻 fid (𝑧) are the values of the angular diameter
𝐴
distance and the Hubble parameter at redshift 𝑧 predicted by the
fiducial cosmology. The AP parameters 𝛼⊥ and 𝛼 ∥ modify the overall
amplitude of the power spectrum and the wave vectors. The wave
vector components along and transverse to the line of sight are then
distorted as
v
u
u
t
2
𝑘
©𝛼
ª
(4)
𝑞=
1 + 𝜇2 ­ ⊥2 − 1®
𝛼⊥
𝛼∥
«
¬
and
𝜈=

√︄
𝛼∥

𝛼⊥ 𝜇

,
2
𝛼
1 + 𝜇2 ⊥2 − 1

(5)

𝛼∥

2.3 Model for the galaxy power spectrum
The simplest parametrization of the galaxy power spectrum at a given
redshift can be written as

2
1
𝑃g (𝑧, 𝑘, 𝜇) = 𝑏 g (𝑧) + 𝑓 (𝑧) 𝜇2 𝑃m (𝑧, 𝑘) +
,
(7)
𝑛¯ g (𝑧)
where 𝑏 g is the galaxy bias and 𝑛¯ g is the galaxy number density.
The term 1/𝑛¯ g is the shot noise term for the galaxy power spectrum.
In this work, we use values of 𝑏 g and 𝑛¯ g in agreement with the
official expected values for the planned galaxy surveys, as discussed
in section 3.2.
Due to the different observing techniques, the galaxy power spectrum is not affected by the beam correction. The AP distortions,
instead, are the ones described in the previous section for 𝑃21 . Therefore, the observed galaxy power spectrum we consider is
𝑃ˆg (𝑧, 𝑘, 𝜇) =

1
2𝛼
𝛼⊥
∥

𝐵˜ 2 (𝑧, 𝑞, 𝜈)𝑃21 (𝑧, 𝑞, 𝜈)+𝑃N (𝑧),

(6)

where 𝑃21 (𝑧, 𝑞, 𝜈) is defined in Equation 1, but computed on the
new variables 𝑞 and 𝜈. The SKAO-like instrumental noise 𝑃N can
be modelled using the instrument specifications as in Equation 9 of
Berti et al. (2023).
We note that, in this work, we expand the modelling of Berti
et al. (2023), where we neglected the AP contribution in the first
approximation. A discussion on the effect of the inclusion of the AP
distortions on the cosmological parameter constraints is presented in
appendix A.

2

See https://CAMB.info/. Note that non-linear corrections to the matter
power spectrum are computed with the HALOFIT (Smith et al. 2003) version
from Mead et al. (2016).
3 In the literature, several definitions of 𝛼 and 𝛼 have been proposed, e.g.
⊥
∥
Gil-Marín et al. (2017); Hand et al. (2017); D’Amico et al. (2020). We follow
the one of e.g. Blanchard et al. (2020); Soares et al. (2021).

𝑃g (𝑧, 𝑞, 𝜈).

(8)

2.4 The cross-correlation signal power spectrum
To predict the cross-correlation power spectrum between the 21cm
signal and galaxy clustering, we use the following model (see
e.g. Cunnington et al. (2022); Casas et al. (2023))



𝑃21,g (𝑧, 𝑘, 𝜇) = 𝑇¯𝑏 𝑏 HI + 𝑓 𝜇2 𝑏 g + 𝑓 𝜇2 𝑃m (𝑧, 𝑘, 𝜇),
(9)
where all the quantities appearing here are defined in the previous
sections. In the expression above we do not make explicit the redshift
dependence of the brightness temperature, the bias, and the growth
rate for the sake of notation easiness. Moreover, it can be shown that
the shot noise contribution for the cross-correlation power spectrum
is negligible (Castorina & Villaescusa-Navarro 2017; VillaescusaNavarro et al. 2018)
Taking into account the intensity mapping beam effect and the AP
distortions, the observed cross-correlation signal becomes

where 𝑘 and 𝜇 are the assumed fiducial values of the wave vectors.

𝑃ˆ21 (𝑧, 𝑘, 𝜇) =

1
2𝛼
𝛼⊥
∥

𝑃ˆ21,g (𝑧, 𝑘, 𝜇) =

The observed 21cm power spectrum, marked with the symbol ˆ,
including the beam smoothing, the AP effects and the instrumental
noise, is then

3

1
2𝛼
𝛼⊥
∥

𝑟 𝐵˜ ⊥ (𝑧, 𝑞, 𝜈)𝑃21,g (𝑧, 𝑞, 𝜈),

(10)

with 𝑟 being a cross-correlation coefficient that accounts for unknown
effects that may modify the theoretical estimate of the correlation
degree.4
2.5 Multipole expansion
The non-isotropic power spectrum can be decomposed using Legendre polynomials Lℓ (𝜇). The coefficients of the expansion, i.e. the
multipoles of the power spectrum, are given by
∫ 1
(2ℓ + 1)
d𝜇 Lℓ (𝜇) 𝑃ˆX (𝑧, 𝑘, 𝜇),
(11)
𝑃ˆX,ℓ (𝑧, 𝑘) =
2
−1
with X being either the 21cm intensity mapping (X = 21), the galaxy
clustering (X = g) or their cross-term (X = 21, g). In this work, we
use the auto-power spectrum and cross-correlation monopoles, for
which ℓ = 0 and L0 (𝜇) = 1. In particular, we focus on forecasting
the cross-correlation power spectrum monopole 𝑃ˆ21,g,0 (𝑧, 𝑘). In the
following, for clarity of notation, we drop the subscript 0 and simply
refer to the monopoles as 𝑃ˆ21,g (𝑧, 𝑘), 𝑃ˆg (𝑧, 𝑘) and 𝑃ˆ21 (𝑧, 𝑘).
4

The definition of 𝑟 is not unique (see e.g. the discussion in Cunnington
et al. (2022)). In this work, we consider it an overall constant for simplicity,
given that 𝑟 is considered as a nuisance parameter (section 3.3.2).
MNRAS 000, 1–15 (2022)

M. Berti et al.

SKAO
Band frequency range
Corresponding redshift range
Dish diameter 𝐷dish

0.35 - 1.05 GHz
0.35 - 3
15 [m]

SKAO × Euclid
Observed redshift range
Overlapping survey area
Corresponding Ωsur
𝑧
1.
Δ𝑧
0.2
𝑏g
1.46
𝑛¯ g
6.86
𝑏HI
1.49
𝑃SN
124

1.2
0.2
1.61
5.58
1.60
114

1.4
0.2
1.75
4.21
1.71
101

0.9 - 1.8
10000 [deg2 ]
3.0 [sr]
1.65
0.3
1.9
2.61
1.84
85.0

SKAO × DESI
Observed redshift range
Overlapping survey area
Corresponding Ωsur
𝑧
0.75 0.85 0.95
Δ𝑧
0.1 0.1 0.1
𝑏g
1.05 1.08 1.11
𝑛¯ g
11.2 8.32 8.16
𝑏HI 1.35 1.40 1.46
𝑃SN 132 130 126

1.05
0.1
1.14
5.14
1.52
122

1.15
0.1
1.18
4.49
1.57
116

1.25
0.1
1.21
4.19
1.63
111

1.35
0.1
1.25
1.57
1.68
105

0.7 - 1.7
5000 [deg2 ]
1.5 [sr]
1.45 1.55 1.65
0.1
0.1
0.1
1.28 1.32 1.36
1.35 0.921 0.344
1.73 1.78 1.84
98
91
85

3 CONSTRUCTING THE MOCK CROSS-CORRELATION
DATA
In this section, we construct mock data sets of cross-correlation
measurements from future surveys. The 21cm and galaxy surveys
we take into account are presented in section 3.1. Details on the
construction of the synthetic data set and the analysis framework are
given in section 3.2 and section 3.3.

z = 1.0
Euclid ( k ) [mK ( h−1 Mpc)3 ]
k P̂21,g

Table 1. Assumed specifications for SKA-Mid Wide band 1 (SKA Cosmology SWG 2020), DESI ELG (Aghamousa et al. 2016; Casas et al. 2023),
and Euclid-like surveys (Blanchard et al. 2020). For simplicity, we refer to
SKA-Mid as SKAO, to DESI ELG as DESI, and to Euclid-like as Euclid. We
collect the used effective redshifts 𝑧 and bin widths Δ𝑧, the galaxy biases 𝑏g
and number densities 𝑛¯ g , that we express in units of [10 −4 ℎ3 Mpc −3 ], the
21cm intensity mapping bias 𝑏HI , and the 21cm power spectrum shot noise
𝑃SN , in units of [(ℎ −1 Mpc)3 ].

SKAO × Euclid
z = 1.2
z = 1.4

z = 1.65

100
80
60
40
20
0

10−2
k [ h Mpc

z = 0.75
z = 0.85
z = 0.95
DESI ( k ) [mK ( h−1 Mpc)3 ]
k P̂21,g

4

−1

10−1

]

SKAO × DESI
z = 1.05
z = 1.35
z = 1.15
z = 1.45
z = 1.25

z = 1.55
z = 1.65

80
60
40
20
0

10−2
k [ h Mpc

−1

10−1

]

Figure 1. Mock data set for SKAO × Euclid (upper panel) and SKAO × DESI
(lower panel) observations. The considered redshift bins are different for the
two galaxy surveys. We refer to section 3 for the extended discussion on how
the signal and the errors are computed.

3.1 Survey specifications
3.1.1 21cm intensity mapping
The main focus of our analysis is the 21cm intensity mapping signal that can be measured with the SKAO telescope. We consider,
in particular, a cosmological survey with the SKA-Mid telescope in
single-dish mode, following SKA Cosmology SWG (2020). We assume a Wide Band 1 survey that covers a sky area of 20 000 deg2 in
the frequency range 0.35−1.05 GHz (i.e. the redshift range 0.35−3).
The used SKAO specifications are summarized in Table 1.
3.1.2 Galaxy surveys
We assume a Euclid-like and a DESI-like spectroscopic galaxy
survey. For Euclid, following what has been proposed in Blanchard
et al. (2020), we consider observations within four different redshift
bins in the range of 0.9 - 1.8. The assumed values of the galaxy bias
and number density computed at each effective redshift are presented
in Table 1.
MNRAS 000, 1–15 (2022)

To obtain a cross-correlation signal, one must take into account
observations of the same portion of the sky. In agreement with other
studies in the literature, we assume a 10 000 deg2 overlapping patch
of the sky observed by the SKAO and a Euclid-like survey.
Hereafter, we simply refer to the Euclid survey, where is understood that a Euclid-like survey as the one described above is intended.
To construct cross-correlation measurements between the SKAO
and DESI, we follow Casas et al. (2023). We focus on the DESI
Emission Line Galaxies (ELG), as they probe a redshift range similar
to the one covered by Euclid, i.e. 0.7 - 1.7, making easier a direct
comparison between the two experiments. In Table 1, we report
the assumed values of the galaxy bias and number density at each
effective redshift and we consider an overlapping area between DESI
ELG and SKAO of 5 000 deg2 . The smaller area overlap with respect
to a Euclid-like survey is forced by the different hemisphere locations
of the two telescopes.

Cosmological parameters estimation for the SKAO from cross-correlation
3.2 Mock data sets
We construct two different mock data sets for the 21cm and
galaxy clustering cross-correlation power spectrum. One mimics an
SKAO × Euclid analysis and the other a SKAO × DESI one, for the
redshift bins and survey specifications described in section 3.1 and
Table 1.
The scales that are accessible with the observations are fixed by
the volume probed with the surveys in a given redshift bin. In Fourier
space,
√︁ the largest scale available at each effective redshift is 𝑘 min (𝑧) =
2𝜋/ 3 𝑉bin (𝑧), where 𝑉bin (𝑧) is the volume of each redshift bin, which
we compute as
∫ 𝑧+Δ𝑧/2
d𝑉
𝑉bin (𝑧) = Ωsur
d𝑧 ′ ′
d𝑧
dΩ
𝑧−Δ𝑧/2
(12)
∫ 𝑧+Δ𝑧/2
′ 2
′ 𝑐𝑟 (𝑧 )
= Ωsur
.
d𝑧
𝐻 (𝑧 ′ )
𝑧−Δ𝑧/2
with 𝑟 (𝑧) being the comoving distance and Ωsur the survey are in
steradians (see Table 1). The smallest scale is, instead, imposed by
the size of the SKAO telescope beam, due to the damping effect.
It can be estimated as 𝑘 max (𝑧) = 2𝜋/𝑅beam (𝑧). At scales smaller
than 𝑘 max , the signal is dominated by the beam providing no relevant
information on cosmology. Finally, we choose a fixed k-bin width as
a function of redshift Δ𝑘 (𝑧) in order to be large enough for modes to
be independent, i.e. Δ𝑘 (𝑧) ∼ 2𝑘 min (𝑧).
Assuming a set of 𝑁 measurements at redshift 𝑧 of the crosscorrelation power spectrum 𝑃ˆ21,g (𝑘) at scales {𝑘 1 , . . . , 𝑘 𝑁 }, we estimate the error on at each point as (see e.g. (Smith 2009; Cunnington
et al. 2022))
√︃
1
2 (𝑘) + 𝑃ˆ (𝑘) 𝑃ˆ (𝑘),
ˆ𝜎21,g (𝑘) = √︁
𝑃ˆ21,g
(13)
g
21
2𝑁modes (𝑘)
where 𝑃ˆ21,g is the cross-correlation power spectrum defined in Equation 10, 𝑃ˆ21 and 𝑃ˆg are the 21cm and the galaxy power spectrum
introduced in Equation 6 and Equation 8 respectively. Here, 𝑁modes
is the number of modes per 𝑘 and 𝜇 bin, computed as
𝑘 2 Δ𝑘 (𝑧)
𝑉bin (𝑧).
(14)
4𝜋 2
At each central redshift 𝑧 and data point 𝑘 we compute the crosscorrelation power spectrum for SKAO × Euclid observations, labeled
Euclid (𝑧, 𝑘), the one for SKAO × DESI, 𝑃ˆ DESI (𝑧, 𝑘), and the
as 𝑃ˆ21,g
21,g
corresponding errors, as discussed above. In table Table 1, we gather
some of the used redshift-dependent quantities. The resulting mock
data sets are shown in Figure 1.
We highlight that in Equation 13 the 21cm intensity mapping
instrumental noise enters the estimate of the errors through 𝑃ˆ21 .
However, we find that the contribution of SKAO-like instrumental
noise is minimal. This is not the case, instead, for a MeerKATlike noise, which induces a non-negligible contribution to the error
estimate, as in the analysis of subsection 4.3.
𝑁modes (𝑧, 𝑘) =

3.3 Numerical analysis
In order to exploit the constraining power of the mock data set presented in section 3.2, we define a likelihood function and then set up
the framework to constrain the cosmological parameters by adopting
a Bayesian approach. Given a set of observations and a theory that
depends on given parameters, the Bayes theorem links the posterior
distribution to the likelihood function. The high-dimensional posterior can then be sampled using MCMC methods (Gilks et al. 1995,

5

see e.g.). Following Berti et al. (2023), we build a working pipeline to
conduct full MCMC analyses on 21cm and cross-correlation observations. We test this pipeline by forecasting the constraining power
of the datasets described above.

3.3.1 Likelihood function for the 21cm multipoles
Given a set of measurements at scales {𝑘 1 , . . . , 𝑘 𝑁 } and redshift 𝑧, to compute the likelihood function
we define the vector

Θ(𝑧) = 𝑃ˆ21,g (𝑧, 𝑘 1 ), . . . , 𝑃ˆ21,g (𝑧, 𝑘 𝑁 ) . The logarithmic likelihood is computed as
  ∑︁ 1
− ln L =
ΔΘ(𝑧) T C −1 (𝑧) ΔΘ(𝑧),
(15)
2
𝑧
where ΔΘ(𝑧) = Θth (𝑧) − Θobs (𝑧), the difference between
the values of Θ(𝑧) predicted from theory and observed.
Here, C (𝑧) is the covariance matrix computed as C (𝑧) =
2 (z, k ), . . . , ˆ
2 (z, k )). We consider independent reddiag( ˆ𝜎21,g
𝜎21,g
N
1
shift bins, i.e. we simply sum over the contribution from each central
redshift.
Figure 2 shows the signal-to-noise ratios as a function of 𝑘 in each
redshift bin for both the constructed mock data sets. We observe that
the signal-to-noise decreases at higher redshifts. The behaviour and
orders of magnitude found here are compatible with the results for
the 21cm power spectrum multipoles in Soares et al. (2021); Berti
et al. (2023).
We conduct an MCMC analysis varying the six parameters describing the ΛCDM model, i.e. we vary
{Ω𝑏 ℎ2 , Ω𝑐 ℎ2 , 𝑛𝑠 , ln(1010 𝐴𝑠 ), 𝜏, 100𝜃 MC , Σ𝑚 𝜈 , 𝑃SN,𝑖 }
assuming wide flat priors on each of the parameters. Results on other
parameters, such as 𝐻0 and 𝜎8 , are derived from results on this
set. To perform the study, we develop a likelihood code integrated
with the MCMC sampler CosmoMC5 (Lewis & Bridle 2002; Lewis
2013). We further expand on the code we implemented and used in
Berti et al. (2022, 2023) including the computation of the theoretical
expectations for the 21cm and galaxy clustering cross-correlation
power spectrum and the relative likelihood function at different
redshift. We recall that each redshift bin is considered independent,
thus we consider a diagonal covariance matrix constructed with the
forecasted errors.

3.3.2 Nuisance parameters
As in Berti et al. (2022, 2023), along with the cosmological parameters we implement different nuisances. Indeed, the access to
the matter clustering is not direct as it appears in Equation 10 in
combination with the brightness temperature and the HI bias and
the galaxy bias. These quantities, although the scientific community
hopes to obtain external measurements (e.g. the total neutral hydrogen density as a function of redshift, key unknown for the brightness
temperature, is one of the scientific goals of the MeerKAT survey
Laduma), may need to be treated as unconstrained quantities in a
pessimistic scenario. To take into account this lack of knowledge, we
allow for combinations of these parameters to vary in the MCMC
run, thus leaving free the overall amplitude of the power spectrum.
The contribution from the nuisances is then marginalised out in the
final analysis.
5

See https://cosmologist.info/cosmomc.
MNRAS 000, 1–15 (2022)

6

M. Berti et al.

z = 1.0

SKAO × Euclid
z = 1.2
z = 1.4

z = 1.65

to the parameters described above. For each nuisance, we assume a
wide flat prior in the range [−1, 1].

80
3.3.3 CMB likelihoods and data sets

S/N

60

In this study, we combine our mock 21cm and galaxy clustering crosscorrelation data sets with Planck 2018 (Planck Collaboration VI
2020). The CMB likelihood includes the high-ℓ TT, TE, EE lite
likelihood in the interval of multipoles 30 ≤ ℓ ≤ 2508 for TT and
30 ≤ ℓ ≤ 19696 for TE, EE. Lite likelihoods are calculated with
the Plik lite likelihood (Planck Collaboration V 2020). Instead
for the low-ℓ TT power spectrum, we use data from the Commander
component-separation algorithm in the range 2 ≤ ℓ ≤ 29. We also
adopt the Planck CMB lensing likelihood and the low EE polarization
power spectrum, referred to as lowE, in the range 2 ≤ ℓ ≤ 29,
calculated from the likelihood code SimAll (Planck Collaboration III
2020). In the rest of the paper with the label "Planck 2018" we refer
to the combination TT, TE, EE + low-ℓ + lowE + lensing.

40
20
0

0.05

z = 0.75
z = 0.85
z = 0.95

0.10
k [ h Mpc−1 ]

0.15

SKAO × DESI
z = 1.05
z = 1.35
z = 1.15
z = 1.45
z = 1.25

z = 1.55
z = 1.65

We present in this section the results of our analysis. We first explore
the constraining power of the mock cross-correlation data, with and
without nuisances (section 4.1). We then combine the mock data
sets with Planck CMB data (section 4.2). Finally, in section 4.3 we
present the constraints we obtain on the cosmological parameters
for the published measurement of the MeerKAT × WiggleZ crosscorrelation power spectrum presented in Cunnington et al. (2022).

50

S/N

40
30
20
10
0

4 RESULTS

0.05

0.10
0.15
k [ h Mpc−1 ]

0.20

0.25

Figure 2. Predicted signal-to-noise ratio as a function of 𝑘 for SKAO × Euclid
(upper panel) and SKAO × DESI (lower panel) mock observations.

To be completely agnostic, for the cross-correlation power spectrum we include in the nuisances also the correlation coefficient 𝑟
and the galaxy bias. Thus,
we consider
√︁ the following
√︁ three combina√︁
tions of parameters 𝑟 𝑇¯𝑏 𝑏 HI 𝜎8 , 𝑟 𝑇¯𝑏 𝑏 g 𝜎8 , and 𝑟 𝑇¯𝑏 𝑓 𝜎8 , where
we renormalized the matter power spectrum as 𝑃m /𝜎82 .
Given that all the parameters are redshift-dependent quantities, the
actual number of nuisances is three times the number of redshift bins.
This translates into 4 × 3 nuisance parameters for SKAO × Euclid
and 10 × 3 for SKAO × DESI. Especially in the latter case, the high
number of parameters to vary can impact the numerical efficiency
of the MCMC computations. Following what is already done in
Berti et al. (2023), for SKAO × DESI only we reduce the number
of nuisances by constraining their redshift evolution through a poly3
2
nomial parametrization.
√︁
√︁ Rewriting√︁𝑁 (𝑧) = 𝑎𝑧 + 𝑏𝑧 + 𝑐𝑧 + 𝑑 for
𝑁 (𝑧) = 𝑟 𝑇¯𝑏 𝑏 HI 𝜎8 , 𝑟 𝑇¯𝑏 𝑏 g 𝜎8 , 𝑟 𝑇¯𝑏 𝑓 𝜎8 , we implement as nuisances the coefficient of the polynomial 𝑎, 𝑏, 𝑐, and 𝑑, reducing the
number of nuisance parameters from 30 to 12.
In the following, with the label "nuisances" or "nuis." we refer
MNRAS 000, 1–15 (2022)

As a reference, throughout this analysis, we compare results from
the cross-correlation forecast with the best results obtained with
the 21cm multiples in Berti et al. (2023), i.e. the fully non-linear
monopole and quadrupole data set that we label as "𝑃ˆ0 + 𝑃ˆ2 ". Note
that we expand on the results of Berti et al. (2023) by introducing
the AP, in order to be consistent with the modelling of the crosscorrelation used in this work. Thus, "𝑃ˆ0 + 𝑃ˆ2 " here include AP
effects. For a discussion on the impact of AP distortions, we refer to
appendix A.
We stress that when combining auto-power spectrum and crosscorrelation forecasts, we neglect the covariance between the two data
sets in the first approximation.
We show the marginalised 1D and 2D posteriors for the studied
set of parameters. Note that 68% confidence level constraints are
presented as percentages with respect to the marginalised mean value.

4.1 Probing the constraining power of future 21cm × galaxy
clustering data
In Figure 3 and Figure 4 we present the forecasted posterior distributions we obtain for the SKAO × DESI and SKAO × Euclid mock
data sets we construct in this work. We show only some of the model
parameters for brevity.
We obtain comparable results for both the SKAO × Euclid and
the SKAO × DESI analysis. Looking at the 2D contours, we observe that the correlations between the cosmological parameters are
similar and in line with the results obtained with the 21cm multipoles. The marked degeneracy in the 𝐻0 − Ω𝑐 ℎ2 plane, found in
previous works (Berti et al. 2022, 2023), is present also for the crosscorrelation power spectrum case. As discussed in Bardeen et al.
(1986), measuring cosmological observables that strongly depend on

Cosmological parameters estimation for the SKAO from cross-correlation

7

Parameter

𝑃ˆ 0 + 𝑃ˆ 2

DESI
𝑃ˆ 21,g

DESI
𝑃ˆ 21,g
+ nuis.

Euclid
𝑃ˆ 21,g

Euclid
𝑃ˆ 21,g
+ nuis.

DESI + 𝑃
ˆ Euclid
𝑃ˆ 21,g
21,g
+ nuis.

𝑃ˆ 0 + 𝑃ˆ 2
DESI + 𝑃
ˆ Euclid + nuis.
+ 𝑃ˆ 21,g
21,g

Ω𝑏 ℎ2
Ω𝑐 ℎ2
𝑛𝑠
ln(1010 𝐴𝑠 )
100𝜃 𝑀𝐶

2.59%
0.99%
1.19%
0.37%
0.17%

6.43%
3.81%
2.43%
0.78%
0.39%

23.11%
16.63%
6.79%
8.08%
0.75%

5.78%
3.75%
1.82%
0.54%
0.30%

16.99%
11.87%
4.59%
7.62%
0.62%

12.52%
8.59%
3.56%
4.73%
0.54%

3.89%
2.67%
1.08%
0.81%
0.21%

𝐻0
𝜎8

0.25%
0.29%

0.69%
0.40%

1.96%
9.41%

0.49%
0.58%

1.07%
10.03%

0.87%
6.37%

0.33%
1.11%

P̂0 + P̂2

P̂0 + P̂2

DESI
P̂21,g

Euclid
P̂21,g

DESI + nuis.
P̂21,g

Euclid + nuis.
P̂21,g

Ω b h2

Ω b h2

Table 2. Marginalised percentage constraints on cosmological parameters at the 68% confidence level. We show the results obtained using different combinations
Euclid "
of forecasted data sets. The label " 𝑃ˆ 0 + 𝑃ˆ 2 " stands for the forecasted 21cm power spectrum monopole and quadrupole observations (see appendix A). " 𝑃ˆ 21,g
DESI " refer to the mock cross-correlation power spectrum data sets constructed above. The label "nuis." indicates that we vary the nuisance parameters
and " 𝑃ˆ 21,g
along with the cosmological ones.

0.04
0.02

0.03
0.02

1.0

ns

ns

1.1
0.9

0.9
3.6

ln(1010 As )

ln(1010 As )

1.0

3.0
2.4

3.5
3.0
2.5

H0

70
66

68

H0

Figure 3. Joint constraints (68% and 95% confidence regions) and
marginalised posterior distributions on a subset of the cosmological parameters. The label " 𝑃ˆ 0 + 𝑃ˆ 2 " (dashed lines) stands for the forecasted 21cm power
DESI "
spectrum monopole and quadrupole observations (see appendix A). " 𝑃ˆ 21,g
refers to the mock cross-correlation power spectrum data set constructed
above. The label "nuis." (dashed-dotted lines) indicates that we vary the nuisance parameters along with the cosmological ones. The relative constraints
are listed in Table 2.

the matter power spectrum, as 𝑃ˆ21,g does, fixes the shape of 𝑃m . This
translates into fixing the quantity Ωm ℎ, which, in turn, induces the
strong correlation Ω𝑐 ℎ2 ∝ 𝐻0 . This feature is particularly relevant
when combining 21cm observations with CMB data, as discussed in
the next section.
As expected from the signal-to-noise estimates of Figure 2, better
constraints are obtained for the SKAO × Euclid data set (Table 2).
Although DESI probes the same redshift range of Euclid and even
with a higher number of redshift bins, Euclid will have a larger sky
area of overlap with SKAO, suggesting that a larger sky coverage
increases the constraining power more than the number of redshift
bins. As expected, the best constraints are the ones obtained with the

Ω c h2

Ω b h2

ln(1010 As )

68

ns

66

3.5

3.0

0.9

3

2

0.0

0.0

5
0.1

0

74

70

66

3.6

3.0

2.4

ln(1010 As )

2.5

ns

1.1

1.0

0.9

4

2

0.0

Ω b h2

1.0

Ω c h2

0.0

0.2

0.1

66
0.1

H0

74

H0

Figure 4. Joint constraints (68% and 95% confidence regions) and
marginalised posterior distributions on a subset of the cosmological parameters. The label " 𝑃ˆ 0 + 𝑃ˆ 2 " (dashed lines) stands for the forecasted 21cm
power spectrum monopole and quadrupole observations (see appendix A).
Euclid " refers to the mock cross-correlation power spectrum data set con" 𝑃ˆ 21,g
structed above. The label "nuis." (dashed-dotted lines) indicates that we vary
the nuisance parameters along with the cosmological ones. The relative constraints are listed in Table 2.

21cm multipoles, in particular for Ω𝑐 ℎ2 and 𝐻0 . Indeed, the 𝑃ˆ0 + 𝑃ˆ2
is constructed to sample a wider redshift (𝑧 = 0 − 3) and scales range
(up to 𝑘 ∼ 1 ℎ/Mpc at low redshifts). It is interesting, however, to
see that, despite these differences, cross-correlation results are still
able to deliver competitive constraints. This makes a strong case for
cross-correlation studies, especially in light of the reduced challenges
in terms of residual systematics from the 21cm intensity mapping
observations.
Adding the nuisance parameters, i.e. assuming no prior knowledge
of the astrophysics at play, has the effect of varying the overall amplitude of the cross-correlation power spectrum. This translates into
a broadening of the constraints, in particular on 𝐴𝑠 . Moreover, the
MNRAS 000, 1–15 (2022)

8

M. Berti et al.
P̂0 + P̂2
DESI + nuis.
P̂21,g
DESI + P̂Euclid + nuis.
P̂21,g
21,g

Ω c h2

DESI + P̂Euclid + nuis.
P̂0 + P̂2 + P̂21,g
21,g

0.20
0.15
0.10
1.1

ns

1.0
0.9

ln(1010 As )

3.5
3.0
2.5

100θ MC

1.06
1.04
1.02
74

H0

72
70
68
66

σ8

1.0
0.8
0.6
0.02

0.04

Ω b h2

0.1

0.2

Ω c h2

0.9

1.0

1.1

ns

2.5

3.0

3.5

ln(1010 As )

1.02

1.04

100θ MC

1.06

66

70

H0

74

0.6

0.8

1.0

σ8

Figure 5. Joint constraints (68% and 95% confidence regions) and marginalised posterior distributions on a subset of the cosmological parameters. The label
Euclid " and " 𝑃
ˆ DESI " refer
" 𝑃ˆ 0 + 𝑃ˆ 2 " (dashed lines) stands for the forecasted 21cm power spectrum monopole and quadrupole observations (see appendix A). " 𝑃ˆ 21,g
21,g
to the mock cross-correlation power spectrum data sets constructed above. The label "nuis." (dashed-dotted lines) indicates that we vary the nuisance parameters
along with the cosmological ones. The relative constraints are listed in Table 2.

2D contours are generally broader and show less clear correlations,
except for the 𝐻0 − Ω𝑐 ℎ2 and 𝐻0 − Ω𝑏 ℎ2 planes. Although the shape
is stretched, the 𝐻0 − Ω𝑐 ℎ2 degeneracy is still marked.
In Figure 5 we show the results on the full set of cosmological
parameters for the combination of the two cross-correlation data
sets and the 21cm multipoles one. Note that we do not report the
constraints on 𝜏, due to the fact that the considered probes are not
sensitive to this parameter. We compare the results with the ones for
DESI data set as a reference. In order
the 21cm multipoles and the 𝑃ˆ21,g
to explore a more realistic scenario, we include the nuisance parameters. We observe that combining SKAO × DESI and SKAO × Euclid
improves the constraints obtained with the two data sets separately.
Including also the 21cm multipoles lead to the best result. With observations from 21cm probes only in the pessimistic case of including
the nuisances, we are able to achieve constraints on the cosmological
parameters comparable with Planck CMB observations.
We conclude that 21cm IM observations in cross-correlation with
MNRAS 000, 1–15 (2022)

galaxy clustering seem to have a reduced constraining power with respect to 21cm auto-power spectrum measurements. However, when
combined with the latter, they improve the constraints, showing that
the cross-correlation signal carries complementary cosmological information.
4.2 Combining 21cm × galaxy clustering with CMB
observations
Most recent forecast analyses find 21cm IM future observations to be
a pivotal cosmological probe, highly complementary to CMB observations (SKA Cosmology SWG 2020). Indeed, in Berti et al. (2023)
we found that observations of the 21cm power spectrum multipoles
contribute significantly to improving the constraints and reducing
the degeneracies on the cosmological parameters. In this section,
we investigate the effects of combining 21cm and galaxy clustering
cross-correlations with CMB measurements.
For consistency, we first run the Planck likelihood in our frame-

Cosmological parameters estimation for the SKAO from cross-correlation
work and reproduce constraints in agreement with the Planck 2018
Euclid and 𝑃ˆ DESI
results. We then study the effect of adding the 𝑃ˆ21,g
21,g
data sets and the two combined. As in section 4.1, we compare the
results we obtain with the constraints from the 21cm power spectrum
multipoles.
Table 3 shows the percentage constraints for this analysis. We
Euclid or 𝑃ˆ DESI to Planck 2018 data reduces
observe that adding 𝑃ˆ21,g
21,g
the estimated constraints with respect to the Planck alone results. The
effect is prominent for Ω𝑐 ℎ2 and 𝐻0 , for which the error is reduced
by a factor of ∼ 3, and 𝐴𝑠 , with a factor of ∼ 4 decrease. As one can
see from Figure 6, in the 𝐻0 − Ω𝑐 ℎ2 plane the effect is ascribable
to the correlation directions. Indeed, with Planck observations 𝐻0
and Ω𝑐 ℎ2 are anti-correlated, while they are positively correlated
with 𝑃ˆ21,g . Combining the two removes the degeneracy and reduces
errors. The effect is also particularly evident for 𝐴s since the CMB
probes the quantity 𝐴s exp(−2𝜏) and the matter power spectrum,
which is constrained by 21cm data is sensitive to 𝑆8 , which is in
turn degenerate with the optical depth to reionization as measured
from the CMB. Therefore adding 21cm data effectively removes the
degeneracies.
When nuisance parameters are taken into account, as expected the
improvement on the constraints is softened. In particular for 𝐴𝑠 , and
consequently 𝜎8 , the constraining power is lost when the parameter
space is open to the nuisances. Varying the nuisances corresponds to
effectively changing the amplitude of the power spectrum and, thus,
it results in worsened constraints on 𝐴𝑠 .
The effects observed for the cross-correlation data sets combined
with CMB are qualitatively comparable to the results obtained for
the 21cm power spectrum multipoles. This confirms that when combining different kinds of 21cm observations with CMB data the
improvement in the constraints is always driven mainly by the breaking of the degeneracy in the Ω𝑐 ℎ2 − 𝐻0 plane. Indeed, our analysis
reveals that even a less constraining measurement, such as the 21cm
and galaxy cross-correlation, is effective in improving the errors on
Ω𝑐 ℎ2 and 𝐻0 if it presents a sufficiently marked correlation among
these parameters.
To better prove this point, in Figure 6 we compare the effect of
DESI and 𝑃ˆ Euclid ,
combining Planck data with the 21cm multipoles, 𝑃ˆ21,g
21,g
and the three combined. We find that even with the nuisances, results
DESI + 𝑃ˆ Euclid (orange contours) are similar to the constraints
from 𝑃ˆ21,g
21,g
from the multipoles, for which, instead, the nuisances are kept fixed as
a best-result reference (pink contours). The main difference resides
in the loss of constraining power on 𝐴𝑠 and the related parameters, which is however ascribable to the inclusion of the nuisances.
DESI + 𝑃ˆ Euclid (green conFurther adding the 21cm multipoles to 𝑃ˆ21,g
21,g
tours),6 does not impact the constraining power or the shape of the
correlations. This confirms that the 21cm probe is pivotal in breaking
the CMB degeneracy in the Ω𝑐 ℎ2 − 𝐻0 plane and the effect is relevant already at the level of cross-correlation or with SKAO precursor
power spectrum measurements (see also Berti et al. (2022)).
We conclude that cross-correlations measurements of 21cm IM
and galaxy clustering are a key cosmological probe complementary to
CMB observations and, in combination with Planck, their forecasted
constraining power is compatible with the one from 21cm power
spectrum multipole measurements with the SKAO.

6

Note that in this case also the 21cm power spectrum nuisances are varied
as in Berti et al. (2023).

9

4.3 State-of-the-art cosmological parameters constraints from
the MeerKAT × WiggleZ detection
Cosmological 21cm observations with the SKAO will be possible in
the upcoming years when the Observatory will be fully operational.
However, the SKA-Mid pathfinder, MeerKAT is already taking data
and its first cosmological surveys are promising. Recently, a power
spectrum detection with the MeerKLSS survey, the intensity mapping
survey with MeerKAT, in cross-correlation with galaxy clustering
data has been made at the 7.7𝜎 level (Cunnington et al. 2022). The
analysis pipeline we develop in this work is constructed to be ready
to use with real cross-correlation power spectrum measurements.
Therefore, we decide to test our methodology on the published results
available for MeerKLASS. In the following, we present the result
we obtain on the cosmological parameters constraints. We refer the
interested reader to appendix B for the technical consistency checks
we run on the adopted power spectrum model and the predicted
signal-to-noise ratio.
We tune the parameters of the likelihood function to match the
settings of the observed data. Instead of the SKAO specifications, we
use the MeerKLASS survey parameters, i.e. we consider a 200 dg2
survey area and dishes of a diameter of 𝐷 dish = 13.5 m. The observed
effective redshift is 𝑧 = 0.43 with a bin width of Δ𝑧 = 0.059. The
signal is observed in cross-correlation with the WiggleZ 11h galaxy
survey (Drinkwater et al. 2010; Drinkwater et al. 2018). When we
do not include the nuisance parameters, we use the measured galaxy
bias value 𝑏 g = 0.911 (Blake et al. 2011) and cross-correlation factor
𝑟 = 0.9 (Khandai et al. 2011). Other parameters and theoretical
predictions are left unchanged.
We present the cosmological parameters constraints resulting from
our MCMC analysis in Figure 7 and Table 4. We observe that the
state-of-the-art constraining power is limited with respect to the results forecasted for SKAO × Euclid and SKAO × DESI, as expected
due to the wider redshift ranges, probed scales, and survey area.
Single bin MeerKAT observations are not yet able to constrain the
complete set of cosmological parameters. However, the degeneracies
between the parameters match the ones expected from our forecasts.
In particular, the 𝐻0 − Ω𝑐 ℎ2 correlation is clearly visible, although
much less prominent. From these real measurements, we can infer
new information on the marginalised mean value of the cosmological
parameters. We find that all the constraints are compatible with the
Planck results.
The most constrained parameters are Ω𝑐 ℎ2 and 𝐻0 , proving that
21cm observations will be most useful to constrain them and their
derived parameters. When fixing the nuisances, we find a high central
value for 𝐻0 , although with a large error. We believe that this is not
a physical effect, but is rather coming from a mismatch between
the assumed brightness temperature value in our analysis and the
one that seems to describe the observed data (see appendix B for a
more in-depth discussion). The conservative result is then the one
in which nuisances are taken into account. In this case, we find that
MeerKAT × WiggleZ data prefer a lower value of 𝐻0 , although the
significance is not high enough to draw firm conclusions.
From the constraints on the nuisances, one could estimate the value
of ΩHI . With our analysis we find the constraints on the nuisance
parameters from real data to be too wide to infer a meaningful result.
Lastly, although we do not show here the results, we test the effect
of combining MeerKAT × WiggleZ data with Planck 2018 observations. We find that the measured cross-correlation power spectrum
does not increase significantly the constraining power of CMB obMNRAS 000, 1–15 (2022)

10

M. Berti et al.

Table 3. Marginalised percentage constraints on cosmological parameters at the 68% confidence level. We show the results obtained using different combinations
of forecasted data sets in combination with Planck. The label "Planck 2018" stands for TT, TE, EE + lowE + lensing, while the label " 𝑃ˆ 0 + 𝑃ˆ 2 " refers to the
Euclid " and " 𝑃
ˆ DESI " refer to the mock cross-correlation power
forecasted 21cm power spectrum monopole and quadrupole observations (see appendix A). " 𝑃ˆ 21,g
21,g
spectrum data set constructed above. The label "nuis." indicates that we vary the nuisance parameters along with the cosmological ones.

Parameter

Planck 2018

+ 𝑃ˆ 0 + 𝑃ˆ 2

DESI
+ 𝑃ˆ 21,g

DESI
+ 𝑃ˆ 21,g
+ nuis.

Euclid
+ 𝑃ˆ 21,g

Euclid
+ 𝑃ˆ 21,g
+ nuis.

DESI + 𝑃
ˆ Euclid
+ 𝑃ˆ 21,g
21,g
+ nuis.

+ 𝑃ˆ 0 + 𝑃ˆ 2
DESI
Euclid +nuis
ˆ
+ 𝑃21,g + 𝑃ˆ 21,g

Ω𝑏 ℎ2
Ω𝑐 ℎ2
𝑛𝑠
ln(1010 𝐴𝑠 )
𝜏
100𝜃MC

0.64%
0.99%
0.42%
0.46%
13.44%
0.03%

0.47%
0.26%
0.28%
0.16%
5.98%
0.02%

0.48%
0.39%
0.33%
0.12%
5.39%
0.03%

0.52%
0.55%
0.34%
0.44%
12.09%
0.03%

0.48%
0.36%
0.32%
0.12%
5.50%
0.03%

0.50%
0.48%
0.32%
0.45%
11.82%
0.02%

0.49%
0.42%
0.32%
0.44%
11.89%
0.03%

0.46%
0.31%
0.30%
0.43%
11.38%
0.03%

𝐻0
𝜎8

0.79%
0.73%

0.13%
0.24%

0.25%
0.24%

0.41%
0.69%

0.21%
0.24%

0.33%
0.70%

0.28%
0.69%

0.14%
0.67%

Planck 2018
+ P̂0 + P̂2
DESI + P̂Euclid + nuis.
+ P̂21,g
21,g
DESI + P̂Euclid + nuis.
+ P̂0 + P̂2 + P̂21,g
21,g

0.124

Ω c h2

0.122
0.120
0.118

ns

0.97

τ

ln(1010 As )

0.96

3.08
3.04
3.00

0.06

100θ MC

0.04

1.0415
1.0410
1.0405
1.0400

H0

69
68
67
66
0.83

σ8

0.82
0.81
0.80
0.0221

0.0227

Ω b h2

0.118

0.122

Ω c h2

0.96

0.97

ns

3.01

3.05

ln(1010 As )

0.04

0.06

τ

1.0403

1.0415

100θ MC

66

67

H0

68

69

0.80

0.82

σ8

Figure 6. Joint constraints (68% and 95% confidence regions) and marginalised posterior distributions on a subset of the cosmological parameters. The label
"Planck 2018" stands for TT, TE, EE + lowE + lensing, while the label " 𝑃ˆ 0 + 𝑃ˆ 2 " (dashed lines) stands for the forecasted 21cm power spectrum monopole and
Euclid " and " 𝑃
ˆ DESI " refer to the mock cross-correlation power spectrum data sets constructed above. The label
quadrupole observations (see appendix A). " 𝑃ˆ 21,g
21,g
"nuis." (dashed-dotted lines) indicates that we vary the nuisance parameters along with the cosmological ones. The relative constraints are listed in Table 3.

MNRAS 000, 1–15 (2022)

Cosmological parameters estimation for the SKAO from cross-correlation
5 CONCLUSIONS

DESI + nuis.
P̂21,g
Euclid + nuis.
P̂21,g

Ω b h2

DESI + P̂Euclid + nuis.
P̂21,g
21,g
MeerKAT×WiggleZ

0.08

P̂21,g

0.05

MeerKAT×WiggleZ
P̂21,g

+ nuis.

0.02

ns

1.1
1.0

ln(1010 As )

0.9

3
2

H0

90
60

ns

ln(1010 As )

90

60

30

3

5
2

0

Ω b h2

1.1

1.0

1.0
0.0
2
0.0
5
0.0
8
0.8
5

0.5

0.0

30

Ω c h2

11

H0

Figure 7. Joint constraints (68% and 95% confidence regions) and
marginalised posterior distributions on a subset of the cosmological paramEuclid " and " 𝑃
ˆ DESI " refer to the mock cross-correlation
eters. The labels " 𝑃ˆ 21,g
21,g
MeerKAT×WiggleZ
power spectrum data sets constructed above. 𝑃ˆ 21,g
refers to the

cross-correlation power spectrum detection. The label "nuis." (dashed-dotted
lines) indicates that we vary the nuisance parameters along with the cosmological ones. The relative constraints are listed in Table 4.

Table 4. Marginalised percentage constraints on cosmological parameters
at the 68% confidence level. We show the constraints on the cosmological
parameters obtained with the MeerKAT × WiggleZ cross-correlation power
spectrum detection. The label "nuis." indicates that we vary the nuisance
parameters along with the cosmological ones. The symbol "—" stands for
unconstrained.
Parameter

MeerKAT×WiggleZ
𝑃ˆ 21,g

MeerKAT×WiggleZ
𝑃ˆ 21,g
+ nuis.

Ω𝑏 ℎ2
Ω𝑐 ℎ2
100𝜃 𝑀𝐶
𝑛𝑠
ln(1010 𝐴𝑠 )
𝜏

—
0.314+0.079
−0.18
1.090+0.061
−0.083
—
—
—

—
0.48+0.19
−0.27
1.051+0.085
−0.070
—
—
—

𝐻0
𝜎8

84+10
−7
0.974+0.068
−0.092

57+8
−6
1.04+0.30
−0.49

servations, leaving the constraints and the 2D contours mostly unchanged.
Although the constraining power of real detection is not yet competitive with other probes, the quality of the current 21cm IM observations in cross-correlation with galaxy clustering will improve
sharply in the upcoming years and will soon become a useful independent cosmological probe. Moreover, the forecasted results for
future surveys are very promising.

In this work, we forecast the constraints on the ΛCDM cosmological parameters for power spectrum measurements of 21cm intensity
mapping in cross-correlation with galaxy clustering. Modelling the
cross-power spectrum as in Cunnington et al. (2022), we forecast
mock observations of the SKAO cross-correlated with DESI and
Euclid-like surveys. We test the constraining power of such probes
alone and combined with the latest Planck CMB observations. Note
that our modelling does not include possible residual foreground and
systematics contamination.
We follow the SKAO Red Book (SKA Cosmology SWG 2020)
proposal and simulate single-dish observations with the SKA-Mid
telescope in Band 1 (frequency range 0.35 − 1.05 GHz). We crosscorrelate this signal with a Euclid-like spectroscopic survey (Blanchard et al. 2020) and the DESI Emission Line Galaxies one (Raichoor et al. 2023; Casas et al. 2023) in the redshift range 0.7 - 1.7.
Assuming a Planck 2018 fiducial cosmology, we construct two data
sets of observations within multipole redshift bins. To test the constraining power on the cosmological parameters of our mock observations, we implement a likelihood function for the cross-correlation
power spectrum, fully integrated with the MCMC sampler CosmoMC.
We include a discussion on the impact of our lack of knowledge on
the baryonic physics involved in the computation of the 21cm power
spectrum as nuisance parameters in the analysis.
We first focus on assessing the constraining power of crosscorrelation observations alone, compared to the results we obtain
for the 21cm multipoles. We, then, combine the two to investigate if
they carry complementary information. The results of our analysis
can be summarized as follows.
We find that SKAO power spectrum measurements in crosscorrelation with galaxy clustering have a constraining power comparable to the 21cm auto-power spectrum. The SKAO × DESI and
SKAO × Euclid data sets we construct are able to constrain the cosmological parameters up to the sub-percent level. They seem to be
particularly effective on 𝐻0 , on which we obtain constraints between
the 0.49% and the 1.96% from 21cm and galaxy clustering crosscorrelation alone. The tightest constraints are achieved when we
combine 21cm power spectrum multipoles with the cross-correlation
mock observations, for which we obtain a 0.33% constraint on 𝐻0 , a
value that is competitive with Planck.
When combining the cross-correlation mock measurements with
CMB data, we find that they are pivotal to reducing the errors on
the cosmological parameters. The effect is particularly prominent for
Ω𝑐 ℎ2 and 𝐻0 , for which the errors are reduced by a factor between
2.5 - 1.8 and 3.8 - 2 respectively. Again, the best result is obtained by
combining all the 21cm probes together. In this case, the error with
respect to Planck alone results is reduced by a factor of 3.2 for Ω𝑐 ℎ2
and 5.6 for 𝐻0 , with the nuisance parameters taken into account.
Lastly, we test our analysis pipeline on the recent data for the
cross-power spectrum between MeerKAT, the SKA-Mid pathfinder,
and WiggleZ galaxy clustering Cunnington et al. (2022). We find that
state-of-the-art observations have limited constraining power on the
complete set of cosmological parameters. However, the main features
of the marginalised constraints are compatible with the forecasted
results of this work.
To conclude, our analysis supports the case of 21cm and galaxy
clustering cross-correlation measurements. In combination with
CMB observations, cross-correlations will be able to provide competitive constraints on the cosmological parameters comparable to the
MNRAS 000, 1–15 (2022)

12

M. Berti et al.

ones obtained with the auto-power spectrum. The working pipeline
presented in this work is found to be compatible and easily employable with real observations. The analysis we carry out can be straightforwardly adapted to forecast constraints on the neutrino mass and
beyond ΛCDM models. These extensions are currently under study.

ACKNOWLEDGEMENTS
The authors would like to thank Steven Cunnington, Stefano Camera,
José Fonseca, Alkistis Pourtsidou, and Laura Wolz for useful discussion and feedback. MB and MV are supported by the INFN INDARK
PD51 grant. MV acknowledges contribution from the agreement
ASI-INAF n.2017-14-H.0. MS acknowledges support from the AstroSignals Synergia grant CRSII5_193826 from the Swiss National
Science Foundation.

DATA AVAILABILITY
Access to the original code is available upon reasonable request to
the corresponding author.

REFERENCES
Aghamousa A., et al., 2016, The DESI Experiment Part II: Instrument Design
(arXiv:1611.00037)
Alcock C., Paczynski B., 1979, Nature, 281, 358
Alonso D., Bull P., Ferreira P. G., Maartens R., Santos M., 2015, Astrophys.
J., 814, 145
Amiri M., et al., 2023, Astrophys. J., 947, 16
Anderson C. J., et al., 2018, MNRAS, 476, 3382
Ansari R., et al., 2012, Astronomy &Astrophysics, 540, A129
Bandura K., et al., 2014, Proc. SPIE Int. Soc. Opt. Eng., 9145, 22
Bardeen J. M., Bond J. R., Kaiser N., Szalay A. S., 1986, Astrophys. J., 304,
15
Battye R. A., Davies R. D., Weller J., 2004, Mon. Not. Roy. Astron. Soc.,
355, 1339
Battye R. A., Browne I. W. A., Dickinson C., Heron G., Maffei B., Pourtsidou
A., 2013, Mon. Not. Roy. Astron. Soc., 434, 1239
Bernal J. L., Breysse P. C., Gil-Marín H., Kovetz E. D., 2019, Phys. Rev. D,
100, 123522
Berti M., Spinelli M., Haridasu B. S., Viel M., Silvestri A., 2022, JCAP, 01,
018
Berti M., Spinelli M., Viel M., 2023, Mon. Not. Roy. Astron. Soc., 521, 3221
Bharadwaj S., Nath B. B., Nath B. B., Sethi S. K., 2001, J. Astrophys. Astron.,
22, 21
Blake C., 2019, Mon. Not. Roy. Astron. Soc., 489, 153
Blake C., et al., 2011, Mon. Not. Roy. Astron. Soc., 415, 2876
Blanchard A., et al., 2020, Astron. Astrophys., 642, A191
Bull P., et al., 2016, Phys. Dark Univ., 12, 56
Carucci I. P., Irfan M. O., Bobin J., 2020, Mon. Not. Roy. Astron. Soc., 499,
304
Casas S., Carucci I. P., Pettorino V., Camera S., Martinelli M., 2023, Phys.
Dark Univ., 39, 101151
Castorina E., Villaescusa-Navarro F., 2017, Mon. Not. Roy. Astron. Soc., 471,
1788
Chang T.-C., Pen U.-L., Peterson J. B., McDonald P., 2008, Phys. Rev. Lett.,
100, 091303
Chang T.-C., Pen U.-L., Bandura K., Peterson J. B., 2010, Nature, 466, 463
Cunnington S., 2022, MNRAS, 512, 2408
Cunnington S., Pourtsidou A., Soares P. S., Blake C., Bacon D., 2020, Mon.
Not. Roy. Astron. Soc., 496, 415
Cunnington S., Irfan M. O., Carucci I. P., Pourtsidou A., Bobin J., 2021, Mon.
Not. Roy. Astron. Soc., 504, 208
MNRAS 000, 1–15 (2022)

Cunnington S., et al., 2022, Mon. Not. Roy. Astron. Soc., 518, 6262
D’Amico G., Gleyzes J., Kokron N., Markovic K., Senatore L., Zhang P.,
Beutler F., Gil-Marín H., 2020, JCAP, 05, 005
Drinkwater M. J., et al., 2010, MNRAS, 401, 1429
Drinkwater M. J., et al., 2018, Mon. Not. Roy. Astron. Soc., 474, 4151
Furlanetto S., Oh S. P., Briggs F., 2006, Phys. Rept., 433, 181
Gil-Marín H., Percival W. J., Verde L., Brownstein J. R., Chuang C.-H.,
Kitaura F.-S., Rodríguez-Torres S. A., Olmstead M. D., 2017, Mon. Not.
Roy. Astron. Soc., 465, 1757
Gilks W., Richardson S., Spiegelhalter D., 1995, Markov Chain Monte Carlo
in Practice. Chapman & Hall/CRC Interdisciplinary Statistics, Taylor &
Francis, https://books.google.it/books?id=TRXrMWY_i2IC
Hand N., Seljak U., Beutler F., Vlah Z., 2017, JCAP, 10, 009
Hu W., Wang X., Wu F., Wang Y., Zhang P., Chen X., 2020, Mon. Not. Roy.
Astron. Soc., 493, 5854
Irfan M. O., Bull P., 2021, Mon. Not. Roy. Astron. Soc., 508, 3551
Irfan M. O., et al., 2022, MNRAS, 509, 4923
Jiang Y.-E., et al., 2023, Res. Astron. Astrophys., 23, 075003
Jolicoeur S., Maartens R., Dlamini S., 2023, Eur. Phys. J. C, 83, 320
Kaiser N., 1987, Mon. Not. Roy. Astron. Soc., 227, 1
Karagiannis D., Slosar A., Liguori M., 2020, JCAP, 11, 052
Karagiannis D., Maartens R., Randrianjanahary L. F., 2022, JCAP, 11, 003
Khandai N., Sethi S. K., Di Matteo T., Croft R. A. C., Springel V., Jana A.,
Gardner J. P., 2011, Mon. Not. Roy. Astron. Soc., 415, 2580
Kovetz E. D., et al., 2017, Line-Intensity Mapping: 2017 Status Report
(arXiv:1709.09066)
Lewis A., 2013, Phys. Rev. D, 87, 103529
Lewis A., Bridle S., 2002, Phys. Rev. D, 66, 103511
Lewis A., Challinor A., Lasenby A., 2000, Astrophys. J., 538, 473
Masui K. W., et al., 2013, ApJ, 763, L20
Matshawule S. D., Spinelli M., Santos M. G., Ngobese S., 2020, Mon. Not.
Roy. Astron. Soc.
McQuinn M., Zahn O., Zaldarriaga M., Hernquist L., Furlanetto S. R., 2006,
Astrophys. J., 653, 815
Mead A., Heymans C., Lombriser L., Peacock J., Steele O., Winther H., 2016,
Mon. Not. Roy. Astron. Soc., 459, 1468
Newburgh L. B., et al., 2016, Proc. SPIE Int. Soc. Opt. Eng., 9906, 99065X
Obuljen A., Castorina E., Villaescusa-Navarro F., Viel M., 2018, J. Cosmology Astropart. Phys., 2018, 004
Padmanabhan H., Maartens R., Umeh O., Camera S., 2023, The HI intensity mapping power spectrum: insights from recent measurements
(arXiv:2305.09720)
Paul S., Santos M. G., Chen Z., Wolz L., 2023, arXiv e-prints, p.
arXiv:2301.11943
Planck Collaboration III ., 2020, Astron. Astrophys., 641, A3
Planck Collaboration V ., 2020, Astron. Astrophys., 641, A5
Planck Collaboration VI ., 2020, A&A, 641, A6
Pritchard J. R., Loeb A., 2012, Reports on Progress in Physics, 75, 086901
Raichoor A., et al., 2023, AJ, 165, 126
SKA Cosmology SWG ., 2020, Publ. Astron. Soc. Austral., 37, e007
Santos M. G., et al., 2015, PoS, AASKA14, 019
Santos M. G., et al., 2017, in MeerKAT Science: On the Pathway to the SKA.
(arXiv:1709.06099)
Seo H.-J., Dodelson S., Marriner J., Mcginnis D., Stebbins A., Stoughton C.,
Vallinotto A., 2010, Astrophys. J., 721, 164
Smith R. E., 2009, MNRAS, 400, 851
Smith R. E., et al., 2003, Mon. Not. Roy. Astron. Soc., 341, 1311
Soares P. S., Cunnington S., Pourtsidou A., Blake C., 2021, Mon. Not. Roy.
Astron. Soc., 502, 2549
Soares P. S., Watkinson C. A., Cunnington S., Pourtsidou A., 2022, Mon.
Not. Roy. Astron. Soc., 510, 5872
Spinelli M., Zoldan A., De Lucia G., Xie L., Viel M., 2020, Mon. Not. Roy.
Astron. Soc., 493, 5434
Spinelli M., Carucci I. P., Cunnington S., Harper S. E., Irfan M. O., Fonseca
J., Pourtsidou A., Wolz L., 2021, Mon. Not. Roy. Astron. Soc., 509, 2048
Vargas-Magaña M., Brooks D. D., Levi M. M., Tarle G. G., 2018, in 53rd
Rencontres de Moriond on Cosmology. pp 11–18 (arXiv:1901.01581)
Viljoen J.-A., Fonseca J., Maartens R., 2020, JCAP, 09, 054

13

Cosmological parameters estimation for the SKAO from cross-correlation

P̂0 + P̂2 - Ωc h2 = 0.13
P̂0 + P̂2
Planck 2018

Ω b h2

0.025
0.020
0.015

ln(1010 As )

ns

1.0
0.9

3.1
3.0

H0

68
67

Ω b h2

ns

68

67

66

3.1

3.0

1.0

0.9

25

20

0.0

15

Ω c h2

0.0

0.0

3
0.1

0.1

2

66

H0

ln(1010 As )
Planck 2018

+ P̂0 + P̂2 - no AP
+ P̂0 + P̂2
+ P̂0 + P̂2 - Ωc h2 = 0.13

Ω b h2

0.0228
0.0224
0.0220
0.98

ns
0.96
3.10
3.05
69
68
67

Ω c h2

Ω b h2

ns

ln(1010 As )

68

66

3.1
0

3.0
5

0.9
6
0.9
7
0.9
8

22
7
0.0

0.0

22
1

66
0.1
17
0.1
20
0.1
23

With respect to the analysis in Berti et al. (2023), in this work,
we extended our likelihood code to include the Alcock-Paczynski
distortions, which are used in other works (e.g. (Bernal et al. 2019;
Soares et al. 2021; Casas et al. 2023)). We neglected AP effects in the
first approximation because we assumed to know the true cosmology,
given that it is the one we input when constructing the mock data
set. In this section, we give an overview of how the cosmological
parameter constraints are affected by the addition of AP effects.
Contrary to what we naively expected, implementing the AP modifications significantly improves the constraints. In the upper panel
of Figure A1, we compare the effects of different mock data sets. Our
reference (orange lines and contours) is the 21cm power spectrum
monopole (𝑃ˆ0 ) and quadrupole (𝑃ˆ2 ) mock data set that we construct
in Berti et al. (2023). This data set forecasts SKAO observations in
multipole redshift bins in the range 0 - 3, i.e. for six bins centred at
{0.25, 0.75, 1.25, 1.75, 2.25, 2.75} and with a width of Δ𝑧 = 0.5.
The nuisances parameters for this data set are 𝑇¯𝑏 𝑏 HI 𝜎8 , 𝑇¯𝑏 𝑓 𝜎8 , and
the HI shot noise, for the non-linear 21cm power spectrum.
Using the exact same framework, but implementing also the AP
distortions of the amplitude and of the wave vectors as described
in section 2.2 (light blue contours), we find a crucially improved
constraining power. E.g., for Ω𝑐 ℎ2 with only 21cm observations,
we recover the Planck constraint (dashed green lines and contours).
On 𝐻0 , instead, we find even better constraints than Planck. When
adding the nuisances (pink contours), the improvement is reduced,
although still significantly better than the no AP case. We believe that
the extra dependence on 𝐻 (𝑧) that is introduced in the observable
with the AP modifications is the cause of the improved constraining
power.
Dealing with mock observations fabricated by ourselves, we have
the advantage of knowing the true cosmology. We, thus, further test
the impact of AP by creating a data set with a different value of
Ω𝑐 ℎ2 = 0.13. We, however, do not change the fiducial cosmology,
for which Ω𝑐 ℎ2 = 0.12011. Running the MCMC analysis on this data
set we find consistent results. The Ω𝑐 ℎ2 constraint is pushed towards
the true value, resulting in a constraint in between the true value and
the assumed fiducial one. The errors, instead, are left unchanged,
although the 2D contours are rigidly shifted. Thus, it seems that
assuming the wrong cosmology impacts only the mean marginalised
values of the parameters.
However, the smoking gun of having assumed the wrong cosmology is the probability distribution of the AP parameters themselves. Although we do not show the results here, we implemented
the time-dependent 𝛼⊥ and 𝛼 ∥ as derived parameters and computed
the marginalised constraints. We find that when the true cosmology
matches the fiducial one, the 𝛼⊥ , and 𝛼 ∥ marginalised posteriors are

P̂0 + P̂2 - nuisances

ln(1010 As )

APPENDIX A: ON THE IMPACT OF INCLUDING THE
ALCOCK-PACZYNSKI EFFECTS

P̂0 + P̂2 - no AP

H0

Villaescusa-Navarro F., Viel M., Alonso D., Datta K. K., Bull P., Santos
M. G., 2015, J. Cosmology Astropart. Phys., 2015, 034
Villaescusa-Navarro F., Alonso D., Viel M., 2017, Mon. Not. Roy. Astron.
Soc., 466, 2736
Villaescusa-Navarro F., et al., 2018, Astrophys. J., 866, 135
Wang J., et al., 2021, Mon. Not. Roy. Astron. Soc., 505, 3698
Wolz L., Tonini C., Blake C., Wyithe J. S. B., 2016, Mon. Not. Roy. Astron.
Soc., 458, 3399
Wolz L., et al., 2022, MNRAS, 510, 3495
Wu P.-J., Li Y., Zhang J.-F., Zhang X., 2023, Sci. China Phys. Mech. Astron.,
66, 270413

H0

Figure A1. Joint constraints (68% and 95% confidence regions) and
marginalised posterior distributions on a subset of the cosmological parameters. We show results for the 21cm multipoles alone (upper panel) and combined with CMB observations (lower panel). The label "Planck 2018" (dashed
lines) stands for TT, TE, EE + lowE + lensing, while the label " 𝑃ˆ 0 + 𝑃ˆ 2 "
stands for the forecasted 21cm non-linear power spectrum monopole and
quadrupole observations, with and without ("no AP") AP effects taken into
account. " 𝑃ˆ 0 + 𝑃ˆ 2 − Ω𝑐 ℎ2 = 0.13" labels the results obtained for a mock
data set with a value of Ω𝑐 ℎ2 different from the assumed fiducial cosmology.
The label "nuis." indicates that we vary the nuisance parameters along with
the cosmological ones.

MNRAS 000, 1–15 (2022)

M. Berti et al.

APPENDIX B: TEST ON THE MOCK DATA
CONSTRUCTION PROCEDURE
To test the procedure we follow to construct the mock data sets,
we compare our predictions to the measured cross-correlation data
published in Cunnington et al. (2022).
As in section 4.3, we adjust the parameters of our formalism to
mimic MeerKAT observations in the redshift bin centred at 𝑧 = 0.43
and with Δ𝑧 = 0.059. We find that with our pipeline we predict
fewer 𝑘-bin in a wider scale range and a slightly different value for
the brightness temperature, due to a small difference in the theorypredicted and measured value of ΩHI . Correcting for the brightness
temperature results in cross-correlation power spectrum values more
in agreement with observations (Figure B2). However, this is not
enough to reproduce the observed signal-to-noise ratio. Indeed, we
find that varying the brightness temperature changes the power spectrum and the errors consistently, not impacting the signal-to-noise.
Instead, adjusting the 𝑘-bin width to match the one in Cunnington
et al. (2022) is enough to better reproduce the observed signal-tonoise ratio, as shown in Figure B1.
We conclude that, compared to the state of the art, the pipeline
we adopt in this work is consistent with real observational data. We
are, however, more optimistic about the accessible scales and bin
widths. Differences in the predicted power spectrum amplitude, i.e.
the brightness temperature, are taken into account when opening the
parameter space to the nuisance parameters.

APPENDIX C: ON THE IMPACT OF FOREGROUND
CONTAMINATION
The aim of the work presented in this paper is the development and
testing of a pipeline for future 21cm and galaxy clustering crosscorrelation assuming the ideal scenario where all the systematics in
the data have been already treated. It is however interesting to explore
the effect of the key challenge of intensity mapping i.e. foreground
contamination.
We follow e.g. Karagiannis et al. (2020) and mimic the effect of
the foreground as a loss of observed large scales by cutting our mock
dataset at 𝑘 min = 0.05 ℎ/Mpc. Figure C1 shows the comparison
between the result presented above and the scale-cut data set for a
reference case. As expected, foreground removal worsens the constraints on the cosmological parameter. However, it is worth noticing
that the correlation between Ω𝑐 ℎ2 and 𝐻0 is left unchanged.
As a consequence, when combining the scale-cut cross-correlation
mock data set with measured Planck data, we observe that the same
results are achieved with or without accounting for foreground effects.
We can then conclude that, although real data could be affected by
MNRAS 000, 1–15 (2022)

Theory predictions
Corrected ∆k

Cunnington et al. (2022)

10.0
7.5
S/N

centred around one. When, instead, the true cosmology is not the assumed one, although still compatible with one the constraints, both
1D and 2D, are clearly shifted. Thus, one can test their assumptions
by looking at the AP parameters constraints.
The lower panel of Figure A1 shows the results for the same
exercise, but combining 21cm observations with Planck data.
We conclude that even when the whole set of cosmological parameters is used, the AP distortions are crucial not only to take into
account our lack of knowledge of the true underlying cosmology but
also to increase the constraining power on the cosmological parameters in matter power spectrum dependent probes as the 21cm IM
one.

5.0
2.5
0.0

−2.5
0.0

0.1

0.2
0.3
k [ h Mpc−1 ]

0.4

0.5

Figure B1. Signal-to-noise ratio as a function of 𝑘. We compare real data
observations ("Cunnington et al. (2022)"), with the signal-to-noise predicted
by the formalism adopted in this work. The gray shaded area shows the 2𝜎
region for the observed signal-to-noise.
Theory predictions
Corrected ΩHI

P̂21,g (k ) [mK (h−1 Mpc)3 ]

14

4

Cunnington et al. (2022)

×103

3
2
1
0

10−1
k [ h Mpc−1 ]

Figure B2. Observed and predicted 21cm MeerKAT observations in crosscorrelation with WiggleZ galaxy clustering.

more complex systematics, the loss of some of the large scale in the
cross-power spectrum does not prevent the increase in constraining
power obtained combined with Planck results.

APPENDIX D: COMPARISON WITH GALAXY
CLUSTERING
In section 4.1, we compare results on the cosmological parameter
constraints from the cross-correlation of 21cm and galaxy clustering
observations with the ones obtained from 21cm auto-power spectrum
measurements. For completeness, in what follows we also forecast
the constraining power of galaxy clustering auto-power spectrum
measurements.
The pipeline we built for the 21cm observables can be extended

Cosmological parameters estimation for the SKAO from cross-correlation

15

DESI + P̂Euclid + nuis. - k
P̂21,g
min = 0.05 h/Mpc
21,g

0.03
0.02

ln(1010 As )

Ω b h2

DESI + P̂Euclid + nuis.
P̂21,g
21,g

3.5
3.0
2.5

H0

69
68
67

Ω c h2

Ω b h2

ln(1010 As )

69

68

67

66

3.5

3.0

2.5

0.0
3

0.0
2

0.1
5

0.1
0

66

H0

Figure C1. Joint constraints (68% and 95% confidence regions) and
marginalised posterior distributions on a subset of the cosmological parameters. We compare the results presented in subsection 4.1 (green, continuous
lines) with what is obtained mimicking the effect of the foregrounds by cutting
the data set at 𝑘min = 0.05 ℎ/Mpc (yellow, dashed lines). The label "nuis."
indicates that we vary the nuisance parameters along with the cosmological
ones.

to include the analysis of galaxy clustering auto-power spectrum
monopole 𝑃g (𝑘, 𝑧) by implementing an additional likelihood function. For this purpose, we construct a toy data set of future DESI and
Euclid-like observations keeping the same framework of observed
redshifts, scales and volumes presented in section 2. We highlight
that a more realistic forecast that includes the full constraining power
of 𝑃g (𝑘, 𝑧) measurements goes beyond the goal of this exercise.
As in section 2, our galaxy clustering data set is constructed from
a theory predictions for the galaxy clustering auto-power spectrum
𝑃ˆg (𝑘, 𝑧) (Equation 8) and using the survey specifications for values of
the bias and the shot noise (subsection 3.1). Following the formalism
used for the 21cm auto-power spectrum (Berti et al. 2022), errors on
each single data point are estimated as
√︄


∫ 1
1 2
1
d𝜇 𝑃ˆg (𝑘) +
.
ˆ𝜎g (𝑘) = √︁
𝑛¯ g
−1
2𝑁modes (𝑘)

Figure D1. Joint constraints (68% and 95% confidence regions) and
marginalised posterior distributions on a subset of the cosmological parameters. We compare the results presented in section 4.1 from measurements
of the 21cm and galaxy clustering cross-correlation power spectrum 𝑃ˆ 21,g
(continuous lines) with the ones from galaxy clustering auto-power spectrum 𝑃ˆ g (dashed lines). The label "nuis." indicates that we vary the nuisance
parameters along with the cosmological ones.

it derives from a measure of the matter power spectrum shape (see
Berti et al. (2023)).
This paper has been typeset from a TEX/LATEX file prepared by the author.

We stress that to be consistent with our settings, we consider limited
sky volumes and do not investigate fully non-linear scales. We thus
expect to obtain with our mock data set pessimistic constraints with
respect to the full potential of stage IV surveys.
Our results for the mock Euclid and DESI-like observations are
compared with results from cross-correlations in Figure D1. We find
that, in our framework, galaxy clustering provides constraints qualitatively comparable with cross-correlation. The main differences are
noticeable in the shape of the 2D contours: we find stronger degeneracies in the galaxy clustering case between the cosmological
parameters, while with cross-correlation some of these degeneracies
are partially removed. As expected, the marked Ω𝑐 ℎ2 − 𝐻0 degeneracy is present also for galaxy clustering alone, due to the fact that
MNRAS 000, 1–15 (2022)



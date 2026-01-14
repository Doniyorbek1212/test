
import { Question } from './types';

const rawData1 = `Sportda matematik statistik tahlil	Spоrt аmаliyotidа vаriаtsiya kоeffitsiеnti qiymаti 0 – 10 % bo’lsа qanday hisоblаnаdi?	kichik (yaхshi)	o’rtаchа (qоniqаrli)	judа yaхshi (а’lо)	kаttа (yomоn)
Sportda matematik statistik tahlil	Tаjribаviy o’lchаsh nаtijаlаri qаtоrining tаqsimоti nima dеb аytilаdi?	empirik tаqsimоt	ekspоnеntsiоnаl tаqsimоt	prоpоrtsiоnаl tаqsimоt	rеgrеssiоn tаqsimоt
Sportda matematik statistik tahlil	O‘rtacha arifmetik qiymat qanday aniqlanadi?	qiymatlarning yig‘indisini ularning soniga bo‘lish orqali	eng katta va eng kichik qiymatni qo‘shib, ikkiga bo‘lish orqali	hammasini ko‘paytirib, ildiz ostiga olish orqali	eng katta qiymatni tanlash orqali
Sportda matematik statistik tahlil	Spоrt аmаliyotidа vаriаtsiya kоeffitsiеntining qiymаti 11-20% bo’lsа qanday hisоblаnаdi?	o’rtаchа (qоniqаrli)	kichik (yaхshi)	kаttа (yomоn)	judа yaхshi (а’lо)
Sportda matematik statistik tahlil	Dispersiya nimani ifodalaydi?	qiymatlarning o‘rtachadan og‘ishini kvadrat ko‘rinishda ifodalaydi	o‘rtacha qiymatni ko‘rsatadi	eng katta qiymatni aniqlaydi	qiymatlar yig‘indisini beradi
Sportda matematik statistik tahlil	Standart og‘ish nima?	dispersiyaning kvadrat ildizi	o‘rtacha geometrik qiymat	o‘rtacha qiymat	mediananing teskari ko‘rsatkichi
Sportda matematik statistik tahlil	Spоrt аmаliyotidа vаriаtsiya kоeffitsiеntining qiymаti 20% dan yuqori bo’lsа qanday hisоblаnаdi?	kаttа (yomоn)	kichik (yaхshi)	o’rtаchа (qоniqаrli)	judа yaхshi (а’lо)
Sportda matematik statistik tahlil	Sportda statistik tahlilning asosiy maqsadi nima?	natijalarni ilmiy asosda tahlil qilish va baholash	sportchilarning shaxsiy hayotini o‘rganish	mashg‘ulot joylarini tanlash	jismoniy yuklamalarni kamaytirish
Sportda matematik statistik tahlil	O’rtаcha аrifmеtik хаtоlik nimani ifоdаlаydi?	o’rtаchа аrifmеtik qiymаtning og'ishini	o’rtаchа аrifmеtik qiymаtning kоrrеlyatsiyasini	o’rtаchа аrifmеtik qiymаtning dispеrsiyasini	o’rtаchа аrifmеtik qiymаtning vаriаtsiyasini
Sportda matematik statistik tahlil	Sportchilarning musobaqa natijalari, rekordlar va ko‘rsatkichlarini o‘rganish hamda ularning dinamikasini aniqlashga qaratilgan tahlil qanday nomlanadi?	natijaviy tahlil	mashg‘ulot jarayonini tahlil qilish	texnik-taktik tahlil	psixologik tahlil
Sportda matematik statistik tahlil	O’rgаnilаyotgаn mаsаlа nuqtаi nаzаridаn muhim bo’lgаn o’zguruvchilаr nima deb aytiladi?	аhаmiyatli (yoki yuоri infоrmаtiv)	estеtik-tехnik spоrt turlаri uchun аhаmiyatli	аhаmiyatsiz (yoki pаst infоrmаtiv)	аntrоpоmеtrik (yoki insоn tаnаsi o’lchаmlаri) uchun muhim
Sportda matematik statistik tahlil	Sportchi yoki jamoaning texnik harakatlari, taktik qarorlari va ularning natijaga ta’siri matematik-statistik usullar orqali baholash qaysi tahlil turini ifodalaydi?	texnik-taktik tahlil	natijaviy tahlil	mashg‘ulot jarayonini tahlil qilish	psixologik tahlil
Sportda matematik statistik tahlil	Tizimni vаqt o’tishi bilаn sоn qiymаti o’zgаrib bоrаdigаn birоn bir хоssаsini хаrаktеrlаydigаn kаttаlik nima dеb аytilаdi?	o’zgаruvchi	tizim	bоshqаruv	nаzоrаt
Sportda matematik statistik tahlil	Sportchilarning yurak urish tezligi, nafas olish chastotasi, kuch, tezlik, chidamlilik kabi ko‘rsatkichlari statistik tarzda tahlil qilish qaysi tahlil turini ifodalaydi?	fiziologik va jismoniy ko’rsatkichlar tahlili	mashg‘ulot jarayonini tahlil qilish	texnik-taktik tahlil	psixologik tahlil
Sportda matematik statistik tahlil	Sportchining natijalari qanchalik bir xil, barqaror, yoki o‘zgaruvchan ekanini ko‘rsatadigan eng muhim statistik ko‘rsatkich nima deyiladi?	variatsiya koeffitsienti	o’rtacha arifmetik qiymat	standart kvadrat og’ish	dispersiya
Sportda matematik statistik tahlil	O’rgаnilаyotgаn mаsаlа nuqtаi nаzаridаn muhim bo’lmаgаn o’zguruvchilаr nima dеb аytilаdi?	аhаmiyatsiz (yoki pаst infоrmаtiv)	аhаmiyatli (yoki yuоri infоrmаtiv)	estеtik-tехnik spоrt turlаri uchun аhаmiyatli	аntrоpоmеtrik (yoki insоn tаnаsi o’lchаmlаri) uchun muhim
Sportda matematik statistik tahlil	Shkаlа so’zining mа’nоsi nimа?	lоtinchа  “skаlе” – nаrvоn mа’nоsini аnglаtаdi	хitоychа “sа - kе -lе” – yuqоrigа ko’tаrilish mа’nоsini аnglаtаdi	yunоnchа “skelе” – dаrаjа mа’nоsini аnglаtаdi	inglizchа “skeyl” – zinа, bоsqichmа-bоsqich mа’nоsini аnglаtаdi
Sportda matematik statistik tahlil	Sportda matematik statistik tahlil "Microsoft Office"ning qaysi dasturda hisoblanadi?	Microsoft Excel	Microsoft Power Point	Microsoft Exsel	Microsoft Word
Sportda matematik statistik tahlil	Barcha qiymatlarning yig‘indisini ularning soniga bo‘lish natijasida hosil bo‘lgan son nima deyiladi?	o’rtacha arifmetik qiymat	dispersiya	variatsiya koeffisienti	kvadrat og’ish
Sportda matematik statistik tahlil	Sport mashg‘ulotlarida qo‘llaniladigan yuklama, dam olish, mashqlar hajmi va intensivligining o‘zaro munosabatini tahlil qilish qaysi tahlil turini ifodalaydi?	mashg‘ulot jarayonini tahlil qilish	texnik-taktik tahlil	fiziologik va jismoniy ko’rsatkichlar tahlili	psixologik tahlil
Sportda matematik statistik tahlil	Sportchining ruhiy tayyorgarligi, stressga bardoshliligi va motivatsiya darajasi bo‘yicha statistik tahlillar qaysi tahlil turini ifodalaydi?	psixologik tahlil	texnik-taktik tahlil	mashg‘ulot jarayonini tahlil qilish	fiziologik va jismoniy ko’rsatkichlar tahlili
Sportda matematik statistik tahlil	Xalqaro birliklar tizimida tezlikning o'lchov birligi nima?	metr/soniya	metr	soniya	vatt
Sportda matematik statistik tahlil	Kislоrоd istе’mоli tеzligi o’lchоv birligi nima?	ml/daq	kg/daq	m/daq	km/daq
Sportda matematik statistik tahlil	Аsоsiy хаtоlik deganda nima tushuniladi?	o’lchаsh usuli vа o’lchоv аsbоblаrining хаtоligi	o’lchаsh qurilmа vа аsbоblаrini nоrmаl qo’llаsh shаrоitlаridа nаmоyon bo’lishi	insоn оmili bilаn аniqlаnаdigаn хаtоlik	o’lchоv аsbоblаrini nоrmаl shаrоitdаn chеtlаshgаn vаziyatdа ishlаshi bilаn bоg’liq bo’lgаn хаtоlik
Sportda matematik statistik tahlil	1 m/s ni kilometr soatga o'tkazilsa qanday qiymat kelib chiqadi?	3,6 km/soat	3600 km/soat	60 km/soat	1 km/soat
Sportda matematik statistik tahlil	Xalqaro birliklar tizimida quvvatning o'lchov birligi nima?	vаtt (Vt)	n’yutоn mеtr (N/m)	mеtr/sоniya (m/s)	kilоgrаmm/mеtr (kg/m)
Sportda matematik statistik tahlil	Jismоniy tаyyorgаrlik ko’rsаtkichlаrining rivоjlаnishi nima bilаn bоg’liq?	jismоniy sifаtlаrning rivojlanishi	tехnik ko’rsаtkichlаrning rivojlanishi	tаktik vаriаntlаrning xilma-xilligi	mа’nаviy sifаtlаrning rivojlanishi
Sportda matematik statistik tahlil	Qo’shimchа хаtоlik deganda nima tushuniladi? 	o’lchоv аsbоblаrini nоrmаl shаrоitdаn chеtlаshgаn vаziyatdа ishlаshi bilаn bоg’liq bo’lgаn хаtоlik	o’lchаsh usuli vа o’lchоv аsbоblаrining хаtоligi	o’lchаsh qurilmа vа аsbоblаrini nоrmаl qo’llаsh shаrоitlаridа nаmоyon bo’lishi	insоn оmili bilаn аniqlаnаdigаn хаtоlik
Sportda matematik statistik tahlil	Kаttа hаjmdаgi tаnlаnmаni o’rgаnishdа qanday variatsion qator tuzilаdi?	intеrvаlli yoki uzluksiz	intеrvаlli yoki mаrkаziy	intеrvаlli yoki rеgrеssiyali	intеrvаlli yoki dispеrsiyali
Sportda matematik statistik tahlil	Stаtistik bоg’lаnishlаr оrаsidа eng muhim аhаmiyatgа egа bo’lgаn munosabat qanday nomlanadi?	kоrrеlyatsiоn munоsаbаtlаr	prоpоrtsiоnаl munоsаbаtlаr	dispеrsiоn munоsаbаtlаr	rеgrеssiоn munоsаbаtlаr
Sportda matematik statistik tahlil	Bir ko’rsаtkichning bir qiymаtigа bоshqа ko’rsаtkichning bir nеchtа qiymаtlаri mоs kеlаdigаn bоg’lаnish nima deyiladi?	stаtistik bоg’lаnish	optimаl bоg’lаnish	shаrtli bоg’lаnish	funktsiоnаl bоg’lаnish
Sportda matematik statistik tahlil	Quyidаgilаr оrаsidа jism mаssаsini o’lchоv birliklаrini to’g’ri bеlgilаngаn vаriаntini tоping	kilоgrаmm, grаmm, milligrаmm	funt, kаrаt, tоnnа, litr, tоnnа, litr	kilоgrаmm, grаmm, litr, milligrаmm	kаrаt, grаmm, tоnnа, litr
Sportda matematik statistik tahlil	Chiziqli kоrrеlyatsiya kоeffitsiеnti qaysi fоrmulа yordаmidа hisоblаnadi?	Brаve-Pirsоn	Fishеr-Binе 	Kаrаkао-Timmеr	Аbаlаkоv
Sportda matematik statistik tahlil	Abalakov usuli qaysi ko'rsatkichni aniqlashda ishlatiladi?	turgan joyda balandlikka sakrash	turgan joyda uzunlikka sakrash	yugurib kelib uzunlikka sakrash	yugurib kelib balandlikka sakrash
Sportda matematik statistik tahlil	Kuchni o’lchоv birliklаri uchun to’g’ri jаvоbni tоping	N (Nyutоn)	J (Jоul)	Vt (Vаtt)	A (Аmpеr)
Sportda matematik statistik tahlil	O’lchаsh nаtijаlаri uchun stаndаrt оg’ish qanday hosil bo'ladi?	dispеrsiya qiymаtini kvаdrаt ildizdаn chiqarish orqali hоsil bo’lаdi	absоlyut хаtоlik kvаdrаt ildizdаn hоsil bo’lаdi	nisbiy хаtоlik qiymаtini kvаdrаt ildizdаn hоsil bo’lаdi	absоlyut хаtоlik qiymаtidаn kvаdrаt ildizdаn hоsil bo’lаdi
Sportda matematik statistik tahlil	O’lchаsh nаtijаlаrini chаstоtаlаrgа bоg’liqligini ifоdаlоvchi jаdvаl nima deyiladi?	variatsion qator	dispersiya	standart kvadrat og’ish	absоlyut хаtоlik
Sportda matematik statistik tahlil	Ikkita o‘rtacha orasidagi farqni standart xatolikga nisbatan o‘lchovchi son	T-mezon	variatsion qator	dispersiya	standart kvadrat og’ish
Sportda matematik statistik tahlil	Sportchi natijalarining barqarorligini qaysi ko'rsatkich belgilaydi?	variatsiya koeffitsienti	dispersiya	standart kvadrat og’ish	o'rtacha arifmetik qiymat
Sportda matematik statistik tahlil	Variatsiya koeffitsiyenti qanchalik kam bo'lsa u shunchalik ... bo'ladi.	barqaror	beqaror	noto'g'ri	o'zgaruvchan
Sportda matematik statistik tahlil	T-mezon qiymati qanchalik katta bo'lsa statistik jihatdan shunchalik ... bo'ladi	muhim	sodda	ahamiyatsiz	murakkab
Sportda matematik statistik tahlil	Sport ilmiy tadqiqotlarida variatsiya koeffitsienti  testning ... tekshirishda ishlatiladi.	aniqligi va barqarorligini	o'zgaruvchan	ahamiyatliligini	murakkabligini
Sportda matematik statistik tahlil	Sportchilar faoliyatini, mashg‘ulot jarayonini va musobaqa natijalarini ilmiy asosda o‘rganish, tahlil qilish va natijalar asosida xulosalar chiqarish uchun qo‘llaniladigan muhim ilmiy-uslubiy yo‘nalish nima deyiladi?	sportda matematik-statistik tahlil	sportda modellashtirish	sportda saralash	sportda bashorat qilish
Sportda matematik statistik tahlil	Sportda matematik-statistik tahlil jarayonida qanday ko'rsatkichlar baholanadi?	o‘rtacha arifmetik qiymatlar, dispersiya, korrelyatsiya, regressiya tahlili, variatsiya koeffitsienti va b.	o‘rtacha arifmetik qiymatlar	dispersiya, korrelyatsiya	regressiya tahlili, variatsiya koeffitsienti
Sportda matematik statistik tahlil	Xalqaro birliklar tizimi (SI) da masofani o'lchash birliklari qaysi javobda keltirilgan?	mm, sm, m, km	g, kg, t	ml, l, m2	f, m, y
Sportda matematik statistik tahlil	O’lchаshdаgi аbsоlyut хаtоlik qаndаy tоpilаdi?	o’lchаnаyotgаn kаttаlikni hаqiqiy qiymаti vа o’lchаshdа аniqlаngаn qiymаti o’rtаsidаgi fаrq аbsоlyut хаtоlik hisоblаnаdi	o’lchаnаyotgаn kаttаlikni o’rtаchа аrifmеtik qiymаti bilаn o’rtаchа gеоmеtrik qiymаti o’rtаsidаgi fаrq аbsоlyut хаtоlik hisоblаnаdi	o’lchаnаyotgаn kаttаlikni o’rtаchа аrifmеtik qiymаti bilаn dispеrsiyasi o’rtаsidаgi fаrq аbsоlyut хаtоlik hisоblаnаdi	o’lchаnаyotgаn kаttаlikni o’rtаchа аrifmеtik qiymаti bilаn  hаqiqiy qiymаti o’rtаsidаgi fаrq аbsоlyut хаtоlik hisоblаnаdi
Sportda matematik statistik tahlil	5 6 7 8 9 ushbu sonlarning o'rtacha arifmetik qiymatini topin.	7	7,5	6	8
Sportda matematik statistik tahlil	Morfologik o'lchovlar qaysi ko'tsatkichlarni o'lchashni nazarda tutadi?	tana uzunligi, og‘irligi, ko‘krak qafasi aylana o‘lchami, tana massasi indeksi va b.	yurak urish chastotasi, o‘pka sig‘imi, qon bosimi va b.	tezlik, kuch, chidamlilik, chaqqonlik, egiluvchanlikni	sportchining harakat aniqligi, texnika bajarish tezligi, taktika samaradorligi
Sportda matematik statistik tahlil	Statistik aniqlikni oshirish yo‘li qanday?	tanlanmani ko‘paytirish	hisobni qisqartirish	grafikni olib tashlash	tanlanmani kamaytirish
Sportda matematik statistik tahlil	Sport testlari statistikada qanday vazifani bajaradi?	o‘lchash vositasi	tiklanish	dam olish	mashqlantirish
Sportda matematik statistik tahlil	Texnik va taktik o‘lchashlar qaysi ko'tsatkichlarni o'lchashni nazarda tutadi?	sportchining harakat aniqligi, texnika bajarish tezligi, taktika samaradorligi	tana uzunligi, og‘irligi, ko‘krak qafasi aylana o‘lchami, tana massasi indeksi va b.	yurak urish chastotasi, o‘pka sig‘imi, qon bosimi va b.	tezlik, kuch, chidamlilik, chaqqonlik, egiluvchanlikni
Sportda matematik statistik tahlil	Natijaviy o‘lchashlar qaysi ko'tsatkichlarni o'lchashni nazarda tutadi?	sport musobaqalaridagi ko‘rsatkichlar (vaqt, masofa, ochko, g‘alaba soni va h.k.)	tana uzunligi, og‘irligi, ko‘krak qafasi aylana o‘lchami, tana massasi indeksi va b.	yurak urish chastotasi, o‘pka sig‘imi, qon bosimi va b.	tezlik, kuch, chidamlilik, chaqqonlik, egiluvchanlikni
Sportda matematik statistik tahlil	O'lchamning "nisbiy xatoligi" qanday ko'rsatkichda ifodalanadi?	% (foizda)	kg (kilogramda)	m (metrda)	s (soniyada)
Sportda matematik statistik tahlil	Xalqaro birliklar tizimi (SI) da massani o'lchash birligi qaysi javobda keltirilgan?	kilоgrаmm  (qisqаchа kg)	grаmm (qisqаchа g)	tоnnа (qisqаchа t)	sеntnеr (qisqаchа ts)
Sportda matematik statistik tahlil	Xalqaro birliklar tizimi (SI) da quvvat o'lchash birligi qaysi javobda keltirilgan?	Vаtt  (qisqаchа Vt)	Jоul  (qisqаchа J)	Nyutоn (qisqаchа N)	Amper (qischa A)
Sportda matematik statistik tahlil	Хmах deganda nima tushuniladi?	tаnlаmаdаgi mаksimаl, ya’ni eng kаttа nаtijа	tаnlаmаdаgi eng ko’p uchrаydigаn nаtijа	tаnlаmаdаgi eng kаm uchrаydigаn nаtijа	tаnlаmаdаgi minimаl, ya’ni eng kichik nаtijа
Sportda matematik statistik tahlil	Ikki ko’rsаtkich nаtijаlаri оrаsidаgi bоg’lаnishning yaqinlik dаrаjаsini ifоdаlаydigan ko'rsatkich nima deyiladi?	korrelyatsiya koeffitsienti	dispersiya	standart kvadrat og’ish	o'rtacha arifmetik qiymat
Sportda matematik statistik tahlil	O'lchamning "absolyut xatoligi" qanday ko'rsatkichda ifodalanadi?	sonda	kg (kilogramda)	m (metrda)	s (soniyada)
Sportda matematik statistik tahlil	Korrelyatsiya koeffitsienti qiymati qaysi oraliqda bo'ladi?	 -1 vа 1	0 vа 1	0 vа ∞	 0 vа 2
Sportda matematik statistik tahlil	Spоrtchining tаyyorgаrligini nаzоrаt qilish qаysi mutахаssislаr hаmkоrligidа o’tkаzilgаndа yuqоri sаmаrа bеrаdi?	pеdаgоglаr, shifоkоrlаr, fiziоlоglаr, biоkimyochilаr, psiхоlоglаr, biоmехаniklаr	pеdаgоglаr, shifоkоrlаr, fiziоlоglаr, biоkimyochilаr, psiхоlоglаr, mехаniklаr, tехnоlоglаr	pеdаgоglаr, shifоkоrlаr, fiziоlоglаr, tuprоqshunоslаr, elеktriklаr	fiziоlоglаr, biоkimyochilаr, psiхоlоglаr, gеоgrаflаr, аstrоnаvtlаr
Sportda matematik statistik tahlil	O‘rtacha arifmetik qiymat formulasi qaysi?	∑x / n	∑x	n / ∑x	x*n
Sportda matematik statistik tahlil	Tanlanma deganda nimani tushunasiz?	bosh to‘plamning bir qismi	faqat kuchli sportchilar	barcha sportchilar	tadqiqotdagi barcha ma’lumotlar
Sportda matematik statistik tahlil	Bosh to‘plam bu -	tadqiqotda o‘rganiladigan barcha obyektlar	tajriba guruhi	faqat nazorat guruhi	eng yaxshi natijalar
Sportda matematik statistik tahlil	Dispersiya nimani ko‘rsatadi?	ma’lumotlarning tarqalish darajasini	o‘rtacha qiymatni	eng katta qiymatni	eng kichik qiymatni
Sportda matematik statistik tahlil	Standart og‘ish nimani bildiradi?	ma’lumotlarning o‘rtachadan chetlanishi	sonlar yig‘indisi	tanlanma hajmi	o‘rtacha qiymat
Sportda matematik statistik tahlil	p ≤ 0,05 nimani anglatadi?	natija ishonchli	ma’lumot yetarli emas	natija ishonchsiz	farq tasodifiy
Sportda matematik statistik tahlil	t-mezon kim tomonidan ishlab chiqilgan?	Styudent	Spearman	Fisher	Pearson
Sportda matematik statistik tahlil	t-mezon qachon qo‘llaniladi?	ikki o‘rtacha qiymatni solishtirishda	foizni hisoblashda	korrelatsiyani aniqlashda	uch guruhni solishtirishda
Sportda matematik statistik tahlil	Korrelyatsiya nimani ko‘rsatadi?	bog‘liqlik darajasini	o‘rtacha qiymatni	tarqalishni	farqni
Sportda matematik statistik tahlil	Variatsiya koeffitsienti formulasi qaysi qatorda berilgan?	σ / x̄ · 100%	x̄ / σ	∑x / n	max-min
Sportda matematik statistik tahlil	Sport tadqiqotida nazorat guruhi nima uchun kerak?	natijalarni solishtirish uchun	natijani yashirish uchun	statistikani buzish uchun	mashq qilish uchun
Sportda matematik statistik tahlil	Tajriba guruhining vazifasi nima?	yangi metod bilan shug‘ullanish	murabbiylar	mashq qilmaydiganlar	natijani yaxshilash
Sportda matematik statistik tahlil	Statistik tahlilning birinchi bosqichi qanday nomlanadi?	ma’lumotlarni yig‘ish	hisoblash	grafik chizish	xulosa chiqarish
Sportda matematik statistik tahlil	Ma’lumotlarni qayta ishladi nimani anglatadi?	hisoblash va tahlil qilish	sportchi tanlash	musobaqa o‘tkazish	mashq bajarish
Sportda matematik statistik tahlil	Absolyut ko‘rsatkich bu -	aniq son	o‘rtacha qiymat	foiz	nisbat
Sportda matematik statistik tahlil	Statistik tahlilda n nimani bildiradi?	tanlanma hajmi	dispersiya	xato	o‘rtacha qiymat
Sportda matematik statistik tahlil	Sport natijalarini taqqoslashda eng muhim ko‘rsatkich qaysi?	o‘rtacha qiymat	familiya	yosh	shug'ullanish darajasi
Sportda matematik statistik tahlil	Sportda matematik-statistik tahlil qaysi fanlar bilan bog‘liq?	matematika va pedagogika	matematika	fizika	kimyo
Sportda matematik statistik tahlil	Statistik natija qachon ishonchli hisoblanadi?	p ≤ 0,05	p = 1	p = 0	p > 0,05
Sportda matematik statistik tahlil	Matematik-statistik tahlil tadqiqotlarning qaysi bosqichida qo‘llaniladi?	tadqiqot davomida	umuman qo‘llanilmaydi	faqat boshida	faqat oxirida
Sportda matematik statistik tahlil	Sportda matematik-statistik tahlilning yakuni nima?	ilmiy xulosa	formula	jadval	diagramma
Sportda matematik statistik tahlil	Matematik statistika sportda nimaga xizmat qiladi?	natijalarni ilmiy asoslashga	mashqlarni kamaytirishga	musobaqani bekor qilishga	faqat hisoblashga
Sportda matematik statistik tahlil	Statistik ko‘rsatkichlar nima uchun solishtiriladi?	sportchi natijalaridagi farqlarni aniqlash uchun	mashq yuklamasini kamaytirish uchun	jadval tuzish uchun	grafik chizish uchun
Sportda matematik statistik tahlil	Statistik xatolik nimaga bog‘liq?	tanlanma hajmiga	murabbiyga	mashq joyiga	sport turiga
Sportda matematik statistik tahlil	Matematik-statistik tahlilda chastota bu -	belgining takrorlanish soni	o‘rtacha qiymat	dispersiya	belgining qiymati
Sportda matematik statistik tahlil	Matematik-statistik tahlilda asimmetriya nimani bildiradi?	taqsimotning notekisligi	dispersiya	chastota	o‘rtacha qiymat
Sportda matematik statistik tahlil	Kvartil nima?	qatorni 4 qismga bo‘luvchi ko‘rsatkich	o‘rtacha qiymat	foiz	eng katta qiymat
Sportda matematik statistik tahlil	Sport statistikasi qaysi yo‘nalishda qo‘llaniladi?	mashg‘ulot va musobaqada	faqat nazariyada	faqat musobaqada	faqat mashg‘ulotda
Sportda matematik statistik tahlil	Sportda o‘lchash aniqligi nimaga bog‘liq?	asbob sifatiga	murabbiy tajribasiga	sportchi yoshiga	sport turiga
Sportda matematik statistik tahlil	Tizimli xato deganda nima tushuniladi?	doimiy takrorlanuvchi xato	hisob xatosi	statistik xato	tasodifiy
Sportda matematik statistik tahlil	Funktsional o‘lchashlar qaysi ko'tsatkichlarni o'lchashni nazarda tutadi?	yurak urish chastotasi, o‘pka sig‘imi, qon bosimi va b.	tana uzunligi, og‘irligi, ko‘krak qafasi aylana o‘lchami, tana massasi indeksi va b.	tezlik, kuch, chidamlilik, chaqqonlik, egiluvchanlikni	sportchining harakat aniqligi, texnika bajarish tezligi, taktika samaradorligi
Sportda matematik statistik tahlil	Guruhlararo farq qaysi mezon bilan tekshiriladi?	T-mezon	dispersiya	median	chastota
Sportda matematik statistik tahlil	Tadqiqotning ishonchliligi nimani bildiradi?	natijaning barqarorligi	natijaning kattaligi	natijaning tezligi	natijaning foizi
Sportda matematik statistik tahlil	Statistik tahlilda taqqoslash obyekti nima?	natijalar	mashq	murabbiy	sportchi
Sportda matematik statistik tahlil	Sportda reyting tizimi nimaga asoslanadi?	statistik ko‘rsatkichlarga	sportchi kuchiga	sportchi yoshiga	sportchi jinsiga
Sportda matematik statistik tahlil	Jismoniy sifatlar o‘lchovi qaysi ko'tsatkichlarni o'lchashni nazarda tutadi?	tezlik, kuch, chidamlilik, chaqqonlik, egiluvchanlikni	yurak urish chastotasi, o‘pka sig‘imi, qon bosimi va b.	tana uzunligi, og‘irligi, ko‘krak qafasi aylana o‘lchami, tana massasi indeksi va b.	sportchining harakat aniqligi, texnika bajarish tezligi, taktika samaradorligi
Sportda matematik statistik tahlil	Statistik xulosa qanday hollarda noto‘g‘ri bo‘ladi?	hisob noto‘g‘ri bo‘lsa	ma’lumot ko‘p bo‘lsa	grafik chizilsa	jadval bo‘lsa
Sportda matematik statistik tahlil	Statistik tahlilda “og‘ish” nimani anglatadi?	belgining o‘rtachadan farqi	eng katta qiymat	eng kichik qiymat	dispersiya
Sportda matematik statistik tahlil	Standart kvadrat og‘ish qaysi ko‘rsatkich bilan bog‘liq?	dispersiya	median	chastota	moda
Sportda matematik statistik tahlil	Standart og‘ish qaysi belgi bilan belgilanadi?	σ	D	V	p`;

const rawData2 = `Sportda saralash, modellashtirish va bashorat qilish	Sportda saralash tushunchasi nimani anglatadi?	iqtidorli sportchilarni aniqlash va tanlab olish	sport inventarlarini tanlash	musobaqa o‘tkazish shartlari	mashg‘ulot rejasini tuzish
Sportda saralash, modellashtirish va bashorat qilish	Sportda dastlabki saralash qaysi yoshda o‘tkaziladi	6–10 yosh	14–16 yosh	18 yoshdan keyin	3–5 yosh
Sportda saralash, modellashtirish va bashorat qilish	Morfologik ko‘rsatkichlar deganda nima tushuniladi	bo‘y, vazn, tana tuzilishi	texnik tayyorgarlik	tezlik sifati	psixologik barqarorlik
Sportda saralash, modellashtirish va bashorat qilish	Sportchilarni saralashda antropometrik mezonlar qanday o’lchovlarni nazarda tutadi?	bo‘y, tana massasi, gavda tuzilishi nisbatlari (qo‘l-oyoq uzunligi, yelkalar kengligi, mushak massasining rivojlanish darajasi)	yurak urish chastotasi, qon bosimi, maksimal kislorod iste’moli	mushak kuchi, tezkorlik va chidamlilik darajasi	energiya ta’minoti tizimlarining (aerob va anaerob) rivojlanishi
Sportda saralash, modellashtirish va bashorat qilish	Funktsional ko‘rsatkichlar nimani ifodalaydi?	organizm tizimlarining faoliyatini	tashqi ko‘rinishni	sport formani	texnik harakatlar
Sportda saralash, modellashtirish va bashorat qilish	Epchillik jismoniy sifatini rivojlanish darajasini qaysi testlar orqali aniqlash mumkin?	3X10 mokisimon yugurish, estafeta mashqlari	oldinga egilish, “ko’prik” holatini ushlash	turgan joyda uzunlikka sakrash, turnikda tortilish	PCW170, 6 daqiqa yugurish, 100 m ga yugurish
Sportda saralash, modellashtirish va bashorat qilish	Sportda uzoq muddatli saralash nimani bildiradi?	sportchi rivojlanishini yillar davomida baholash	faqat musobaqa natijasini hisoblash	tibbiy tekshiruv	bir martalik tanlov
Sportda saralash, modellashtirish va bashorat qilish	Motivatsiya qanday ma’noni bildiradi?	ichki undovchi kuch	da’vat	istak	idrok
Sportda saralash, modellashtirish va bashorat qilish	Qaysi sport turida bo‘y uzunligi muhim omil hisoblanadi?	basketbol	og‘ir atletika	dzyudo	gimnastika
Sportda saralash, modellashtirish va bashorat qilish	Sportchini aniqlangan qobiliyat va psixofiziologik ko‘rsatkichlariga ko‘ra mos sport turiga yoki ixtisoslashgan yo‘nalishga yo‘naltirish jarayoni nima deyiladi?	sportda yo’naltirish	sportda saralash	sportda modellashtirish	sportda bashorat qilish
Sportda saralash, modellashtirish va bashorat qilish	Sport saralashida tibbiy nazoratning vazifasi nimadan iborat?	sportchining sog‘liq holatini baholash	sportchining natijasini oshirish	sportchining texnikasini baholash	sportchini mashg'ulotlardan chetlatish
Sportda saralash, modellashtirish va bashorat qilish	Iqtidorli sportchi deganda qanday sportchi nazarda tutiladi?	yuqori tabiiy qobiliyatga ega shaxs	katta yoshli sportchi	tajribasiz sportchi	ko‘p mashq qiluvchi sportchi
Sportda saralash, modellashtirish va bashorat qilish	Mashg'ulotlar va musobaqalar faoliyatini tahlil qilish, boshqarish va optimallashtirish uchun umumlashtirib foydalanish jarayoni nima deyiladi?	sportda modellashtirish	sportda bashorat qilish	sportda yo’naltirish	sportda saralash
Sportda saralash, modellashtirish va bashorat qilish	Sport seleksiyasida nazorat testlari nima uchun qo‘llaniladi?	sportchining jismoniy va funktsional darajani aniqlash	musobaqani tahlil qilish	sportchi intizomni oshirish	sportchi nazariy bilimlarini tekshirish
Sportda saralash, modellashtirish va bashorat qilish	Sport saralashida genetik omil nimani belgilaydi?	tabiiy qobiliyat va imkoniyatlarni	sport formani	mashg‘ulot rejimini	sportchi tayyorgarlik darajasini
Sportda saralash, modellashtirish va bashorat qilish	_____ sportchi organizmining tanlangan sport turidagi yuklamalarga bardosh bera olish, jarohatlarsiz va sog‘lig‘iga zarar yetkazmasdan mashg‘ulot olib borish imkoniyatini bildiradi?	sportda yaroqlilik	sportda saralash	sportda bashorat qilish	sportda modellashtirish
Sportda saralash, modellashtirish va bashorat qilish	Sport saralashining birinchi bosqichi qanday nomlanadi?	birlamchi saralash	dastlabki saralash	boshlang'ich saralash	oraliq saralash
Sportda saralash, modellashtirish va bashorat qilish	Tezkorlik sifatini qaysi mashq orqali baholanadi?	30 m yugurish	1000 m yugurish	turnikda tortilish	o‘tirib turish
Sportda saralash, modellashtirish va bashorat qilish	Sport seleksiyasida pedagogik kuzatuv nimani aniqlaydi?	mashg‘ulotni o‘zlashtirish darajasini	yurak urishini	bo‘y uzunligini	tana vaznini
Sportda saralash, modellashtirish va bashorat qilish	V.N.Platonov bo’yicha saralashning qanday bosqichlari mavjud?	birlamchi, dastlabki, oraliq, asosiy, yakuniy	dastlabki, asosiy, yakuniy	boshlang'ich, asosiy, yakuniy, o’tish	dastlabki, oraliq, asosiy, yakuniy
Sportda saralash, modellashtirish va bashorat qilish	Sport saralashida kompleks yondashuv nimani nazarda tutadi?	barcha omillarni birgalikda baholashni	psixologik tahlilni	tasodifiy tanlashni	jismoniy sifatlarni baholashni
Sportda saralash, modellashtirish va bashorat qilish	Boshlang‘ich saralashda asosiy e’tibor nimaga qaratiladi?	tabiiy qobiliyat va sog‘liqqa	sport razryadiga	sportchi tajribasiga	musobaqa natijasiga
Sportda saralash, modellashtirish va bashorat qilish	“Ideal sportchi” namunasi qaysi modelni tafsiflaydi?	mahorat modeli	morfo-funksional model	musobaqa modeli	tayyorgarlik modeli
Sportda saralash, modellashtirish va bashorat qilish	Sport seleksiyasida ixtisoslashuv deganda nima tushuniladi?	muayyan sport turiga yo‘naltirish	mashg‘ulotni kamaytirish	sportchiga dam berish	sportchini boshqa sportga o‘tkazish
Sportda saralash, modellashtirish va bashorat qilish	Sport saralashida individual yondashuv deganda nimani tushunasiz?	har bir sportchining xususiyatini hisobga olish	faqat natijaga qarash	tasodifiy tanlash	barcha sportchilarga bir xil talab
Sportda saralash, modellashtirish va bashorat qilish	Sport seleksiyasida bashorat qilish nimani nazarda tutadi?	kelajak imkoniyatini oldindan aniqlash	mashg‘ulotni bekor qilish	musobaqa jadvali	o‘tgan natijani baholash
Sportda saralash, modellashtirish va bashorat qilish	Sport saralashida baholash mezonlari qanday bo'ladi?	aniq va o‘lchanadigan bo‘lishi kerak	subyektiv	o‘zgaruvchan	keraksiz
Sportda saralash, modellashtirish va bashorat qilish	Sport mashg'ulotida yuklama deb nimaga aytiladi?	sportchi organizmiga jismoniy mashqlar ta'siriga	jismoniy rivojlanish darajasiga	sportchi texnik tayyorgarligiga	organizmning funksional rivojlanishiga
Sportda saralash, modellashtirish va bashorat qilish	Sportchining yoshi, jinsi, sport tajribasi, fiziologik ko‘rsatkichlari, psixologik holatiga asoslanadigan model qanday nomlanadi?	individual model	mahorat modeli	musobaqa modeli	funksional model
Sportda saralash, modellashtirish va bashorat qilish	Sportda saralashning asosiy maqsadi nimadan iborat?	yuqori sport natijalariga erishish	mashg‘ulotni kamaytirish	hisobot yozish	sportchini chetlatish
Sportda saralash, modellashtirish va bashorat qilish	Sportda model nimani tushunasiz?	haqiqiy jarayonന്റെ soddalashtirilgan ifodasi	sportchi kiyimi	mashg‘ulot jadvali	musobaqa qoidasi
Sportda saralash, modellashtirish va bashorat qilish	Sport modellashtirishining asosiy maqsadi nimadan iborat?	sport natijalarini bashorat qilish va boshqarish	jadval chizish	statistik hisoblash	hisobot tuzish
Sportda saralash, modellashtirish va bashorat qilish	Qaysi fan sportda modellashtirishning ilmiy asosini tashkil etadi?	matematika va informatika	biomexanika	informatika	statistika
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirish qaysi jarayonlarda qo‘llaniladi?	mashg‘ulot va musobaqa jarayonlarida	faqat tibbiyotda	faqat nazariyada	faqat musobaqada
Sportda saralash, modellashtirish va bashorat qilish	Turgan joyidan uzunlikka sakrash qaysi jismoniy sifatni baholash uchun foydalanishi mumkin?	portlovchi kuch	tezkorlik	kuch	chidamkorlik
Sportda saralash, modellashtirish va bashorat qilish	3×10 m mokisimon yugurish qaysi jismoniy sifatni rivojlantiradi?	epchillik	chidamkorlik	kuch	egiluvchanlik
Sportda saralash, modellashtirish va bashorat qilish	Ilmiy model yaratish qanday bosqichlardan tashkil topadi?	ma’lumot to‘plash, ko‘rsatkichlarni tanlash, matematik modellashtirish, modelni sinovdan o‘tkazish, tuzatish va moslashtirish	ko‘rsatkichlarni tanlash, modelni sinovdan o‘tkazish, tuzatish va moslashtirish	ko‘rsatkichlarni tanlash, matematik modellashtirish, modelni sinovdan o‘tkazish, tuzatish va moslashtirish	ma’lumot to‘plash, ko‘rsatkichlarni tanlash
Sportda saralash, modellashtirish va bashorat qilish	Sportda modelning adekvatligi nimani bildiradi?	modelning haqiqiy jarayonga mosligini	modelning yangiligini	modelning qiymatini	modelning murakkabligini
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirish parametrlari deganda nimani tushunasiz?	modelni tavsiflovchi kattaliklar	sport kiyimi	musobaqa qoidalari	jismoniy sifatlar
Sportda saralash, modellashtirish va bashorat qilish	Sportda biomexanik model deganda nima tushuniladi?	harakat biomexanikasi	ovqatlanishni	mashg'ulot yuklamasi	mashq qilish jarayoni
Sportda saralash, modellashtirish va bashorat qilish	Sportda energetik model nimani tahlil qiladi?	sportchi energiya sarfini	jamoa tarkibi umumiy yuklamasini	musobaqada raqib harakatlarini	sportchi texnik tayyorgarligini
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirishida optimallashtirish nimani nazarda tutadi?	eng samarali variantni topish	tasodifiy tanlash	hisobot yozish	natijadorlikni oshirish
Sportda saralash, modellashtirish va bashorat qilish	Ilmiy asoslangan model orqali bashorat qilish nimani nazarda tutadi?	kelajak natijani oldindan aytish	hozirgi holatni baholash	jadval tuzish	o‘tgan natijani tahlil qilish
Sportda saralash, modellashtirish va bashorat qilish	Sportda modelning ishonchliligi nimaga bog'liq?	yig'ilgan ma’lumotlar sifatiga	murabbiyga	model dizayniga	sinaluvchi ob'ektga
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirishida algoritm deganda nimani tushunasiz?	bajariladigan amallar ketma-ketligi 	berilgan diagramma	mashg'ulot turi	sportchilar tayyorgarligi
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirishida verifikatsiya deganda nimani tushunasiz?	modelning to‘g‘ri tuzilganini tekshirish	sportchini tekshirish	natijani e’lon qilish	model dizaynini bezash
Sportda saralash, modellashtirish va bashorat qilish	Modelni tuzatish va moslashtirish bosqichida qanday tadbir amalga oshiriladi?	erishilgan natijaga ko‘ra model yangilanadi	nazorat mashg‘ulotlari yoki musobaqalar orqali tekshiriladi	sportchi haqida statistik, fiziologik va texnik ma’lumotlar yig‘iladi	asosiy (yetakchi) omillar ajratiladi
Sportda saralash, modellashtirish va bashorat qilish	Mashg‘ulot jarayonini modellashtirish deganda nimani tushunasiz?	yuklama va dam olishni rejalashtirishga yordam beradi	nazariy bilimlarni muvofiqlashtirish	musobaqada jarayonini boshqarish	jismoniy sifatlarni baholash
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirishida tizimli yondashuv nimani nazarda tutadi?	ballar omillarni o‘zaro bog‘liq holda tahlil qilish	alohida elementlarni o‘rganish	natijani hisoblash	sportchilarni saralash va yo'naltirish
Sportda saralash, modellashtirish va bashorat qilish	Sportda modelning soddalashtirilishi qanday maqsadda amalga oshiriladi?	tahlilni osonlashtirish uchun	natijani yashirish uchun	hisobot yozish uchun	aniqlikni kamaytirish uchun
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirishida xatolik deganda nimani tushunasiz?	model va real holat orasidagi farq	natijaning ishonchliligi	mashg'ulot jarayonini muvofiqlashtirish	aniqlikning kamligi
Sportda saralash, modellashtirish va bashorat qilish	Sportda tibbiy tekshiruv natijasida yaroqlilik bo’yicha qanday xulosa beriladi?	Barchasi	yaroqli	yaroqsiz	qisman yaroqli
Sportda saralash, modellashtirish va bashorat qilish	Turnikda tortilish testi qaysi jismoniy sifatni baholash uchun mo'ljallangan?	kuch	portlovchi kuch	tezkor-kuch	kuch-chidamkorligi
Sportda saralash, modellashtirish va bashorat qilish	Ma’lumot to‘plash, ko‘rsatkichlarni tanlash, matematik modellashtirish, modelni sinovdan o‘tkazish, tuzatish va moslashtirish bu -…	ilmiy model yaratish bosqichlari	saralash bosqichlari	bashorat qilish	uslubiy ko'rsatmalar
Sportda saralash, modellashtirish va bashorat qilish	1000 metrga vaqtga yugurish qaysi jismoniy sifatni baholash uchun mo'ljallangan?	umumiy chidamkurlik	maxsus chidamkorlik	kuch-chidamkorligi	tezkorlik
Sportda saralash, modellashtirish va bashorat qilish	Turgan joyda balandlikka sakrash testi qaysi jismoniy sifatni baholash uchun mo'ljallangan?	portlovchi kuch	umumiy kuch	tezkor-kuch	kuch-chidamkorligi
Sportda saralash, modellashtirish va bashorat qilish	Balandlikka chiqib gavdani oldinga egish testi qaysi jismoniy sifatni baholash uchun mo'ljallangan? 	egiluvchanlik	kuch	epchillik	tezkorlik
Sportda saralash, modellashtirish va bashorat qilish	To'ldirma to'pni bosh ortidan uloqtirish qaysi jismoniy sifatni baholash uchun mo'ljallangan?	kuch	epchillik	tezkorlik	egiluvchanlik
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirishida monitoring qanday maqsadda amalga oshiriladi?	ma’lumotlarni doimiy yig‘ish va ularni yangilash	hisobot tayyorlash	grafik tuzish	bir martalik tahlil amalga oshirish
Sportda saralash, modellashtirish va bashorat qilish	Sportda modellashtirishning yakuniy maqsadi nimadan iborat?	sport natijalarini optimallashtirish	ma’lumotlarni doimiy yig‘ish va ularni yangilash	hisobot tayyorlash	grafik tuzish
Sportda saralash, modellashtirish va bashorat qilish	Siklik sport turlari deganda nimani tushunasiz?	bir harakatning uzluksiz takrorlanishi orqali musobaqalashiladigan sport turlari	murakkab koordinatsion sport turlari	jamoaviy sport o'yinlari	jangovor yakkakurash sport turlari
Sportda saralash, modellashtirish va bashorat qilish	Yosh sportchining muayyan sport turida ixtisoslashuv yo‘nalishini belgilash imkonini beruvchi tashkiliy-metodik tadbirlar tizimi nima deyiladi?	sport yo'nalishi	sport tanlovi	sportda saralash	sportda modellashtirish
Sportda saralash, modellashtirish va bashorat qilish	Haqiqiy jarayonning soddalashtirilgan nusxasi	model	bashorat	trenirovka	mashg'ulot
Sportda saralash, modellashtirish va bashorat qilish	Individual model murabbiyga nima uchun kerak?	individuallashtirilgan tayyorgarlik dasturi tuzish	mashg'ulot jarayonini nazorat qilish	tayyorgarlikning umumiy parametrlarini belgilash	jamoaviy mashg'ulotlarni optimallashtirish
Sportda saralash, modellashtirish va bashorat qilish	PWC170 testi qaysi holatni baholash maqsadida o'tkaziladi?	funksional holat	jismoniy holat	texnik tayyorgarlik holat	psixologik holat
Sportda saralash, modellashtirish va bashorat qilish	Bir haftalik mashg'ulotlarni rejalashtirish qanday nomlanadi?	mikrosikl	makrosikl	mezosikl	trenirovka
Sportda saralash, modellashtirish va bashorat qilish	O'rganilayorgan harakatlar darsning qaysi qismida amalga oshiriladi?	asosiy qism	tayyorgarlik qism	yakuniy qism	dastlabki qism
Sportda saralash, modellashtirish va bashorat qilish	Yuklama deganda nimani tushunasiz?	jismoniy mashqlarning organizmga ta'siri	faol dam olish	og'ir yuk	tayanch harakat apparati
Sportda saralash, modellashtirish va bashorat qilish	Yuklamaning inson organizmiga ta'sirini o'rganish qaysi uslub yordamida aniqlanadi?	pulsometriya	xronometraj	dars tahlili	pedagogik tahlil
Sportda saralash, modellashtirish va bashorat qilish	Tizimni vаqt o’tishi bilаn sоn qiymаti o’zgаrib bоrаdigаn birоn bir хоssаsini хаrаktеrlаydigаn kаttаlik nima dеb аytilаdi?	o’zgаruvchi	tizim	bоshqаruv	nаzоrаt
Sportda saralash, modellashtirish va bashorat qilish	Sportchilarning yurak urish tezligi, nafas olish chastotasi, kuch, tezlik, chidamlilik kabi ko‘rsatkichlari statistik tarzda tahlil qilish qaysi tahlil turini ifodalaydi?	fiziologik va jismoniy ko’rsatkichlar tahlili	mashg‘ulot jarayonini tahlil qilish	texnik-taktik tahlil	psixologik tahlil
Sportda saralash, modellashtirish va bashorat qilish	Insonning bo’yi va vazni mosligi darajasini baholashga imkon beruvchi kattalik nima deyiladi?	tana massasi indeksi	vazn indeksi	bo'y indeksi	tana indeksi
Sportda saralash, modellashtirish va bashorat qilish	Tana massa indeksini baholashda qaysi indeksdan foydalaniladi?	Ketle indeksi	Robinson indeksi	Skibinskiy indeksi	Ruf'e indeksi
Sportda saralash, modellashtirish va bashorat qilish	Model yaratishda dastlabki bosqich qanday nomlanadi?	ma’lumot to‘plash	ko‘rsatkichlarni tanlash	matematik modellashtirish	modelni sinovdan o‘tkazish
Sportda saralash, modellashtirish va bashorat qilish	Model yaratishda modelni sinovdan o‘tkazish bosqichi qanday amalga oshiriladi?	nazorat mashg‘ulotlari yoki musobaqalar orqali	o‘rtacha, dispersiya, korrelyatsiya tahlili orqali	sportchi haqida statistik, fiziologik va texnik ma’lumotlar yig‘ish orqali	asosiy (yetakchi) omillarni ajratish orqali
Sportda saralash, modellashtirish va bashorat qilish	Model yaratishda oxirgi bosqich qanday nomlanadi?	tuzatish va moslashtirish	ma’lumot to‘plash	ko‘rsatkichlarni tanlash	matematik modellashtirish
Sportda saralash, modellashtirish va bashorat qilish	Tuzatish va moslashtirish bosqichida qanday tadbirlar amalga oshiriladi?	erishilgan natijaga ko‘ra model yangilanadi	ma'lumotlar to'planadi	ko'rsatkichlar tanlanadi	matematik modellashtirish amalga oshiriladi
Sportda saralash, modellashtirish va bashorat qilish	Taktik modellar eng ko'p qo'llaniladigan sport turi qaysi?	futbol	suzish	yengil atletika	biatlon
Sportda saralash, modellashtirish va bashorat qilish	Ketle indeksi (tana massa indeksi) formulasi qaysi javobda to'g'ri berilgan?	tana vazni (kg)/bo'y (m)2	tana vazni (kg)/bo'y (sm)2	tana vazni (kg)/bo'y (m)	tana vazni (kg)*bo'y (m)2
Sportda saralash, modellashtirish va bashorat qilish	Insonning biron faoliyatni uzoq vaqt uning samarasini pasaytirmasdan bajara olish qoliliyati nima deyiladi?	chidamkorlik	kuch	tezkorlik	epchillik
Sportda saralash, modellashtirish va bashorat qilish	Sportchining ruhiy tayyorgarligi, stressga bardoshliligi va motivatsiya darajasi bo‘yicha statistik tahlillar qaysi tahlil turini ifodalaydi?	psixologik tahlil	texnik-taktik tahlil	mashg‘ulot jarayonini tahlil qilish	fiziologik va jismoniy ko’rsatkichlar tahlili
Sportda saralash, modellashtirish va bashorat qilish	Jismоniy tаyyorgаrlik ko’rsаtkichlаrining rivоjlаnishi nima bilаn bоg’liq?	jismоniy sifаtlаrning rivojlanishi	tехnik ko’rsаtkichlаrning rivojlanishi	tаktik vаriаntlаrning xilma-xilligi	m mа’nаviy sifаtlаrning rivojlanishi
Sportda saralash, modellashtirish va bashorat qilish	Xalqaro birliklar tizimida tezlikning o'lchov birligi nima?	metr/soniya	metr	soniya	vatt
Sportda saralash, modellashtirish va bashorat qilish	Morfologik o'lchovlar qaysi ko'tsatkichlarni o'lchashni nazarda tutadi?	tana uzunligi, og‘irligi, ko‘krak qafasi aylana o‘lchami, tana massasi indeksi va b.	yurak urish chastotasi, o‘pka sig‘imi, qon bosimi va b.	tezlik, kuch, chidamlilik, chaqqonlik, egiluvchanlikni	sportchining harakat aniqligi, texnika bajarish tezligi, taktika samaradorligi
Sportda saralash, modellashtirish va bashorat qilish	Texnik va taktik o‘lchashlar qaysi ko'tsatkichlarni o'lchashni nazarda tutadi?	sportchining harakat aniqligi, texnika bajarish tezligi, taktika samaradorligi	tana uzunligi, og‘irligi, ko‘krak qafasi aylana o‘lchami, tana massasi indeksi va b.	yurak urish chastotasi, o‘pka sig‘imi, qon bosimi va b.	tezlik, kuch, chidamlilik, chaqqonlik, egiluvchanlikni
Sportda saralash, modellashtirish va bashorat qilish	Spоrtchining tаyyorgаrligini nаzоrаt qilish qаysi mutахаssislаr hаmkоrligidа o’tkаzilgаndа yuqоri sаmаrа bеrаdi?	pеdаgоglаr, shifоkоrlаr, fiziоlоglаr, biоkimyochilаr, psiхоlоglаr, biоmехаniklаr	pеdаgоglаr, shifоkоrlаr, fiziоlоglаr, biоkimyochilаr, psiхоlоglаr, mехаniklаr, tехnоlоglаr	pеdаgоglаr, shifоkоrlаr, fiziоlоglаr, tuprоqshunоslаr, elеktriklаr	fiziоlоglаr, biоkimyochilаr, psiхоlоglаr, gеоgrаflаr, аstrоnаvtlаr
Sportda saralash, modellashtirish va bashorat qilish	Kislоrоd istе’mоli tеzligi o’lchоv birligi nima?	ml/daq	kg/daq	m/daq	km/daq
Sportda saralash, modellashtirish va bashorat qilish	Tadqiqot o'tkazish jarayonida tajriba guruhining vazifasi nima?	yangi metod bilan shug‘ullanish	murabbiylar	mashq qilmaydiganlar	natijani yaxshilash
Sportda saralash, modellashtirish va bashorat qilish	Ilmiy tadqiqotlarda tizimli xato deganda nima tushuniladi?	doimiy takrorlanuvchi xato	hisob xatosi	statistik xato	tasodifiy
Sportda saralash, modellashtirish va bashorat qilish	Jismoniy sifatlar o‘lchovi qaysi ko'tsatkichlarni o'lchashni nazarda tutadi?	tezlik, kuch, chidamlilik, chaqqonlik, egiluvchanlikni	yurak urish chastotasi, o‘pka sig‘imi, qon bosimi va b.	tana uzunligi, og‘irligi, ko‘krak qafasi aylana o'lchami, tana massasi indeksi va b.	sportchining harakat aniqligi, texnika bajarish tezligi, taktika samaradorligi
Sportda saralash, modellashtirish va bashorat qilish	Sportchilarning musobaqa natijalari, rekordlar va ko‘rsatkichlarini o‘rganish hamda ularning dinamikasini aniqlashga qaratilgan tahlil qanday nomlanadi?	natijaviy tahlil	mashg‘ulot jarayonini tahlil qilish	texnik-taktik tahlil	psixologik tahlil
Sportda saralash, modellashtirish va bashorat qilish	Sportda mahorat modeli deganda nima tushuniladi?	yuqori malakali sportchining faoliyati, jismoniy, texnik, taktik, psixologik va funksional tayyorgarlik darajasini tavsiflaydi	yuqori malakali sportchining faoliyati, jismoniy tayyorgarlik darajasini tavsiflaydi	yuqori malakali sportchining faoliyati, texnik, taktik va funksional tayyorgarlik darajasini tavsiflaydi	yuqori malakali sportchining faoliyati, psixologik tayyorgarlik darajasini tavsiflaydi
Sportda saralash, modellashtirish va bashorat qilish	Sportda muvaffaqiyatga erishish uchun zarur bo‘lgan ko‘rsatkichlar majmuini ifodalaydigan model nima deyiladi?	mahorat modeli	individual model	fiziologik model	texnik-taktik model
Sportda saralash, modellashtirish va bashorat qilish	Sportchining yoki jamoaning musobaqa faoliyatini ifodalovchi model qanday nomlanadi?	musobaqa modeli	mahorat modeli	individual model	fiziologik model
Sportda saralash, modellashtirish va bashorat qilish	Sportchining tana tuzilishi, mushak-skelet tizimi, yurak-qon tomir, nafas olish, nerv tizimi va boshqa fiziologik ko‘rsatkichlarining sport ixtisosiga mos optimal nisbatini ifodalovchi ilmiy model qanday nomlanadi?	morfofunksional model	musobaqa modeli	mahorat modeli	individual model
Sportda saralash, modellashtirish va bashorat qilish	Jismoniy rivojlanishning asosiy ko'rsatkichlari hisoblanadigan total (umumiy) tana o'lchovlari deganda qaysi ko'rsatkichlar tushuniladi? 	bo’y, vazn, ko'krak qafasi aylanasi	nafas tizimi	funksional holat	yurak qon-tomir tizimi
Sportda saralash, modellashtirish va bashorat qilish	Qondagi gemoglobin miqdori, laktat darajasi, glyukoza darajasi, energiya almashinuvi xususiyatlari umumiy ma'noda qanday nomlanadi?	biokimyoviy ko‘rsatkichlar	unksional ko‘rsatkichlar	morfologik ko‘rsatkichlar	jismoniy sifatlar
Sportda saralash, modellashtirish va bashorat qilish	Tana uzunligi, og‘irligi, gavda proporsiyalari, bo‘yin, qo‘l, oyoq uzunligi, ko‘krak aylanasi, mushak massasi, tana yog‘ miqdori umumiy ma'noda qanday nomlanadi?	morfologik ko‘rsatkichlar	biokimyoviy ko‘rsatkichlar	unksional ko‘rsatkichlar	jismoniy sifatlar
Sportda saralash, modellashtirish va bashorat qilish	Sport amaliyotida tibbiy tekshiruvlar qanday maqsadda amalga oshiriladi?	sportchining umumiy sog‘lig‘ini baholash	sport natijalarini yaxshilash	sport formasini ko'tarish	psixologik holatini yaxshilash
Sportda saralash, modellashtirish va bashorat qilish	Sportda adaptatsiya deganda nimani tushunasiz?	jismoniy yuklamalarga organizmning moslashishi	sportchining umumiy sog'lik holatini baholash	sport formasini ko'tarish	psixologik holatini yaxshilash`;

const rawData3 = `1. Sport morfologiyasi nima bilan shug‘ullanadi?
A) Sportchilarning psixologik holatini o‘rganadi
B) Sportchilarda jismoniy ish ta’sirida morfo-funksional o‘zgarishlarni o‘rganadi  *
C) Sportchilar uchun mashg‘ulot rejimlarini ishlab chiqadi
D) Sportchilarning mashq qilish texnikasini o‘rgatadi
2. P.F. Lesgaftning sport morfologiyasiga qo‘shgan hissasi nima edi?
A) Anatomiyani ekologik omillar bilan bog‘lash
B) Dinamik anatomiya yo‘nalishini yaratish
C) Nazariy anatomiya asoslarini yaratish  *
D) Muskul tizimini batafsil o‘rganish
3. Zamonaviy sport morfologiyasining dolzarb muammolaridan biri qaysi?
A) O‘smirlarning psixologik holatini kuzatish
B) Jismoniy yuklanishlarning bolalar va o‘smirlar organizmiga ta’sirini o‘rganish  *
C) Sportchilar uchun mashq texnologiyalarini ishlab chiqish
D) Iqlim sharoitining mashqlar samaradorligiga ta’sirini baholash
4. Qaysi olim sport morfologiyasi fanining asoschisi hisoblanadi?
A) A.A. Gladisheva
B) M.F. Ivaniskiy
C) P.F. Lesgaft  *
D) V.L. Gruber
5. Sport morfologiyasi fanida yangi texnologiyalarni o‘rganishning asosiy maqsadi nima?
A) Sportchilar uchun maxsus mashq dasturlarini ishlab chiqish
B) Sportchilarda adaptatsion o‘zgarishlarni kuzatish  *
C) Sportchilarni psixologik qo‘llab-quvvatlash
D) Harakat samaradorligini oshirish
6.  Antropometrik usul qanday maqsadda qo‘llaniladi?
A) Ichki a’zolarni o‘rganish uchun
B) Tana shakli va o‘lchamlarini aniqlash uchun  *
C) Genetik belgilarni o‘rganish uchun
D) Mikroskop ostida to‘qima tuzilishini o‘rganish uchun
7. Somatoskopik usul qanday tekshirishlarni o‘z ichiga oladi?
A) Palpatsiya, perkussiya, auskultatsiya  *
B) Rentgenoskopiya, rentgenografiya
C) Daktiloskopiya, palmoskopiya
D) Mikroskopik va sitokimyoviy tekshirishlar
8. Sheldon, Mateyka va Xit-Karter usullari nima maqsadda qo‘llaniladi?
A) Ichki a’zolarni rentgen bilan o‘rganish uchun
B) Tana komponentlarini aniqlash uchun  *
C) Tana haroratini o‘lchash uchun
D) Ichki suyuqlik tarkibini tekshirish uchun
9. Rentgenologik usul birinchi bo‘lib kim tomonidan qo‘llanilgan?
A) V.V. Bunak
B) P.F. Lesgaft  *
C) F.Galton
D) V.G. Shtefko
10. Dermatoglifik usul yordamida nimalar o‘rganiladi?
A) Ichki a’zolar strukturalari
B) Barmoqlar va kaftdagi teri naqshlari  *
C) Mushak tolalarining soni va turi
D) To‘qimalar tarkibidagi oqsillar
11. Oq mushak tolalarining yuqori foizli sportchilarga qaysi sport turi tavsiya qilinadi?
A) Stayerlik
B) Sprint (tezkorlik)  *
C) Kurash
D) Og‘ir atletika
12. Egizaklar usuli qanday maqsadda qo‘llaniladi?
A) Mushak tolalarining tuzilishini o‘rganish uchun
B) Irsiy va muhit ta’sirini taqqoslash uchun  *
C) Teri naqshlarini o‘rganish uchun
D) Rentgen orqali ichki a’zolarni o‘rganish uchun
13. Monozigotali egizaklarning genotipi qanday bo‘bali?
A) 50% mos
B) 75% mos
C) To‘liq o‘xshash  *
D) Har xil
14. Yadro-magnitli rezonans tomografiya usuli yordamida nima o‘rganiladi?
A) Teri naqshlari
B) Mushak tolalari
C) Ichki a’zolar va bosh miya tuzilmalari  *
D) Tana proporsiyalari
15. Sportchining mushak tolalar tarkibini aniqlashda qaysi usuldan foydalaniladi?
A) Dermatoglifik usul
B) Gistologik va sitokimyoviy usul  *
C) Rentgenografiya
D) Egizaklar usuli
16. Quyidagilardan qaysi biri organizmning morfologik va funksional birligi hisoblanadi?
A) To‘qima
B) Hujayra  *
C) A’zo
D) Tizim
17. Odam tanasidagi a’zo ikki asosiy qismdan tashkil topgan. Ular qaysilar?
A) Parenxima va stroma  *
B) Hujayra va to‘qima
C) Kollagen va elastik tolalar
D) Muskul va epiteliy to‘qimasi
18. Odam organizmida nechta asosiy to‘qima turi mavjud?
A) 3 ta
B) 4 ta  *
C) 5 ta
D) 6 ta
19. To‘qima qanday hujayra yig‘indisidir?
A) Bir xil kelib chiqishi, rivojlanishi va funksiyasi bir xil hujayralar *
B) Turli xil shakl va funksiyaga ega hujayralar
C) Faqat ko‘ndalang targ‘il hujayralar
D) Asosan retikulin tolalaridan tashkil topgan hujayralar
20.  Adaptatsiya nima?
A) Tashqi omillarga organizmning javob berishi
B) Organizmning tashqi va ichki muhit omillariga moslashuv jarayoni  *
C) Organizmning kasalliklarga qarshiligini oshirishi
D) Organizmda patologik jarayonlarning rivojlanishi
21.  Individual adaptatsiya nima?
A) Tashqi muhitga moslashuvning irsiy turi
B) Hayot davomida shakllanadigan moslashuv jarayoni  *
C) Tezkor fiziologik javoblar yig‘indisi
D) Barcha a'zolar faoliyatining to‘xtashi
22.  Qisqa muddatli adaptatsiyaning asosiy xususiyati nimada?
A) Organizmning resurslarini maksimal sarflash  *
B) Energiya tejash va resurslarni tiklash
C) Organizmning patologik o‘zgarishi
D) Organizmning o‘zgarishsiz qolishi
23.  Uzoq muddatli adaptatsiyada qanday o‘zgarishlar kuzatiladi?
A) Qisqa muddatli adaptatsiyaning qayta takrorlanishi natijasida sifat o‘zgarishlari yuz beradi  *
B) Faqat muskullarning kattalashishi
C) Katexolaminlar miqdorining doimiy oshishi
D) Gomeostazning buzilishi
24.  Stress-reaksiyaning asosiy vazifalaridan biri nima?
A) Organizmni zararlardan himoya qilish
B) Ichki muhitni tiklash va muskullar faoliyatini ta’minlash  *
C) Faoliyatning barqarorligiga erishish
D) Kasalliklarga moslashuvchanlikni oshirish
25.  "Struktur izi"ning asosiy belgilari qaysi bosqichda shakllanadi?
A) Tez vaqtli adaptatsiya
B) Turg‘unli adaptatsiya  *
C) Ikkinchi oraliq adaptatsiya
D) Stress-reaksiyaning boshida
26.  Adaptatsiyaning qaysi bosqichida muskullar gipertrofiyasi va giperplaziyasi kuzatiladi?
A) Boshlang‘ich bosqich
B) Ikkinchi oraliq bosqich  *
C) Turg‘unli adaptatsiya
D) Tizimlarning ishdan chiqishi
27.  Kam harakatli (gipokineziya) bolalar organizmiga qanday ta’sir qiladi?
A) Ichki muhitga tez moslashadi
B) Kasalliklarga chidamlilikni oshiradi
C) Ichki va tashqi muhit o‘zgarishlariga moslashish qobiliyati pasayadi  *
D) Jismoniy faollikni oshiradi
28.  Adaptatsiyani ta’minlovchi tizimlarning ishdan chiqishiga nima sabab bo‘ladi?
A) Qisqa muddatli adaptatsiyaning yetishmasligi
B) Mashqlanish jarayonida uzilish yoki stressor holatlar  *
C) Ichki muhitning barqarorligi
D) Neyrogormonal faoliyatning pasayishi
29.  Mashq qilib yurgan odamning moslashuv xususiyati qanday ifodalanadi?
A) Katexolaminlar va kortikosteroidlar doimiy ko‘payadi
B) Standart yuklamaga nisbatan tejamli adaptatsiya kuzatiladi  *
C) Gormonal faoliyat to‘xtaydi
D) Organizmning barcha tizimlari bir xil ishlaydi
30.  Ratsional adaptatsiya qaysi jarayon orqali suyakning bo‘yiga o‘sishini ta'minlaydi?
A) Suyakning tashqi qatlami yemirilishi orqali
B) Suyakning bo‘shlig‘i kengayishi orqali
C) Metafizlardagi hujayralarning faol ko‘payishi orqali  *
D) Mineral moddalarning to‘planishi orqali
31.  Irratsional adaptatsiya suyak strukturasida qanday o‘zgarish bilan tavsiflanadi?
A) Suyakning bo‘shlig‘i kengayishi
B) Suyakning tashqi diametri oshishi
C) Suyakning markaziy bo‘shlig‘i torayishi va devorining qalinlashishi  *
D) Suyakning hajmi ortishi
32. Qizlar organizmining me’yor reaksiyasi o‘g‘il bolalarga nisbatan qanday farq qiladi?
A) Kamroq bo‘ladi
B) Yuqoriroq bo‘ladi  *
C) Bir xil bo‘ladi
D) Bu omil jinsga bog‘liq emas
33. Ratsional moslashuv jarayonini ta'minlash uchun qaysi usulni qo‘llash lozim?
A) Suyaklarga to‘g‘ridan-to‘g‘ri katta yuklama berish
B) Suyaklarni asta-sekin katta yuklamalarga tayyorlayish  *
C) Kichik yuklamalarni bir marotaba berish
D) Mashg‘ulotlarni to‘xtatish
34. Astenik somatotipdagi insonlarda me’yor reaksiyasi qanday bo‘ladi?
A) Juda past bo‘ladi
B) Juda yuqori bo‘ladi
C) Gipersteniklarga nisbatan yuqoriroq bo‘ladi  *
D) Somatotipga bog‘liq emas
35. Muskulning izotonik ish rejimida nima sodir bo‘ladi? 
A) Uzunligi o‘zgaradi, tonusi o‘zgarmaydi  * 
B) Tonusi o‘zgarmaydi, uzunligi o‘zgarmaydi 
C) Ikki tomonlama àks reaksiyalar kuzatiladi 
D) Mexanik ish bajarilmaydi
36. Muskullarning qisqarishida “auksotonik ish rejimi” qanday jarayonni o‘z ichiga oladi? 
A) Tonus va uzunlikning o‘zgarishi  * 
B) Faqat tonus o‘zgarmashi 
C) Faol moddalarning oksidlanishi 
D) Suv va elektrolitlarning almashinuvi
37. Muskulning “qarshilikni yengish” turi qaysi ish turi hisoblanadi? 
A) Ballistik ish 
B) Qarshilikni yengish — dinamik ish  * 
C) Mustahkamlash ishlari 
D) Antagonist ish
38. Muskulning ko‘ndalang-targ‘il tolalari qanday vazifani bajaradi? 
A) Energiya zaxirasini saqlash 
B) Ichki a’zolarni himoya qilish 
C) Ongli ravishda qisqarishni ta’minlash  * 
D) Nerv impulslari uzatishni ta’minlash
39. Muskulের maksimal kuchini nimaga bog‘liq deb hisoblash mumkin? 
A) Muskul tolalari soni va uzunligi  * 
B) Qon aylanish tezligi 
C) Mitoxondriyalar soni 
D) Elektrolitlar miqdori
40.Quyidagi holatlardan qaysi biri “statik ish”ga misol bo‘ladi? 
A) Qorin mushaklarining cho‘zilishi 
B) Qo‘l bilan og‘irlikni ushlab turish  * 
C) Tez yugurish 
D) Oyoq kaftlarining bukilishi
41. Muskul qisqarishining auksotonik rejimi qaysi holatda kuzatiladi? 
A) Qo‘lni pastga tushirish 
B) Og‘irlikni ko‘tarish  * 
C) Muskullarni bo‘shashtirish 
D) Passiv harakat qilish
42. Dinamik ishda muskulning qanday holati kuzatiladi? 
A) Taranglashish va bo‘shashish  * 
B) Faqat taranglashish 
C) Faqat bo‘shashish 
D) Taranglashishsiz qisqarish
43. Muskul kuchiga ta’sir etuvchi fiziologik omillarni aniqlang. 
A) Ko‘ndalang kesim yuzasi va impulslar tezligi  * 
B) Sinapslarning uzunligi 
C) Elektrolitlarning ko‘pligi 
D) Gipertrofiyaning pasayishi
44. Mushak qisqarishida asosiy energiya manbai nima hisoblanadi? 
A) Proteinlar 
B) Glikogen  * 
C) Yog‘lar 
D) Vitaminlar
45. Mushak qisqarishida kalsiy ionlari qanday rol o‘ynaydi? 
A) Energiya ishlab chiqaradi 
B) Aktin va miozinning o‘zaro ta’sirini faollashtiradi  * 
C) Mushak tolalarini mustahkamlaydi
D) Oqsillarni sintezlaydi
46. Qanday omil mushaklarning tez qisqarishiga sabab bo‘ladi? 
A) Kalsiy ionlarining ko‘payishi  *
 B) Qon aylanishining pasayishi 
C) Yog‘ qatlamining kamayishi 
D) Elektrolitlarning yo‘qotilishi
47. Mushaklarning statik holatda ushlanishiga nima sabab bo‘ladi? 
A) Nerv impulslarining to‘xtashi 
B) Mushaklarning taranglashishi  * 
C) Qon bosimining pasayishi 
D) Energiya ishlab chiqarishning kamayishi
48. Mushak qisqarishidagi asosiy oqsil strukturalari qaysi? 
A) Kollagen va elastin 
B) Aktin va miozin  * 
C) Hemoglobin va miyoglobin
D) Keratin va fibrin
49. Mushaklarning optimal qisqarish chastotasini nima ta’minlaydi? 
A) Neyrotransmitterlarning balanslashuvi 
B) Energiya zaxirasi va kalsiy ionlari  * 
C) Mushak tolalarining cho‘zilishi 
D) Elektrolitlar almashinuvi
50. Aktin va miozin molekulalarining harakatida qaysi energiya turi ishlatiladi? 
A) Elektrokimyoviy energiya 
B) ATF dan hosil bo‘ladigan mexanik energiya  * 
C) Termal energiya 
D) Gravitatsion energiya
51. Mushaklarning qisqarishi qanday nerv impulslariga bog‘liq? 
A) Simpatik nervlar 
B) Somatik motor nervlar  * 
C) Parasempatik nervlar 
D) Visseral nervlar
52. Mushaklarning charchashi qachon yuzaga keladi? 
A) Glikogen zaxirasi tugaganda  * 
B) Suv miqdori oshganda 
C) Kalsiy ionlari ortganda 
D) Elektrolitlar miqdori ortganda
53. Mushak qisqarishidagi asosiy bosqichlar qaysi tartibda amalga oshadi? 
A) Neyrotransmitter chiqarilishi → Kalsiy ionlarining chiqishi → Aktin va miozin harakati  *
B) Kalsiy ionlarining chiqishi → Neyrotransmitter chiqarilishi → Aktin va miozin harakati 
C) Glikogen sintezi → Kalsiy ionlarining chiqishi → Aktin va miozin harakati 
D) Elektrolitlarning almashinuvi → Neyrotransmitter chiqarilishi → Aktin va miozin harakati
54.  Ontogenez nima? 
A) Hayvonlarning ko‘payish jarayoni 
B) Har bir organizmning individual taraqqiyoti * 
C) Irsiy o‘zgarishlar yig‘indisi 
D) Tabiatdagi biologik muvozanat
55.  Ontogenezning asosiy bosqichlari qanday? 
A) Ontogenetik va filogenetik 
B) Embrional va postnatal * 
C) Ichki va tashqi taraqqiyot 
D) Modda almashinuvi va shakllanish
56. Embrional davrning boshlanishi qachon sodir bo‘ladi? 
A) Tug‘ilish bilan 
B) Zigotaning urug‘lanishi bilan * 
C) A’zolarning shakllanishi bilan 
D) Postnatal davrda
57. Embrional varaqlar nimani ifodalaydi? 
A) Ichak naychasini 
B) Embrionning rivojlanish bosqichlarini * 
C) Organogenezni 
D) Nerv tizimini
58.  Ektoderma qaysi tizimlarni hosil qiladi? 
A) Hazm qilish tizimi 
B) Biriktiruvchi to‘qima 
C) Nerv tizimi va teri epidermisi * 
D) Qon tomirlari
59.  Embrion qanday davrda ona organizmi bilan yo‘ldosh orqali bog‘lanadi? 
A) Gastrulatsiya 
B) Organogenez 
C) Postnatal 
D) Embriondan tashqari a‘zolar shakllanganda *
60.  Zigota nima?  
A) Embrional davr oxiri 
B) Urug‘lanish natijasida hosil bo‘lgan tuxum hujayra * 
C) Tuxum yo‘li qatlami 
D) Hujayralarning bo‘linishi jarayoni
61.  Mezoderma qanday tuzilmalarni hosil qiladi? 
A) Suyak va muskul to‘qimasi * 
B) Nerv tizimi 
C) Teri va soch 
D) Hazm qilish tizimi
62. Organogenez davri qachon boshlanadi? 
A) Embrional taraqqiyotning birinchi oyida * 
B) Postnatal davrda 
C) Gastrulatsiya jarayonida 
D) Tuxum hujayrasi shakllanganda
63.  Blastosistadagi embrioblastdan nima hosil bo‘ladi? 
A) Trofoblast 
B) Embrionning tana qismi * 
C) Ona hujayrasi 
D) Kindik tizimi
64.  Postnatal taraqqiyot nima? 
A) Tug‘ilishdan oldingi davr 
B) Tug‘ilishdan keyingi taraqqiyot * 
C) Embrional taraqqiyot 
D) Irsiy belgilarning rivojlanishi
65. Chaqaloqlik davri qancha davom etadi? 
A) 1-12 oy 
B) 1-30 kun * 
C) 10 kundan 1 yilgacha 
D) 4-7 yosh
66.  Qaysi davrda bolaning sut tishlari chiqadi? 
A) Ko‘krak emish davri 
B) Sut tishlari chiqish davri (1-7 yosh) * 
C) Erta bolalik davri 
D) Balog‘at davri
67.  Yosh davrlari kim tomonidan tavsiya etilgan? 
A) V.A. Nagomiy * 
B) G. Mendel 
C) K. Linney 
D) R. Virxov
68.  Yoshga xos o‘zgarishlar qanday jarayon asosida rivojlanadi? 
A) Geteroxroniya va sinxroniya * 
B) Tabiiy seleksiya 
C) Modda almashinuvi 
D) Fotosintez
69.  Balog‘atga yetilish yoshi qanday farqlanadi? 
A) Erkaklarda 15-20 yosh, ayollarda 18-25 yosh 
B) Erkaklarda 17-21 yosh, ayollarda 16-20 yosh * 
C) Erkaklarda 22-35 yosh, ayollarda 21-35 yosh 
D) 13-15 yosh barcha uchun
70.  Postnatal davr qachon tugaydi? 
A) Embrional taraqqiyot bilan 
B) Qarilik davrining oxirida * 
C) Balog‘at davrida 
D) Chaqaloqlik davrida
71.  Biologik yosh nima bilan aniqlanadi? 
A) O‘rtacha ko‘rsatkichlar 
B) Skelet suyaklarining yetilish darajasi * 
C) Tug‘ilish sanasi 
D) Tashqi belgilarning shakllanishi
72.  Geteroxroniya qanday vazifa bajaradi? 
A) Organizmdagi o‘zgarishlarni moslashtiradi * 
B) Modda almashinuvi 
C) Nerv tizimini himoya qiladi 
D) Skeletni shakllantiradi
73.  Sinxroniya jarayoniga misol keltiring. 
A) Muskullarning bir vaqt ichida rivojlanishi * 
B) Yurakning sekin ishlashi 
C) Oyoqning kaltalashishi 
D) Qon aylanishining buzilishi
74. Ayollar sportidagi asosiy muammo nimada?
A) Jismoniy tayyorgarlik yetishmasligi 
B) Ayollar va erkaklar organizmlaridagi farqlar * 
C) Tibbiy ta’minot muammolari 
D) Mashg‘ulotlar sifati
75.  Jinsiy dimorfizm qanday aniqlanadi? 
A) Ijtimoiy belgilarga qarab 
B) Genetik, anatomik va fiziologik tafovutlar orqali * 
C) Tashqi muhit omillari asosida 
D) Organizmning reaktivligi orqali
76.  Ayollarning qaysi tizimi yuklamaga nisbatan zaifroq hisoblanadi? 
A) Hazm qilish tizimi 
B) Nerv tizimi * 
C) Yurak-qon tomir tizimi 
D) Muskul tizimi
77.  Hayz sikli qaysi jihatlarga ta’sir qiladi? 
A) Ishchanlik darajasiga * 
B) Ovqat hazm qilishga 
C) Suv almashinuvi tezligiga 
D) Mushak massasiga
78. Ayollarning sportdagi asosiy yutuqlari nimalarga bog‘liq? 
A) Ruhiy tayyorgarlik va chidamlilikka * 
B) Jismoniy kuch va muskullarga 
C) Tibbiy yordam sifatiga 
D) Texnik uslublarga
79. Hayz ko‘rish fazasida ishchanlik darajasi qanday bo‘ladi? 
A) Minimal * 
B) O‘rtacha 
C) Yuqori 
D) O‘zgarmas
80. Qaysi sport turi ayollar uchun eng mos? 
A) Og‘ir atletika 
B) Badiiy gimnastika * 
C) Boks 
D) Futbol
81. Ayollar va erkaklar o‘rtasidagi sport yutuqlarining farqi nimada? 
A) Fiziologik imkoniyatlarda * 
B) Mashg‘ulotlar davomiyligida 
C) Texnika va taktikada 
D) Sport formalarida
82. Ayollar sportida stress qanday ta’sir qiladi? 
A) Moslashuvni kuchaytiradi 
B) Asab tizimining buzilishiga olib keladi * 
C) Ishchanlikni oshiradi 
D) Immunitetni pasaytiradi
83. Antropometriya nima? 
A) Inson psixologiyasini o‘rganish 
B) Tana o‘lchovlarini o‘tkazish usullarini o‘rganuvchi fan * 
C) Jismoniy mashqlar tizimi 
D) Tibbiy diagnostika
84. Antropometriyaning asosiy ko‘rsatkichlari nimalar? 
A) Tana shakli va rangi 
B) Total va parsial o‘lchovlar * 
C) Jinsiy va ijtimoiy belgi 
D) Yosh va jinsi
85. Sport antropometriyasining maqsadi nima? 
A) Sportchilarni jarohatlardan himoya qilish 
B) Sport tanlovini ilmiy asosda o‘tkazish * 
C) Mashg‘ulotlar jadvalini tuzish 
D) Tibbiy yordam ko‘rsatish
86. Dolixomorf tana tuzilishi qanday? 
A) Gavda uzun, qomat silindrsimon * 
B) Qomat keng va ixcham 
C) Gavda kichik va massiv 
D) Bo‘yin qisqa
87. Harbiy antropometriya nima uchun kerak? 
A) Bolalarning biologik yoshini aniqlash uchun 
B) Jismonan baquvvat shaxslarni tanlash uchun * 
C) Tana rangi va shaklini o‘lchash uchun
D) Tibbiy ko‘rik o‘tkazish uchun
88. Antropometrik o‘lchovlar qachon o‘tkazilishi kerak? 
A) Kechqurun 
B) Sutkaning bir xil vaqtida * 
C) Sport musobaqalari vaqtida 
D) Har qanday vaqtda
89. Goniometriya nima? 
A) Tana aylanasini o‘lchash 
B) Bo‘g‘imlar harakatchanligini aniqlash * 
C) Muskullar massasini aniqlash 
D) Tana zichligini o‘lchash
90.  Kaliperlar nima uchun ishlatiladi? 
A) Tana massasini o‘lchash uchun 
B) Yog‘ qatlamlarini o‘lchash uchun * 
C) Bo‘g‘im harakatchanligini o‘lchash uchun 
D) Tana uzunligini aniqlash uchun
91.  Rostomer qaysi o‘lchovni aniqlaydi? 
A) Tana zichligini 
B) Bo‘g‘im burchagini 
C) Gavdaning balandligini * 
D) Tananing chuqurligini
92.  Konstitutsiya nima? 
A) Jismoniy mashqlar tizimi 
B) Tana tuzilishi va funksiyalarining yig‘indisi * 
C) Ijtimoiy qonunlar 
D) Tibbiy ko‘rsatkichlar
93.  Konstitutsiyaning morfologik aksi nima? 
A) Nerv tizimi 
B) Somatotip * 
C) Organogenez 
D) Antropometriya
94.  Konstitutsiya negizini nima tashkil qiladi? 
A) Genotip va fenotip * 
B) Yosh va jins 
C) Tashqi muhit omillari 
D) Skelet va muskullar
95.  Fenotip nima? 
A) Irqiy belgilarning yig‘indisi 
B) Genotipning muhit bilan o‘zaro ta’siri natijasi * 
C) Tana massasining ko‘rsatkichi 
D) Qon aylanish tizimi
96.  Genotip nima? 
A) Genetik informatsiya yig‘indisi * 
B) Tana shakli 
C) Nerv tizimining qismi 
D) Hazm qilish tizimi
97. Fenotipning o‘zgarishi nimaga bog‘liq? 
A) Irqiy belgilar 
B) Muhit sharoitlari * 
C) Tana balandligi 
D) Modda almashinuvi
98. Somatotip nima? 
A) Tana massasi 
B) Gavda konstitutsiyasining morfologik ifodasi * 
C) Nerv tizimi strukturasi 
D) Organizmning ichki muvozanati
99.  Konstitutsiyani turlarga ajratish qanday muammo hisoblanadi? 
A) Jismoniy muammo 
B) Murakkab ilmiy muammo * 
C) Ijtimoiy muammo 
D) Tabiiy hodisa
100.  Norma reaksiyasi nimaga bog‘liq? 
A) Tashqi muhit ta’siriga * 
B) Genotipga 
C) Ichki muhitga 
D) Biologik yoshga`;

const rawData4 = `Fan nomi: Sportda ilmiy tadqiqotlar

Ilmiy metodologiya bu ….
====
#Ilmiy bilishning eng umumiy, dunyoqarashga oid tamoyillari tizimidir
====
Ilmiy tadqiqot ma’lumotlarini to‘plash va ularga ishlov berishning asosiy yo’lidir
====
Muayyan usul bilan bog‘liq usullar yoki texnik yo‘llarning yig‘indisini ifodalaydigan tushuncha
====
Bilimlarning erishilgan darajasi bilan ijtimoiy amaliyotning yangi faktlari yoki ehtiyojlari orasidagi ziddiyatning yuzaga kelishi
++++
Usul bu….
====
#Ilmiy tadqiqot ma’lumotlarini to‘plash va ularga ishlov berishning asosiy yo’lidir 
====
Ilmiy bilishning eng umumiy, dunyoqarashga oid tamoyillari tizimidir
====
Muayyan usul bilan bog‘liq usullar yoki texnik yo‘llarning yig‘indisini ifodalaydigan tushuncha
====
Bilimlarning erishilgan darajasi bilan ijtimoiy amaliyotning yangi faktlari yoki ehtiyojlari orasidagi ziddiyatning yuzaga kelishi
++++
Usuliyat bu …
====
#Muayyan usul bilan bog‘liq usullar yoki texnik yo‘llarning yig‘indisini ifodalaydigan tushuncha
====
Ilmiy bilishning eng umumiy, dunyoqarashga oid tamoyillari tizimidir
====
Ilmiy tadqiqot ma’lumotlarini to‘plash va ularga ishlov berishning asosiy yo’lidir
====
Bilimlarning erishilgan darajasi bilan ijtimoiy amaliyotning yangi faktlari yoki ehtiyojlari orasidagi ziddiyatning yuzaga kelishi
++++
Ilmiy muammoga berilgan to’g’ri ta’rifni toping.
====
#Fan va texnikaning eng yangi yutuqlari va imkoniyatlarini bilish, shuningdek, shu sohada o‘tkazilgan tadqiqotlar haqida tasavvurga ega bo‘lib, tadqiqot darajasini  aniq bilish  unchalik ahamiyatga ega emas
====
Bilimlarning erishilgan darajasi bilan ijtimoiy amaliyotning yangi faktlari yoki ehtiyojlari orasidagi ziddiyatning yuzaga kelishi va rivojlanishi oqibati sifatida shakllanadi
====
Ilmiy muammoning to‘g‘ri qo‘yilishi uni hal etish uchun ko‘p narsa bera olmaydi.
====
Har qanday ilmiy tadqiqot ilmiy muammoni o‘rtaga tashlashdan boshlanishi kerak emas
++++
Ilmiy metodologiyadan kelib chiqib, ilmiy bilishning quyidagi qaysi umumilmiy usullarini farqlash mumkin?
====
#Barcha javoblar to’g’ri
====
Tahlil (analiz) va sintez, induksiya va deduksiya, 
====
O‘xshashlik (analogiya) va modellashtirish, tizimli tahlil
====
Mavhumlashtirish va aniqlashtirish, kuzatuv va tajriba.
++++
Tahlil – qanday usul?
====
#Predmetni xayolan yoki amalda tarkibiy qismlarga (ob’ektning qismlari, belgilari, xususiyatlari, munosabatlari) ajratib o‘rganishdan iborat tadqiqot usuli
====
(Birlashtirish, uyg‘unlashtirish, tuzish) – ob’ektni yaxlit holda, uning qismlarini birlikda va o‘zaro bog‘liqlikda o‘rganish usuli
====
Predmetning ayrim unsurlariga xos belgilarni o‘rganish asosida uning barcha unsurlariga xos bo‘lgan belgilar haqida umumiy xulosa chiqarishga asoslanuvchi tadqiqot usuli.
====
Ayrim predmet yoki hodisalarni boshqalari bilan o‘xshashligi asosida o‘rganishga tayanadigan ilmiy fikrlash usuli
++++
Sintez– qanday usul?
====
#(Birlashtirish, uyg‘unlashtirish, tuzish) – ob’ektni yaxlit holda, uning qismlarini birlikda va o‘zaro bog‘liqlikda o‘rganish usuli 
====
Predmetni xayolan yoki amalda tarkibiy qismlarga (ob’ektning qismlari, belgilari, xususiyatlari, munosabatlari) ajratib o‘rganishdan iborat tadqiqot usuli
====
Predmetning ayrim unsurlariga xos belgilarni o‘rganish asosida uning barcha unsurlariga xos bo‘lgan belgilar haqida umumiy xulosa chiqarishga asoslanuvchi tadqiqot usuli.
====
Ayrim predmet yoki hodisalarni boshqalari bilan o‘xshashligi asosida o‘rganishga tayanadigan ilmiy fikrlash usuli
++++
Induksiya– qanday usul?
====
#Predmetning ayrim unsurlariga xos belgilarni o‘rganish asosida uning barcha unsurlariga xos bo‘lgan belgilar haqida umumiy xulosa chiqarishga asoslanuvchi tadqiqot usuli.
====
(Birlashtirish, uyg‘unlashtirish, tuzish) – ob’ektni yaxlit holda, uning qismlarini birlikda va o‘zaro bog‘liqlikda o‘rganish usuli 
====
Predmetni xayolan yoki amalda tarkibiy qismlarga (ob’ektning qismlari, belgilari, xususiyatlari, munosabatlari) ajratib o‘rganishdan iborat tadqiqot usuli
====
Ayrim predmet yoki hodisalarni boshqalari bilan o‘xshashligi asosida o‘rganishga tayanadigan ilmiy fikrlash usuli
++++
Deduksiya– qanday usul?
====
#(Payqab olmoq)umumiydan xususiylik tomon fikr yuritish usuli hisoblanib, bunda dastlab ob’ekt yaxlit holatda tekshiriladi, keyin uning tarkibiy qismlari tadqiq etiladi.
====
Ayrim predmet yoki hodisalarni boshqalari bilan o‘xshashligi asosida o‘rganishga tayanadigan ilmiy fikrlash usuli.
====
Ilmiy bilish usuli bo‘lib, bunda o‘rganilayotgan predmet, hodisa unga o‘xshash shunday boshqa predmet yoki hodisaga, modelga almashtiriladiki, u aslining eng muhim xususiyatlarini o‘zida jamlagan bo‘ladi
====
(Diqqatni bo‘lish, chalg‘itish) – muayyan predmetlardan rivojlanishning umumiy tushuncha va qonuniyatlariga o‘tish imkonini beradigan chalg‘itish usuli.
++++
O‘xshashlik– qanday usul?
====
#Ayrim predmet yoki hodisalarni boshqalari bilan o‘xshashligi asosida o‘rganishga tayanadigan ilmiy fikrlash usuli 
====
(Payqab olmoq)umumiydan xususiylik tomon fikr yuritish usuli hisoblanib, bunda dastlab ob’ekt yaxlit holatda tekshiriladi, keyin uning tarkibiy qismlari tadqiq etiladi.
====
Ilmiy bilish usuli bo‘lib, bunda o‘rganilayotgan predmet, hodisa unga o‘xshash shunday boshqa predmet yoki hodisaga, modelga almashtiriladiki, u aslining eng muhim xususiyatlarini o‘zida jamlagan bo‘ladi
====
(Diqqatni bo‘lish, chalg‘itish) – muayyan predmetlardan rivojlanishning umumiy tushuncha va qonuniyatlariga o‘tish imkonini beradigan chalg‘itish usuli.
++++
Modellashtirishga ta’rif bering?
====
#Ilmiy bilish usuli bo‘lib, bunda o‘rganilayotgan predmet, hodisa unga o‘xshash shunday boshqa predmet yoki hodisaga, modelga almashtiriladiki, u aslining eng muhim xususiyatlarini o‘zida jamlagan bo‘ladi 
====
(Payqab olmoq)umumiydan xususiylik tomon fikr yuritish usuli hisoblanib, bunda dastlab ob’ekt yaxlit holatda tekshiriladi, keyin uning tarkibiy qismlari tadqiq etiladi.
====
Ayrim predmet yoki hodisalarni boshqalari bilan o‘xshashligi asosida o‘rganishga tayanadigan ilmiy fikrlash usuli
====
(Diqqatni bo‘lish, chalg‘itish) – muayyan predmetlardan rivojlanishning umumiy tushuncha va qonuniyatlariga o‘tish imkonini beradigan chalg‘itish usuli.
++++
Mavhumlashtirish – qanday usul?
====
#(Diqqatni bo‘lish, chalg‘itish) – muayyan predmetlardan rivojlanishning umumiy tushuncha va qonuniyatlariga o‘tish imkonini beradigan chalg‘itish usuli. 
====
(Payqab olmoq)umumiydan xususiylik tomon fikr yuritish usuli hisoblanib, bunda dastlab ob’ekt yaxlit holatda tekshiriladi, keyin uning tarkibiy qismlari tadqiq etiladi.
====
Ayrim predmet yoki hodisalarni boshqalari bilan o‘xshashligi asosida o‘rganishga tayanadigan ilmiy fikrlash usuli
====
Ilmiy bilish usuli bo‘lib, bunda o‘rganilayotgan predmet, hodisa unga o‘xshash shunday boshqa predmet yoki hodisaga, modelga almashtiriladiki, u aslining eng muhim xususiyatlarini o‘zida jamlagan bo‘ladi
++++
Aniqlashtirishga ta’rif bering.
====
#Predmetlarni mavhum, umumiy tarzda o‘rganishdan farq qilib, ularni butun serqirraligi, sifatiy xilmaxilligida olib tekshirishdan iborat usuldir.
====
(Payqab olmoq)umumiydan xususiylik tomon fikr yuritish usuli hisoblanib, bunda dastlab ob’ekt yaxlit holatda tekshiriladi, keyin uning tarkibiy qismlari tadqiq etiladi.
====
Ayrim predmet yoki hodisalarni boshqalari bilan o‘xshashligi asosida o‘rganishga tayanadigan ilmiy fikrlash usuli
====
Ilmiy bilish usuli bo‘lib, bunda o‘rganilayotgan predmet, hodisa unga o‘xshash shunday boshqa predmet yoki hodisaga, modelga almashtiriladiki, u aslining eng muhim xususiyatlarini o‘zida jamlagan bo‘ladi
++++
Kuzatuv qanday usul?
====
#Predmetni miqdoriy o‘lchashlar va sifatiy ta’riflar yo‘li bilan o‘rganish usulidir.
====
Tadqiqot ob’ektini bir tizimni tashkil etuvchi unsurlar yig‘indisi sifatida o‘rganish demak.
====
Tajriba nazariy tadqiqot natijalarini tekshirib ko‘rish uchun uning maqsadiga muvofiq ravishda o‘tkaziladigan ilmiy sinovdir
====
To‘g‘ri javob yo‘q
++++
Ilmiy tajribaga to‘g‘ri ta’rif berilgan qatorni toping?
====
#Barcha javoblar to‘g‘ri
====
Nazariy tadqiqot natijalarini tekshirib ko‘rish uchun uning maqsadiga muvofiq ravishda o‘tkaziladigan ilmiy sinovdir
====
Ilmiy tajriba hodisaning borishini kuzatishga va, zarur bo‘lsa, uni aynan takrorlashga imkon beradigan muayyan sharoitlarda o‘tkaziladi.
====
Sport fanida ishlab chiqilgan yangi usuliyat pedagogik ilmiy tajribada tasdiqdan o‘tishi shart.
++++
Ilmiy bilishning ilmiy tadqiqot jarayonida rioya qilinishi lozim bo‘lgan nechta tamoyillar bor?
====
#5
====
6
====
4
====
3
++++
Ob’ektiv borliqni bilish mumkinligi tamoyiliga ta’rif bering?
====
#Insonning o‘rganish faoliyati natijasida tevarak olam va uning qonuniyatlari to‘g‘risida haqqoniy tasavvur hosil qilish imkoniyatidir.
====
Olamda sodir bo‘layotgan hodisa va jarayonlarning umumiy universal o‘zaro munosabati hamda sababiy bog‘lanishlari mavjudigini bildiradi.
====
Olimning metodologik  zahirasidagi eng muhim o‘rinlardan birini egallaydi.
====
Rivojlantirish tamoyili bilan bevosita bog‘liq, lekin u ilmiy bilishga o‘ziga xos alohida talablar qo‘yadi.
++++
Determenizm tamoyili bu…
====
#Olamda sodir bo‘layotgan hodisa va jarayonlarning umumiy universal o‘zaro munosabati hamda sababiy bog‘lanishlari mavjudigini bildiradi
====
Insonning o‘rganish faoliyati natijasida tevarak olam va uning qonuniyatlari to‘g‘risida haqqoniy tasavvur hosil qilish imkoniyatidir.
====
Olimning metodologik  zahirasidagi eng muhim o‘rinlardan birini egallaydi.
====
Rivojlantirish tamoyili bilan bevosita bog‘liq, lekin u ilmiy bilishga o‘ziga xos alohida talablar qo‘yadi.
++++
Rivojlantirish tamoyiliga to’g’ri ta’rif berilgan qatorni belgilang.
====
#Olimning metodologik  zahirasidagi eng muhim o‘rinlardan birini egallaydi.
====
Insonning o‘rganish faoliyati natijasida tevarak olam va uning qonuniyatlari to‘g‘risida haqqoniy tasavvur hosil qilish imkoniyatidir.
====
Olamda sodir bo‘layotgan hodisa va jarayonlarning umumiy universal o‘zaro munosabati hamda sababiy bog‘lanishlari mavjudigini bildiradi
====
Tadqiqotning sport fanida  qo‘llanadigan ilmiy usullari va ularga qo‘yiladigan umumiy talablarni asoslashda katta ahamiyatga ega
++++
Tarixiylik tamoyili  bu…
====
#Rivojlantirish tamoyili bilan bevosita bog‘liq, lekin u ilmiy bilishga o‘ziga xos alohida talablar qo‘yadi.
====
Insonning o‘rganish faoliyati natijasida tevarak olam va uning qonuniyatlari to‘g‘risida haqqoniy tasavvur hosil qilish imkoniyatidir.
====
Olimning metodologik  zahirasidagi eng muhim o‘rinlardan birini egallaydi.
====
Olamda sodir bo‘layotgan hodisa va jarayonlarning umumiy universal o‘zaro munosabati hamda sababiy bog‘lanishlari mavjudigini bildiradi
++++
U tadqiqotchini tekshirilayotgan ob’ekt yoki hodisani irsiy nuqtai nazardan, mazkur ob’ektning (hodisaning) kelib chiqishini, o‘zgarishlari va rivojlanishini hisobga olgan holda boshqa ob’ektlar bilan aloqalarini, shuningdek, undagi o‘zgarishlarning sabablarini ko‘rsata borib o‘rganishga yo‘naltiradi. Bu qaysi tamoyilga tegishli ta’rif?
====
#Tarixiylik tamoyili  
====
Rivojlantirish tamoyili
====
Determenizm tamoyili
====
Ob’ektiv borliqni bilish mumkinligi tamoyili
++++
Nazariya bilan amaliyotning birligi tamoyiliga berilgan to’g’ri ta’rifni toping?
====
#Barcha javoblar to’g’ri
====
Insonning tashqi olamga munosabati mohiyatidan kelib chiqadi. Inson tashqi olamga faollik bilan ta’sir o‘tkazadi va shu ta’sirotlar jarayonida uni bilib boradi.
====
Sport fanida qo‘llaniladigan ilmiy tadqiqot usullarini asoslashda katta ahamiyatga ega. Jismoniy tarbiya va sportdagi amaliy faoliyatni nazariyani boyitish hamda rivojlantirishning asosiy manbai deb qarash zarur.
====
Musobaqa, o‘quvmashq va tashkilotchilik faoliyatlarini tahlil etish hamda umumlashtirish orqali tadqiqotchi o‘zini qiziqtirgan ilmiy muammoni nazariy jihatdan tushunib olishi uchun zurur bo‘lgan faktik ma’lumotlarni qo‘lga kiritadi.
++++
Bu tamoyil bevosita olamning moddiy birligini tan olishdan, demak, bir moddiy hodisaning boshqasiga bog‘liqligi qonuniyatlaridan kelib chiqadi. Bunda turli hodisalar va moddiy ob’ektlar orasidagi munosabat hamda aloqalar nihoyatda rangbarang, turlituman bo‘ladi. Bu qaysi tamoyil?
====
#Determenizm tamoyili 
====
Rivojlantirish tamoyili
====
Tarixiylik tamoyili  
====
Ob’ektiv borliqni bilish mumkinligi tamoyili
++++
Bu  tamoyili  tadqiqotning sport fanida  qo‘llanadigan ilmiy usullari va ularga qo‘yiladigan umumiy talablarni asoslashda katta ahamiyatga ega. Bu qaysi tamoyil?
====
#Determenizm tamoyili 
====
Rivojlantirish tamoyili
====
Tarixiylik tamoyili  
====
Ob’ektiv borliqni bilish mumkinligi tamoyili
++++
O‘rganilayotgan ob’ekt yoki hodisalarning mohiyatini to‘g‘ri tushunish uchun ularni «materiyaning qotib qolgan shakli» sifatida emas, harakat, o‘zgarish, rivojlanishda tekshirish, ularga sabab bo‘lgan shartsharoitlarni aniqlash zarur. Bu qaysi tamoyil?
====
#Rivojlantirish tamoyili
====
Determenizm tamoyili
====
Tarixiylik tamoyili  
====
Ob’ektiv borliqni bilish mumkinligi tamoyili
++++
Sportning to‘la tasvirini ishlab chiqishda, sport haqidagi yagona fanni yaratishda …………ning alohida o‘rni bor va bu vazifani boshqa hech bir fan bajara olmaydi. Nuqtalar o’rniga kerakli fanni toping?
====
#Falsafa
====
Jamiyatshunoslik 
====
Jismoniy madaniyat nazariyasi
====
Olimpiya va sport  tarixi
++++
Usulini bevosita aniq fanlar materialiga qo‘llab bo‘lmaydi. Bu qaysi usul?
====
#Dialektika
====
Didaktika
====
Ilmiy usul
====
Induksiya
++++
Sportdagi ilmiy tadqiqotlarga qo‘yiladigan yangi talablar qanay qoidalarda o‘z ifodasini topgan?
====
#Barcha javoblar to’g’ri
====
Tadqiqotlar, umumlashma va xulosalarning yaxlit tizimlilik xususiyati.
====
Sportchilarni tayyorlash tizimini rivojlantirishning mavjud imkoniyatlariga tayanish va uni optimallashtirish yo‘llarini izlashni uyg‘unlikda olib borish.
====
Inson organizmining ruhiyjismoniy imkoniyatlariga ilmiy tadqiqotlar  hamda ularni amalga oshirish ahamiyatining bosh mezoni sifatida qarash. 
++++
Subordinatsiya bu…..
====
#Qismning butunga bo‘ysunishi
====
Muvozanat
====
O‘zaro aloqadorlik tartibi, qismlarning o‘zgarish xususiyatlari
====
Barcha javob to‘g‘ri
++++
Umumiy sport nazariyasining fanlar tizimidagi o‘rni va ular bilan o‘zaro aloqasini birinchi bo‘lib aniqlab berdi?
====
#A.P.Matveev
====
V.V.Kuznetsov
====
A.A.Novikov
====
V.M.Dyachkov
++++
Sport nazariyasi ilmiy fan sifatida qaysi fanlar bilan chambarchas aloqada?
====
#Tabiiy va ijtimoiy
====
Ijtimoiy va aniq
====
Tabiiy va aniq
====
Barcha fanlar bilan
++++
A.P.Matveev o‘zining faktik asosi bilan sport fanlari alohida sport turlarining nazariyasi va usuliyatiga, shuningdek, an’anaviy tarzda shakllangan amaliy fanlar: ….va boshqalarning  materiallariga tayanadi. Nuqatalar o’rniga mos fanlarni qo‘ying.
====
#Fiziologiya, biokimyo, biomexanika, ruhshunoslik, jamiyatshunoslik, morfologiya, metrologiya 
====
Fiziologiya, biokimyo, biomexanika, ruhshunoslik, jamiyatshunoslik, morfologiya, matematika
====
Fiziologiya, biokimyo, biomexanika, ruhshunoslik, jamiyatshunoslik, morfologiya, biologiya
====
Fiziologiya, biokimyo, biomexanika, ruhshunoslik, jamiyatshunoslik, morfologiya, tibbiyot
++++
Odatda, o‘tkazilayotgan  tadqiqotlar va usuliy ishlanmalar asosida tahliliy yondashuv metodologiyasi yotadi deb kim ta’rif bergan?
====
#V.V.Kuznetsov 
====
A.P.Matveev
====
A.A.Novikov
====
V.M.Dyachkov
++++
Tizimli yondashuv talablaridan kelib chiqib, qaysi proffessor rahbarligida yuqori malakali sportchilar sport mashg‘ulotlari jarayonini boshqarishning ierarxik xususiyatga ega bo‘lgan tizimi ishlab chiqildi?
====
#A.A.Novikov 
====
A.P.Matveev
====
V.V.Kuznetsov
====
V.M.Dyachkov
++++
Sportchining muvaffaqiyati nimalarga bog‘liq?
====
#Uning qobiliyatiga, mashg‘ulot usuliyatining mukammalligiga, trenerning malakaviy darajasiga hamda mashg‘ulot va musobaqalarni o‘tkazish uchun shartsharoitlarning mavjudligiga
====
Yoshi, jinsi, ijtimoiy kelib chiqishiga
====
Faqat uning qobiliyatiga
====
Barcha javoblar to’g’ri
++++
Sportchi tayyorgarligining barcha jihatlari miqdoriy jihatdan ko‘rsatib berilgan.Bunda tizim nechi darajadan iborat?
====
#3
====
2
====
4
====
5
++++
Texnik mahoratning integral o‘lchamlari, ritmsur’at tizimi bilan maxsus jismoniy tayyorgarlik ma’lumotlari orasidagi o‘zaro bog‘lanishni aniqlash kerak. Bu nazariya kimga tegishli?
====
#V.M.Dyachkov 
====
A.P.Matveev
====
V.V.Kuznetsov
====
A.A.Novikov
++++
Ritm sarflanayotgan kuchlanishlarni aks ettirib, ularning qiymati, sarflanayotgan vaqt va boshqa harakat xususiyatlariga bog‘liq bo‘ladi. Harakatlar ritmiga qarab, ularning mukammalligi haqida fikr yuritish mumkin deb qaysi olim aytgan?
====
#D.D.Donskoy 
====
A.P.Matveev
====
V.V.Kuznetsov
====
A.A.Novikov
++++
Taktik tayyorgarlikning model tavsifnomalarini tuzishda texniktaktik echimlarning eng maqbullarini yanada aniqroq ajratib ko‘rsatish kerak, ular sport musobaqalarining  ayni keskin vaziyatlarida qo‘llanishi mumkin degan fikrlar kimga tegishli ?
====
#F.A.Kerimov
====
A.P.Matveev
====
V.V.Kuznetsov
====
D.D.Donskoy
++++
Kim o‘spirinlarni tayyorlashda uch darajali model tarkibidagi darajalarni quyidagi tartibda joylashtirib chiqqan edi.
Birinchi daraja – potensial sport imkoniyatlari modeli
Ikkinchi daraja – sport mahorati modeli.
Uchinchi daraja – musobaqalashuv modeli.
====
#M.Ya.Nabatnikova 
====
A.P.Matveev
====
V.V.Kuznetsov
====
F.A.Kerimov 
++++
Nechi yoshda asosiy sifatlarning rivojlanishi shiddatli tus olib, bazaviy texnika shakllanadi.
====
#1316 yoshda
====
1115 yoshda
====
1217 yoshda
====
1018 yoshda
++++
Nechi yoshdan musobaqalashuv modelining ahamiyati ortib boradi?
====
#16
====
17
====
14
====
18
++++
L.P.Matveev (1997) sport fanining asosiy muammolari nechta  asosiy blokka taqsimlanadi?
====
#3
====
2
====
5
====
4
++++
Ilmiy tadqiqot jarayoni nimadan boshlanadi?
====
#Mavzu tanlashdan
====
Nimaga qiziqishdan
====
Ilmiy raxbar tanlashdan
====
Barcha javob to‘g‘ri
++++
Ilmiy tadqiqot mavzusining istiqbolli ekanligini belgilaydigan asosiy mezonlar nimalar?
====
#Barcha javob to’g’ri
====
Uning dolzarbligi, ya’ni jismoniy tarbiya va sportning muayyan sohasidagi nazariy hamda amaliy ahamiyati;
====
Olinadigan ma’lumotlar, tadqiqot usuli va yo‘nalishining yangiligi;
====
Murabbiylik va pedagoglik amaliyotining eng muhim ehtiyojlari bilan bevosita aloqadorlik;
++++
Ilmiy tadqiqot mavzusining istiqbolliligi mezonlarini aniqlash uchun tadqiqotchi qaysi yo‘nalishlar bo‘yicha olib boriladigan ishning dastlabki tahlilini amalga oshirish kerak?
====
#Barcha javob to’g’ri
====
Mavzuning o‘rganilganlik darajasini aniqlash;
====
Tadqiqotda qo‘llanilishi mumkin bo‘lgan usullarni belgilash;
====
Tadqiqotning maqsad va vazifalarini oydinlashtirish.
++++
Tadqiqot mavzusining o‘rganilganlik darajasini aniqlashdan maqsadnima?
====
#Mazkur masalaning mohiyati haqida umumiy tasavvur hosil qilish, o‘tmishda uning ilmiy tomondan ishlanishi qaysi yo‘llardan borganligi to‘g‘risida tushuncha hosil qilishdan iborat
====
Ma’lumot yig’ish
====
Tadqiqotda qo‘llanilishi mumkin bo‘lgan usullarni belgilash
====
Barcha javob to’g’ri
++++
Tadqiqot mavzusining dastlabki tanishtirish manbalari sifatida qaysi manbalardan foydalangan ma’qul?
====
#Barcha javob to’g’ri
====
«Teoriya i praktika fizicheskoy kulturo‘») («Jismoniy tarbiya nazariyasi va amaliyoti») ilmiy jurnalini (unda Rossiya bo‘yicha himoya qilingan dissertatsion ishlar ro‘yxati keltiriladi)
====
Dissertatsiya ishlari avtoreferatlari, ilmiy anjumanlar to‘plamlari, jismoniy tarbiya va sport bo‘yicha monografiyalar,
====
O‘zbekiston Respublikasi OAK byulleteni, tadqiqotchini qiziqtirgan masala bo‘yicha adabiyotlarning umumlashtirilgan referativ obzorlari
++++
Ilmiy tajriba shaklidagi tadqiqotlarni rejalashtirishda nimalarni ko‘zda tutish zarur?
====
#Barcha javob to’g’ri
====
Ilmiy tajribani o‘tkazish usuliyatini o‘zlashtirish; zarur asbobuskunalar, hujjatlarni tayyorlash, pedagogik tajriba o‘tkaziladigan bo‘lsa, u holda sportchilarning jismoniy hamda texniktaktik tayyorgarligi darajasiga ko‘ra tajriba guruhlarining tarkibini, pedagogik tajriba uchun ajratilgan muddatlarni belgilash;
====
Tadqiqotchining usuliy va texnik jihatdan tayyorgarligini aniqlash maqsadida dastlabki pedagogik tajribani o‘tkazish; ishchi farazlarning zarur isbotini olish uchun ilmiy tajribani yoki ularning seriyalarini yo‘lga qo‘yish;
====
Tajriba ma’lumotlariga statistik ishlov berish va uning tajribalarini tahlil qilish: qo‘shimcha tajribalarni (zarur bo‘lganda) o‘tkazish:  ilmiy tajriba natijalarini umumlashtirish va ularni ilmiy farazlar bilan taqqoslash.
++++
Ilmiy tadqiqot ishlarini rejalashtirishning juda muhim nuqtalaridan biri belgilangan vazifalarni amalga oshirish uchun imkoniyat yaratadigan nimalarni  uzilkesil tanlab olish masalasidir.
====
#Tadqiqot usullarini
====
Tadqiqot rejalarini
====
Tadqiqot guruhlarini
====
Barcha javob to’g’ri
++++
Ilmiy ishni o‘rganishning nechta asosiy yo‘li bor?
====
#3
====
2
====
5
====
4
++++
Ilmiy ishni o‘rganish의 qanday asosiy yo‘llari bor?
====
#Manbani ko‘rib chiqish;  boshidan oxirigacha o‘qish;  puxta o‘zlashtirish.
====
Manbani ko‘rib chiqish;  puxta o‘zlashtirish.
====
Boshidan oxirigacha o‘qish;  puxta o‘zlashtirish.
====
To’g’ri javob yoq
++++
Tadqiqotchi uchun zarur materiallarni yig‘ish va to‘plashning eng muhim yo‘llaridan biri bu….
====
#O‘rganilayotgot ob’ekt yoki masala to‘g‘risida o‘z  kuzatuvlari,  tajribalari va h.k. asosida  tegishli ma’lumotlarni olishdir
====
Manbani ko‘rib chiqish;  boshidan oxirigacha o‘qish;  puxta o‘zlashtirish.
====
Kitobni puxta o‘zlashtirish uni chuqur ishlab chiqish
====
Boshidan oxirigacha o‘qish va xulosalash
++++
Ilmiy tadqiqot jarayonida pedagogik kuzatishlarni amalga oshirishning nechta asosiy turi bor?
====
#3
====
2
====
4
====
5
++++
Yig‘ilgan materiallarni tahlil qilishning eng muhim vazifasi nimadan iborat?
====
#Ilmiy tadqiqotning ilgarigi barcha bosqichlarida qo‘lga kiritilgan axborotga tanqidiy baho berishdan iborat
====
O‘rganilayotgan harakat faoliyatining yuzaga kelish yoki shakllanish muddatidan iborat
====
Bajarilgan biomexanik, fiziologik, ruhiy tadqiqotlarning natijalari asosidan iborat
====
Barcha javoblar to’g’ri
++++
Ilmiy tadqiqotning so‘nggi bosqichiga nimalar kiradi?
====
#Barcha javoblar to’g’ri 
====
Ishni adabiy hamda texnik jihatdan shakllantirish
====
Uni tarqatishning (sotishning) ikkilamchi yo‘llarini belgilash
====
Ilmiy tadqiqotning so‘nggi bosqichi uni yakunlash va shakllantirish
++++
Ilmiy tadqiqot o‘zaro aloqador nechi qismdan iborat bo‘ladi?
====
#2
====
3
====
4
====
5
++++
Ilmiy tadqiqot deganda, odatda, .............................................tushuniladi.
====
#Bironbir yangi masalani barcha qonunqoidalari bo‘yicha ishlab chiqish
====
Ilmiy izlanish natijalarining adabiy bayoni hisoblanadi
====
Bironbir avval ishlangan masalani barcha qonunqoidalari bo‘yicha qayta  ishlab chiqish
====
To’g’ri javob yo’q
++++
Ilmiy tadqiqotlarning samaradorligini oshirish nimagabog‘liq?
====
#Uning tarkibidagi barcha asosiy unsurlarning sifatli qurilishiga
====
Uning tarkibidagi barcha ma’lumotlarga
====
Ilmiy ishning yangiligiga
====
Barcha javoblar to’g’ri
++++
Har qanday tadqiqotning boshlang‘ich nuqtasi bu?
====
#Muammoli vaziyatdir
====
Metod
====
Reja
====
Obyekt ba predmet
++++
Muammoli vaziyat bu …
====
#Odamlarning ehtiyojlari, qandaydir samarali amaliy yoki nazariy faoliyatlari haqida bilish bilan shu faoliyatlarni ruyobga chiqarish yo‘llari, vosita va usullarini bilmaslik orasidagi ziddiyatdir
====
Tadqiqot natijalarining ishonchli tarzda asoslab bera olmasligi
====
Ikki kishi o’rtasidagi tortishuv
====
Barcha javoblar to’g’ri
++++
Ilmiy muammoning murakkablik darajasi nimalarga bog’liq?
====
#Barcha javoblar to’g’ri
====
Ziddiyatlarga ega bo‘lgan va aniq maqsadga qaratilgan boshqaruv zarurati mavjud ob’ektlarning nisbiy murakkabligiga
====
Mazkur ziddiyatlarni hal etish uchun ijtimoiy ehtiyojlarning etilganlik darajasiga
====
Muayyan sohadagi ilmiy va amaliy bilimlarning holatiga
++++
Tadqiqot muammosini hal etish uchun, odatda,qanday talablar qo‘yiladi?
====
#Barcha javoblar to’g’ri
====
«Muammoli» (izlangan, noma’lum) va «muammosiz» (ma’lum) orasidagi chegaraning yanada aniq bo‘lishi;
====
Umumiy muammoga nisbatan muhim hamda nomuhimning birbiridan keskin ajratilishi ;
====
Umumiy muammoni unsurlarga taqsimlab, xususiy muammolar va ularning ustuvorligi bo‘yicha tartibga solish.
++++
Tadqiqot predmeti deb nimaga aytiladi?
====
#Ob’ektning bevosita o‘rganiladigan, amaliy va nazariy nuqtai nazardan eng muhim xususiyatlari, jihatlari, xossalariga aytiladi.
====
Ilmiy tadqiqotda o‘rganiladigan, amaliy va nazariy nuqtai nazardan eng muhim ma’lumotlarga aytiladi.
====
Sport fanida tadqiqot ob’ekti bilish jarayoni yo‘naltirilgan narsa
====
To’g’ri javob yo’q
++++
Tadqiqotning maqsadi nimaga yo‘naltirilgan?
====
#Nazariybilish yoki amaliy so‘nggi natijaga
====
Yangi ma’lumot yaratishga
====
Yangi bilim ko’kikma egallashga
====
Faqat nazariy ilmiy ish qilishga
++++
Har qanday ilmiy tadqiqotning maqsadi bu….
====
#Barcha javoblar to’g’ri
====
Muayyan muammoni yechishdir.
====
Tadqiqotchi tomonidan yuzaga kelgan muammoni nazariy jihatdan tahlil qilish hamda uning amaldagi yechilishi holatiga berilgan baho asosida qo‘yiladi.
====
Maqsad tadqiqotning yanada aniq maqsadlariga bo‘linadi
++++
Adabiy manbalarni o‘rganishda nimalarni oydinlashtirish lozim?
====
#Barcha javoblar to’g’ri
====
Muallifning asosiy g‘oyasi, uning o‘rganilayotgan muammoga munosabatini aniqlash;
====
Muallif fikrlarining an’anaviylaridan farqi nimada ekanligi, muammoni o‘rganishdagi yangiliklar;
====
Muallifning qanday g‘oyalari etarlicha dalillangan, qaysilari dalillanmagan;
++++
Adabiy manbalarni o‘rganishda nimalarni oydinlashtirish lozim?
====
#Barcha javoblar to’g’ri
====
Qo‘shilish mumkin bo‘lmagan g‘oya, xulosa, tavsiyalar;   
====
Muammoning  ishda o‘z aksini topmagan asosiy masalalari;
====
Shu munosabat bilan mazkur muammoni o‘rganishni davom ettirish
++++
Tadqiqotning vazifalari qanday unsurlardan iborat bo‘lishi mumkin?
====
#Barcha javoblar to’g’ri
====
Umumiy muammoga kiruvchi muayyan nazariy masalalarni hal etish:
====
Mazkur muammoni hal etish amaliyotini ilmiy tajriba asosida o‘rganish, uning tipik holatlarini, nuqsonlarini, murakkabliklarini, ularning sabablarini, shuningdek, ilg‘or tajriba belgilarini ochib berish:
====
Qo‘yilgan vazifani echish uchun zarur choralar tizimini asoslash
++++
Tadqiqotning vazifalari qanday unsurlardan iborat bo‘lishi mumkin?
====
#Barcha javoblar to’g’ri
====
Qo‘yilgan vazifani echish uchun zarur choralar tizimini asoslash:
====
Taklif etilgan choralar tizimini uning optimallik mezonlariga muvofiqligi nuqtai nazaridan ilmiy tajriba asosida tekshirish:
====
Tadqiqot natijalaridan amaliyotda foydalanish uchun usuliy tavsiyanomalarni ishlab chiqish.
++++
Texnik vositalar deganda nimalar tushuniladi.
====
#Ovoz yozish, kino, videoapparatlari, turli refleksometr, dinamometrlar, o‘qitish hamda nazorat funksiyalarini bajaruvchi boshqa o‘lchash uskunalari
====
Dinamometrlar, o‘qitish hamda nazorat funksiyalarini bajaruvchi boshqa o‘lchash uskunalari.
====
Barcha javoblar to’g’ri
====
Uzunlik o’lchov birliklari, soatlar
++++
Akademik _______________ ham o‘z ilmiy ishlarida tadqiqotning butun jiddiyligi usulga, harakat yo‘liga bog‘liqligini ta’kidlagan edi.
====
#I.P.Pavlov 
====
I.I.Mechnikov
====
F.A.Kerimov
====
A.P.Matveev
++++
Ilmiy bilishning xilmaxil usullarini nechta guruhlashi qabul qilingan?
====
#3
====
5
====
6
====
7
++++
Ilmiy bilishning xilmaxil usullarini to’g’ri berilga qatorni toping?
====
#Barcha javoblar to’g’ri
====
Tajribaviy –empirik darajadagi usullar;
====
Nazariy darajadagi usullar;
====
Metanazariy darajadagi usullar.
++++
Qaysi darajadagi usullar o‘rganilayotgan muammoga doir faktlarni to‘plash, shuningdek, olingan ma’lumotlarni tekshirish va aniqlashtirish bosqichlarida keng qo‘llaniladi?
====
#Tajribaviy –empirik darajadagi usullar;
====
Barcha javoblar to’g’ri
====
Nazariy darajadagi usullar;
====
Metanazariy darajadagi usullar.
++++
Qanday darajadagi usullardan faktlarning mag‘zini chaqish va nazariyani shakllantirish bosqichlarida foydalaniladi?
====
#Nazariy hamda metanazariy darajadagi usullardan 
====
Tajribaviy –empirik darajadagi usullar;
====
Barcha usullardan
====
Faqat nazariy darajadagi usullar;
++++
Tajribaviy empirik darajadagi usullarga nimalar kiradi?
====
#Barcha javoblar to’g’ri
====
Kuzatish, so‘roqnoma asosida ishlash, suhbatlashish, 
====
Mashg‘ulot va musobaqa faoliyatini o‘rganish, 
====
Sportchi tayyorgarligini har jihatdan testlash, turli ilmiy tajribalar o‘tkazish
++++
Faqat shu yo‘l bilan hodisalarning sabablarini yoki ulardan kelib chiqadigan  oqibatlarni bilish, ob’ektiv, tasodifiy bo‘lmagan bog‘lanishlarni tushunish mumkin. Bu qaysi usul?
====
#Nazariy darajadagi usullar
====
Metanazariy darajadagi usullar
====
Tajribaviy –empirik darajadagi usullar;
====
Barcha javoblar to’g’ri
++++
Ushbu usullar yordamida nazariyalarning o‘zi tadqiq etilib, ularning tuzilish yo‘llari ishlab chiqiladi. Bu qaysi usul?
====
#Metanazariy darajadagi usullar 
====
Nazariy darajadagi usullar
====
Tajribaviy –empirik darajadagi usullar;
====
Barcha javoblar to’g’ri
++++
Kim u yoki bu usulning yaroqliligini aniqlash uchun 10 ta umumiy talabni qo‘llashni taklif etdi?
====
# B.A. Ashmarin 
====
I.I.Mechnikov
====
F.A.Kerimov
====
A.P.Matveev
++++
Saylab oluvchi usul nechta yo‘l bilan o‘rnatiladi?
====
#2
====
3
====
4
====
5
++++
Usul qayta takrorlana oladigan (ishonchli) bo‘lishi, ya’ni qaysi shartlar bajarilganda, aynan bir xil natijalar bera olishi kerak?
====
#Barcha javoblar to’g’ri
====
Tadqiqotlarlar bir tajribachi tomonidan shug‘ullanuvchilar bilan ko‘p bora o‘tkazilishi
====
Tadqiqotlarning bir tajribachi tomonidan shug‘ullanuvchilarning turli (o‘xshash) guruhlarida o‘tkazilishi
====
Tadqiqotlarning turli tajribachilar tomonidan shug‘ullanuvchilarning bir guruhida o‘tkazilishi
++++
Usulning qayta takrorlanishi darajasini aniqlashning nechta yo‘li bor.
====
#2
====
3
====
4
====
5
++++
Shug‘ullanuvchilarning o‘xshash guruhlarida olingan ko‘rsatkichlar orasidagi o‘zaro bog‘liqlik koeffitsienti hisoblanadi. Bog‘liqlik koeffitsienti …. va undan yuqori bo‘lgan hollarda usullarning qayta takrorlanishi darajasi yuqori, koeffitsient ….dan kichik bo‘lsa past sanaladi.
====
#0,9 va 0,6
====
0,8 va 0,6
====
0,7 va 0,6
====
0,9 va 0,5
++++
Pedagogika amaliyotida tadqiqotning qaysi so‘rov usullari keng qo‘llaniladi?
====
#Barchasi
====
Suhbat, 
====
Intervyu olish 
====
So‘rovnomadan foydalanish
++++
O‘rganilayotgan masalani ikki tomonlama (yoki ko‘p tomonlama) muhokama qilish yo‘li bilan shaxsni o‘rganish va axborot olish usulidir. Bu qaysi usul?
====
#Suhbat
====
Intervyu olish 
====
So‘rovnomadan foydalanish
====
Barcha javoblar to’g’ri
++++
Savollar tizimiga respondentning (so‘roqlanuvchining) og‘zaki javoblari asosida axborot olish usuli hisoblanadi.Bu qaysi usul?
====
#Intervyu olish
====
Suhbat
====
So‘rovnomadan foydalanish
====
Barcha javoblar to’g’ri
++++
Ilmiy tadqiqot usullaridan biri bo‘lib, uning yordamida tadqiqotchi so‘roqlanuvchining og‘zaki xabarlari zamiridagi ma’lumotlarga ega bo‘ladi. Bu qaysi usul?
====
#So‘rovnomadan foydalanish 
====
Suhbat
====
Intervyu olish
====
Barcha javoblar to’g’ri
++++
Tadqiqotchi tomonidan izchillik asosida tuzilgan savollarga so‘roqlanuvchidan yozma axborot olish jarayoni bo‘lib, tadqiqotning eng keng tarqalgan, matematik ishlov berish ancha qulay bo‘lgan, ko‘p sonli so‘roqlanuvchilarni qamrab olishga imkon beradigan usulidir. . Bu qaysi usul?
====
#So‘rovnomadan foydalanish 
====
Suhbat
====
Intervyu olish
====
Barcha javoblar to’g’ri
++++
Qaysi usuldan xattiharakatlarni muhokama qilish va tahlil etish hamda shaxsning ma’naviy bahosini ishlab chiqishda foydalaniladi?
====
#Suhbat
====
Intervyu olish 
====
So‘rovnomadan foydalanish
====
Barcha javoblar to’g’ri
++++
So‘rov usullarning bir qator jiddiy fazilatlari bor. Bular qaysilar?
====
#Barcha javoblar to’g’ri
====
O‘rganilayotgan muammo yuzasidan tez muddatda ko‘p xilmaxil kuzatishlar natijalariga ega bo‘lish imkonini beradi.
====
Doimiy so‘rov muolajalaridan, bir xildagi miqdoriy ko‘rsatkichlardan foydalanish muayyan sharoitlarga rioya qilinganda, sababiy bog‘lanishlar to‘g‘risidagi farazlarnigina emas, tadqiqot natijalarining ikkilamchi hamda qiyosiy tahlilini ham tekshiruvdan o‘tkazish imkonini beradi.
====
Olinadigan axborotlar hajmiga nisbatan so‘rov usullarining qiymati nisbatan kаtta bo‘lmaydi.
++++
So‘roqnoma orqali fikr olishning rangbarang turlari mavjud bo‘lib, ularni muayyan belgilariga ko‘ra guruhlarga taqsimlash mumkin. Uning qanay turlari bor?
====
#Barcha javoblar to’g’ri
====
Hajmiga ko‘ra, ya’ni so‘roq qilinuvchi respondentlar miqdoriga ko‘ra: o‘z navbatida  bu tur yalpi hamda saylanma bo‘ladi;
====
Tadqiqotchining respondent bilan muomala qilish usuliga ko‘ra so‘roqnoma asosida fikr olish shaxsiy (yuzmayuz), guruhli, alohida va sirtqi bo‘lishi mumkin;
====
Tarqatish usuliga ko‘ra pochta orqali yuboriladigan yoki tarqatma bo‘ladi.
++++
Yalpi usulga izoh bering?
====
#Respondentlarning hammasiga yoppasiga so‘roqnomalar tarqatish
====
So‘roqlanuvchilarning tanlab olingan ommasi orasida so‘roqnomalar tarqatish
====
Tadqiqotchi bilan so‘roqlanuvchining bevosita muomalasiga asoslangan, ya’ni so‘roqnoma to‘ldirilayotgan paytda tadqiqotchi shu erda bo‘ladi
====
Kishilarning katta guruhini bir vaqtning o‘zida so‘roqqa tutish mumkin bo‘ladi, natijada, qisqa vaqt ichida ko‘p material to‘planadi
++++
Saylanma usulga izoh bering?
====
#So‘roqlanuvchilarning tanlab olingan ommasi orasida o‘tkaziladi
====
Tadqiqotchi bilan so‘roqlanuvchining bevosita muomalasiga asoslangan, ya’ni so‘roqnoma to‘ldirilayotgan paytda tadqiqotchi shu erda bo‘ladi
====
Kishilarning katta guruhini bir vaqtning o‘zida so‘roqqa tutish mumkin bo‘ladi, natijada, qisqa vaqt ichida ko‘p material to‘planadi
====
Respondentlarning hammasiga yoppasiga so‘roqnomalar tarqatish
++++
Shaxsiy usulga izoh bering? 
====
#Tadqiqotchi bilan so‘roqlanuvchining bevosita muomalasiga asoslangan, ya’ni so‘roqnoma to‘ldirilayotgan paytda tadqiqotchi shu yerda bo‘ladi. 
====
Kishilarning katta guruhini bir vaqtning o‘zida so‘roqqa tutish mumkin bo‘ladi, natijada, qisqa vaqt ichida ko‘p material to‘planadi
====
Respondentlarning hammasiga yoppasiga so‘roqnomalar tarqatish
====
Respondent  tadqiqotchi ishtirokisiz savollarga javob beradi
++++
Guruhli usulda qanday so’rov o’tkaziladi?
====
#Kishilarning katta guruhini bir vaqtning o‘zida so‘roqqa tutish mumkin bo‘ladi, natijada, qisqa vaqt ichida ko‘p material to‘planadi. 
====
Respondentlarning hammasiga yoppasiga so‘roqnomalar tarqatish
====
Respondent  tadqiqotchi ishtirokisiz savollarga javob beradi
====
Tadqiqotchi bilan so‘roqlanuvchining bevosita muomalasiga asoslangan, ya’ni so‘roqnoma to‘ldirilayotgan paytda tadqiqotchi shu yerda bo‘ladi.
++++
Alohida so‘rov o‘tkazish usulda qanday so’rov o’tkaziladi?
====
#Respondentlarning galmagaldan javob berishini nazarda tutadi. 
====
Respondent  tadqiqotchi ishtirokisiz savollarga javob beradi
====
Pochta orqali so‘rov o‘tkazishda respondentlar so‘roqnomalarni pochta orqali oladilar va yana shu yo‘l bilan ularni tadqiqotchilarga qaytaradilar.
====
Tadqiqotchi bilan so‘roqlanuvchining bevosita muomalasiga asoslangan, ya’ni so‘roqnoma to‘ldirilayotgan paytda tadqiqotchi shu yerda bo‘ladi.
++++
Sirtqi usulda qanday so’rov o’tkaziladi?
====
#Respondent  tadqiqotchi ishtirokisiz savollarga javob beradi
====
Pochta orqali so‘rov o‘tkazishda respondentlar so‘roqnomalarni pochta orqali oladilar va yana shu yo‘l bilan ularni tadqiqotchilarga qaytaradilar.
====
Tadqiqotchi bilan so‘roqlanuvchining bevosita muomalasiga asoslangan, ya’ni so‘roqnoma to‘ldirilayotgan paytda tadqiqotchi shu yerda bo‘ladi.
====
Respondentlarning hammasiga yoppasiga so‘roqnomalar tarqatish
++++
Pochta orqali usulda qanday so’rov o’tkaziladi?
====
#So‘rov o‘tkazishda respondentlar so‘roqnomalarni pochta orqali oladilar va yana shu yo‘l bilan ularni tadqiqotchilarga qaytaradilar.
====
Tadqiqotchi bilan so‘roqlanuvchining bevosita muomalasiga asoslangan, ya’ni so‘roqnoma to‘ldirilayotgan paytda tadqiqotchi shu yerda bo‘ladi.
====
Respondentlarning hammasiga yoppasiga so‘roqnomalar tarqatish
====
Respondent  tadqiqotchi ishtirokisiz savollarga javob beradi
++++
So‘roqnoma nechi qismdan iborat bo‘ladi?
====
#3
====
2
====
4
====
5`;

const parseData = (raw: string): Question[] => {
  return raw.split('\n').filter(line => line.trim()).map((line, idx) => {
    const parts = line.split('\t');
    const options = parts.slice(2, 6).filter(o => o && o.trim());
    return {
      id: `${parts[0].substring(0, 3)}-${idx}`,
      subject: parts[0],
      question: parts[1],
      correctAnswer: parts[2],
      options: options
    };
  });
};

const parseNumberedData = (raw: string, subject: string): Question[] => {
  const blocks = raw.split(/\n(?=\d+\.\s+)/);
  return blocks.filter(b => b.trim()).map((block, idx) => {
    const lines = block.split('\n').map(l => l.trim()).filter(l => l);
    const questionText = lines[0].replace(/^\d+\.\s*/, '');
    const optionsLines = lines.slice(1);
    let correctAnswer = '';
    const options: string[] = [];

    optionsLines.forEach(optLine => {
      const cleanOpt = optLine.replace(/^[A-D]\)\s*/, '').replace(/\s*\*$/, '').trim();
      if (optLine.endsWith('*')) {
        correctAnswer = cleanOpt;
      }
      options.push(cleanOpt);
    });

    return {
      id: `morf-${idx}`,
      subject,
      question: questionText,
      correctAnswer,
      options
    };
  });
};

const parseSpecialFormat = (raw: string, subject: string): Question[] => {
  const cleanRaw = raw.replace(/^Fan nomi:.*?\n/, '').trim();
  const blocks = cleanRaw.split(/\+{4,}/).filter(b => b.trim());
  
  return blocks.map((block, idx) => {
    const parts = block.split(/={4,}/).map(p => p.trim()).filter(p => p);
    if (parts.length < 2) return null;

    const question = parts[0];
    const rawOptions = parts.slice(1);
    let correctAnswer = '';
    const options = rawOptions.map(opt => {
      if (opt.startsWith('#')) {
        const clean = opt.replace(/^#/, '').trim();
        correctAnswer = clean;
        return clean;
      }
      return opt;
    });

    return {
      id: `sci-${idx}`,
      subject,
      question,
      correctAnswer: correctAnswer || options[0],
      options
    };
  }).filter(q => q !== null) as Question[];
};

export const SUBJECTS_DATA = {
  'MathStats': {
    title: 'Sportda matematik statistik tahlil',
    questions: parseData(rawData1)
  },
  'Modeling': {
    title: 'Sportda saralash, modellashtirish va bashorat qilish',
    questions: parseData(rawData2)
  },
  'Morphology': {
    title: 'Sport morfologiyasi',
    questions: parseNumberedData(rawData3, 'Sport morfologiyasi')
  },
  'ScientificResearch': {
    title: 'Sportda ilmiy tadqiqotlar',
    questions: parseSpecialFormat(rawData4, 'Sportda ilmiy tadqiqotlar')
  }
};

export const formatTime = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

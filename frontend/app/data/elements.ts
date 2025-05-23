// بيانات عناصر تقييم الأداء الوظيفي
export const elements = [
  {
    id: '1',
    title: "أداء الواجبات الوظيفية",
    description: "تقييم مدى التزام المعلمة بالقيام بواجباتها الوظيفية الأساسية ومسؤولياتها المهنية",
    content: `
      <p>تشمل الواجبات الوظيفية للمعلمة مجموعة من المهام والمسؤوليات التي يجب أن تقوم بها المعلمة خلال عملها، ومنها:</p>
      <ul>
        <li>الالتزام بحضور طابور الصباح والمشاركة في الإشراف</li>
        <li>التواجد في المدرسة خلال ساعات الدوام الرسمي</li>
        <li>متابعة الواجبات المدرسية وتصحيحها بانتظام</li>
        <li>المشاركة في الاجتماعات المدرسية بفعالية</li>
        <li>إعداد التقارير المطلوبة في مواعيدها</li>
        <li>الالتزام بتنفيذ التعليمات الإدارية</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+سجل+حضور",
        caption: "سجل حضور والتزام المعلمة"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+اجتماع+معلمات",
        caption: "المشاركة في اجتماعات هيئة التدريس"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تصحيح+واجبات",
        caption: "نموذج من تصحيح الواجبات المدرسية"
      }
    ],
    evidences: [
      {
        title: "سجل الدوام الرسمي",
        description: "وثيقة تبين التزام المعلمة بأوقات الدوام المدرسي الرسمي",
        imageUrl: "https://placehold.co/600x400/pink/white?text=سجل+الدوام+الرسمي"
      },
      {
        title: "سجل المناوبة والإشراف اليومي",
        description: "سجل مشاركة المعلمة في نوبات الإشراف والمناوبة المدرسية",
        imageUrl: "https://placehold.co/600x400/pink/white?text=سجل+المناوبة+والإشراف"
      },
      {
        title: "سجل الانتظار",
        description: "توثيق للحصص الاحتياطية وأوقات الانتظار",
        imageUrl: "https://placehold.co/600x400/pink/white?text=سجل+الانتظار"
      },
      {
        title: "خطة توزيع المنهج",
        description: "الخطة الزمنية لتوزيع محتوى المنهج على الفصل الدراسي",
        imageUrl: "https://placehold.co/600x400/pink/white?text=خطة+توزيع+المنهج"
      }
    ]
  },
  {
    id: '2',
    title: "التفاعل مع المجتمع المهني",
    description: "قياس مستوى تفاعل المعلمة مع زميلاتها في العمل والمجتمع المهني بشكل عام",
    content: `
      <p>يُعد التفاعل مع المجتمع المهني أحد أهم عناصر تقييم المعلمة، ويشمل:</p>
      <ul>
        <li>المشاركة في المجتمعات المهنية وفرق العمل داخل المدرسة</li>
        <li>التعاون مع الزميلات في تبادل الخبرات التعليمية</li>
        <li>المشاركة في برامج التطوير المهني الجماعية</li>
        <li>المشاركة في لجان المدرسة المختلفة</li>
        <li>المساهمة في أنشطة تحسين بيئة العمل</li>
        <li>المشاركة في الفعاليات والمناسبات المهنية</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+اجتماع+مهني",
        caption: "اجتماع مهني لمعلمات الرياضيات"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+ورشة+عمل",
        caption: "ورشة عمل تدريبية"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تبادل+خبرات",
        caption: "جلسة تبادل خبرات بين المعلمات"
      }
    ],
    evidences: [
      {
        title: "سجل مجتمعات التعلم المهنية",
        description: "توثيق المشاركة في مجتمعات التعلم المهنية وحلقات النقاش",
        imageUrl: "https://placehold.co/600x400/pink/white?text=سجل+مجتمعات+التعلم+المهنية"
      },
      {
        title: "سجل تبادل الزيارات",
        description: "توثيق للزيارات الصفية المتبادلة مع الزميلات",
        imageUrl: "https://placehold.co/600x400/pink/white?text=سجل+تبادل+الزيارات"
      },
      {
        title: "تقرير تنفيذ درس تطبيقي",
        description: "توثيق لتنفيذ درس نموذجي بحضور المشرفة والزميلات",
        imageUrl: "https://placehold.co/600x400/pink/white?text=تقرير+تنفيذ+درس+تطبيقي"
      },
      {
        title: "شهادات حضور الدورات التدريبية وورش العمل",
        description: "شهادات توثق حضور دورات التطوير المهني المختلفة",
        imageUrl: "https://placehold.co/600x400/pink/white?text=شهادات+حضور+الدورات"
      }
    ]
  },
  {
    id: '3',
    title: "التفاعل مع أولياء الأمور",
    description: "قياس مدى تواصل المعلمة مع أولياء الأمور وإشراكهم في العملية التعليمية",
    content: `
      <p>التفاعل مع أولياء الأمور يعزز العلاقة بين المدرسة والأسرة، ويساهم في تحسين تعلم الطلاب من خلال:</p>
      <ul>
        <li>تنظيم لقاءات دورية مع أولياء الأمور</li>
        <li>إرسال تقارير منتظمة عن أداء الطلاب</li>
        <li>التواصل الإيجابي مع الأهالي عبر وسائل متنوعة</li>
        <li>الاستجابة لاستفسارات أولياء الأمور في الوقت المناسب</li>
        <li>إشراك الأهالي في بعض الأنشطة التعليمية</li>
        <li>توجيه الأسر لكيفية دعم تعلم أبنائهم في المنزل</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+اجتماع+أولياء+أمور",
        caption: "اجتماع مع أولياء الأمور"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تقرير+أداء",
        caption: "نموذج من تقارير أداء الطلاب"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+ورشة+للأهالي",
        caption: "ورشة تعليمية للأهالي"
      }
    ],
    evidences: [
      {
        title: "صور من الجمعية العمومية للمعلمين وأولياء الأمور",
        description: "توثيق للمشاركة في اجتماعات الجمعية العمومية",
        imageUrl: "https://placehold.co/600x400/pink/white?text=الجمعية+العمومية"
      },
      {
        title: "تقرير اجتماع المعلم مع ولي الأمر",
        description: "نموذج توثيق للقاءات الفردية مع أولياء الأمور",
        imageUrl: "https://placehold.co/600x400/pink/white?text=تقرير+اجتماع+مع+ولي+الأمر"
      },
      {
        title: "نسخة من الخطة الأسبوعية للمدرسة",
        description: "خطة أسبوعية يتم إرسالها لأولياء الأمور بانتظام",
        imageUrl: "https://placehold.co/600x400/pink/white?text=الخطة+الأسبوعية"
      }
    ]
  },
  {
    id: '4',
    title: "التنويع في استراتيجيات التدريس",
    description: "تقييم قدرة المعلمة على استخدام استراتيجيات تدريس متنوعة تناسب احتياجات المتعلمين",
    content: `
      <p>التنويع في استراتيجيات التدريس يساعد على تلبية احتياجات جميع الطلاب بمختلف قدراتهم وأنماط تعلمهم، ويشمل:</p>
      <ul>
        <li>استخدام استراتيجيات التعلم النشط</li>
        <li>توظيف أساليب التعلم التعاوني</li>
        <li>استخدام استراتيجيات التفكير الناقد والإبداعي</li>
        <li>تطبيق التعلم القائم على المشاريع</li>
        <li>استخدام استراتيجيات التعلم المتمايز</li>
        <li>تنويع الأنشطة الصفية واللاصفية</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تعلم+تعاوني",
        caption: "نشاط تعلم تعاوني"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+مشروع+تعليمي",
        caption: "مشروع تعليمي للطالبات"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+نشاط+تفكير+ناقد",
        caption: "نشاط تنمية التفكير الناقد"
      }
    ],
    evidences: [
      {
        title: "تقرير عن تطبيق استراتيجية تدريس",
        description: "توثيق لتطبيق استراتيجية تدريس محددة ونتائجها",
        imageUrl: "https://placehold.co/600x400/pink/white?text=تقرير+استراتيجية+تدريس"
      },
      {
        title: "ملف إنجاز المعلم",
        description: "ملف يوثق أفضل الممارسات والاستراتيجيات المستخدمة",
        imageUrl: "https://placehold.co/600x400/pink/white?text=ملف+إنجاز+المعلم"
      }
    ]
  },
  {
    id: '5',
    title: "تحسّن نتائج المتعلمين",
    description: "قياس التحسن في أداء ونتائج المتعلمين كنتيجة لجهود المعلمة التعليمية",
    content: `
      <p>يمكن قياس مدى تحسن نتائج المتعلمين من خلال عدة مؤشرات، منها:</p>
      <ul>
        <li>تحسن الدرجات التحصيلية للطلاب</li>
        <li>تطور مهارات الطلاب الأساسية</li>
        <li>زيادة دافعية الطلاب للتعلم</li>
        <li>تحسن نتائج الاختبارات المعيارية</li>
        <li>تطور المهارات الاجتماعية والحياتية للطلاب</li>
        <li>قدرة الطلاب على تطبيق المعرفة في مواقف حياتية</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+نتائج+تحصيلية",
        caption: "رسم بياني يوضح تحسن نتائج الطالبات"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+حصة+تقييمية",
        caption: "حصة تقييمية للطالبات"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+ملف+إنجاز",
        caption: "نموذج من ملف إنجاز الطالبة"
      }
    ],
    evidences: [
      {
        title: "نتائج الاختبار القبلي والبعدي",
        description: "جداول مقارنة بين نتائج الطلاب قبل وبعد تطبيق استراتيجيات محددة",
        imageUrl: "https://placehold.co/600x400/pink/white?text=نتائج+الاختبار+القبلي+والبعدي"
      },
      {
        title: "كشف متابعة الطلاب",
        description: "سجل متابعة أداء الطلاب خلال الفصل الدراسي",
        imageUrl: "https://placehold.co/600x400/pink/white?text=كشف+متابعة+الطلاب"
      }
    ]
  },
  {
    id: '6',
    title: "إعداد خطة وتنفيذ التعلم",
    description: "تقييم قدرة المعلمة على التخطيط الجيد للدروس وتنفيذها بطريقة فعالة",
    content: `
      <p>إعداد خطة وتنفيذ التعلم من أساسيات عمل المعلمة، وتشمل:</p>
      <ul>
        <li>إعداد خطط فصلية متكاملة</li>
        <li>تحضير الدروس اليومية بشكل جيد</li>
        <li>ربط الأهداف التعليمية بالمحتوى والأنشطة</li>
        <li>توزيع الوقت بشكل مناسب بين أجزاء الدرس</li>
        <li>تحضير الوسائل التعليمية المناسبة</li>
        <li>متابعة تنفيذ الخطة وتعديلها عند الحاجة</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+خطة+فصلية",
        caption: "نموذج من الخطة الفصلية"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تحضير+درس",
        caption: "نموذج تحضير درس يومي"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تنفيذ+نشاط",
        caption: "تنفيذ نشاط تعليمي من الخطة"
      }
    ],
    evidences: [
      {
        title: "خطة توزيع المنهج",
        description: "توزيع مفردات المنهج على أسابيع الفصل الدراسي",
        imageUrl: "https://placehold.co/600x400/pink/white?text=خطة+توزيع+المنهج"
      },
      {
        title: "نموذج من إعداد الدروس",
        description: "نماذج مختلفة من تحضير الدروس اليومية",
        imageUrl: "https://placehold.co/600x400/pink/white?text=إعداد+الدروس"
      },
      {
        title: "نماذج من الواجبات والاختبارات",
        description: "أمثلة من الواجبات والاختبارات المستخدمة لتقييم الطلاب",
        imageUrl: "https://placehold.co/600x400/pink/white?text=نماذج+الواجبات+والاختبارات"
      }
    ]
  },
  {
    id: '7',
    title: "توظيف التقنيات ووسائل التعلم المناسبة",
    description: "قياس مدى استخدام المعلمة للتقنيات والوسائل التعليمية بشكل فعال",
    content: `
      <p>توظيف التقنيات ووسائل التعلم يثري العملية التعليمية ويجعلها أكثر جاذبية وفاعلية، ويشمل:</p>
      <ul>
        <li>استخدام التقنيات الحديثة في عرض الدروس</li>
        <li>توظيف منصات التعلم الإلكتروني</li>
        <li>استخدام الوسائل التعليمية المتنوعة</li>
        <li>دمج التقنية في الأنشطة الصفية</li>
        <li>إنتاج مواد تعليمية رقمية</li>
        <li>توجيه الطلاب لاستخدام التقنية بشكل آمن وفعال</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+عرض+تقني",
        caption: "استخدام العروض التقنية في الدرس"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تعلم+إلكتروني",
        caption: "منصة التعلم الإلكتروني المستخدمة"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+وسائل+تعليمية",
        caption: "مجموعة من الوسائل التعليمية المبتكرة"
      }
    ],
    evidences: [
      {
        title: "صور من الوسائل التعليمية المستخدمة",
        description: "مجموعة من الصور توثق الوسائل التعليمية المبتكرة",
        imageUrl: "https://placehold.co/600x400/pink/white?text=الوسائل+التعليمية"
      },
      {
        title: "تقرير عن برنامج تم استخدامه",
        description: "توثيق لاستخدام برنامج أو تطبيق تعليمي وأثره على الطلاب",
        imageUrl: "https://placehold.co/600x400/pink/white?text=تقرير+برنامج+تعليمي"
      }
    ]
  },
  {
    id: '8',
    title: "تهيئة البيئة التعليمية",
    description: "تقييم قدرة المعلمة على خلق بيئة تعليمية محفزة وآمنة وداعمة للتعلم",
    content: `
      <p>تهيئة البيئة التعليمية المناسبة تساعد على تحقيق أهداف التعلم وتحسين تجربة الطلاب، وتشمل:</p>
      <ul>
        <li>تنظيم الفصل بشكل يناسب الأنشطة التعليمية</li>
        <li>توفير مناخ نفسي إيجابي وآمن للطلاب</li>
        <li>إثراء الفصل بالمواد والمعينات التعليمية</li>
        <li>تحفيز الطلاب على المشاركة الفعالة</li>
        <li>الحرص على نظافة وجاذبية البيئة الصفية</li>
        <li>تنظيم لوحات وركن تعليمي دائم التجديد</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تنظيم+فصل",
        caption: "تنظيم الفصل الدراسي"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+ركن+تعليمي",
        caption: "ركن تعليمي للمادة"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+لوحات+إثرائية",
        caption: "لوحات إثرائية من تصميم المعلمة"
      }
    ],
    evidences: [
      {
        title: "تقرير تصنيف الطلاب وفق أنماط التعلم",
        description: "توزيع الطلاب وفق أنماط تعلمهم لتوفير بيئة مناسبة لكل نمط",
        imageUrl: "https://placehold.co/600x400/pink/white?text=تصنيف+أنماط+التعلم"
      },
      {
        title: "نماذج من التحفيز المادي والمعنوي",
        description: "أدوات التحفيز المستخدمة لتشجيع الطلاب",
        imageUrl: "https://placehold.co/600x400/pink/white?text=نماذج+التحفيز"
      }
    ]
  },
  {
    id: '9',
    title: "الإدارة الصفية",
    description: "تقييم قدرة المعلمة على إدارة الصف وضبط سلوك الطلاب بفاعلية",
    content: `
      <p>الإدارة الصفية الفعالة هي أساس نجاح العملية التعليمية، وتشمل:</p>
      <ul>
        <li>وضع قواعد وإجراءات واضحة للصف</li>
        <li>إدارة وقت الحصة بكفاءة</li>
        <li>التعامل مع السلوكيات غير المرغوبة بحكمة</li>
        <li>تعزيز السلوكيات الإيجابية لدى الطلاب</li>
        <li>خلق جو من الاحترام المتبادل</li>
        <li>تشجيع المشاركة الفعالة من جميع الطلاب</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+قواعد+الصف",
        caption: "لوحة قواعد الصف"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+نظام+تحفيز",
        caption: "نظام تحفيز الطالبات في الفصل"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+أنشطة+تعاونية",
        caption: "أنشطة تعاونية منظمة"
      }
    ],
    evidences: [
      {
        title: "كشف متابعة",
        description: "سجل متابعة سلوك وأداء الطلاب داخل الفصل",
        imageUrl: "https://placehold.co/600x400/pink/white?text=كشف+متابعة"
      },
      {
        title: "تطبيق إدارة الصف",
        description: "توثيق لأساليب وأدوات إدارة الصف المستخدمة",
        imageUrl: "https://placehold.co/600x400/pink/white?text=تطبيق+إدارة+الصف"
      }
    ]
  },
  {
    id: '10',
    title: "تحليل نتائج المتعلمين وتشخيص مستوياتهم",
    description: "قياس قدرة المعلمة على تحليل نتائج الطلاب وتشخيص نقاط القوة والضعف",
    content: `
      <p>تحليل نتائج المتعلمين يساعد المعلمة على تطوير ممارساتها وتحسين أداء الطلاب، ويشمل:</p>
      <ul>
        <li>جمع البيانات عن أداء الطلاب بشكل منتظم</li>
        <li>تحليل نتائج الاختبارات وتفسيرها</li>
        <li>تحديد نقاط القوة والضعف لدى الطلاب</li>
        <li>تشخيص صعوبات التعلم ومعالجتها</li>
        <li>استخدام النتائج في تحسين التدريس</li>
        <li>التعامل مع الفروق الفردية بشكل علمي</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تحليل+نتائج",
        caption: "نموذج تحليل نتائج اختبار"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تشخيص+أداء",
        caption: "استمارة تشخيص مستويات الطالبات"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+خطة+علاجية",
        caption: "خطة علاجية للطالبات متدنيات التحصيل"
      }
    ],
    evidences: [
      {
        title: "تقرير تحليل نتائج الطلاب",
        description: "تحليل إحصائي ورسوم بيانية لنتائج الطلاب",
        imageUrl: "https://placehold.co/600x400/pink/white?text=تحليل+نتائج+الطلاب"
      },
      {
        title: "سجل معالجة الفاقد التعليمي",
        description: "توثيق لخطط معالجة الفاقد التعليمي وتحسين المستويات",
        imageUrl: "https://placehold.co/600x400/pink/white?text=معالجة+الفاقد+التعليمي"
      }
    ]
  },
  {
    id: '11',
    title: "تنويع أساليب التقويم",
    description: "تقييم قدرة المعلمة على استخدام أساليب تقويم متنوعة وفعالة",
    content: `
      <p>تنويع أساليب التقويم يساعد على قياس مختلف جوانب تعلم الطلاب، ويشمل:</p>
      <ul>
        <li>استخدام التقويم التشخيصي والتكويني والختامي</li>
        <li>تنويع أدوات التقويم (اختبارات، مشاريع، ملاحظة، ملفات إنجاز)</li>
        <li>توظيف التقويم الذاتي وتقويم الأقران</li>
        <li>تقديم تغذية راجعة بناءة ومستمرة للطلاب</li>
        <li>استخدام التقويم الحقيقي والواقعي</li>
        <li>مراعاة الفروق الفردية في التقويم</li>
      </ul>
    `,
    images: [
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+ملف+إنجاز",
        caption: "نموذج من ملف إنجاز الطالبة"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+تقويم+حقيقي",
        caption: "نشاط تقويم حقيقي للطالبات"
      },
      {
        url: "https://placehold.co/600x400/pink/white?text=صورة+بطاقة+تقويم",
        caption: "بطاقة تقويم ذاتي"
      }
    ],
    evidences: [
      {
        title: "نماذج من الاختبارات",
        description: "مجموعة متنوعة من الاختبارات التشخيصية والتكوينية والختامية",
        imageUrl: "https://placehold.co/600x400/pink/white?text=نماذج+الاختبارات"
      },
      {
        title: "نماذج من ملفات إنجاز الطلاب",
        description: "نماذج مختارة من ملفات إنجاز الطالبات",
        imageUrl: "https://placehold.co/600x400/pink/white?text=ملفات+إنجاز+الطلاب"
      },
      {
        title: "نماذج من المشاريع الطلابية والمهام الأدائية",
        description: "عينة من المهام الأدائية والمشاريع المنفذة من قبل الطالبات",
        imageUrl: "https://placehold.co/600x400/pink/white?text=المشاريع+الطلابية"
      }
    ]
  },
]; 
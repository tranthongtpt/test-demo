import Image from 'next/image'

export const adminEmails = [
  'thienmai1312@gmail.com',
  'anna.huong@anhngudream.edu.vn',
  'rosa.linh@anhngudream.edu.vn',
  'hadang@anhngudream.edu.vn',
];

export const listReading = [
  {
    key: '1',
    name: 'January - Ielts Reading Practic Test 1',
    status: 'active',
    createAt: '1697182050000'
  },
  {
    key: '2',
    name: 'January - Ielts Reading Practic Test 2',
    status: 'locked',
    createAt: '1697182050000'
  },
  {
    key: '3',
    name: 'January - Ielts Reading Practic Test 3',
    status: 'locked',
    createAt: '1697182050000'
  },
  {
    key: '4',
    name: 'January - Ielts Reading Practic Test 4',
    status: 'active',
    createAt: '1697182050000'
  },
  {
    key: '5',
    name: 'January - Ielts Reading Practic Test 5',
    status: 'locked',
    createAt: '1697182050000'
  },
  {
    key: '6',
    name: 'January - Ielts Reading Practic Test 6',
    status: 'active',
    createAt: '1697182050000'
  },
  {
    key: '7',
    name: 'January - Ielts Reading Practic Test 7',
    status: 'active',
    createAt: '1697182050000'
  },
  {
    key: '8',
    name: 'January - Ielts Reading Practic Test 8',
    status: 'active',
    createAt: '1697182050000'
  },
  {
    key: '9',
    name: 'January - Ielts Reading Practic Test 9',
    status: 'locked',
    createAt: '1697182050000'
  },
  {
    key: '10',
    name: 'January - Ielts Reading Practic Test 10',
    status: 'active',
    createAt: '1697182050000'
  },
  {
    key: '11',
    name: 'January - Ielts Reading Practic Test 11',
    status: 'active',
    createAt: '1697182050000'
  },
  {
    key: '12',
    name: 'January - Ielts Reading Practic Test 12',
    status: 'active',
    createAt: '1697182050000'
  }
]
export const admin = [
  {
    id: 1,
    name: 'Trang chủ',
    icon: <Image src='/svg/dashboard.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/teacher'
  },
  {
    id: 7,
    name: 'Quản lý đề thi',
    icon: <Image src='/svg/create.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/teacher/de-thi'
  },
  {
    id: 8,
    name: 'Quản lý bài thi',
    icon: <Image src='/svg/create.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/teacher/bai-thi'
  },
  // {
  //   id: 2,
  //   name: 'IELTS Academic Test',
  //   icon: <Image src='/svg/class.svg' alt='logo' height={24} width={24} className='text-white' />,
  //   link: '/teacher/academic-test'
  // },
  // {
  //   id: 3,
  //   name: 'Bài thi luyện tập',
  //   icon: <Image src='/svg/file.svg' alt='logo' height={24} width={24} className='text-white' />,
  //   link: '/teacher/bai-thi-luyen-tap'
  // },
  {
    id: 4,
    name: 'Học viên đăng ký',
    icon: <Image src='/svg/users.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/teacher/hoc-vien'
  },
  {
    id: 5,
    name: 'Lịch sử đăng ký',
    icon: <Image src='/svg/history.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/teacher/lich-su-dang-ky'
  },
  // {
  //   id: 3,
  //   name: 'Writing',
  //   icon: <Image src='/svg/dashboard.svg' alt='logo' height={24} width={24} className='text-white' />,
  //   link: '/teacher/Writing'
  // },
  // {
  //   id: 4,
  //   name: 'Reading',
  //   icon: <Image src='/svg/dashboard.svg' alt='logo' height={24} width={24} className='text-white' />,
  //   link: '/teacher/Reading'
  // },
  {
    id: 6,
    name: 'Hồ sơ',
    icon: <Image src='/svg/setting.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/ho-so'
  }
]
export const user = [
  {
    id: 1,
    name: 'Trang chủ',
    icon: <Image src='/svg/dashboard.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/student'
  },
  {
    id: 2,
    name: 'Ielts Prep Services',
    icon: <Image src='/svg/class.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/student/ielts-prep-services'
  },
  {
    id: 3,
    name: 'Lịch sử làm bài',
    icon: <Image src='/svg/history.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/student/lich-su-lam-bai'
  },
  {
    id: 4,
    name: 'Lịch sử thanh toán',
    icon: <Image src='/svg/history.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/student/lich-su-thanh-toan'
  },
  {
    id: 5,
    name: 'Hồ sơ',
    icon: <Image src='/svg/setting.svg' alt='logo' height={24} width={24} className='text-white' />,
    link: '/student/ho-so'
  }
]

export const questionGroup = [
  {
    id: '61b9a498d1fdb6001ebd0d15',
    title: 'PASSAGE 1',
    question: `<h1><strong>IELTS</strong></h1><p><i>You should spend about<mark class="marker-yellow"> 20 minutes</mark> on <strong>Questions 1-14</strong>, which are based on IELTS below.</i></p><p><img src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/2023-02/The%20vikings%20wayfaring%20way.png"></p><h2 style="text-align:center;"><strong>The vikings wayfaring way</strong></h2><p>In the last century, Vikings have been perceived in numerous diﬀerent ways – vilified as conquerors and romanticised as adventurers. How Vikings have been employed in nation-building is a topic of some interest.</p><p>In English, Vikings are also known as Norse or Norsemen. Their language greatly inﬂuenced English, with the nouns, ‘Hell’, ‘husband’, ‘law’, and ‘window’, and the verbs, ‘blunder’, ‘snub’, ‘take’, and ‘want’, all coming from Old Norse. However, the origins of the word ‘Viking’, itself, are obscure: it may mean ‘a Scandinavian pirate’, or it may refer to ‘an inlet’, or a place called Vik, in modem-day Norway, from where the pirates came. These various names – Vikings, Norse, or Norsemen, and doubts about the very word ‘Viking’ suggest historical confusion.</p><p>Loosely speaking, the Viking Age endured from the late eighth to the mid-eleventh centuries. Vikings sailed to England in AD 793 to storm coastal monasteries, and subsequently, large swathes of England fell under Viking rule – indeed several Viking kings sat on the English throne. It is generally agreed that the Battle of Hastings, in 1066, when the Norman French invaded, marks the end of the English Viking Age, but the Irish Viking age ended earlier, while Viking colonies in Iceland and Greenland did not dissolve until around AD 1500.</p><p>How much territory Vikings controlled is also in dispute – Scandinavia and Western Europe certainly, but their reach east and south is uncertain. They plundered and settled down the Volga and Dnieper rivers, and traded with modem-day Istanbul, but the archaeological record has yet to verify that Vikings raided as far away as Northwest Africa, as some writers claim.</p><p>The issue of control and extent is complex because many Vikings did not return to Scandinavia after raiding but assimilated into local populations, often becoming Christian. To some degree, the Viking Age is defined by religion. Initially, Vikings were polytheists, believing in many gods, but by the end of the age, they had permanently accepted a new monotheistic religious system – Christianity.</p><p>This transition from so-called pagan plunderers to civilised Christians is significant and is the view promulgated throughout much of recent history. In the UK, in the 1970s for example, schoolchildren were taught that until the Vikings accepted Christianity they were nasty heathens who rampaged throughout Britain. By contrast, today’s children can visit museums where Vikings are celebrated as merchants, pastoralists, and artists with a unique worldview as well as conquerors.</p><p>What are some other interpretations of Vikings? In the nineteenth century, historians in Denmark, Norway, and Sweden constructed their own Viking ages for nationalistic reasons. At that time, all three countries were in crisis. Denmark had been beaten in war and ceded territory to what is now Germany. Norway had become independent from Sweden in 1905 but was economically vulnerable, so Norwegians sought to create a separate identity for themselves in the past <i>as well as</i> the present. The Norwegian historian, Gustav Storm, was adamant it was <i>his</i> forebears and not the Swedes’ or Danes’ who had colonised Iceland, Greenland, and Vinland, in what is now Canada. Sweden, meanwhile, had relinquished Norway to the Norwegians and Finland to the Russians; thus, in the late nineteenth century, Sweden was keen to boost its image with rich archaeological finds to show the glory of <i>its</i> Viking past.</p><p>In addition to augmenting nationalism, nineteenth-century thinkers were influenced by an Englishman, Herbert Spencer, who described peoples and cultures in evolutionary terms similar to those of Charles Darwin. Spencer coined the phrase ‘survival of the fittest’, which includes the notion that, over time, there is not only technological but also moral progress. Therefore, Viking heathens’ adoption of Christianity was considered an advantageous move. These days, historians do not compare cultures in the same way, especially since, in this case, the archaeological record seems to show that heathen Vikings and Christian Europeans were equally brutal.</p><p>Views of Vikings change according to not only to forces aﬀecting historians at the time of their research but also according to the materials they read. Since much knowledge of Vikings comes from literature composed up to 300 years after the events they chronicle, some Danish historians cal1 these sources ‘mere legends’.</p><p>Vikings did have a written language carved on large stones, but as few of these survive today, the most reliable contemporary sources on Vikings come from writers from other cultures, like the ninth-century Persian geographer, Ibn Khordadbeh.</p><p>In the last four decades, there have been wildly varying interpretations of the Viking inﬂuence in Russia. Most non-Russian scholars believe the Vikings created a kingdom in western Russia and modern-day Ukraine led by a man called Rurik. After AD 862, Rurik’s descendants continued to rule. There is considerable evidence of this colonisation: in Sweden, carved stones, still standing, describe the conquerors’ journeys; both Russian and Ukrainian have loan words from Old Norse; and, Scandinavian first names, like Igor and Olga, are still popular. However, during the Soviet period, there was an emphasis on the Slavic origins of most Russians. (Appearing in the historical record around the sixth century AD, the Slavs are thought to have originated in Eastern Europe.) This Slavic identity was promoted to contrast with that of the neighbouring Viking Swedes, who were enemies during the Cold War.</p><p>These days, many Russians consider themselves hybrids. Indeed recent genetic studies support a Norse-colonisation theory: western Russian DNA is consistent with that of the inhabitants of a region north of Stockholm in Sweden.</p><p>The tools available to modern historians are many and varied, and their findings may seem less open to debate. There are linguistics, numismatics, dendrochronology, archaeozoology, palaeobotany, ice crystallography, climate and DNA analysis to add to the translation of runes and the raising of mighty warships. Despite these, historians remain children of their times.</p>`,
    questions: [
      {
        id: '2323213fdasfasfasdasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: `Word ‘Viking’ is <span></span> 
        Vikings came from Scandinavia.`,
        answers: [
          {
            answer: 'Olivianna Palmero',
            correct: true
          }
        ],
        type: 'input',
        options: null
      },
      {
        id: '61b9a4c7d1fdb6001ebd155e',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` In Britain: AD Length varies elsewhere is <span></span> .`,
        answers: [
          {
            answer: 'Palmero',
            correct: true
          }
        ],
        type: 'input',
        options: null
      },
      {
        id: '61b9a4c7d1fdb601123e123',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '1213dasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Jupiter',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn']
      },
      {
        id: '11111111',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: '1',
            correct: true
          }
        ],
        type: 'radio',
        options: ['1', '2', '3', '4']
      },
      {
        id: '61b9a4c7d1fdb601123e1',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '61b9a4c7d1fdb601123e12',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '1213dacasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Jupiter',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn']
      },
      {
        id: '111111115123',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: '1',
            correct: true
          }
        ],
        type: 'radio',
        options: ['1', '2', '3', '4']
      },
      {
        id: '61b9a4c7d1fdb601123e1234',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      }
    ],
    answer: `Ganesh Chaturthi is one of the most prominent festivals of India. People of India wait the whole year for this festival eagerly. Although it is celebrated all over the country, in the state of Maharashtra it is celebrated with the most enthusiasm.

    Ganesh Chaturthi Essay
    Ganesh Chaturthi is a Hindu festival which holds utmost importance in the religion. This festival is celebrated following the Hindu Mythology which says that Ganesh Chaturthi is the birthday of the Lord Ganesha. Hindus refer to Lord Ganesha as the remover of all obstacles. People believe that Lord Ganesha comes every year with prosperity and success.
    
    Furthermore, they welcome Lord Ganesha in their homes with this festival with the belief that he will remove all their sufferings. Ganesh Chaturthi sparks joy all over the country and unties people with celebrations.
    
    The specialty of Ganesha Chaturthi
    Ganesh Chaturthi is celebrated for a whole 11 days. It begins on the Chaturthi when people install the statue of Lord Ganesha in their homes and temples. This festival ends on Anant Chaturdashi with Ganesh Visarjan. The devotees of the Lord Ganesha offer their prayers to God. They sing devotional songs for him and recited various mantras in his praise. They perform aartis in favour of the lord and seek his blessings on them.
    
    
    
    Most importantly, they offer Lord Ganesha sweets. Ganesha Chaturthi especially calls for Modak. Devotees offer Lord Ganesha with Modak, which is the lord’s favorite dessert. Modaks are sweet dumplings which people make with a filling of coconut and jaggery. They either fry them or steam them. People at homes and sweet shops make this sweet delicacy. They are seen around Ganesha Chaturthi mostly and are a huge hit amongst children.
    
    Get the huge list of more than 500 Essay Topics and Ideas
    
    Celebrations of Ganesh Chaturthi
    This 11-day long festival begins with people getting up in the morning and bathing. They buy new clothes for this festival and wear these clean clothes in the morning after bathing. They follow the traditional rituals of chanting mantras and songs.
    
    Early on, Ganesh Chaturthi was celebrated in a few families. Later on, it spread all over and thus began the installation of idols and immersion in the water. This marked the beginning of making Ganesh Chaturthi a larger than life festival.
    In other words, the idol immersion denotes freedom from evil and sufferings. People set up pandals make glorious statues of Lord Ganesha. Towards the end of the festival when the visarjan is about to take place, people carry out a full-fledged procession. People come out in hundreds and thousands and dance their way to the rivers and oceans.
    
    When Ganesh Chaturthi ends, they pray for the return of Lord Ganesha every year. They look forward to this festival every year. The final immersion of Lord Ganesha’s statue in the river or ocean marks the end of Ganesh Chaturthi.
    
    In short, Ganesh Chaturthi is a fun-filled festival in honour of Lord Ganesha. People all over India thoroughly enjoy it. All the devotees of Lord Ganesha come together irrespective of their differences of caste and colour. Ganesh Chaturthi spreads joy and unites people all over.`
  },
  {
    id: '6228d1fdb6001ebd0d15',
    title: 'PASSAGE 2',
    question:
      '<h2><strong>IELTS</strong></h2><p><i>You should spend about 20 minutes on <strong>Questions 15-27</strong>, which are based on IELTS below.</i></p><p><img src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/2023-02/The future never dies-.png"></p><h2 style="text-align:center;"><strong>The future never dies?</strong></h2><p><i>The prospects for humanity and for the world as a whole are somewhere between glorious and dire. It is hard to be much more precise.</i></p><p><strong>A</strong></p><p>By ‘glorious’, I mean that our descendants – all who are born on to this Earth – could live very comfortably and securely, and could continue to do so for as long as the Earth can support life, which should be for a very long time indeed. We should at least be thinking in terms of the next million years. Furthermore, our descendants could continue to enjoy the company of other species – establishing a much better relationship with them than we have now. Other animals need not live in constant fear of us. Many of those fellow species now seem bound to become extinct, but a significant proportion could and should continue to live alongside us. Such a future may seem ideal, and so it is. Yet I do not believe it is fanciful. There is nothing in the physical fabric of the Earth or in our own biology to suggest that this is not possible.</p><p><strong>B</strong></p><p>‘Dire’ means that we human beings could be in deep trouble within the next few centuries, living but also dying in large numbers in political terror and from starvation, while huge numbers of our fellow creatures would simply disappear, leaving only the ones that we find convenient – chickens, cattle – or that we can’t shake off, like flies and mice. I’m taking it to be self-evident that glory is preferable.</p><p><strong>C</strong></p><p>Our future is not entirely in our own hands because the Earth has its own rules, is part of the solar system and is neither stable nor innately safe. Other planets in the solar system are quite beyond habitation, because their temperature is far too high or too low to be endured, and ours, too, in principle could tip either way. Even relatively unspectacular changes in the atmosphere could do the trick. The core of the Earth is hot, which in many ways is good for living creatures, but every now and again, the molten rock bursts through volcanoes on the surface. Among the biggest volcanic eruptions in recent memory was Mount St Helens, in the USA, which threw out a cubic kilometre of ash – fortunately, in an area where very few people live. In 1815, Tambora (in present-day Indonesia) expelled so much ash into the upper atmosphere that climatic effects seriously harmed food production around the world for the season after season. Entire civilisations have been destroyed by volcanoes.</p><p><strong>D</strong></p><p>Yet nothing we have so far experienced shows what volcanoes can really do. Yellowstone National Park in the USA occupies the caldera (the crater formed when a volcano collapses) of an exceedingly ancient volcano of extraordinary magnitude. Modem surveys show that its centre is now rising. Sometime in the next 200 million years, Yellowstone could erupt again, and when it does, the whole world will be transformed. Yellowstone could erupt tomorrow. But there’s a very good chance that it will give us another million years, and that surely is enough to be going on with. It seems sensible to assume that this will be the case.</p><p><strong>E</strong></p><p>The universe at large is dangerous, too: in particular, we share the sky with vast numbers of asteroids, and now and again, the come into our planet’s atmosphere. An asteroid the size of a small island, hitting the Earth at 15,000 kilometres an hour (a relatively modest speed by the standards of heavenly bodies), would strike the ocean bed like a rock in a puddle, send a tidal wave around the world as high as a small mountain and as fast as a jumbo jet, and propel us into an ice age that could last for centuries. There are plans to head off such disasters (including rockets to push approaching asteroids into new trajectories), but in truth, it’s down to luck.</p><p><strong>F</strong></p><p>On the other hand, the archaeological and the fossil evidence shows that no truly devastating asteroid has struck since the one that seems to have accounted for the extinction of the dinosaurs 65 million years ago. So again, there seems no immediate reason for despair. The Earth is indeed an uncertain place, in an uncertain universe, but with average luck, it should do us well enough. If the world does become inhospitable in the next few thousand or million years, then it will probably be our own fault. In short, despite the underlying uncertainty, our own future and that of our fellow creatures are very much in our own hands.</p><p><strong>G</strong></p><p>Given average luck on the geological and the cosmic scale, the difference between glory and disaster will be made and is being made, by politics. Certain kinds of political systems and strategies would <strong>predispose</strong> us to long-term survival (and indeed to comfort and security and pleasure of being alive), while others would take us more and more <strong>frenetically</strong> towards collapse. The broad point is, though, that we need to look at ourselves – humanity – and at the world in general in a quite new light. Our material problems are fundamentally those of biology. We need to think, and we need our politicians to think, biologically. Do that, and take the ideas seriously, and we are in with a chance. Ignore biology and we and our fellow creatures haven’t a hope.</p>',
    questions: [
      {
        id: '2323213fdasfasfasdasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: `Word ANGEL is <span></span> .`,
        answers: [
          {
            answer: 'Olivianna Palmero',
            correct: true
          }
        ],
        type: 'input',
        options: null
      },
      {
        id: '61b9a4c7d1fdb6001ebd155e',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` In aaaaa: AD Length varies elsewhere is <span></span> .`,
        answers: [
          {
            answer: 'Palmero',
            correct: true
          }
        ],
        type: 'input',
        options: null
      },
      {
        id: '61b9a4c7d1fdb601123e123',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` An geographer 123 documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '1213dasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Jupiter',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn']
      },
      {
        id: '11111111',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: '1',
            correct: true
          }
        ],
        type: 'radio',
        options: ['1', '2', '3', '4']
      },
      {
        id: '61b9a4c7d1fdb601123e1',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '61b9a4c7d1fdb601123e12',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '1213dacasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Jupiter',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn']
      },
      {
        id: '111111115123',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: '1',
            correct: true
          }
        ],
        type: 'radio',
        options: ['1', '2', '3', '4']
      },
      {
        id: '61b9a4c7d1fdb601123e1234',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      }
    ]
  },
  {
    id: '123123123fafasdasdsa',
    title: 'PASSAGE 3',
    question:
      '<h2><strong>IELTS</strong></h2><p><i>You should spend about 20 minutes on <strong>Questions 28-40</strong>, which are based on IELTS below.</i></p><p><img src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/2023-02/Cosmetic in Ancient Past.png"></p><h2 style="text-align:center;"><strong>Cosmetics in Ancient Past</strong></h2><p><strong>A</strong></p><p>Since cosmetics and perfumes are still in wide use today, it is interesting to compare the attitudes, customs and beliefs related to them in ancient times to those of our own day and age. Cosmetics and perfumes have been popular since the dawn of civilization; it is shown by the discovery of a great deal of pertinent archaeological material, dating from the third millennium BC. Mosaics, glass perfume flasks, stone vessels, ovens, cooking-pots, clay jars, etc., some inscribed by the hand of the artisan. Evidence also appears in the Bible and other classical writings, where it is written that spices and perfumes were prestigious products known throughout the ancient world and coveted by kings and princes. The written and pictorial descriptions, as well as archaeological findings, all show how important body care and aesthetic appearance were in the lives of the ancient people. The chain of evidence spans many centuries, detailing the usage of cosmetics in various cultures from the earliest period of recorded history.</p><p>&nbsp;</p><p><strong>B</strong></p><p>In antiquity, however, at least in the onset, cosmetics served in religious ceremonies and for healing purposes. Cosmetics were also connected with cultic worship and witchcraft: to appease the various gods, fragrant ointments were applied to the statuary images and even to their attendants. From this, in the course of time, developed the custom of personal use, to enhance the beauty of the face and the body, and to conceal defects.</p><p><strong>C</strong></p><p>Perfumes and fragrant spices were precious commodities in antiquity, very much in demand, and at times even exceeded silver and gold in value. Therefore they were luxury products, used mainly in the temples and in the homes of the noble and wealthy. The Judean kings kept them in treasure houses (2 Kings 20:13). And the Queen of Sheba brought to Solomon “camels laden with spices, gold in great quantity and precious stones.” (1 Kings 10:2, 10). However, within time, the use of cosmetics became the custom of that period. The use of cosmetics became widespread among the lower classes as well as among the wealthy; in the same way, they washed the body, so they used to care for the body with substances that softened the skin and anoint it with fragrant oils and ointments.</p><p>&nbsp;</p><p><strong>D</strong></p><p>Facial treatment was highly developed and women devoted many hours to it. They used to spread various scented creams on the face and to apply makeup in vivid and contrasting colors. An Egyptian papyrus from the 16th century BC contains detailed recipes to remove blemishes, wrinkles, and other signs of age. Greek and Roman women would cover their faces in the evening with a “beauty mask” to remove blemishes, which consisted mainly of flour mixed with fragrant spices, leaving it on their face all night. The next morning they would wash it off with asses’ milk. The very common creams used by women in the ancient Far East, particularly important in the hot climate and prevalent in that area of the globe, were made up of oils and aromatic scents. Sometimes the oil in these creams was extracted from olives, almonds, gourds, sesame, or from trees and plants; but, for those of limited means, scented animal and fish fats were commonly used.</p><p>&nbsp;</p><p><strong>E</strong></p><p>Women in the ancient past commonly put colors around their eyes. Besides beautification, its purpose was also medicinal as covering the sensitive skin of the lids with colored ointments that prevented dryness and eye diseases: the eye-paint repelled the little flies that transmitted eye inflammations. Egyptian women colored the upper eyelid black and the lower one green and painted the space between the upper lid and the eyebrow gray and blue. The women of Mesopotamia favored yellows and reds. The use of kohl for painting the eyes is mentioned three times in the Bible, always with disapproval by the sages (2 Kings, 9:30; Jeremiah 4:30; Ezekiel 23:40). In contrast, Job named one of his daughters “Keren Happukh”- “horn of eye paint” (Job 42:14)</p><p>&nbsp;</p><p><strong>F</strong></p><p>Great importance was attached to the care for hair in ancient times. Long hair was always considered a symbol of beauty, and kings, nobles and dignitaries grew their hair long and kept it well-groomed and cared for. Women devoted much time to the style of the hair; while no cutting, they would apply much care to it by arranging it skillfully in plaits and “building it up” sometimes with the help of wigs. Egyptian women generally wore their hair flowing down to their shoulders or even longer. In Mesopotamia, women cherished long hair as a part of their beauty, and hair flowing down their backs in a thick plait and tied with a ribbon is seen in art. Assyrian women wore their hair shorter, braiding and binding it in a bun at the back. In Ancient Israel, brides would wear their hair long on the wedding day as a sign of their virginity. Ordinary people and slaves, however, usually wore their hair short, mainly for hygienic reasons, since they could not afford to invest in the kind of treatment that long hair required.</p><p>&nbsp;</p><p><strong>G</strong></p><p>From the Bible and Egyptian and Assyrian sources, as well as the words of classical authors, it appears that the centers of the trade-in aromatic resins and incense were located in the kingdoms of southern Arabia, and even as far as India, where some of these precious aromatic plants were grown. “Dealers from Sheba and Rammah dealt with you, offering the choicest spices…” (Ezekiel 27:22). The Nabateans functioned as the important middlemen in this trade; Palestine also served as a very important component, as the trade routes crisscrossed the country. It is known that the Egyptian Queen Hatsheput (15th century BC) sent a royal expedition to the Land of Punt (Somalia) in order to bring back myrrh seedlings to plant in her temple. In Assyrian records of tribute and spoils of war, perfumes and resins are mentioned; the text from the time of Tukulti-Ninurta II (890-884 BC) refers to balls of myrrh as a part of the tribute brought to the Assyrian king by the Aramaean kings. The trade-in spices and perfumes are also mentioned in the Bible as written in Genesis (37:25-26), “Camels carrying gum tragacanth and balm and myrrh”.</p>',
    questions: [
      {
        id: '2323213fdasfasfasdasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: `Word ccccccccccccc is <span></span> 
        Vikings came from Scandinavia.`,
        answers: [
          {
            answer: 'Olivianna Palmero',
            correct: true
          }
        ],
        type: 'input',
        options: null
      },
      {
        id: '61b9a4c7d1fdb6001ebd155e',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` In Britain: AD Length varies elsewhere is <span></span> .`,
        answers: [
          {
            answer: 'Palmero',
            correct: true
          }
        ],
        type: 'input',
        options: null
      },
      {
        id: '61b9a4c7d1fdb601123e123',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A ádddddd documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '1213dasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Jupiter',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn']
      },
      {
        id: '11111111',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: '1',
            correct: true
          }
        ],
        type: 'radio',
        options: ['1', '2', '3', '4']
      },
      {
        id: '61b9a4c7d1fdb601123e1',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '61b9a4c7d1fdb601123e12',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '1213dacasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Jupiter',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn']
      },
      {
        id: '111111115123',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: '1',
            correct: true
          }
        ],
        type: 'radio',
        options: ['1', '2', '3', '4']
      },
      {
        id: '61b9a4c7d1fdb601123e1234',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      }
    ]
  },
  {
    id: '6228d1fdb6001ebd0d15',
    title: 'PASSAGE 4',
    question:
      '<h2><strong>IELTS</strong></h2><p><i>You should spend about 20 minutes on <strong>Questions 1-14</strong>, which are based on IELTS below.</i></p><p><img src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/2023-02/The vikings wayfaring way.png"></p><h2 style="text-align:center;"><strong>The vikings wayfaring way</strong></h2><p>In the last century, Vikings have been perceived in numerous diﬀerent ways – vilified as conquerors and romanticised as adventurers. How Vikings have been employed in nation-building is a topic of some interest.</p><p>In English, Vikings are also known as Norse or Norsemen. Their language greatly inﬂuenced English, with the nouns, ‘Hell’, ‘husband’, ‘law’, and ‘window’, and the verbs, ‘blunder’, ‘snub’, ‘take’, and ‘want’, all coming from Old Norse. However, the origins of the word ‘Viking’, itself, are obscure: it may mean ‘a Scandinavian pirate’, or it may refer to ‘an inlet’, or a place called Vik, in modem-day Norway, from where the pirates came. These various names – Vikings, Norse, or Norsemen, and doubts about the very word ‘Viking’ suggest historical confusion.</p><p>Loosely speaking, the Viking Age endured from the late eighth to the mid-eleventh centuries. Vikings sailed to England in AD 793 to storm coastal monasteries, and subsequently, large swathes of England fell under Viking rule – indeed several Viking kings sat on the English throne. It is generally agreed that the Battle of Hastings, in 1066, when the Norman French invaded, marks the end of the English Viking Age, but the Irish Viking age ended earlier, while Viking colonies in Iceland and Greenland did not dissolve until around AD 1500.</p><p>How much territory Vikings controlled is also in dispute – Scandinavia and Western Europe certainly, but their reach east and south is uncertain. They plundered and settled down the Volga and Dnieper rivers, and traded with modem-day Istanbul, but the archaeological record has yet to verify that Vikings raided as far away as Northwest Africa, as some writers claim.</p><p>The issue of control and extent is complex because many Vikings did not return to Scandinavia after raiding but assimilated into local populations, often becoming Christian. To some degree, the Viking Age is defined by religion. Initially, Vikings were polytheists, believing in many gods, but by the end of the age, they had permanently accepted a new monotheistic religious system – Christianity.</p><p>This transition from so-called pagan plunderers to civilised Christians is significant and is the view promulgated throughout much of recent history. In the UK, in the 1970s for example, schoolchildren were taught that until the Vikings accepted Christianity they were nasty heathens who rampaged throughout Britain. By contrast, today’s children can visit museums where Vikings are celebrated as merchants, pastoralists, and artists with a unique worldview as well as conquerors.</p><p>What are some other interpretations of Vikings? In the nineteenth century, historians in Denmark, Norway, and Sweden constructed their own Viking ages for nationalistic reasons. At that time, all three countries were in crisis. Denmark had been beaten in war and ceded territory to what is now Germany. Norway had become independent from Sweden in 1905 but was economically vulnerable, so Norwegians sought to create a separate identity for themselves in the past <i>as well as</i> the present. The Norwegian historian, Gustav Storm, was adamant it was <i>his</i> forebears and not the Swedes’ or Danes’ who had colonised Iceland, Greenland, and Vinland, in what is now Canada. Sweden, meanwhile, had relinquished Norway to the Norwegians and Finland to the Russians; thus, in the late nineteenth century, Sweden was keen to boost its image with rich archaeological finds to show the glory of <i>its</i> Viking past.</p><p>In addition to augmenting nationalism, nineteenth-century thinkers were influenced by an Englishman, Herbert Spencer, who described peoples and cultures in evolutionary terms similar to those of Charles Darwin. Spencer coined the phrase ‘survival of the fittest’, which includes the notion that, over time, there is not only technological but also moral progress. Therefore, Viking heathens’ adoption of Christianity was considered an advantageous move. These days, historians do not compare cultures in the same way, especially since, in this case, the archaeological record seems to show that heathen Vikings and Christian Europeans were equally brutal.</p><p>Views of Vikings change according to not only to forces aﬀecting historians at the time of their research but also according to the materials they read. Since much knowledge of Vikings comes from literature composed up to 300 years after the events they chronicle, some Danish historians cal1 these sources ‘mere legends’.</p><p>Vikings did have a written language carved on large stones, but as few of these survive today, the most reliable contemporary sources on Vikings come from writers from other cultures, like the ninth-century Persian geographer, Ibn Khordadbeh.</p><p>In the last four decades, there have been wildly varying interpretations of the Viking inﬂuence in Russia. Most non-Russian scholars believe the Vikings created a kingdom in western Russia and modern-day Ukraine led by a man called Rurik. After AD 862, Rurik’s descendants continued to rule. There is considerable evidence of this colonisation: in Sweden, carved stones, still standing, describe the conquerors’ journeys; both Russian and Ukrainian have loan words from Old Norse; and, Scandinavian first names, like Igor and Olga, are still popular. However, during the Soviet period, there was an emphasis on the Slavic origins of most Russians. (Appearing in the historical record around the sixth century AD, the Slavs are thought to have originated in Eastern Europe.) This Slavic identity was promoted to contrast with that of the neighbouring Viking Swedes, who were enemies during the Cold War.</p><p>These days, many Russians consider themselves hybrids. Indeed recent genetic studies support a Norse-colonisation theory: western Russian DNA is consistent with that of the inhabitants of a region north of Stockholm in Sweden.</p><p>The tools available to modern historians are many and varied, and their findings may seem less open to debate. There are linguistics, numismatics, dendrochronology, archaeozoology, palaeobotany, ice crystallography, climate and DNA analysis to add to the translation of runes and the raising of mighty warships. Despite these, historians remain children of their times.</p>',
    questions: [
      {
        id: '2323213fdasfasfasdasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: `Word CARRRRR is <span></span> 
        Vikings came from Scandinavia.`,
        answers: [
          {
            answer: 'Olivianna Palmero',
            correct: true
          }
        ],
        type: 'input',
        options: null
      },
      {
        id: '61b9a4c7d1fdb6001ebd155e',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` In Britain: AD Length varies elsewhere is <span></span> .`,
        answers: [
          {
            answer: 'Palmero',
            correct: true
          }
        ],
        type: 'input',
        options: null
      },
      {
        id: '61b9a4c7d1fdb601123e123',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '1213dasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Jupiter',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn']
      },
      {
        id: '11111111',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: '1',
            correct: true
          }
        ],
        type: 'radio',
        options: ['1', '2', '3', '4']
      },
      {
        id: '61b9a4c7d1fdb601123e1',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '61b9a4c7d1fdb601123e12',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      },
      {
        id: '1213dacasdasd',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Jupiter',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn']
      },
      {
        id: '111111115123',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: '1',
            correct: true
          }
        ],
        type: 'radio',
        options: ['1', '2', '3', '4']
      },
      {
        id: '61b9a4c7d1fdb601123e1234',
        questionGroupId: '61b9a498d1fdb6001ebd0d15',
        question: ` A geographer documents Viking culture as it happens. <span></span>`,
        answers: [
          {
            answer: 'Paris',
            correct: true
          }
        ],
        type: 'radio',
        options: ['Paris', 'London', 'Berlin', 'Madrid']
      }
    ]
  }
]
export const questionGroupListening = [
  {
    id: '61b9a498d1fdb6001ebd0d15',
    audio: 'https://thien-mdp.github.io/Mini_MusicPlayer/src/public/list_music/song/song-23.mp3',
    title: 'SECTION 1',
    question: `<p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><strong><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">SECTION 1</span></span></span></strong></span></span></span></p><h4>Questions 1-5</h4>

      <p><em>The housing officer takes some details from the girl.</em></p>
      <p></p>
      <p><em>Complete the following form with&nbsp;<strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong>&nbsp;for each answer.</em></p>
      
      <table border="1" cellpadding="3" cellspacing="0">
        <caption>
        <h3>PERSONAL DETAILS FOR HOMESTAY APPLICATION</h3>
        </caption>
        <tbody>
          <tr>
            <td style="vertical-align:top">
            <p>First name</p>
            </td>
            <td style="vertical-align:top">
            <p><input type="text" /></p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top">
            <p>Family name</p>
            </td>
            <td style="vertical-align:top">
            <p>Yuichini</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top">
            <p>Gender</p>
            </td>
            <td style="vertical-align:top">
            <p>Female</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top">
            <p>Age</p>
            </td>
            <td style="vertical-align:top">
            <p>28</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top">
            <p>Passport number</p>
            </td>
            <td style="vertical-align:top">
            <p><input type="text" /></p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top">
            <p>Nationality</p>
            </td>
            <td style="vertical-align:top">
            <p>Japanese</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top">
            <p>Course enrolled</p>
            </td>
            <td style="vertical-align:top">
            <p><input type="text" /></p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top">
            <p>Length of the course</p>
            </td>
            <td style="vertical-align:top">
            <p><input type="text" /></p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top">
            <p>Homestay time</p>
            </td>
            <td style="vertical-align:top">
            <p><input type="text" /></p>
            </td>
          </tr>
        </tbody>
      </table>
      
      <h4>Question 61</h4>
      
      <p><em>Mark&nbsp;<strong>TWO&nbsp;</strong>letter that represent the correct answer.</em></p>
      
      <p><em>Whick kind of family does the girls prefer?</em></p>
      
      <p>A<input name="q-6" type="checkbox" value="A" />A big family with many young children</p>
      
      <p>B<input name="q-6" type="checkbox" value="B" />A family without smoker or drinkers</p>
      
      <p>C<input name="q-6" type="checkbox" value="C" />A family without any pets</p>
      
      <p>D<input name="q-6" type="checkbox" value="D" />A family with many animals or pets</p>
      
      <h4>Question 7-10</h4>
      
      <p><em>Fill in the blanks with&nbsp;<strong>NO MORE THAN THREE WORDS&nbsp;</strong>for each answer.</em></p>
      
      <p>Although the girl is not a vegetarian, she doesn&#39;t eat a lot of meat. Her favourite food is&nbsp;<input type="text" /></p>
      
      <p>The girls has given up playing handball. Now, she just play&nbsp;<input type="text" />&nbsp;with her friends at weekends.</p>
      
      <p>The girl does not like the bus because they are always late. She would rather&nbsp;<input type="text" />.</p>
      
      <p>The girl can get the information about the homestay family that she wants&nbsp;<input type="text" />.</p>`
  },
  {
    id: '6228d1fdb6001ebd0d15',
    audio: 'https://thien-mdp.github.io/Mini_MusicPlayer/src/public/list_music/song/song-13.mp3',
    title: 'SECTION 2',
    question: `<p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><strong><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">SECTION 2</span></span></strong></span></span></span></p>

    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><em><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Complete the form below.</span></span></span></em><br />
    <span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><em>Write&nbsp;NO MORE THAN TWO WORDS AND/OR A NUMBER&nbsp;for each answer.</em><br />
    Application for: Children&quot;s Librarian&mdash;Volunteer<br />
    Name: Tessa&nbsp;<em>Bridges</em><br />
    Address: 51,&nbsp;<u>____1____</u>&nbsp;Drive<br />
    Area: Northwood<br />
    Postcode:&nbsp;<u>____2____</u><br />
    Studying at: Northwood Polytechnic<br />
    Major:&nbsp;<u>____3____</u><br />
    Career choice: Children&quot;s author</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><em><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Complete the table below.</span></span></span></em><br />
    <span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><em>Write&nbsp;NO MORE THAN TWO WORDS&nbsp;for each answer.</em></span></span></span></span></span></span></p>
    
    <table cellspacing="0" class="Table" style="border-collapse:collapse; width:380px">
      <tbody>
        <tr>
          <td colspan="3" style="border-bottom:1px solid #e0e0e0; border-left:1px solid #e0e0e0; border-right:1px solid #e0e0e0; border-top:1px solid #e0e0e0; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Work History</span></span></span></span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="border-bottom:1px solid #e0e0e0; border-left:1px solid #e0e0e0; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Length of service</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Employer/Place</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Position</span></span></span></span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="border-bottom:1px solid #e0e0e0; border-left:1px solid #e0e0e0; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">2 years</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><u><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">4______</span></span></span></u></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">babysitter</span></span></span></span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="border-bottom:1px solid #e0e0e0; border-left:1px solid #e0e0e0; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">1 year</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Senior High School</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><u><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">5______</span></span></span></u></span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="border-bottom:1px solid #e0e0e0; border-left:1px solid #e0e0e0; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">3 months</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Ace Sports Academy</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><u><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">6______</span></span></span></u></span></span></span></p>
          </td>
        </tr>
        <tr>
          <td style="border-bottom:1px solid #e0e0e0; border-left:1px solid #e0e0e0; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">ongoing</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Northwood Hospital</span></span></span></span></span></span></p>
          </td>
          <td style="border-bottom:1px solid #e0e0e0; border-left:none; border-right:1px solid #e0e0e0; border-top:none; vertical-align:top">
          <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">official visitor: Children&quot;s ward</span></span></span></span></span></span></p>
          </td>
        </tr>
      </tbody>
    </table>
    
    <p>&nbsp;</p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Is Tessa available for work at the times listed below?<br />
    <em>Write the correct letter, A, B or C, next to questions 7-10.</em><br />
    A. She is definitely available for work at these times<br />
    B. She might be available for work at these times<br />
    C. She is not available for work at these times<br />
    Times:</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">7</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. Weekdays</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37705" type="text" /></span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">8</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. Evenings</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37706" type="text" /></span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">9</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. Weekends</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37707" type="text" /></span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">10</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. School Holidays</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37708" type="text" /></span></span></span></span></span></span></p>
    
    <p>&nbsp;</p>
    `
  },
  {
    id: '123123123fafasdasdsa',
    audio: 'https://thien-mdp.github.io/Mini_MusicPlayer/src/public/list_music/song/song-1.mp3',
    title: 'SECTION 3',
    question: `<p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><strong><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">SECTION 3</span></span></strong></span></span></span></p>

    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><em><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Choose the correct letter, A, B or C.</span></span></span></em></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">21</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. Clare and Grant must arrange a competition which will especially interest</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37719" type="radio" value="A" />A. school students.</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37719" type="radio" value="B" />B. Open Day committee members.</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37719" type="radio" value="C" />C. Open Day visitors.</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">22</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. What will the prize be?</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37720" type="radio" value="A" />A. an iPod</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37720" type="radio" value="B" />B. an iPad</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37720" type="radio" value="C" />C. an iPhone</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">23</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. Who will be responsible for buying the prize?</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37721" type="radio" value="A" />A. a university department</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37721" type="radio" value="B" />B. Clare and Grant</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37721" type="radio" value="C" />C. Rick Smith</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">24</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. What is the most important aspect for entrants in the competition?</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37722" type="radio" value="A" />A. fun</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37722" type="radio" value="B" />B. guesswork</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37722" type="radio" value="C" />C. ability</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">25</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. In the science fiction series on television, what is on the other side of the gateway?</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37723" type="radio" value="A" />A. a portal</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37723" type="radio" value="B" />B. a new world of education</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37723" type="radio" value="C" />C. a different time period</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><em><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Write&nbsp;NO MORE THAN THREE WORDS&nbsp;for each answer.</span></span></span></em></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">26</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. Who will judge the competition?</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37724" type="text" /></span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="background-color:#e8f2ff"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#35509a">27</span></span></span></span><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">. Who will build the portal?</span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><input name="question-37725" type="text" /></span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><em><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Label the flow chart below.</span></span></span></em><br />
    <span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><em>Write&nbsp;NO MORE THAN TWO WORDS AND/OR A NUMBER&nbsp;for each answer.</em></span></span></span></span></span></span></p>
    
    <p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">Step 1 Find &quot;Portal&nbsp;<u>____28____</u>&nbsp;&quot; on campus on Open Day<br />
    &darr;<br />
    Step 2 Be photographed stepping through the Portal<br />
    &darr;<br />
    Step 3 Give contact&nbsp;<u>____29____</u>&nbsp;(name &amp; email address)<br />
    &darr;<br />
    Step 4 Visit the University Facebook page and vote<br />
    &darr;<br />
    Step 5 The picture with the most votes at 5 pm on&nbsp;<u>____30____</u>&nbsp;wins</span></span></span></span></span></span></p>
    `
  },
  {
    id: '6228d1fdb6001ebd0d15',
    audio: 'https://thien-mdp.github.io/Mini_MusicPlayer/src/public/list_music/song/song-31.mp3',
    title: 'SECTION 4',
    question: `<p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,&quot;sans-serif&quot;"><strong><span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a">SECTION 4</span></span></span></strong></span></span></span></p>

    <p><span style="font-size:11pt"><span style="font-family:Calibri,&quot;sans-serif&quot;"><em><span style="font-size:13.0pt"><span style="color:#1a1a1a">Complete the notes below.</span></span></em><br />
    <span style="font-size:13.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><span style="color:#1a1a1a"><em>Write&nbsp;</em><strong><em>NO MORE THAN TWO WORDS</em></strong><em>&nbsp;for each answer.</em><br />
    <strong>Agriculture and Environment</strong><br />
    ●&nbsp;<u>____31____</u>&nbsp;production = biggest problem in today&quot;s world<br />
    ● Agriculture is important for jobs, exports and foreign exchange<br />
    ● &quot;Agriculture&quot; means:<br />
    ◆ growing crops<br />
    ◆ raising animals<br />
    ◆&nbsp;<u>____32____</u><br />
    ◆&nbsp;<u>____33____</u><br />
    ● Agriculture must be sustainable: old methods, &amp; new, chemical methods are all unsustainable &rarr;&nbsp;<u>____34____</u>&nbsp;of biodiversity<br />
    ● Biotechnology &rarr; GM or GE &rarr; bio-prospecting (bio-piracy) i.e. large companies steal samples of native plants to use the&nbsp;<u>____35____</u>&nbsp;for their own crop improvement<br />
    ●&nbsp;<u>____36____</u>&nbsp;is responsible for less food and higher prices<br />
    ● Farmers need to be educated but governments also need to pay attention to&nbsp;<u>____37____</u>&nbsp;in order to protect the environment and re-nourish the soil<br />
    ● Experts from around the world could come together to form a&nbsp;<u>____38____</u>&nbsp;to observe farm systems aiming to prevent pollution and erosion<span style="background-color:#f8f9fa"> and encourage safe procedures that </span>are also&nbsp;<u>____39____</u><br />
    ● Creating the project&quot;s&nbsp;<u>____40____</u>&nbsp;would be very expensive and more money would be needed for the monitoring system but it could solve the problem of food shortages</span></span></span></span></span></p>
    `
  }
]

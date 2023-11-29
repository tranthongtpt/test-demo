'use client'
import React from 'react'
import { Input, Select, SelectItem } from '@nextui-org/react'
interface DataProps {
  data: [
    {
      id: string
      title: string
      testId: string
      question: string
      questions: [
        {
          id: string
          questionGroupId: string
          question: string
          answers: []
          type: string
          options?: []
        },
      ]
    },
  ]
}
const xxx = [
  {
    exams:
      '<p>origins of the word &lsquo;Viking&rsquo;, itself, are obscure: it may mean &lsquo;a Scandinavian pirate&rsquo;, or it may refer to &lsquo;an inlet&rsquo;, or a place called Vik, in modem-day Norway, from where the pirates came. These various names &ndash; Vikings, Norse, or Norsemen, and doubts about the very word &lsquo;Viking&rsquo; suggest historical confusion.</p>\n\n<p>Loosely speaking, the Viking Age endured from the late eighth to the mid-eleventh centuries. Vikings sailed to England in AD 793 to storm coastal monasteries, and subsequently, large swathes of England fell under Viking rule &ndash; indeed several Viking kings sat on the English throne. It is generally agreed that the Battle of Hastings, in 1066, when the Norman French invaded, marks the end of the English Viking Age, but the Irish Viking age ended earlier, while Viking colonies in Iceland and Greenland did not dissolve until around AD 1500.</p>\n\n<p>How much territory Vikings controlled is also in dispute &ndash; Scandinavia and Western Europe certainly, but their reach east and south is uncertain. They plundered and settled down the Volga and Dnieper rivers, and traded with modem-day Istanbul, but the archaeological record has yet to verify that Vikings raided as far away as Northwest Africa, as some writers claim.</p>\n\n<p>The issue of control and extent is complex because many Vikings did not return to Scandinavia after raiding but assimilated into local populations, often becoming Christian. To some degree, the Viking Age is defined by religion. Initially, Vikings were polytheists, believing in many gods, but by the end of the age, they had permanently accepted a new monotheistic religious system &ndash; Christianity.</p>\n\n<p>This transition from so-called pagan plunderers to civilised Christians is significant and is the view promulgated throughout much of recent history. In the UK, in the 1970s for example, schoolchildren were taught that until the Vikings accepted Christianity they were nasty heathens who rampaged throughout Britain. By contrast, today&rsquo;s children can visit museums where Vikings are celebrated as merchants, pastoralists, and artists with a unique worldview as well as conquerors.</p>\n\n<p>What are some other interpretations of Vikings? In the nineteenth century, historians in Denmark, Norway, and Sweden constructed their own Viking ages for nationalistic reasons. At that time, all three countries were in crisis. Denmark had been beaten in war and ceded territory to what is now Germany. Norway had become independent from Sweden in 1905 but was economically vulnerable, so Norwegians sought to create a separate identity for themselves in the past&nbsp;<em>as well as</em>&nbsp;the present. The Norwegian historian, Gustav Storm, was adamant it was&nbsp;<em>his</em>&nbsp;forebears and not the Swedes&rsquo; or Danes&rsquo; who had colonised Iceland, Greenland, and Vinland, in what is now Canada. Sweden, meanwhile, ha</p>\n',
    question:
      '<h4>Questions 1-5</h4>\n\n<p>Complete the notes below.</p>\n\n<p>Write&nbsp;<strong>NO MORE THAN TWO WORDS OR A NUMBER</strong>&nbsp;for each answer</p>\n\n<p><em>Write your answers in boxes&nbsp;<strong>1-5</strong>&nbsp;on your answer sheet.</em></p>\n\n<table border="1" cellpadding="1" cellspacing="1">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td><strong>Origins:</strong></td>\n\t\t\t<td>\n\t\t\t<ul>\n\t\t\t\t<li>Word &lsquo;Viking&rsquo; is&nbsp;<input type="text" /></li>\n\t\t\t\t<li>Vikings came from Scandinavia.</li>\n\t\t\t</ul>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><strong>Dates of the Viking Age</strong></td>\n\t\t\t<td>\n\t\t\t<ul>\n\t\t\t\t<li>In Britain: AD&nbsp;<input type="text" />&nbsp;-1066</li>\n\t\t\t\t<li>Length varies elsewhere</li>\n\t\t\t</ul>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><strong>Territorial extent:</strong></td>\n\t\t\t<td>\n\t\t\t<ul>\n\t\t\t\t<li>In doubt &ndash; but most of Europe\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Possibly raided as far away as&nbsp;<input type="text" /></li>\n\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><strong>End of the Viking Age:</strong></td>\n\t\t\t<td>\n\t\t\t<ul>\n\t\t\t\t<li>Vikings had assimilated into&nbsp;<input type="text" />&nbsp;, &amp; adopted a new&nbsp;<input type="text" />&nbsp;system.</li>\n\t\t\t</ul>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<h4>Questions 6-13</h4>\n',
  },
]
const ScreenDoing = ({ data }: DataProps) => {
  console.log('DATA', data)
  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50/50 p-8 pt-8">
      {data?.map((item, index) => (
        <div key={index}>
          {item.questions.map((question, index) => (
            <div key={question.id}>
              {index === 0 && <p className="my-2 text-xl font-semibold">Question 1 - 5</p>}
              {index === 5 && <p className="my-2 text-xl font-semibold">Question 6 - 10</p>}
              <div className="my-2 flex items-center py-2">
                <p className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 p-1 text-sm font-bold text-white">
                  {index + 1}
                </p>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: question.question }} />
                </p>
              </div>
              {question.type === 'input' && <Input type="text" variant="underlined" />}
              {question.type === 'radio' && question.options && question.options.length > 0 && (
                <Select placeholder="Chọn đáp án" className="max-w-xs">
                  {question.options.map((option, optionIndex) => (
                    <SelectItem
                      key={optionIndex}
                      className={`question_${question.id}`}
                      value={option}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </Select>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ScreenDoing

import { useState } from "react";
import { Card, CardContent } from "@material-ui/core";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { Textarea } from "@material-ui/core";
import { Button } from "@material-ui/core";

const subjects = {
  Economics: ["Macroeconomics", "Microeconomics"],
  Psychology: ["Psychopathology", "Biopsychology", "Research Methods", "Issues & Debates", "Forensic", "Schizophrenia", "Gender"],
  Business: ["Finance", "People", "Strategy", "Operations", "Globalisation"]
};

export default function RevisionApp() {
  const [answers, setAnswers] = useState({});

  const handleChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">Revision Hub</h1>
      <Tabs defaultValue="Economics" className="w-full">
        <TabsList className="flex gap-2 overflow-x-auto">
          {Object.keys(subjects).map(subject => (
            <TabsTrigger key={subject} value={subject}>{subject}</TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(subjects).map(([subject, topics]) => (
          <TabsContent key={subject} value={subject} className="mt-4">
            <div className="space-y-4">
              {topics.map(topic => (
                <Card key={topic}>
                  <CardContent className="space-y-4 p-4">
                    <h2 className="text-xl font-semibold">{topic}</h2>

                    {/* MCQ Example */}
                    <div>
                      <p className="font-medium">1. Example MCQ for {topic}:</p>
                      <p>Which of the following best defines this topic?</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>A) Option 1</li>
                        <li>B) Option 2</li>
                        <li>C) Option 3</li>
                        <li>D) Option 4</li>
                      </ul>
                    </div>

                    {/* Short Answer */}
                    <div>
                      <p className="font-medium">2. 12-Mark Question for {topic}:</p>
                      <p>Explain a key issue related to this topic. (12 marks)</p>
                      <Textarea
                        placeholder="Type your answer here..."
                        value={answers[`${subject}-${topic}`] || ""}
                        onChange={(e) => handleChange(`${subject}-${topic}`, e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

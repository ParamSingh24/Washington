
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for recent activity
const recentActivities = [
  {
    id: 'act1',
    type: 'symptomReport',
    description: 'You reported symptoms: Fever, Cough',
    timestamp: new Date('2025-05-09T16:23:00'),
    status: 'processed'
  },
  {
    id: 'act2',
    type: 'aiConsultation',
    description: 'AI consultation about respiratory symptoms',
    timestamp: new Date('2025-05-08T10:45:00'),
    status: 'complete'
  },
  {
    id: 'act3',
    type: 'resourceReferral',
    description: 'Referred to: UW Medical Center - Northwest',
    timestamp: new Date('2025-05-07T14:12:00'),
    status: 'pending'
  },
];

const RecentActivity = () => {
  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Your Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map(activity => (
            <div key={activity.id} className="flex items-start justify-between border-b pb-3">
              <div>
                <p className="text-sm font-medium">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{formatDate(activity.timestamp)}</p>
              </div>
              <Badge 
                variant={
                  activity.status === 'processed' ? 'outline' : 
                  activity.status === 'complete' ? 'secondary' : 
                  'default'
                }
                className="ml-2"
              >
                {activity.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;

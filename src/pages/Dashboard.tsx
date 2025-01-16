import { useQuery } from "@tanstack/react-query";
import { getMasterData } from "../services/state/api/masterApi";
import { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useState } from "react";

// Custom hook for animated count
const useAnimatedCount = (endValue: number, duration: number): number => {
  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, endValue, {
      duration,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return controls.stop; // Cleanup animation on unmount
  }, [endValue, duration, motionValue]);

  return count;
};

const Dashboard: React.FC = () => {
  const { data: masterData } = useQuery({
    queryKey: ["masterData", "dashboard"],
    queryFn: () => getMasterData("dashboard"),
    enabled: true,
  });

  useEffect(() => {
    if (masterData) {
      console.log("Fetched master data:", masterData);
    }
  }, [masterData]);

  // Extract counts from the API response
  const convergenceCounts = masterData?.data?.convergenceCount || {};

  const countItems = [
    { label: "Schemes", count: convergenceCounts.schemesCount?.[0]?.count || 0 },
    { label: "Courses", count: convergenceCounts.coursesCount?.[0]?.count || 0 },
    { label: "Training Partners", count: convergenceCounts.tpCount?.[0]?.count || 0 },
    { label: "Training Centers", count: convergenceCounts.tcCount?.[0]?.count || 0 },
    { label: "Batches", count: convergenceCounts.batchCount?.[0]?.count || 0 },
    { label: "Candidates", count: convergenceCounts.candidateCount?.[0]?.count || 0 },
    { label: "Trainers", count: convergenceCounts.trainerCount?.[0]?.count || 0 },
    { label: "Assessors", count: convergenceCounts.assessorCount?.[0]?.count || 0 },
    { label: "Targets", count: convergenceCounts.targetCount?.[0]?.count || 0 },
    { label: "Assessments", count: convergenceCounts.assessmentCount?.[0]?.count || 0 },
    { label: "Invoices", count: convergenceCounts.invoiceCount?.[0]?.count || 0 },
    { label: "Placements", count: convergenceCounts.placementCount?.[0]?.count || 0 },
  ];

  // Animation duration
  const duration = 1; // seconds

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countItems.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const animatedCount = useAnimatedCount(item.count, duration);
          return (
            <div
              key={index}
              className="w-full h-40 bg-blue-500 text-white flex flex-col items-center justify-center rounded-md shadow-md"
            >
              <p className="text-xl font-bold">{item.label}</p>
              <motion.p
                className="text-3xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {animatedCount}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

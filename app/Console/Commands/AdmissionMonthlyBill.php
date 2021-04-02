<?php

namespace App\Console\Commands;

use App\AccountantMonth;
use App\ChannelAccountantAdmission;
use App\ChannelSchoolSession;
use Carbon\Carbon;
use Illuminate\Console\Command;

class AdmissionMonthlyBill extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admission:monthly';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Schedule Admission Monthtly Bill';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $lastMonth = Carbon::now()->subMonth()->format('F');
        $accountMonth = AccountantMonth::where('name', $lastMonth)->get()[0];
        $admissionData = ChannelAccountantAdmission::select('id', 'channel_id', 'created_at')
            ->whereMonth(
                'created_at',
                '=',
                Carbon::now()->subMonth()->month
            )
            ->get();

        foreach ($admissionData as $admission) {
            $schoolSessionData = ChannelSchoolSession::where('channel_id', $admission->channel_id)->get()[0];
            if (
                $accountMonth->id >= $schoolSessionData->start_session_id &&
                $accountMonth->id <= $schoolSessionData->end_session_id

            ) {
                AdmissionMonthlyBill::create([
                    'ccountant_admissions_id' => $admission->id,
                    'accountant_months_id' => $accountMonth->id,
                    'paymeny_status' => 'pending'
                ]);
            }
        }
    }
}
